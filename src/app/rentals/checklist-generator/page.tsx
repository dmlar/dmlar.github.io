import { ChecklistBody } from "./checklistBody";
import leaseStyles from '../lease-generator/lease-styles.module.css'
import shared from '../shared-generator/shared.module.css';

import { CustomFeatureContainer, CustomFeatureEdtior } from "../lease-generator/customFeatures";

export default function ChecklistPage() {
    return <CustomFeatureContainer>
        <div className={leaseStyles.container}>
            <div className={leaseStyles.featureEditor}>
                <CustomFeatureEdtior />
            </div>
            <div className={shared.body}>
                <ChecklistBody />
            </div>
        </div>
    </CustomFeatureContainer>;
}