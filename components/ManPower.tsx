import React from 'react';
import styles from '../app/ManPower.module.css';
import { manpowerLevels, serviceAreas } from '../app/recruitment-process/recruitmentData';

const ManPower: React.FC = () => {
    return (
        // Add this wrapper div
        <div className={styles.manpowerContainer}> 
            <section className={styles.section}>
                <h2 className={styles.sectionHeading}>Level of Manpower/Hiring Services:</h2>
                <ul className={styles.list}>
                    {manpowerLevels.map((item, index) => (
                        <li key={index} className={styles.listItem}>
                            <strong>
                                {item.level} {item.icons}
                            </strong>{' '}
                            → {item.examples}
                        </li>
                    ))}
                </ul>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionHeading}>Our Service Area:</h2>
                <div className={styles.serviceAreaItem}>
                    <h3>
                        {serviceAreas.domestic.title} {serviceAreas.domestic.icons}
                    </h3>
                    <p>{serviceAreas.domestic.locations}</p>
                </div>
                <div className={styles.serviceAreaItem}>
                    <h3>
                        {serviceAreas.global.title} {serviceAreas.global.icons}
                    </h3>
                    <p>{serviceAreas.global.locations}</p>
                </div>
            </section>
        </div>
    );
};

export default ManPower;