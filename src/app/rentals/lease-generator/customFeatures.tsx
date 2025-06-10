"use client";
import styles from './lease-styles.module.css';
import shared from '../shared-generator/shared.module.css';
import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react";
import templates from '@/data/leaseTemplates.json';

const DEFAULT_STATE = {
    fieldSet: {},
    repeatableStack: [],
    optionals: {},
    leaseName: undefined,
    setLeaseName: () => { },
    setCustomField: () => { },
    setOptional: () => { },
    setCustomState: () => { }
};

export const CustomFeatureContext = createContext<CustomFeatureContextState>(DEFAULT_STATE);

type CustomFieldSet = Record<string, CustomValue>;
type CustomOptionalSet = Record<string, boolean>;
type CustomFeatureState = {
    leaseName: string | undefined,
    setLeaseName: (leaseName: string) => void,
    fieldSet: CustomFieldSet,
    optionals: CustomOptionalSet,
    repeatableStack: Array<CustomFieldSet>
}
type CustomRepeatable = Array<Record<string, CustomValue>>
type CustomValue = string | CustomRepeatable | boolean;
type CustomFeatureContextState = CustomFeatureState & {
    setCustomField: (field: string, value: CustomValue) => void
    setOptional: (field: string, value: boolean) => void,
    setCustomState: React.Dispatch<React.SetStateAction<CustomFeatureState>>
}

const getLeaseName = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("lease_name") ?? '';
}

const setLeaseName = (value: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set("lease_name", value);
    history.replaceState({}, "", url);
}

export const CustomFeatureContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [customState, setCustomStateInternal] = useState<CustomFeatureState>({
        leaseName: undefined,
        setLeaseName: () => { },
        repeatableStack: [],
        fieldSet: {},
        optionals: {}
    });
    const setCustomState = useCallback<typeof setCustomStateInternal>((stateOrCb) => {
        if (typeof stateOrCb === 'function') {
            return setCustomStateInternal(state => {
                const newState = stateOrCb(state);
                return newState;
            });
        } else {
            return setCustomStateInternal(stateOrCb);
        }
    }, [setCustomStateInternal]);
    useEffect(() => {
        const leaseName = getLeaseName();
        if (leaseName !== undefined && leaseName !== '') {
            setCustomState({
                ...DEFAULT_STATE,
                ...JSON.parse(window.localStorage.getItem(leaseName) ?? '{}')
            });
        }
    }, [setCustomState]);
    useEffect(() => {
        if (customState.leaseName !== undefined) {
            setLeaseName(customState.leaseName);
        }
    }, [customState.leaseName]);
    useEffect(() => {
        if (customState.leaseName !== '' && customState.leaseName !== undefined) {
            localStorage.setItem(customState.leaseName, JSON.stringify(customState));
        }
    }, [customState]);
    const customFeatureContext = useMemo(() => {
        return {
            ...customState,
            setLeaseName: (leaseName: string) => {
                setCustomState(state => ({
                    ...state,
                    leaseName
                }));
            },
            setCustomState,
            setCustomField: (field: string, value: CustomValue) => {
                setCustomState(state => ({
                    ...state,
                    fieldSet: {
                        ...state?.fieldSet,
                        [field]: value
                    }
                }));
            },
            setOptional: (field: string, value: boolean) => {
                setCustomState(state => ({
                    ...state,
                    optionals: {
                        ...state?.optionals,
                        [field]: value
                    }
                }));
            }
        }
    }, [customState]) satisfies CustomFeatureContextState;
    return <CustomFeatureContext.Provider value={customFeatureContext}>
        {children}
    </CustomFeatureContext.Provider>;
}

const readFieldValue = (state: CustomFeatureContextState, field: string): CustomValue | undefined => {
    return state.repeatableStack.reduceRight<CustomValue | undefined>((foundValue, fieldSet) => {
        if (foundValue != null) {
            return foundValue;
        }
        if (fieldSet[field] != null) {
            return fieldSet[field];
        }
        return undefined;
    }, undefined) ?? state.fieldSet[field];
}

