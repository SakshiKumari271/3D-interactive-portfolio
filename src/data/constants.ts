export enum SkillNames {
  PYTHON = "python",
  PANDAS = "pandas",
  NUMPY = "numpy",
  ML = "ml",
  OPENCV = "opencv",
  FLASK = "flask",
  GIT = "git",
  GITHUB = "github",
  LINUX = "linux",
  OS = "os",
  POSTGRES = "postgres",
  DOCKER = "docker",
  VSCODE = "vscode",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: {
    id: 1, name: "python", label: "Core Python",
    shortDescription: "Mastering File I/O (CSV/JSON) and modular logic. 🐍🔥",
    color: "#3776ab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.PANDAS]: {
    id: 2, name: "pandas", label: "Pandas",
    shortDescription: "Data cleaning and transformation for complex datasets. 🐼📊",
    color: "#150458", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  [SkillNames.NUMPY]: {
    id: 3, name: "numpy", label: "NumPy",
    shortDescription: "High-performance numerical computing and array logic. 🔢⚡",
    color: "#013243", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  [SkillNames.ML]: {
    id: 4, name: "ml", label: "Machine Learning",
    shortDescription: "Certified by IIT Madras. Turning data into predictive AI insights. 🤖📈",
    color: "#cb171e", icon: "https://www.svgrepo.com/show/306385/machine-learning.svg",
  },
  [SkillNames.OPENCV]: {
    id: 5, name: "opencv", label: "OpenCV",
    shortDescription: "Computer Vision expert for real-time activity detection. 👁️📸",
    color: "#5c3ee8", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },
  [SkillNames.FLASK]: {
    id: 6, name: "flask", label: "Flask",
    shortDescription: "Building lightweight backends for Python-based tools. 🌶️🌐",
    color: "#ffffff", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  },
  [SkillNames.OS]: {
    id: 7, name: "os", label: "Operating Systems",
    shortDescription: "Certified by IIT Kharagpur. Deep knowledge of Process Mgmt. 💻⚙️",
    color: "#f0db4f", icon: "https://www.svgrepo.com/show/354151/os.svg",
  },
  [SkillNames.GIT]: {
    id: 8, name: "git", label: "Git Workflow",
    shortDescription: "Professional branching, merging, and clean commit histories. 🕵️‍♂️🔄",
    color: "#f1502f", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 9, name: "github", label: "GitHub",
    shortDescription: "Managing repositories and open-source collaboration. 🐙",
    color: "#ffffff", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 10, name: "postgres", label: "PostgreSQL",
    shortDescription: "Relational database management for structured backend data. 🐘💅",
    color: "#336791", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.LINUX]: {
    id: 11, name: "linux", label: "Linux",
    shortDescription: "Comfortable with terminal automation and server environments. 🐧🔓",
    color: "#ffffff", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 12, name: "docker", label: "Docker",
    shortDescription: "Containerizing Python apps for consistent deployment. 🐳📦",
    color: "#2496ed", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.VSCODE]: {
    id: 13, name: "vscode", label: "VS Code",
    shortDescription: "My go-to IDE for writing clean, modular Python and AI code. 💻✨",
    color: "#007acc", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
};

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness.",
    "Brace yourself! Light mode is about to shine bright.",
    "Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from my heart and eyes.",
    "Welcome back to the shadows.",
    "Dark mode on! Finally, true sophistication.",
  ],
};