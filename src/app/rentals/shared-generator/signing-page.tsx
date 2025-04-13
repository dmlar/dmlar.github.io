import { ReactNode } from "react";
import { CustomRepeatable, CustomText } from "../lease-generator/customFeatures";
import styles from "./signing-page.module.css";

export const SigningPage: React.FC<{
    text: ReactNode,
}> = ({ text }) => {
    return <div className={styles.signingPage}>
        {text}
        <h3>TENANT SIGNATURE</h3>
        <CustomRepeatable field="tenant">
            <div>
                <div className={styles.signatureSection}>
                    <div className={styles.signature}></div>
                    <CustomText field='name' />
                </div>
                <div className={styles.signatureSection}>
                    <div className={styles.date}>
                    </div>
                    <span>Date</span>
                </div>
            </div>
        </CustomRepeatable>
        <h3>LANDLORD SIGNATURE</h3>
        <div>
            <div className={styles.signatureSection}>
                <div className={styles.signature}></div>
                <CustomText field='landlordName' />
            </div>
            <div className={styles.signatureSection}>
                <div className={styles.date}>
                </div>
                <span>Date</span>
            </div>
        </div>
    </div>;
}