export const CustomSelect: React.FC<{
    field: string,
    options: string[]
}> = ({ field, options }) => {
    const { fieldValue, setFieldValue } = useFieldValue(field);
    if (typeof fieldValue !== 'string') {
        return '!!!ERROR CUSTOM TEXT TRYING TO READ CUSTOM REPEATABLE!!!';
    };
    return <select value={fieldValue} onChange={(e) => {
        setFieldValue(e.target.value);
    }}>
        {options.map(opt => {
            return <option value={opt}>{opt}</option>
        })}
    </select>;
}

export const useFieldValue = (field: string) => {

    const featureCtx = useContext(CustomFeatureContext);
    useEffect(() => {
        if (readFieldValue(featureCtx, field) === undefined) {
            featureCtx.setCustomField(field, '');
        }
    }, [featureCtx]);

    return useMemo(() => {
        const fieldValue = readFieldValue(featureCtx, field) ?? '';
        return {
            fieldValue,
            setFieldValue: (value: string) => {
                featureCtx.setCustomField(field, value)
            }
        }
    }, [featureCtx, field]);
}

export const CustomText: React.FC<{
    field: string
}> = ({ field }) => {
    const { fieldValue, setFieldValue } = useFieldValue(field);
    if (typeof fieldValue !== 'string') {
        return '!!!ERROR CUSTOM TEXT TRYING TO READ CUSTOM REPEATABLE!!!';
    };
    return <>
        <span className={[styles.customInputContainer, shared.noprint].join(" ")}>
            <input className={shared.noprint} onChange={(e) => {
                setFieldValue(e.target.value)
            }} value={fieldValue} />
            <span className={shared.noprint}>{fieldValue}</span>
        </span>
        <span className={styles.onlyprint}>
            {fieldValue}
        </span>
        {(fieldValue === '') && <span className={styles.onlyprint}>!MISSING!</span>}
    </>;
}

export const CustomRepeatable: React.FC<{ field: string, join?: ReactNode | 'grammar_and', children: React.ReactNode }> = ({ field, children, join }) => {
    const featureCtx = useContext(CustomFeatureContext);
    const fieldValue = featureCtx.fieldSet[field];
    useEffect(() => {
        if (featureCtx.fieldSet[field] === undefined) {
            featureCtx.setCustomField(field, [{}]);
        }
    }, [featureCtx.fieldSet]);
    const innerCtxValues = useMemo(() => {
        if (!Array.isArray(fieldValue)) return [];
        return fieldValue.map((elementValue, index) => {
            return {
                ...featureCtx,
                setCustomField: (innerField, value) => {
                    featureCtx.setCustomField(field, fieldValue.with(index, {
                        ...elementValue,
                        [innerField]: value
                    }));
                },
                repeatableStack: [...featureCtx.repeatableStack, elementValue]
            } satisfies CustomFeatureContextState;
        });
    }, [fieldValue, featureCtx, field]);
    if (!Array.isArray(fieldValue)) {
        return `!!! INVALID REPEATABLE ${field}`;
    }
    return innerCtxValues.map((innerFeatureCtx, index) => {
        return <CustomFeatureContext.Provider value={innerFeatureCtx}>
            {join === 'grammar_and' ?
                <>{children}{(index < innerCtxValues.length - 2) && ', '}{(index === innerCtxValues.length - 2) && ' and '}</> :
                <>{children}{(index !== innerCtxValues.length - 1) && join}</>}
        </CustomFeatureContext.Provider>
    });
}

export const CustomOptional: React.FC<{
    children: React.ReactNode,
    alternative?: boolean,
    name: string,
}> = ({ children, alternative = false, name }) => {
    const featureCtx = useContext(CustomFeatureContext);
    useEffect(() => {
        if (featureCtx.fieldSet[name] === undefined) {
            featureCtx.setCustomField(name, false);
        }
    }, [featureCtx]);
    if (typeof featureCtx.fieldSet[name] !== 'boolean') {
        return '!!!INVALID OPTIONAL VALUE';
    }
    const control = <div className={[shared.noprint, styles.nobreak].join(' ')}>
        <b>OPTIONAL {name}:</b> <input type='checkbox' checked={featureCtx.fieldSet[name] ?? false} onChange={(e) => featureCtx.setCustomField(name, e.target.checked)} />
    </div>;
    const currentValue = featureCtx.fieldSet[name] === true;
    if (alternative) {
        if (!Array.isArray(children) || children.length !== 2) {
            return '!!!INVALID ALTERNATE CHILDREN. MUST BE ARRAY LENGTH 2';
        }
        return <>
            {currentValue ? children?.[0] : children?.[1]}
        </>;
    }
    if (currentValue) {
        return <>
            {control}
            {children}
        </>;
    }
    return control;
}

