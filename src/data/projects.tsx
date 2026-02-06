import { SkillNames, SKILLS } from "./constants";
import React from "react";

export const PROJECTS = [
  {
    id: 1,
    title: "FinShield - Fraud Detection",
    category: "Machine Learning",
    src: "/assets/projects/fraud.png",
    live: "https://github.com/SakshiKumari271/FinShield",
    description: "ML pipeline using SMOTE to identify fraudulent transactions.",
    skills: {
      frontend: [SKILLS[SkillNames.PYTHON]],
      backend: [SKILLS[SkillNames.ML], SKILLS[SkillNames.PANDAS]]
    },
    content: (
      <div className="text-sm p-4 text-neutral-400">
        <p>Resolved data imbalance by implementing SMOTE, improving detection accuracy.</p>
      </div>
    ),
  },
  {
    id: 2,
    title: "CSV Cleaner CLI",
    category: "Core Python",
    src: "/assets/projects/csv-cleaner.png",
    live: "https://github.com/SakshiKumari271/CSV-Cleaner",
    description: "Tool to sanitize messy CSV files without external libraries.",
    skills: {
      frontend: [SKILLS[SkillNames.PYTHON]],
      backend: [SKILLS[SkillNames.GIT]]
    },
    content: (
      <div className="text-sm p-4 text-neutral-400">
        <p>Built with raw string manipulation and professional Git workflow.</p>
      </div>
    ),
  }
];