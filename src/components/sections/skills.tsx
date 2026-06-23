"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Terminal,
  Database,
  Code2,
  BarChart3,
  Table,
  FileSpreadsheet,
  Brain,
  Cpu,
  MessageSquare,
  Eye,
  Layout,
  Server,
  Flame,
  GitPullRequest,
  Layers,
  BookOpen
} from "lucide-react";

// Premium Brand Custom Icons (SVG)
const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <ellipse cx="50" cy="50" rx="8" ry="20" stroke="currentColor" strokeWidth="2" transform="rotate(0 50 50)" />
    <ellipse cx="50" cy="50" rx="8" ry="20" stroke="currentColor" strokeWidth="2" transform="rotate(60 50 50)" />
    <ellipse cx="50" cy="50" rx="8" ry="20" stroke="currentColor" strokeWidth="2" transform="rotate(120 50 50)" />
    <circle cx="50" cy="50" r="3" fill="currentColor" />
  </svg>
);

const NextjsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M90 165c41.421 0 75-33.579 75-75S131.421 15 90 15 15 48.579 15 90s33.579 75 75 75Zm26.177-94.883h12.5v49.766h-12.5V70.117Zm-20.916 27.653 17.51-27.653h-10.457L85.22 93.303H85.11V70.117H72.617v49.766H85.11v-22.113l10.151 14.863 12.5 7.25-12.5-12.128Z" fill="currentColor" />
  </svg>
);

const IconWrapper = ({ icon, className }: { icon: string; className?: string }) => {
  switch (icon) {
    case "react":
      return <ReactIcon className={className} />;
    case "nextjs":
      return <NextjsIcon className={className} />;
    case "terminal":
      return <Terminal className={className} />;
    case "database":
      return <Database className={className} />;
    case "code":
      return <Code2 className={className} />;
    case "bar-chart":
      return <BarChart3 className={className} />;
    case "table":
      return <Table className={className} />;
    case "file-spreadsheet":
      return <FileSpreadsheet className={className} />;
    case "brain":
      return <Brain className={className} />;
    case "cpu":
      return <Cpu className={className} />;
    case "message-square":
      return <MessageSquare className={className} />;
    case "eye":
      return <Eye className={className} />;
    case "layout":
      return <Layout className={className} />;
    case "server":
      return <Server className={className} />;
    case "flame":
      return <Flame className={className} />;
    case "git-pull-request":
      return <GitPullRequest className={className} />;
    case "layers":
      return <Layers className={className} />;
    case "book-open":
      return <BookOpen className={className} />;
    default:
      return <Code2 className={className} />;
  }
};

interface Skill {
  name: string;
  level: "Expert" | "Proficient" | "Intermediate";
  category: string;
  description: string;
  glowStyle: string;
  icon: string;
}

