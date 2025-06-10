import { LeaseBody } from "./leaseBody";
import styles from './lease-styles.module.css';
import shared from '../shared-generator/shared.module.css';

import { CustomFeatureContainer, CustomFeatureEdtior } from "./customFeatures";
import './styles.css';
export default function LeasePage() {
    return <CustomFeatureContainer>
        <div className={styles.container}>
            <div className={shared.featureEditor}>
                <CustomFeatureEdtior templateType="lease" />
            </div>
            <div className={shared.body}>
                <LeaseBody />
            </div>
        </div>
    </CustomFeatureContainer>;
}