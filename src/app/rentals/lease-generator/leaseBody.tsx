import { ReactNode } from 'react';
import { CustomOptional, CustomRepeatable, CustomText, Pluralize } from './customFeatures';
import styles from './lease-styles.module.css';
import shared from '../shared-generator/shared.module.css';


export const SigningPage: React.FC<{
    addendumName: string,
    customText?: ReactNode,
}> = ({ addendumName, customText }) => {
    return <div className={styles.signingPage}>
        {customText != null ?
            customText : <p>
                IN WITNESS WHEREOF, Tenant and Landlord hereby agree to this {addendumName}.
            </p>}
        <h3>TENANT SIGNATURE</h3>
        <CustomRepeatable field="tenant">
                <div className="signature"></div>
                <CustomText field='name' />
            </CustomRepeatable>
        <h3>LANDLORD SIGNATURE</h3>
        <div className="signature"></div>
        <CustomText field='landlordName' />
    </div>;
}

export const LeaseBody = () => {
    return <>
        <div>
            <h1>Residential Lease Agreement</h1>
            <h2>106 12th Ave E, Seattle, Washington 98102</h2>
        </div>
        <div>
            <p>
                This Residential Lease (Lease) is entered into on the date of the last signature below (the Effective Date) between <br />
                <b><CustomText field="landlordName" /> (Landlord)</b> and <br />
                <CustomRepeatable field="tenant" join={"grammar_and"}>
                        <b><CustomText field="name" /></b> 
                    </CustomRepeatable><Pluralize field='tenant'>{[
                        <b> (Tenant)</b>,
                        <> (together and separately <b>Tenant</b>)</>
                    ]}</Pluralize><br />
                for <b>106 12th Ave E Seattle, WA 98102 (Property)</b>
            </p>
            <h2>1. Basic Terms</h2>
            <h3>1.1 AMOUNTS DUE FROM TENANT UPFRONT</h3>
            <p>
                The following items will be paid upfront by Tenant to Landlord under this Lease:
            </p>
            <h4>1.1.1 Refundable Deposit</h4>
            <p><b>$<CustomText field='securityDeposit' /></b> Security Deposit due at Start Date (See Section 1.6 below)</p>
            <h4>1.1.2. Rent for First Month</h4>
            <p><b>$<CustomText field='proratedRent' /></b>  Prorated Monthly Rent for partial first month of the Term due at Start Date (See Section 1.4 below)
            </p>  
            <h4>1.1.3. Total Due Upfront</h4>
            <p>
                <b>$<CustomText field='holdingDeposit' /></b> due at signing.
            </p>
            <p>
                <b>$<CustomText field='totalMoveInCost' /></b> due at Start Date.
            </p>
            <p>
                The total move in costs include:
            </p>
            <ul>
                <li>
                    $<CustomText field='securityDeposit' /> security deposit
                </li>
                <li>
                    $<CustomText field='holdingDeposit' /> credit to apply the holding deposit towards the security deposit
                </li>
                <li>
                    $<CustomText field='petDeposit' /> pet deposit
                </li>
                <li>
                    $<CustomText field='proratedRent' /> prorated rent for the month of <CustomText field='moveInMonth' />.
                </li>
            </ul>
            <h3>1.2. PROPERTY</h3>
            <table>
                <tr>
                    <th>Property Location</th>
                </tr>
                <tr>
                    <td><CustomText field='unitAddress' /></td>
                </tr>
            </table>
            <p>
                The Property is a unit in a multifamily residence located at <CustomText field='multifamilyAddress' />
            </p>
            <p>
                The Property includes all appliances, fixtures, and equipment installed on the Property as of the Start Date (as defined below), including the following:
            </p>
            <p>
                <b>Refrigerator; Oven/range; Microwave; Dishwasher.</b>
            </p>
            <CustomOptional name='106disclaimer'>
                <p>
                    The Property includes the unit addressed at 106 12th Ave E, per SDCI zoning. This is a single floor basement unit.
                </p>
            </CustomOptional>
            <h3>
                1.3 TERM
            </h3>
            <p>
                Fixed Term. The term of this Lease <b>(Term)</b> will begin on <b><CustomText field='startDate' /> (Start Date)</b> and end on <b><CustomText field='expirationDate' /> (Expiration Date)</b>
            </p>
            <p>
                If Tenant is a victim of family violence or reasonably believes it is necessary to vacate the Property due to fear of
                imminent domestic violence, or Tenant is a victim of sexual assault or is the parent or guardian of a dependent who is a victim of sexual assault, or Tenant is a victim of unlawful harassment or stalking and reasonably believes it is necessary to vacate the Property due to fear of imminent harm of such sexual assault, domestic violence or unlawful harassment, Tenant may terminate the Lease by providing Landlord thirty (30) days' prior written notice. If Tenant provides written notice of termination for reasons of sexual assault, domestic violence, unlawful harassment or stalking, and the notice includes a valid order for protection or a written record of report to a qualified third party, such as the police, then Tenant will be automatically discharged from the payment of Rent following the month in which the notice was given, and Tenant will be entitled to the return of the Security Deposit (if applicable), minus any deductions by Landlord pursuant to Section
                2.4 of this Lease.
            </p>
            <h3>1.4. RENT</h3>
            <h4>1.4.1. Base Rent; Monthly Rent</h4>
            <p>
                Tenant is responsible for paying monthly rent for the use and occupancy of the Property <b>(Base Rent)</b> and all other fixed rent and fixed charges described in this Lease (collectively, <b>Monthly Rent</b>) on the <b>1st</b> day of each month (<b>Monthly Rent Due Date</b>). The Monthly Rent is <b>$<CustomText field='monthlyRent' /></b>. First month's Monthly Rent is due on the first Monthly Rent Due Date after the Start Date.
            </p>
            <h4>1.4.2. Additional Rent</h4>
            <p>
                Any amount Tenant may be required to pay Landlord or any other party under this Lease in addition to Monthly Rent will be additional rent (Additional Rent). The Monthly Rent and any Additional Rent are collectively referred to as "<b>Rent</b>".
            </p>
            <p>
                Additional Rent includes, without limitation:
            </p>
            <ul>
                <li>
                    Any applicable charges for utilities and/or other services to the Property, in amounts that vary by month (Variable Charges), payable to Landlord within <CustomText field='duePeriodVariableCharges' />days of billing.
                </li>
                <li>
                    The cost of utilities required to be arranged for and paid by Tenant directly to the service provider.
                </li>
                <li>
                    The Insufficient Funds Fee is variable.
                </li>
                <li>
                    The Late Fee is <b><CustomText field='lateFee' /></b>.
                </li>
            </ul>
            <h4>1.4.3. Manner of Payment</h4>
            <p>
                All Rent payable to Landlord must be paid by one of the following:
            </p>
            <ul>
                <li>Check or money order made payable to the following recipient and placed in rent deposit box in the laundry room: <CustomText field='check recipient' /></li>
                <li>
                    Electronically by online payment service: Baselane. Landlord will provide Tenant with Landlord’s account information.
                </li>
                <li>
                    ACH/direct deposit. Landlord will provide ACH/direct deposit payment information to Tenant directly.
                </li>
            </ul>
            <h4>1.4.4. Prorated Rent Calculation</h4>
            <CustomText field='rentcalculation' />
            <h4>1.4.5. Rent Summary</h4>
            <p>
                Tenant's Rent responsibilities are summarized below:
                </p>
                <table>
                    <tr>
                        <th></th>
                        <th>Monthly Rent</th>
                    </tr>
                    <tr>
                        <td>Base Rent</td>
                        <td>$<CustomText field='baseRent' /></td>
                    </tr>
                    <tr>
                        <td>Storage Rent (Section 1.9)</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td>Pet Rent (Section 1.10)</td>
                        <td>$<CustomText field='petRent' /></td>
                    </tr>
                    <tr>
                        <td>Electricity (Section 1.5.1)</td>
                        <td>Tenant pays <CustomText field='electricProvider' /></td>
                    </tr>
                    <tr>
                        <td>Natural Gas (Section 1.5.2)</td>
                        <td>Tenant pays <CustomText field='gasProvider' /></td>
                    </tr>
                    <tr>
                        <td>Heating Oil</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td>Heat (Section 1.5.3)</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td>Water/Sewer (Section 1.5.4)</td>
                        <td>Variable charge</td>
                    </tr>
                    <tr>
                        <td>Trash Removal (Section 1.5.5)</td>
                        <td>Variable charge</td>
                    </tr>
                    <tr>
                        <td>Landscaping</td>
                        <td>Landlord pays</td>
                    </tr>
                    <tr>
                        <td>Telephone (Section 1.5.7)</td>
                        <td>Tenant pays</td>
                    </tr>
                    <tr>
                        <td>Cable TV (Section 1.5.8)</td>
                        <td>Tenant pays</td>
                    </tr>
                    <tr>
                        <td>Internet (Section 1.5.9)</td>
                        <td>Tenant pays</td>
                    </tr>
                    <tr>
                        <td>Homeowner/Condominium Assessment</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <th>TOTAL</th>
                        <th>$<CustomText field='monthlyRent' /></th>
                    </tr>
                </table>
            <h3>1.5. UTILITIES AND SERVICES</h3>
            <p>
                Landlord or Tenant may not intentionally cause termination of any utility services, including water, heat, electricity, or gas, except for an interruption of utility services for a reasonable time in order to make necessary repairs or as a result of the normal occupancy of the Property. Landlord and Tenant agree that utilities and other services will be provided and paid for as outlined below:
            </p>
            <h3>1.5.1. Electricity</h3>
            <p>
                Tenant will arrange and pay for the cost of electrical service for the Property directly to the service provider. The name of the Property's electrical service provider is: <b><CustomText field='electricProvider' /></b>.
            </p>
            <h3>1.5.2. Natural Gas</h3>
            <p>
                Natural gas service is provided to the Property and Tenant will arrange and pay for the cost of natural gas service for the
                Property directly to the service provider. The name of the Property's natural gas service provider is:<b><CustomText field='gasProvider' /></b>
            </p>
            <h3>1.5.3. Heat</h3>
            <p>
                Heat is not provided separately from other utilities. The cost of heat is included in the utility costs (natural gas, electricity, or heating oil, as provided) necessary to run the heating system, and will be paid by the party responsible for the applicable utility.
            </p>
            <h3> 1.5.4. Water and Sewer</h3>
            <p>
                Landlord will provide water and sewer service to the Property, and Tenant will pay Landlord a variable monthly charge <b>(Water and Sewer Charge)</b> to reimburse Landlord for the cost of water and sewer service. The Water and Sewer Charge is a variable amount that is one-third of the cost incurred by the Landlord to provide water and sewer service to the Property.
            </p>
            <h3>1.5.5. Trash Removal</h3>
            <p>
                Landlord will provide regular trash removal service for the Property, and Tenant will pay to Landlord a monthly charge (<b>Trash Removal Charge</b>)  to reimburse Landlord for the cost of trash removal service. The Trash Removal Charge is one-third of the cost incurred by the Landlord to provide trash removal service to the Property. Receptacle(s) for collecting trash are provided by Landlord. Tenant is responsible for depositing trash in the receptacles provided. Items that do not fit in the trash receptacles or are not permitted in regular trash by the City of Seattle are not included in Trash Removal. Tenant may only use one-third of available space in the trash receptacles.
            </p>
            <h3>1.5.6. Snow Removal</h3>
            <p>
                Landlord does not provide snow removal services for any portion of the Property or, if applicable, the Building grounds.
            </p>
            <h3>1.5.7. Telephone</h3>
            <p>
                Tenant will arrange and pay for the cost of telephone services.
            </p>
            <h3>1.5.8. Cable Television</h3>
            <p>
                Tenant will arrange and pay for the cost of cable or other premium television services.
            </p>
            <h3>1.5.9. Internet</h3>
            <p>
                Tenant will arrange and pay for the cost of internet service.
            </p>
            <CustomOptional name='106 electric disclaimer'>
            <h3>1.5.10. Utility Charges for Shared Facilities</h3>
            <p>
                The shared washer, dryer, hallway lighting, exterior lighting, sump pump, some exterior outlets, and security systems are all attached to meter associated with the Property. The Tenant is responsible for all electrical costs and usage incurred by these systems.
            </p>
            </CustomOptional>
            <h3>1.6. SECURITY DEPOSIT</h3>
            <p>
                Landlord will hold the security deposit in an account at <b><CustomText field='depositBank' /></b> which is located at <b><CustomText field='depositBankAddress' /></b>
            </p>
            <h3>1.7. TENANT INSURANCE</h3>
            <p>
                Tenant is required to obtain and maintain at all times during the Term renter's insurance covering Tenant's personal property and damage to property with per occurrence limits of not less than $<b>100,000.00</b>. Landlord (and Managing Agent, if any) will be named as an interested party. Tenant will provide Landlord with evidence of any required renter's insurance prior to moving in and upon request during the Term.
            </p>
            <h3>1.8. PARKING</h3>
            <p>
                An addendum (<b>Parking Addendum</b>)  is attached to this Lease which sets forth the specific terms of, and limitations on, Tenant's parking rights. Except as expressly permitted in the Parking Addendum, neither Tenant nor any Occupant is allowed to park, or permit any of their guests or invitees to park, on the Building grounds.
            </p>
            <h3>1.9. STORAGE SPACE</h3>
            <p> No storage room/storage locker (including any common areas) or other area exterior to the Property is provided for in this Lease.</p>
            <h3>
                1.10. PETS
            </h3>
            <p>
                Tenant is only permitted to keep pet(s) on the Property that are identified in the addendum (<b>Pet Addendum</b>) attached to
                this Lease, and will comply with all terms of the Pet Addendum. In addition, Tenant is required to carry renter's insurance
                which includes coverage for pet ownership. Landlord will be named as an interested party on such coverage. Tenant will pay Landlord <b>$<CustomText field='petRent' /></b> per month as pet rent (<b>Pet Rent</b>).
            </p>
            <h3>
                1.11. ADDITIONAL RULES
            </h3>
            <p>
                Tenant’s use and occupancy of the Property is subject to the following policies, rules, regulations, covenants, restrictions
                and other matters of record attached to this Lease:
            </p>
            <p>
                Any Landlord specified rules governing use of the Property (<b>Rules Addendum</b>)
            </p>
            <h3>1.12. SMOKING POLICY</h3>
            <p>
                Smoking means: (i) inhaling, exhaling, breathing, carrying, or possessing any lighted cigar, cigarette, pipe, or any other lighted or heated tobacco or plant product intended for inhalation including hookahs or any similar product, whether natural or synthetic, in any manner or in any form; or (ii) use of an electronic smoking device which creates an aerosol or vapor, in any manner or in any form.
            </p>
            <p>
                Smoking is not allowed in the Property and, all common areas of the Building and on Building grounds.
            </p>
            <p>
                In addition to any other remedies Landlord may have under this Lease or at law, Landlord may charge Tenant a fee of up to $250 for a second and subsequent violations if Tenant smokes in a clearly designated non-smoking Property or area of the Building or Building grounds.
            </p>
            <h2>2. Additional Terms</h2>
            <h3>2.1. PROPERTY CONDITION</h3>
            <p>
                Tenant has examined the Property, either in person or virtually, prior to signing this Lease and, as of the date of this Lease, is satisfied with its condition and appearance (Existing Condition). Landlord will deliver possession of the Property to Tenant on the Start Date in the same or better condition as the Existing Condition, except for ordinary wear and tear.
            </p>
            <h3>
                2.2. POSSESSION
            </h3>
            <p>
                In the event Landlord cannot deliver possession of the Property to Tenant by the Start Date, through no fault of Landlord, this Lease will continue in full force but Tenant, as Tenant's sole remedy, will not be obligated to pay the Monthly Rent (prorated based upon a 30-day month) for the period that Tenant is unable to take possession. If Landlord fails to deliver possession of the Property by the 30th day following the Start Date, Tenant may terminate this Lease by written notice delivered to Landlord at any point before actual possession of the Property is delivered to Tenant, in which event all amounts paid to Landlord by Tenant will be returned and both parties will be released from all obligations and liability under this Lease.
            </p>
            <h3>
                2.3. RENT PAYMENT
            </h3>
            <h4>2.3.1. Payment Timing</h4>
            <p>
                Tenant will pay the Monthly Rent to Landlord, (or Landlord's Managing Agent, if specified above), in advance, on the Monthly Rent Due Date of each month during the Term according to the payment details specified in the Basic Terms. Variable Charges, if any, will be payable according to the timeframe specified in the Basic Terms.
            </p>
            <h4>2.3.2. Late Payment</h4>
            <p>
                If Tenant fails to pay the Monthly Rent or any other Rent in full by close of business the day <b>5</b> days after it is due, a fee (<b>Late Fee</b>) in the amount specified in the Basic Terms to this Lease will be immediately assessed. The Late Fee is due by the end of the day after it is assessed. Acceptance of late payment does not waive Landlord’s right to require payment of Monthly Rent in full on the date it is due.
            </p>
            <h4>2.3.3. Returned Checks / Dishonored Payments</h4>
            <p>
                If any payment of any Rent or other charges under this Lease is returned for insufficient funds or otherwise fails, Landlord will have the right to require the dishonored payment be replaced by a cashier's check, certified check, or money order and require Tenant to pay any fee associated with the failed payment. If more than two of Tenant's payments to Landlord during the Term are returned for insufficient funds, Landlord may require all future payments of Rent and other obligations be paid by cashier's check, certified check, or money order.
            </p>
            <h3>
                2.4. SECURITY DEPOSIT
            </h3>
            <h4>2.4.1. Use of Security Deposit</h4>
            <p>
            Landlord will hold the Security Deposit in a segregated trust account. Interest on the Security Deposit will be retained by
            Landlord. Subject to applicable law, Landlord may use the Security Deposit to: (i) remedy Tenant Defaults (as defined in Section 2.9.1 below)  under this Lease, including past due Rent; (ii) pay for costs incurred by Landlord to repair damages  to the Property caused by Tenant, any Occupants, or any guests of Tenant or any Occupants, beyond ordinary wear and tear; and/or (iii) pay cleaning costs incurred by Landlord to return the Property to the same level of cleanliness it was in at the Start Date (collectively,<b>Deposit Claims</b>).  The Security Deposit will not relieve Tenant of any obligation to pay any Rent due under this Lease prior to termination. If a Pet Damage Deposit is required, it will be considered a Security Deposit and subject to the terms of this Section.
            </p>
            <h4>2.4.2. Return of Security Deposit</h4>
            <p>
                The Security Deposit, less any Deposit Claims, will be returned to Tenant within 21 days (or shorter period as required by local ordinance) after Tenant vacates the Property upon expiration or earlier termination of this Lease. The returned portion of the deposit will be sent as a single check payable to Tenant(s) listed in the Basic Terms, or as otherwise agreed to by Landlord and Tenant. Any Deposit Claims will be described in an itemized statement provided with the returned portion of the deposit. Tenant will provide a forwarding address to Landlord where the Security Deposit, less Deposit Claims, and the itemized statement will be mailed. In the event Tenant fails to provide a forwarding address, the Security Deposit and statement will be sent to Tenant's last known address, which may be the Property, and Landlord will not be liable for Tenant's delayed receipt of, or failure to receive, the Security Deposit and itemized statement.
            </p>
            <h2>
                2.5. TENANT'S OBLIGATIONS
            </h2>
            <h4> 2.5.1. Residential Use Only</h4>
            <p>
                Tenant will use and occupy the Property for residential purposes only. Tenant will not use or permit the use of the
                Property for any non-residential, illegal, or otherwise inappropriate purpose, including for any commercial purpose.
            </p>
            <h4>2.5.2. Permitted Occupants</h4>
            <p>
                Subject to applicable law, the Property will not be occupied by anyone other than the following: (i) Tenants; (ii) Occupants identified in the Basic Terms; and (iii) children under the age of majority of any Tenant (and Tenant will notify Landlord promptly after any such children take occupancy).
            </p>
            <h4>2.5.3. No Disturbance or Nuisance Permitted</h4>
            <p>
                Tenant will not, and will not permit any Occupants or any guests to: (i) make any unreasonably loud or otherwise unreasonable use of the Property; (ii) allow any condition on the Property or, if applicable, common areas of the Building that poses threat of injury to persons or property; or (iii) otherwise interfere with the rights, comfort, safety, or enjoyment of the other tenants or occupants of the Building (if applicable) or neighboring properties.
            </p>
            <h4>
                2.5.4. Utilities
            </h4>
            <p>
                Tenant will not cause any utility to be interrupted during the Term, and will provide Landlord with reasonable evidence
                that any utility specified as Tenant's responsibility has been paid upon Landlord's reasonable request.
            </p>
            <h4>
                2.5.5. Maintenance
            </h4>
            <p>
                Tenant will: (i) keep and maintain the Property in a clean, safe, and sanitary condition; (ii) regularly dispose of all
                garbage and other waste in a clean and safe manner, not overload any trash receptacles, and separate and dispose of
                recyclable and compostable materials in any provided separate receptacles; (iii) use all appliances, fixtures, and
                equipment located in the Property in a safe and reasonable manner in keeping with their intended function and, if
                provided to Tenant, the applicable operating instructions; (iv) not obstruct access to doors and windows; and (v) maintain
                the Property in the same condition as it was delivered to Tenant, except for ordinary wear and tear. (vi) The tenant will keep the interior temperature of the property at 65 degrees fahrenheit or greater at all times. If the Property is
                equipped with smoke detectors or carbon monoxide detectors, Tenant will regularly (not less often than once per month)
                test the detectors and, if the devices are battery operated, Tenant will replace batteries every six months, or more often
                as needed. Tenant will pay to repair any damage to the Property caused by Tenant, any Occupants or any guest of
                Tenant or Occupants, except for ordinary wear and tear.
            </p>
            <h4>
                2.5.6. No Transfer
            </h4>
            <p>
                Tenant will not sublease or assign all or any portion of the Property without the prior written consent of Landlord, in
                Landlord's sole discretion. Any attempted sublease or assignment of the Property or this Lease without the prior written
                consent of Landlord will be void and cause for termination of this Lease by Landlord. No sublease of the Property will
                release Tenant from any obligation under this Lease, and Tenant will be liable for any violations of this Lease caused by
                a subtenant. Tenant will not rent the Property, or any portion of the Property, including through any rental program such
                as “Airbnb,” “VRBO,” or similar program, and Tenant's entry into any short-term rental agreement will be cause for
                termination of this Lease by Landlord.
            </p>
            <h4>
                2.5.7. No Alterations
            </h4>
            <p>
                Tenant will not perform any alterations or improvements to the Property without the prior written consent of Landlord, in Landlord's sole discretion. Alterations and improvements include adding, changing, or removing appliances, fixtures, shelving, wallpaper, or wall paint. In addition, except as required by applicable law, Tenant is not allowed to arrange, and will not permit, the installation of new or additional wiring, cabling, or equipment without Landlord's prior written consent, in Landlord's sole discretion. If Tenant violates this provision, Tenant will return the Property to its original condition at Tenant's sole cost and expense. If Landlord approves of any alterations, Tenant understands that any applicable alterations will remain as part of the Property at the end of the Term. Tenant will not subject the Property to any liens in connection with making any alteration or improvement and will indemnify Landlord from all costs and expenses related to
                alterations, improvements, or liens.
            </p>
            <h4>
                2.5.8. Joint Liability
            </h4>
            <p>
                All individuals executing this Lease as Tenants will be jointly and severally liable for the performance of all agreements,
                covenants, and obligations of a Tenant contained in this Lease.
            </p>
            <h3>
                2.6. LANDLORD'S OBLIGATIONS
            </h3>
            <h4>2.6.1. Services and Utilities</h4>
            <p>
                Landlord will only provide the services and utilities as specified in the Basic Terms and as otherwise required under applicable law. Tenant waives all liability of Landlord for any interruption or insufficiency of any service or utility resulting from causes beyond the reasonable control of Landlord.
            </p>
            <h4>2.6.2. Maintenance and Repairs</h4>
            <p>
                Subject to Tenant's duties under  above, Landlord will maintain the Building (including its structural elements, Section 2.5 roof, and systems) in good order and repair and, if applicable, will maintain the Building common areas, in a clean, safe, and sanitary condition. Landlord will be responsible for, and will pay for, repairing (and restoring to working condition) the appliances, fixtures, or equipment located in the Property, except if any repairs are necessary as a result of improper use by Tenant or any Occupant, or the guest of Tenant or any Occupant. Tenant will notify Landlord promptly in writing upon becoming aware of any condition within the Property or, if applicable, in the Building, that requires repair or maintenance by Landlord. Landlord will undertake any required repairs reasonably promptly (and in all instances, within any timeframes set forth by applicable law, based on the condition) following receipt of notice. Delay by Landlord in performing or completing any repair will not permit Tenant to complete the repair or incur related expenses or to terminate this Lease, except as permitted by applicable law. In the event some or all of Landlord's maintenance obligations are provided by a condominium or other owners association, then Landlord's obligation hereunder will be solely to enforce the obligation of the association or authority to perform such maintenance (in lieu of Landlord being obligated to perform such maintenance directly).
            </p>
            <h2>2.7. LANDLORD'S ACCESS</h2>
            <p>
                The Landlord, its agents and contractors, will have the right of reasonable access to the Property between the hours of 8:00 a.m. and 9:30 p.m. 7 days a week to perform its obligations of maintenance and repair of the Property or, if applicable, any other portion of the Building. Except in the case of emergency or if it is impracticable to do so, Landlord will give Tenant at least two days' written notice of his or her intent to enter and will enter only between the hours of 8:00 a.m. and 9:30 p.m. 7 days a week. The notice will state the exact time and date or dates of entry or specify a period of time during that date or dates in which the entry will occur. The notice will specify the telephone number to which Tenant may communicate any objection or request to reschedule the entry. If repairs or maintenance elsewhere in the Building unexpectedly require access, Landlord may immediately access the Property and will give Tenant notice of the entry within two days after. Tenant will not unreasonably withhold consent or prevent the Landlord from entering the Property at a specified time where the Landlord has given at least one days' notice of intent to enter to exhibit the Property to prospective or actual purchasers or tenants. Tenant will not unreasonably withhold consent to the Landlord to enter into the Property in order to inspect the Property, make necessary or agreed repairs, alterations, or improvements, supply necessary or agreed services, or exhibit the Property to prospective or actual purchasers, mortgagees, tenants, workers, or contractors.
            </p>
            <h2>
                2.8. SURRENDER
            </h2>
            <h3>2.8.1. End of Term</h3>
            <p>
                Tenant will surrender possession of the Property and return the keys to Landlord immediately upon the Expiration Date or earlier termination of this Lease. At the time of surrender, the Property will be in the same condition as the Start Date, except for ordinary wear and tear, and otherwise in clean condition and free of all personal property of the Tenant or any Occupant. To the extent permitted by applicable law, any personal property left on the Property after Tenant vacates the Property will be deemed abandoned and may be sold or disposed of by Landlord, following forty-five days' advance written notice to Tenant at Tenant's last known address, at Tenant's cost (and may be deducted from Tenant's Security Deposit by Landlord). Neither Landlord nor Tenant is obligated (and neither has any right) to unilaterally renew or extend the Term of this Lease. If Tenant and all Occupants do not vacate the Property by the Expiration Date or earlier termination of this Lease, Landlord may commence legal proceedings allowed by applicable law to remove and evict Tenant and any Occupant from the Property and will be entitled to recover from Tenant double the Monthly Rent prorated based on a 30-day month (or the maximum rent allowed for holdover under applicable law, if less) for the period until Landlord regains possession of the Property. Alternatively, if Landlord accepts Tenant's payment of the Monthly Rent otherwise due under this Lease for the month after the end of the Term, then this Lease will be deemed to continue on a month-to-month basis at the applicable Monthly Rent as identified above plus a <b>15%</b> month to month charge and otherwise on the same terms and conditions as contained in this Lease. Tenant may terminate the month-to-month tenancy as of the last day of any calendar month by giving at least twenty-days' written notice of termination to Landlord. Landlord may terminate the month-to-month tenancy only for just cause and must provide advance written notice in accordance with applicable laws.
            </p>
            <h3>2.8.2. Abandonment</h3>
            <p>
                If Tenant moves out of the Property (abandonment) before the Expiration Date without notice and without the intention to return Landlord may deem the Property abandoned and terminate the Lease. The intention may be evidenced by (i) Tenant's removal of substantially all its personal property and (ii) either (A) nonpayment of rent for more than two (2) months or (B) an express statement that the Tenant is vacating the Property by a specified date. If Tenant abandons the Property, Landlord may send notice containing certain statements to each Tenant's last-known address, and if the notice is returned as undeliverable or Tenant fails to contact Landlord within ten (10) days after receipt of the notice, Landlord may take possession of the Property and the Lease will be deemed terminated. Landlord may remove Tenant's possessions; however, Landlord must hold them for not less than forty-five days after notice is given to Tenant, at the expiration of which Landlord may sell or dispose of Tenant's property as the Landlord deems appropriate, except in the case of the death of Tenant. Landlord may apply any income derived from any sale against money due the Landlord. Any income in excess of money owed to Landlord derived from the sale of Tenant's property will be held by the Landlord for the benefit of the Tenant for a period of one year from the date of sale. If no claim is made or action commenced by Tenant for the recovery of any excess income prior to the expiration of that period of time, the balance from the sale of Tenant's property will become the property of the Landlord.
            </p>
            <h2>2.9. DEFAULT</h2>
            <h3>2.9.1. Default by Tenant</h3>
            <p>
                Tenant will be in default (Default) if: (i) Tenant fails to pay any Monthly Rent when due and does not cure the failure within <b>15</b> days  of receiving written notice from Landlord; (ii) Tenant fails to pay any Additional Rent when due and does not cure the failure within <b>15</b> days of receiving written notice from Landlord or; (iii) Tenant fails to comply with any other
                obligation or restriction in this Lease and does not cure the failure within <b>15</b>  days of receiving written notice from
                Landlord. If Tenant Defaults under this Lease, Landlord may exercise all rights and remedies available under applicable
                law, including the right to: (i) terminate this Lease; (ii) regain possession of the Property through an eviction or similar
                process; (iii) recover from Tenant all unpaid Rent, including unpaid Monthly Rent, Additional Rent, Late Fees and, if
                applicable, holdover Rent for the period prior to Tenant's delivery of possession of the Property to Landlord; (iv) recover
                all Rent payable under this Lease for the period from the date of termination for Tenant Default through the stated
                Expiration Date (provided that Landlord has used reasonable efforts to find a replacement tenant), less the amount
                Landlord is able to collect from any replacement tenants for that period; and (v) recover all reasonable costs and
                expenses incurred by Landlord in repairing any damage to the Property, caused by the improper use by Tenant or any
                Occupant or any guests of Tenant or an Occupant, less any amounts obtained from the Security Deposit. Additionally, to
                the extent permitted under applicable law, Landlord may recover from Tenant Landlord's court costs and reasonable
                attorneys' fees and expenses incurred in connection with any legal proceedings against Tenant.
            </p>
            <p>
                To the extent required by applicable law, Landlord will use reasonable efforts to mitigate any damages resulting from
                Tenant Default.
            </p>
            <h2>2.10. NOTICES</h2>
            <p>
                Any notice of termination of this Lease, notice of Default by Tenant under this Lease, notice of eviction by Landlord,
                notice of disposition of Tenant’s property, or any other notice required to be given in writing under applicable law (<b>Material Notices</b>) will be in writing and sent to Tenant and Landlord at the applicable address set forth in  Section 2.16 below. Except for Material Notices, all other written notices under this Lease may be delivered to the other party at the e-mail address or physical address of the party specified in Section 2.16,  or by other electronic means agreed to by the parties. Either party can update its email or physical address by sending written notice to the other party.
            </p>
            <h2>2.11. CASUALTY DAMAGE</h2>
            <p>
                If the Property is rendered uninhabitable by a fire, storm, or other casualty, then upon thirty days' written notice, this Lease will terminate and Tenant will pay to Landlord only the Rent for the period prior to the casualty and Landlord will return to Tenant any Rent paid for the period after the casualty unless Tenant remains in possession of the Property after the casualty. Landlord's written notice to vacate must indicate that (i) the Property has been certified or condemned as uninhabitable by a local agency charged with the authority to issue such an order; and (ii) continued habitation of the Property would subject the Landlord to civil or criminal penalties. However, if the terms of the local agency's order do not allow the Landlord to provide at least thirty days' advance written notice, the Landlord must provide as much advance written notice as is possible and still comply with the order. If a portion of the Property remains habitable, then this Lease will continue but Monthly Rent will be adjusted proportionally based on the proportion of the Property still habitable by Tenant, until the damaged portion of the Property has been restored to a habitable condition. Nonessential elements (including decks and porches) of the Property will not be counted in determining the habitable portions of the Property. If the Property is part of a larger Building and any other part of that Building is materially damaged by casualty and such casualty damage affects the habitability of the Property, Landlord will have the right to terminate this Lease upon thirty days' written notice to Tenant to vacate the Property. Landlord's written notice to vacate must indicate that (i) the Property has been certified or condemned as uninhabitable by a local agency charged with the authority to issue such an order; and (ii) continued habitation of the Property would subject the Landlord to civil or criminal penalties. However, if the terms of the local agency's order do not allow the Landlord to provide at least thirty days' advance written notice, the Landlord must provide as much advance written notice as is possible and still comply with the order. If the Property, or another portion of the Building of which the Property is a part, is damaged or destroyed by fire or other casualty resulting from any negligent act by Tenant or any Occupant or the guest of Tenant or an Occupant, Tenant will be liable to
                Landlord for the costs of repairing the damage.
            </p>
            <h2>2.12. TENANT'S PROPERTY</h2>
            <p>
                Tenant acknowledges that Landlord's insurance does not cover loss or damage to any of Tenant's personal property located on the Property and that Landlord will not be liable for any damage to Tenant's personal property. If required by the Basic Terms, Tenant will obtain and maintain (during the Term) renter's insurance of at least the level stated in the Basic Terms. Upon Landlord's request, Tenant will provide Landlord a certificate of insurance as evidence of the policy. Even if no policy of renter's insurance is required, Landlord recommends that Tenant obtain renter's insurance.
            </p>
            <h2>
                2.13. GENERAL
            </h2>
            <p>
                This Lease will be governed by the laws of the State of Washington, and any additional laws of the city or county in which the Property is located. This Lease will be binding on and inure to the benefit of all permitted heirs, legal representatives, and assigns of the parties. This Lease, along with the attached Addenda and legal disclosures, contains the entire agreement between Landlord and Tenant and may not be changed except in writing signed by all parties. If any provision of this Lease is found to be invalid or unenforceable, all other provisions contained in this Lease will remain binding and enforceable to the maximum extent permitted by applicable law.
            </p>
            <h2>
                2.14. DISCLOSURES / ADDENDA
            </h2>
            <p>
                Tenant acknowledges that the legal disclosures and addenda (<b>Addenda</b>)  attached to this Lease are part of the legal agreement between the parties. Tenant will comply with all applicable rules and regulations set out in the attached Addenda. The terms of this Lease will control in the event of any conflict between the terms of any Addenda and the terms of the Lease.
            </p>
            <h2>
                2.15. EXECUTION
            </h2>
            <p>
                All individuals indicated in the Basic Terms as comprising Tenant will sign this Lease and related attached Addenda where indicated. Each of Landlord and Tenant consents to the other party's execution of this Lease by electronic signature. Delivery of this Lease containing the electronic signature of a party or otherwise by facsimile through electronic means or as a digital copy will have the same full force and effect as a manually executed original version.
            </p>
            <h2>
                2.16. CONTACT INFORMATION
            </h2>
            <h3>2.16.1 Tenant</h3>
            <p>Tenant's address is required for notice prior to the Start Date. Notices after the Start Date will be made to the Property.</p>
            <table>
                <tr>
                    <th>Tenant Name</th>
                    <th>Address for Notice Prior to Start Date</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
                <CustomRepeatable field="tenant">
                    <tr>
                        <td><b><CustomText field='name' /></b></td>
                        <td><b><CustomText field='address' /></b></td>
                        <td><b><CustomText field='phone' /></b></td>
                        <td><b><CustomText field='email' /></b></td>
                    </tr>
                </CustomRepeatable>
            </table>
            <h2>2.16.2. Landlord & Managing Agent</h2>
            <table>
                <tr>
                    <th>Landlord Name</th>
                    <th>Address for Notice Prior to Start Date</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
                <tr>
                    <td><b><CustomText field='landlordName' /></b></td>
                    <td><b><CustomText field='landlordAddress' /></b></td>
                    <td><b><CustomText field='landlordPhone' /></b></td>
                    <td><b><CustomText field='landlordEmail' /></b></td>
                </tr>
            </table>
        </div>
        <div>
            <p>IN WITNESS WHEREOF, Tenant and Landlord have executed this Lease as of the date of the last signature below.</p>
            <h4>TENANT SIGNATURE</h4>
            <CustomRepeatable field="tenant">
                <div className="signature"></div>
                <CustomText field='name' />
            </CustomRepeatable>
            <h4>LANDLORD SIGNATURE</h4>
            <div className="signature"></div>
            <CustomText field='landlordName' />
        </div>
        <div>
            <h2>Pet Addendum</h2>
            <p>
                This Pet Addendum is attached to and made a part of the lease between <b>Landlord</b> and <b>Tenant</b>  
                for the Property dated as of the date hereof (<b>Lease</b>). All capitalized terms used in this Addendum have the meanings given such terms in the Lease.
            </p>
            <h3>A. PERMISSIONS TO HAVE PET(S)/IDENTIFICATION</h3>
            Subject to Tenant’s compliance with this Addendum, Tenant is granted permission to keep only the following pet(s) at the Property during the Term of the Lease (each, a <b>Pet</b>):
            <table>
                <tr><th>Pet Name</th><th>Description</th></tr>
                <CustomRepeatable field="pet">
                    <tr><td><CustomText field="name" /></td><td><CustomText field="description" /></td></tr>
                </CustomRepeatable>
            </table>
            <h3>B. PET DEPOSIT</h3>
            <p>
                Tenant will pay a pet deposit on the Start Date. The pet deposit is <b>$<CustomText field='petDeposit' /> (Pet Deposit)</b>.
            </p>
            <p>
                Landlord will hold the pet deposit in an account at <b><CustomText field='depositBank' /></b> which is located at <b><CustomText field='depositBankAddress' /></b>
            </p>
            <h4>B.1. USE OF PET DEPOSIT</h4>
                <p>
                Landlord will hold the Pet Deposit in a segregated trust account. Interest on the Security Deposit will be retained by
                Landlord. Subject to applicable law, Landlord may use the Security Deposit to: (i) pay for costs incurred by Landlord to repair damages to the Property caused by the Pet, beyond ordinary wear and tear; and/or (iii) pay cleaning costs incurred by Landlord to return the Property to the same level of cleanliness it was in at the Start Date (collectively, <b>Pet Deposit Claims</b>).  The Pet Deposit will not relieve Tenant of any obligation to pay any Rent due under this Lease prior to termination.
                </p>
            <h4>B.2. RETURN OF PET DEPOSIT</h4>
            <p>
                The Pet Deposit, less any Pet Deposit Claims, will be returned to Tenant within 21 days (or shorter period as required by local ordinance) after Tenant vacates the Property upon expiration or earlier termination of this Lease. The returned portion of the deposit will be sent as a single check payable to Tenant(s) listed in the Basic Terms, or as otherwise agreed to by Landlord and Tenant. Any Deposit Claims will be described in an itemized statement provided with the returned portion of the deposit. Tenant will provide a forwarding address to Landlord where the Pet Deposit, less Pet Deposit Claims, and the itemized statement will be mailed. In the event Tenant fails to provide a forwarding address, the Security Deposit and statement will be sent to Tenant's last known address, which may be the Property, and Landlord will not be liable for Tenant's delayed receipt of, or failure to receive, the Security Deposit and itemized statement.
            </p>
            <h3>C. RULES, REGULATIONS, AND AGREEMENTS</h3>
            <p>The following pet rules apply:</p>
            <ol>
                <li>Tenant represents that each Pet is properly licensed and vaccinated as required by applicable law, and Tenant agrees to keep all licensure and vaccinations current. Tenant further agrees to provide proof of licensing and vaccination upon Landlord's request.</li>
                <li>
                Tenant represents to Landlord that each Pet is housebroken, has no vicious tendencies or history of threatening or causing harm to persons.
                </li>
                <li>
                Pets must be kept on a leash (or otherwise under the direct physical control of Tenant or another person) at all time  when, if applicable, in the Common Areas or other portions of the Building or grounds.
                </li>
                <li>
                    Tenant will clean up after each Pet and properly dispose of all waste.
                </li>
                <li>
                Tenant will maintain the Property free of odor and stain from any Pet. Tenant will use prompt and diligent efforts to prevent and eliminate any infestation of pests (e.g. fleas) associated with any Pet.
                </li>
                <li>
                    Tenant will not groom or wash any Pet in a Common Area.
                </li>
                <li>
                    Tenant is responsible for controlling and minimizing noise caused by any Pet. Unreasonable levels of noise which  interfere with the quiet enjoyment of any other tenants is prohibited.
                </li>
                <li>
                Tenant is responsible for and will be charged for any damage to the Property or Building caused by any Pet. Damage includes, but are not limited to, damage to floors, carpets, drapes, screens, landscaping, and fencing, including any  odors due to the presence of a Pet.
                </li>
                <li>
                Tenant will indemnify and hold Landlord harmless from all liability, claims, demands, damages, and costs for injuries to persons or property in connection with Tenant's Pet(s)
                </li>
                <li>
                If Landlord receives a complaint or otherwise has reasonable belief that the conduct or condition of a pet constitutes a nuisance under state or local law or otherwise poses a threat to the safety or health of others, Landlord may inspect the Property and if Landlord determines that the Pet constitutes a nuisance or threat to others, Landlord may revoke the permission granted under this Addendum and order Tenant to remove the subject Pet from the property. Tenant will comply with such order and permanently remove the subject Pet from the Property within 48 hours.
                </li>
                <li>
                Landlord may (but is not obligated to) enter the Residence and remove (or, if applicable, permit any local authority to remove) any Pet from the resident's apartment and take such other action as permitted by law, including placing the Pet in a shelter at Tenant's expense if: (a) the Pet becomes vicious, displays symptoms of severe illness, or demonstrates other behavior that indicates a threat to the health or safety of others, or (b) Tenant dies, becomes incapacitated, or otherwise unable to care for the Pet and (b) Landlord or Managing Agent believe in good faith the Pet is being abused or neglected or is in distress.
                </li>
                <li>
                Any rights of Landlord may be exercised by Landlord's Managing Agent, if applicable.
                </li>
            </ol>
            <p>
                The violation of any provision of this Pet Addendum will constitute a Default under the Lease.
            </p>
        </div>
        <SigningPage addendumName="Pet Addendum" />
        <div>
            <h2>Parking Addendum</h2>
            <p>
                This Parking Addendum is attached to and made a part of the lease between (<b>Landlord</b>) and (<b>Tenant</b>) for the Property dated as of the date hereof (<b>Lease</b>). All capitalized terms used Addendum have the meanings given such terms in
                the Lease.
            </p>
            <p>
                Tenant may park <b>1</b> vehicles in the parking area located on the grounds of the Building during the Lease term. Landlord shall be entitled to require all vehicles parking in the Parking Area to be registered with Landlord including, without limitation, providing Landlord with any required information, such as the vehicle license plate number and the owner's name and contact information. Landlord shall be entitled to institute parking controls and other measures including, without limitation, requiring vehicle tags or decals and installing access gates with security cards or access codes. Landlord may impose reasonable and customary charges on Tenant and other Occupants for security cards and/or vehicle tags or decals.
            </p>
            <p>
                No vehicles other than Registered Vehicles may be parked in the parking area by Tenant, any other Occupant, or any of their guests. If Tenant replaces any of the Registered Vehicles, Tenant must notify Landlord of that replacement and provide Landlord with the new identification information (as set forth above) for the replacement vehicle prior to parking that vehicle in the parking area.
            </p>
            <h3>PARKING RENT</h3>
            <p>
                Tenant may park in areas designated by Landlord on Building grounds (<b>Parking Area</b>) and will pay parking rent of $<CustomText field='parkingRent' /> total per month (<b>Parking Rent</b>) for <b><CustomText field='carCount' /></b> car(s).
            </p>
            <p>
                Tenant is responsible for paying <b>(Parking Rent)</b> for use of parking on the Building grounds on the <b>1st</b> day of each month (<b>Monthly Rent Due Date</b>)
            </p>
            <h3>PRORATED PARKING RENT</h3>
            <p>
                $<CustomText field='proratedParkingRent' />  Prorated Parking Rent for partial first month of the Term due at Start Date will be paid to Landlord.
            </p>
            <p>
                Calculation of prorated Parking Rent: $<CustomText field='proratedParkingRentCalculation' />
            </p>
            <h3>PARKING TERM</h3>
            <p>
                The Tenant's parking rights as described in this addendum take effect on the Start Date as defined in the Lease this document is attached to. The parking lease operates on a month-to-month basis with parking rent being paid at the same time as Monthly Rent (on the <b>1st</b> day of the month).
            </p>
            <h3>
                MANNER OF PAYMENT
            </h3>
                All Parking Rent payable to Landlord must be paid using one of the manners of payment outlined in Section 1.4.3. of the Lease.
            <h3>SURRENDER</h3>
                <p>
                    This agreement automatically renews until either the Tenant or Landlord terminate the renewal of this agreement  with 21 day(s) written notice to other party.
                </p>
            <h3>
                NATURE OF PARKING RIGHTS
            </h3>
            <p>
                Tenant has the right to park only in the following reserved space(s): space 2 (<b>Tenant Spaces</b>). Tenant may not park in any spaces in the parking area other than the Tenant Spaces. No other tenant has the right to park in the Tenant Spaces.
            </p>
            <h3>
                PARKING RULES AND REGULATIONS
            </h3>
            <p>
                In addition to the restrictions described above, the following motor vehicle rules apply to Tenant and any other tenant
                whose Lease includes parking rights:
            </p>
            <ol>
                <li>The parking and traffic regulations posted on any private streets, roads, or drives must be obeyed.</li>
                <li>The parking area will be used only to park motor vehicles and for loading or unloading of motor vehicles.</li>
                <li>All ordinances regarding fire lanes must be obeyed. Any vehicle parked outside the parking area, parked in a fire lane, blocking a fire hydrant, refuse container, another vehicle, sidewalk, or lawn, or otherwise illegally or improperly parked may be towed by Landlord without notice at the vehicle owner's expense.</li>
                <li>Only operable passenger vehicles (including pick-up trucks) that are under 190 inches in length and can reasonably fit in a designated parking space may utilize the parking area. Commercial vehicles, recreational vehicles, boats or trailers, or other oversized vehicles may not be parked in the parking area.</li>
                <li>Landlord may remove any vehicle at the owner's expense if it reasonably appears to Landlord that the vehicle is abandoned or inoperable, the vehicle does not display an inspection sticker and/or license plates, or the inspection and/or registration is expired.</li>
                <li>Repairs to vehicles are prohibited in the parking area or on Building grounds, except for emergency repairs.</li>
                <li>Vehicles may be washed only in designated areas. If there is no designated area, then washing vehicles is not allowed on the grounds of the Building.</li>
                <li>Tenant's use of the parking spaces and parking area are at Tenant's own risk. Tenant acknowledges that Landlord does not provide security for the parking area and makes no representations concerning the security of the parking area. Landlord will not be liable or responsible for the damage to, or theft of, any vehicle or theft of any property from any vehicle.</li>
            </ol>
            <p>
                The violation of any restriction, rule, or regulation contained in this Parking Addendum will constitute a Default by Tenant under the Lease.
            </p>
        </div>
        <SigningPage addendumName="Parking Addendum" />
        <div>
            <h2>Rules Addendum</h2>
            <p>
                This Rules Addendum is attached to and made a part of the lease between (<b>Landlord</b>) and (<b>Tenant</b>) for the Property dated as of the date hereof (<b>Lease</b>). All capitalized terms used Addendum have the meanings given such terms in
                the Lease.
            </p>
            <h3>ACTIONS OF RESIDENTS</h3>
            <ul>
                <li>
                    The Tenant will dispose of trash only in designated areas.
                </li>
                <li>
                    The Tenant will promptly report any repair or maintenance problems to the Landlord or Managing Agent (if any).
                </li>
                <li>
                    The Tenant will not engage in, or permit, the use or sale of marijuana, or products containing marijuana or THC, on the property or on its grounds.
                </li>
            </ul>
            <h3>KEYS</h3>
            <ul>
                <li>
                    The Tenant will not make copies of any keys provided by the Landlord.
                </li>
            </ul>
            <h3>USE OF PREMISES AND COMMON AREAS</h3>
            <ul>
                <li>
                    Tenant may not fasten anything to the fixtures, appliances, or to the interior or exterior of the property.
                </li>
                <li>
                    Any balcony or porch included in Property, or adjacent to Property, may not be altered by Tenant or used to
                    store their personal belongings.
                </li>
                <li>
                    Any common area, laundry room, hallway, or entry way will not be used by the Tenant to store personal property. The Landlord reserves the right to immediately remove and dispose of any property left in common areas.
                </li>
                <li>
                    No laundry or other items will be hung from any window, balcony, or porch.
                </li>
                <li>
                    Tenant may not bring anything onto the property or grounds which could increase the risk of fire (e.g., flammable chemicals).
                </li>
                <li>
                    Tenant won't place any sign, advertisement, or notice so that it's visible outside the property.
                </li>
                <li>
                    Charging electric scooters is prohibited on the property or grounds.
                </li>
                <li>
                    Tenant won't add or change any locks without prior written consent of Landlord.
                </li>
                <li>
                    Waterbeds and other water furniture are prohibited. Also, unusually heavy items like pianos and safes are only
                    allowed if Landlord agrees that the weight is reasonable for the property's floor.
                </li>
            </ul>
            <h3>OTHERS</h3>
            <ul>
                <li>
                    Tenants may not store personal items on the property grounds.
                </li>
                <li>
                    The patio furniture, laundry room, washer and dryer, and BBQ are shared with other tenants on a first come first serve basis.
                </li>
            </ul>
        </div>
        <SigningPage addendumName="Rules Addendum" />
        <h2>Lead Based Paint Hazard Disclosure</h2>
        <h3>LEAD WARNING STATEMENT</h3>
        <p>
        Housing built before 1978 may contain lead-based paint. Lead from paint, paint chips, and dust can pose health hazards 
        if not managed properly. Lead exposure is especially harmful to young children and pregnant women. Before renting pre
        1978 housing, lessors must disclose the presence of known lead-based paint and/or lead-based paint hazards in the 
        dwelling. Lessees must also receive a federally approved pamphlet on lead poisoning prevention.
        </p>
        <h3>LANDLORD'S DISCLOSURES</h3>
        <p>
        Landlord has no knowledge of lead-based paint and/or lead-based paint hazards in the housing.
        Landlord has no records and reports pertaining to lead-based paint and/or lead-based paint hazards in the housing.
        </p>
        <h3>TENANT'S ACKNOWLEDGEMENTS</h3>
        <p>
        By signing below, Tenant acknowledges receipt of copies of all information listed above. In addition, by signing below, 
        Tenant acknowledges receipt of the pamphlet Protect Your Family from Lead in Your Home, a copy of which is attached 
        to this Lease.
        </p>
        <h3>CERTIFICATE OF ACCURACY</h3>
        <SigningPage addendumName="Lead Based Paint Hazard Disclosure" customText={<p>
            IN WITNESS WHEREOF, the following parties have reviewed the information above and certify, to the best of their 
            knowledge, that the information they have provided is true and accurate
        </p>} />
        <h2>Fire Safety Addendum</h2>
        <p>
            The Washington Residential Landlord-Tenant Act requires a landlord to notify all tenants that the property is equipped with a smoke detection device, of tenant’s responsibility to maintain the smoke detection device in proper operating condition, and of penalties for tenant’s failure to comply with their maintenance responsibility. The Act further requires a landlord to notify tenants in a multifamily residence of the additional fire safety measures identified in this notice. Landlord has installed one or more operational smoke detectors in the Property. The smoke detectors are either hard wired or battery operated. Tenant will regularly (not less often than once per month) test the smoke detectors, and, if the smoke detectors are battery operated, Tenant will replace the batteries every 6 months, or more often as needed, and otherwise maintain the smoke detectors as specified by the manufacturer. Tenant will not disable any smoke detector. Tenant must report to Landlord any failure of a smoke detector to function properly. Failure to maintain the smoke detectors is punishable by a fine of up to $200. Failure to maintain the smoke detectors is also a violation of the Lease.
            The building does have a fire sprinkler system. <br />
            The building does not have a fire alarm system. <br />
            The smoking policy for the Building has been provided to Tenant. <br />
            The Building does not have an emergency notification plan for its occupants. <br />
            The Building does not have an emergency relocation plan for its occupants. <br />
            The Building does not have an emergency evacuation plan for its occupants.
        </p>
        <SigningPage addendumName="Fire Addendum" customText={<p>
            IN WITNESS WHEREOF, Tenant and Landlord have executed this Addendum as of the date of the last signature below.
        </p>} />
        <h2>Mold Addendum</h2>
        <p>
            TENANT'S ACKNOWLEDGEMENT
        </p>
        <SigningPage addendumName="Mold Addendum" customText={<p>
            By signing below, Tenant acknowledges receipt of the pamphlet entitled “A Brief Guide to Mold, Moisture, and Your 
            Home”, a copy of which is attached to this Lease.
        </p>} />
        <h2>Seattle Renters Handbook Addendum</h2>
        <p>
            TENANT'S ACKNOWLEDGEMENT
        </p>
        <p>
            By signing below, Tenant acknowledges receipt of the pamphlet entitled “Renting in Seattle RENTER'S HANDBOOK”, a copy of which is attached to this Lease.
        </p>
        <SigningPage addendumName="Seattle Addendum" customText={''} />
        <CustomOptional name='renewalRateGuarantee'>
            <h2>Renewal Rate Guarantee Addendum</h2>
            <p>
                    This Renewal Rate Guarantee Addendum is attached to and made a part of the lease between (<b>Landlord</b>) and (<b>Tenant</b>) for the Property dated as of the date hereof (<b>Lease</b>). All capitalized terms used Addendum have the meanings given such terms in
                    the Lease.
                </p>
            <p>
                Landlord guarantees that any lease offered after the termination of this Lease to Tenant will not increase the Monthly Rent by more than $60 dollars, and will not increase Parking Rent for a period of 12 months.
            </p>
            <SigningPage addendumName="Renewal Rate Guarantee Addendum" customText={''} />
        </CustomOptional>
    </>;
}