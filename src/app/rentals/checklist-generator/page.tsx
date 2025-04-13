import { ChecklistBody } from "./checklistBody";
import '../lease-generator/styles.css';
import styles from '../lease-generator/lease-styles.module.css'
import { CustomFeatureContainer, CustomFeatureEdtior } from "../lease-generator/customFeatures";

export default function ChecklistPage() {
    return <CustomFeatureContainer>
        <div className={styles.container}>
            <div className={styles.featureEditor}>
                <CustomFeatureEdtior />;
            </div>
            <div className={styles.body}>
                <ChecklistBody />
            </div>
        </div>
    </CustomFeatureContainer>;
}