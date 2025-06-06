// components/JobCategoriesGrid.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
    Laptop, 
    ShieldCheck, 
    Cloud, 
    BarChart3, 
    BrainCircuit, 
    Factory, 
    Globe, 
    Link as LinkIcon, 
    Smartphone, 
    Briefcase, 
    ShoppingCart, 
    TestTube2,
    CheckCircle
} from 'lucide-react';

// TypeScript Type for a single category
type Category = {
  icon: React.ElementType;
  title: string;
  jobs: string[];
  color: string;
};

// Data for all job categories
const jobCategories: Category[] = [
  {
    icon: Laptop,
    title: "Software Development",
    jobs: ["Full-stack developers", "Front-end/back-end", "Software architects", "DevOps engineers"],
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    jobs: ["Ethical hackers", "Cybersecurity analysts", "Network security", "Info security managers"],
    color: "from-red-500 to-orange-400"
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    jobs: ["Cloud architects", "Cloud engineers", "DevOps specialists", "Cloud security experts"],
    color: "from-sky-400 to-blue-300"
  },
  {
    icon: BarChart3,
    title: "Data Science & Analytics",
    jobs: ["Data scientists", "Data analysts", "ML engineers", "Big data engineers"],
    color: "from-green-500 to-lime-400"
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    jobs: ["AI/ML engineers", "NLP experts", "Robotics engineers", "AI researchers"],
    color: "from-purple-500 to-indigo-400"
  },
  {
    icon: TestTube2,
    title: "Quality Assurance (QA)",
    jobs: ["QA engineers", "Automated testing", "Manual testers", "Testing consultants"],
    color: "from-teal-500 to-emerald-400"
  },
];

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Animation variants for each card
const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

// The card component
const CategoryCard = ({ category }: { category: Category }) => {
  const Icon = category.icon;
  return (
    <motion.div
      variants={cardVariants}
      className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col h-full
           transform transition-all duration-300 hover:-translate-y-2 
           hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-400"
    >
      <div className={`p-3 w-min rounded-lg bg-gradient-to-br ${category.color} mb-4`}>
      <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{category.title}</h3>
      <ul className="space-y-2 text-slate-500 flex-grow">
      {category.jobs.map((job) => (
        <li key={job} className="flex items-center">
        <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
        <span>{job}</span>
        </li>
      ))}
      </ul>
      {/* <button className="mt-6 w-full text-center py-2 rounded-lg bg-slate-100 text-slate-700 font-semibold
               hover:bg-purple-600 hover:text-white transition-colors duration-200">
      Explore Roles
      </button> */}
    </motion.div>
  );
};

// The main grid component
export const JobCategoriesGrid = () => {
  return (
    <section className="bg-white text-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Find Your Niche in Tech
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Explore the most in-demand roles across various fields of technology, from software development to artificial intelligence.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {jobCategories.map((category) => (
            <CategoryCard key={category.title} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default JobCategoriesGrid;