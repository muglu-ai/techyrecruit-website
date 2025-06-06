// src/components/RecruitmentDiagram.tsx
'use client';
import React from 'react';
import styles from '../app/RecruitmentDiagram.module.css'; // We'll create this
import { recruitmentSteps, ProcessStepData } from '../app/recruitment-process/recruitmentData'; // Adjust path if needed

const RecruitmentDiagram: React.FC = () => {
  return (
    <div className={styles.diagramContainer}>
      <div className={`${styles.centerCircle} ${styles.processItem}`}>
        Recruitment Process
      </div>
      {recruitmentSteps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className={`${styles.processStep} ${styles[`step${step.id}`]} ${styles.processItem}`}>
            {step.text}
          </div>
          {/* Arrow from center to step - simplified for this example */}
          {/* <div className={`${styles.arrow} ${styles[`arrowToStep${step.id}`]}`}></div> */}
          {/* Arrow from step to next step (or back to center for last step) */}
          <div className={`${styles.arrowFlow} ${styles[`arrowFlow${step.id}`]}`}>
            <div className={styles.arrowHead}></div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default RecruitmentDiagram;