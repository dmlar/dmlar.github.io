
"use client"
import { CustomRepeatable, CustomSelect, CustomText, useFieldValue } from "../lease-generator/customFeatures";
import { SigningPage } from "../shared-generator/signing-page";
import styles from './checklist-styles.module.css';
import shared from '../shared-generator/shared.module.css';

const roomStructure = [
    "Window(s)",
    "Blind(s)",
    "Door(s)",
    "Floor",
    "Walls",
    "Ceiling",
    "Smoke Detector(s)",
];

const AREA_ITEM_MAP = {
    "bathroom": [
        "Toilet",
        "Sink/Faucet",
        "Shower",
        "Cabinet",
        "Cabinet Countertop",
        "Fan",
        ...roomStructure
    ],
    "kitchen": [
        "Stove",
        "Microwave",
        "Dishwasher",
        "Sink/Faucet",
        "Countertop",
        "Cabinets",
        ...roomStructure
    ],
    "living_room": [
        ...roomStructure
    ],
    "bedroom": [
        ...roomStructure
    ],
    "other": [
        "Thermostat"
    ]
} as const;
const AREAS = Object.keys(AREA_ITEM_MAP) as unknown as Array<keyof typeof AREA_ITEM_MAP>;

export const ConditionScale = () => {
    return ["Poor","Fair","Average","Good","Very Good"].map(grade => {
        return <label key={grade}>
            <input type="checkbox"  />{grade}{"\u00A0"}
        </label>
    });
}

export const ChecklistBody = () => {
    return <>
        <h1>Move-In Checklist</h1>
        <p>
            This checklist documents the condition of the rental unit at <b><CustomText field="propertyAddress" /></b>
        </p>
        <CustomRepeatable field="area">
            <h2>
                <CustomText field="name" />
            </h2>
            <div className={shared.noprint}>
                type: 
                <CustomSelect options={AREAS} field="type" />
            </div>
            <AreaBody />
        </CustomRepeatable>
        <SigningPage text={<p>
                I / We have inspected the above unit prior to occupancy and accept it with the conditions noted. I / We understand that upon vacating the above unit, charges will be assessed for
cleaning required. Repair and replacement costs resulting from resident negligence will also be added.
This checklist is pursuant to Washington State Landlord / Tenant Law, RCW 59.18.260. Both Resident and Owner / Agent should retain a signed copy of the completed Property
Condition Checklist with your rental agreement. 
            </p>} />
        <div className={shared.noprint}>
            <h3>Tips:</h3>
            <ul>
                <li>Windows: - Note the presence of mesh screen</li>
            </ul>
        </div>
    </>;
}

export const AreaBody: React.FC = () => {
    const {fieldValue } = useFieldValue("type");
    const items = AREA_ITEM_MAP[fieldValue as unknown as keyof typeof AREA_ITEM_MAP];
    if (items == null) return '!!';
    return     <div className={`${styles.table} ${styles.checklist}`}>
    <div className={styles.thead}>
      <div className={styles.row}>
        <div className={styles.th}>Item</div>
        <div className={`${styles.th} ${styles.colspan}`}>Observations</div>
      </div>
    </div>

    <div className={styles.tbody}>
      {items.map((item) => (
        <div className={styles.gridGroup} key={item}>
          <div className={`${styles.th} ${styles.rowspan}`}>{item}</div>

          <div className={styles.th}>Cleanliness</div>
          <div className={styles.td}><ConditionScale /></div>

          <div className={styles.th}>Condition</div>
          <div className={styles.td}><ConditionScale /></div>

          <div className={styles.th}>Notes</div>
          <div className={`${styles.td} ${styles.notes}`}></div>
        </div>
      ))}
    </div>
  </div>;
}