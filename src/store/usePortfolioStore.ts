import { create } from "zustand";
import { Project, Experience, SkillCategory, SiteConfig } from "@/types";

interface PortfolioState {
  siteConfig: SiteConfig;
  projects: Project[];
  experiences: Experience[];
  skills: SkillCategory[];
  isLoading: boolean;
  setSiteConfig: (config: Partial<SiteConfig>) => void;
  setProjects: (projects: Project[]) => void;
  addProject: (project: Project) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  setExperiences: (experiences: Experience[]) => void;
}

const initialSiteConfig: SiteConfig = {
  name: "Sk Akram Ahmed",
  title: "Senior Full Stack Engineer & Software Architect",
  bio: "I'm a passionate Full Stack Developer with a strong interest in building modern, scalable, and high-performance web applications.",
  email: "shaikakram4684@gmail.com",
  location: "Hyderabad",
  availableForHire: true,
  socials: [
    { platform: "GitHub", url: "https://github.com", icon: "github" },
    { platform: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { platform: "Twitter", url: "https://twitter.com", icon: "twitter" },
  ],
};

export const usePortfolioStore = create<PortfolioState>((set) => ({
  siteConfig: initialSiteConfig,
  projects: [],
  experiences: [],
  skills: [],
  isLoading: false,
  setSiteConfig: (config) =>
    set((state) => ({
      siteConfig: { ...state.siteConfig, ...config },
    })),
  setProjects: (projects) => set({ projects }),
  addProject: (project) =>
    set((state) => ({ projects: [project, ...state.projects] })),
  updateProject: (id, updatedProject) =>
    set((state) => ({
      projects: state.projects.map((p) =>
        p.id === id ? { ...p, ...updatedProject } : p
      ),
    })),
  deleteProject: (id) =>
    set((state) => ({
      projects: state.projects.filter((p) => p.id !== id),
    })),
  setExperiences: (experiences) => set({ experiences }),
}));