export type templateType = "checklist" | "lease";

export const CustomFeatureTemplateSelector: React.FC<{ templateType: templateType }> = ({ templateType }) => {
    const featureCtx = useContext(CustomFeatureContext);
    return <select onChange={(e) => {
        const fieldSet = templates[e.target.value as unknown as keyof typeof templates][templateType];
        if (fieldSet !== undefined) {
            featureCtx.setCustomState(state => ({
                ...state,
                fieldSet: {
                    ...state.fieldSet,
                    ...fieldSet
                }
            }));
        }
    }}>
        <option disabled={true} selected={true}>select a template</option>
        {Object.keys(templates).map((templateName) => {
            return <option key={templateName}>{templateName}</option>;
        })};
    </select>

}

export const CustomFeatureEdtior: React.FC<{ templateType: templateType }> = ({ templateType }) => {
    const featureCtx = useContext(CustomFeatureContext);
    // Create a Blob object
    const blob = new Blob([JSON.stringify(featureCtx, undefined, 4)], { type: "text/plain" });

    // Generate the Blob URL
    const blobUrl = URL.createObjectURL(blob);
    return <div>
        Lease name: <input value={featureCtx.leaseName ?? ''} onChange={(e) => featureCtx.setLeaseName(e.target.value)} />
        <CustomFeatureTemplateSelector templateType={templateType} />
        <CustomFieldSetEditor fieldSet={featureCtx.fieldSet} setCustomField={featureCtx.setCustomField} />
        <a href={blobUrl} download={`${featureCtx.leaseName}_settings.json`}>Download</a>
    </div>;
}

export const Pluralize: React.FC<{ field: string, children: ReactNode[] }> = ({ field, children }) => {
    const featureCtx = useContext(CustomFeatureContext);
    const fieldValue = readFieldValue(featureCtx, field);
    if (children.length !== 2) {
        return '!!!MUST HAVE EXACTLY TWO CHILDREN';
    }
    if (Array.isArray(fieldValue) === false) {
        return '!!!FIELD MUST BE REPEATABLE';
    }
    if (fieldValue.length > 1) {
        return children[1]
    } else {
        return children[2];
    }
}

export const CustomFieldSetEditor: React.FC<{
    fieldSet: CustomFieldSet,
    setCustomField: CustomFeatureContextState['setCustomField']
}> = ({ fieldSet, setCustomField }) => {
    return Object.keys(fieldSet).map((field) => {
        if (typeof fieldSet[field] === 'string') {
            return <div key={field}>
                {field}: <input type='text' value={fieldSet[field] ?? ''} onChange={(e) => setCustomField(field, e.target.value)} />
            </div>;
        } else if (typeof fieldSet[field] === 'boolean') {
            return <div key={field}>
                {field}: <input type='checkbox' checked={fieldSet[field] ?? false} onChange={(e) => setCustomField(field, e.target.checked)} />
            </div>;
        } else if (Array.isArray(fieldSet[field])) {
            const repeatable = fieldSet[field];
            const outerField = field;
            return <div key={field} ><hr /><b>{field}:</b> {repeatable.map((repeatableElement, index) => {
                return <div className={shared.fieldGroup} key={index}><CustomFieldSetEditor fieldSet={repeatableElement} setCustomField={(field, value) => {
                    setCustomField(outerField, repeatable.with(index, {
                        ...repeatableElement,
                        [field]: value
                    }));
                }} />
                    <button onClick={() => {
                        setCustomField(field, repeatable.filter((_, i) => i !== index));
                    }}>X</button>
                </div>
            })}
                <button onClick={() => {
                    setCustomField(field, [...repeatable, {}]);
                }}>Add</button>
            </div>;
        }
    })
}