const SKILL_DATA: Skill[] = [
  // Programming Languages
  {
    name: "Python",
    level: "Expert",
    category: "Languages",
    description: "Data analysis, Machine Learning, Django/Flask backends, scripting.",
    glowStyle: "group-hover:shadow-[0_0_20px_rgba(234,179,8,0.15)] group-hover:border-yellow-500/50",
    icon: "terminal"
  },
  {
    name: "SQL",
    level: "Expert",
    category: "Languages",
    description: "Complex queries, database optimizations, joins, schema design.",
    glowStyle: "group-hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] group-hover:border-orange-500/50",
    icon: "database"
  },
  {
    name: "JavaScript",
    level: "Proficient",
    category: "Languages",
    description: "Interactive client-side web application UI/UX logic, ES6+ features.",
    glowStyle: "group-hover:shadow-[0_0_20px_rgba(250,204,21,0.15)] group-hover:border-yellow-400/50",
    icon: "code"
  },
  {
    name: "C++",
    level: "Proficient",
    category: "Languages",
    description: "Data structures, algorithms, object-oriented programming.",
    glowStyle: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] group-hover:border-blue-500/50",
    icon: "terminal"
  },
  {
    name: "C",
    level: "Proficient",
    category: "Languages",
    description: "System programming, clean structure, logic foundation.",
    glowStyle: "group-hover:shadow-[0_0_20px_rgba(148,163,184,0.15)] group-hover:border-slate-500/50",
    icon: "terminal"
  },

  // Data Analytics
  {
    name: "Power BI",
    level: "Expert",
    category: "Data Analytics",
    description: "Interactive data visualizations, dashboards, DAX queries, reports.",
    glowStyle: "group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] group-hover:border-amber-500/50",
    icon: "bar-chart"
  },
  {
    name: "Pandas & NumPy",
    level: "Expert",
    category: "Data Analytics",
    description: "Data manipulation, dataset cleaning, numerical processing, ETL.",
    glowStyle: "group-hover:shadow-[0_0_20px_rgba(20,184,166,0.15)] group-hover:border-teal-500/50",
    icon: "table"
  },
  {
    name: "Excel",
    level: "Expert",
    category: "Data Analytics",
    description: "Advanced functions (VLOOKUP, XLOOKUP), pivot tables, data modeling.",
    glowStyle: "group-hover:shadow-[0_0_20px_rgba(22,163,74,0.15)] group-hover:border-green-600/50",
    icon: "file-spreadsheet"
  },
  {
    name: "Exploratory Data Analysis",
    level: "Expert",
    category: "Data Analytics",
    description: "Finding trends, anomaly detection, statistical hypothesis testing.",
    glowStyle: "group-hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] group-hover:border-indigo-500/50",
    icon: "bar-chart"
  },

  // Machine Learning
  {
    name: "Scikit-Learn",
    level: "Expert",
    category: "Machine Learning",
    description: "Regression, classification, clustering, model pipelining & evaluation.",
    glowStyle: "group-hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] group-hover:border-orange-400/50",
    icon: "brain"
  },
  {
    name: "Predictive Modeling",
    level: "Expert",
    category: "Machine Learning",
    description: "End-to-end model creation, fine-tuning hyperparameters.",
    glowStyle: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] group-hover:border-blue-500/50",
    icon: "cpu"
  },
  {
    name: "NLP",
    level: "Proficient",
    category: "Machine Learning",
    description: "Natural Language Processing, text preprocessing, tokenization, semantic search.",
    glowStyle: "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] group-hover:border-purple-500/50",
    icon: "message-square"
  },
  {
    name: "OpenCV",
    level: "Proficient",
    category: "Machine Learning",
    description: "Computer vision, image recognition, image manipulation techniques.",
    glowStyle: "group-hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] group-hover:border-red-500/50",
    icon: "eye"
  },
  {
    name: "Streamlit",
    level: "Expert",
    category: "Machine Learning",
    description: "Rapid development & deployment of interactive ML/data dashboards.",
    glowStyle: "group-hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] group-hover:border-red-500/50",
    icon: "layout"
  },

  // Web Development
  {
    name: "React",
    level: "Proficient",
    category: "Web Development",
    description: "Reusable custom components, modern hooks, interactive UI interfaces.",
    glowStyle: "group-hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] group-hover:border-cyan-500/50",
    icon: "react"
  },
  {
    name: "Next.js",
    level: "Proficient",
    category: "Web Development",
    description: "SSR, SSG, file-system based App Router, optimized performance.",
    glowStyle: "group-hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] group-hover:border-neutral-400/50",
    icon: "nextjs"
  },
  {
    name: "Django",
    level: "Proficient",
    category: "Web Development",
    description: "Python-based web APIs, admin panel customization, ORM integration.",
    glowStyle: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] group-hover:border-emerald-600/50",
    icon: "server"
  },
  {
    name: "Flask",
    level: "Proficient",
    category: "Web Development",
    description: "Microservices backend structure, RESTful API integrations.",
    glowStyle: "group-hover:shadow-[0_0_20px_rgba(100,116,139,0.15)] group-hover:border-slate-400/50",
    icon: "server"
  },
  {
    name: "Firebase",
    level: "Proficient",
    category: "Web Development",
    description: "Real-time databases, authentication, file storage integration.",
    glowStyle: "group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] group-hover:border-amber-500/50",
    icon: "flame"
  },

  // Tools & DevOps
  {
    name: "Git & GitHub",
    level: "Expert",
    category: "Tools & DevOps",
    description: "Collaborative development, branching workflows, pull request reviews.",
    glowStyle: "group-hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] group-hover:border-orange-600/50",
    icon: "git-pull-request"
  },
  {
    name: "VS Code & Jupyter",
    level: "Expert",
    category: "Tools & DevOps",
    description: "Interactive data analysis workflow, debugging environments.",
    glowStyle: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] group-hover:border-blue-500/50",
    icon: "book-open"
  }
];

const CATEGORIES = ["All", "Languages", "Data Analytics", "Machine Learning", "Web Development", "Tools & DevOps"];

const ADDITIONAL_TOOLS = [
  "Google Workspace",
  "Figma",
  "GitHub Actions",
  "Tableau Public",
  "Anaconda",
  "Colab",
  "Markdown"
];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = SKILL_DATA.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-outfit mb-4"
          >
            Skills & Expertise
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-10"
          />

          {/* Interactive Category Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 max-w-4xl"
          >
            {CATEGORIES.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full transition-all duration-300 px-5 text-sm h-10 relative overflow-hidden group ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-lg shadow-blue-500/10"
                    : "hover:bg-accent/50 border-border"
                }`}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="group h-full"
              >
                <Card className={`h-full border border-border/50 bg-card/40 backdrop-blur-md transition-all duration-300 ${skill.glowStyle} flex flex-col relative overflow-hidden`}>
                  {/* Subtle radial shine on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <CardContent className="p-5 flex gap-4 relative z-10 flex-1">
                    <div className="p-3 h-12 w-12 rounded-2xl bg-muted/40 border border-border group-hover:border-primary/50 text-foreground group-hover:text-primary transition-all duration-300 flex items-center justify-center flex-shrink-0">
                      <IconWrapper icon={skill.icon} className="w-6 h-6" />
                    </div>

                    <div className="space-y-2 flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-bold text-foreground group-hover:text-primary transition-colors text-base truncate font-outfit">
                          {skill.name}
                        </h4>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border flex-shrink-0 cursor-default ${
                          skill.level === "Expert"
                            ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                            : skill.level === "Proficient"
                            ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
                            : "bg-slate-500/10 text-slate-400 border-slate-500/20"
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                        {skill.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Additional Tools Tag Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-card/20 backdrop-blur-sm border border-border/40 rounded-3xl p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-lg font-bold mb-5 text-foreground font-outfit">
            Additional Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {ADDITIONAL_TOOLS.map((tool, idx) => (
              <motion.span
                key={tool}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 rounded-xl bg-muted/40 border border-border text-foreground text-xs font-medium hover:border-primary/50 hover:text-primary transition-all cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
