// src/app/recruitment-process/recruitmentData.ts
export interface ProcessStepData {
  id: number;
  text: string;
  // We'll determine positioning via CSS classes or inline styles based on index/ID
}

export const recruitmentSteps: ProcessStepData[] = [
  { id: 1, text: "Make A Job Offer" },
  { id: 2, text: "Identify Skills Gaps And Hiring Needs" },
  { id: 3, text: "Formulate Job Descriptions Advertise Job Openings" },
  { id: 4, text: "Review Job Applications Make A Shortlist" },
  { id: 5, text: "Interview Potential Candidates" },
  { id: 6, text: "Select The Most Suitable Candidates" },
];

export const manpowerLevels = [
  { level: "Junior-level hiring", examples: "Freshers, engineers, executives, Intern etc.", icons: "🎓💼" },
  { level: "Mid-level hiring", examples: "Tech Lead, Team Lead, Architects, etc.", icons: "🚀🏗️" },
  { level: "Senior-level hiring", examples: "Sr. Engineers, Sr. Executives, etc.", icons: "🛠️👔" },
  { level: "Top-level management hiring", examples: "VP, GM, CTO, Project Managers, GM, AVP, Country Head, Technology Head, Engineering Manager, Staff Engineer, etc.", icons: "🌟👨‍💼👩‍💼" },
];

export const serviceAreas = {
  domestic: {
    title: "Pan India (Domestic)",
    locations: "Bangalore, Mumbai, Pune, Noida, Delhi, Chennai, Hyderabad, etc.",
    icons: "🇮🇳🏙️"
  },
  global: {
    title: "Globally",
    locations: "UK, USA, Japan, Malaysia, Gulf countries, and many global locations.",
    icons: "🌍✈️"
  }
};