// src/components/ResponsiveRecruitmentFlow.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import RecruitmentDiagram from './RecruitmentDiagram'; // Assuming RecruitmentDiagram.tsx is in the same components folder
import styles from '../app/ResponsiveRecruitmentFlow.module.css'; // New CSS module for this component

interface ResponsiveRecruitmentFlowProps {
  // You can add props here if needed in the future, e.g., to pass different image paths
  mobileImagePath?: string;
  mobileImageAlt?: string;
}

const ResponsiveRecruitmentFlow: React.FC<ResponsiveRecruitmentFlowProps> = ({
  mobileImagePath = "/recruitment_flow.png", // Default path
  mobileImageAlt = "Recruitment Process Overview"
}) => {
  return (
    <div className={styles.flowContainer}>
      {/* CSS-based Diagram for larger screens */}
      <div className={styles.desktopDiagram}>
        <RecruitmentDiagram />
      </div>

      {/* Fallback image for smaller screens */}
      <div className={styles.mobileImage}>
        <Image
          src={mobileImagePath}
          alt={mobileImageAlt}
          width={600} // Intrinsic width of your mobile image
          height={400} // Intrinsic height of your mobile image
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default ResponsiveRecruitmentFlow;