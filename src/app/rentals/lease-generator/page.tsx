import { LeaseBody } from "./leaseBody";
import styles from './lease-styles.module.css';
import { CustomFeatureContainer, CustomFeatureEdtior } from "./customFeatures";
import './styles.css';
export default function LeasePage() {
    return <CustomFeatureContainer>
        <div className={styles.container}>
            <div className={styles.featureEditor}>
                <CustomFeatureEdtior />;
            </div>
            <div className={styles.body}>
                <LeaseBody />
            </div>
        </div>
    </CustomFeatureContainer>;
}