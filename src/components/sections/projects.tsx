"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.2-3.8s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C6.2 1.4 5 1.8 5 1.8a5.5 5.5 0 0 0-.2 3.8 5.5 5.5 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 20a5 5 0 0 1-5-2.5"/></svg>;
import { Card, CardContent } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    id: 1,
    title: "DrugGPT – Multimodal RAG QA System",
    description: "Developed a multimodal AI-powered drug information assistant using FAISS, OCR, and Large Language Models. Implemented semantic retrieval and image-based medicine recognition to provide accurate healthcare information.",
    image: "/projects/druggpt.png",
    technologies: ["Python", "FAISS", "OCR", "LLM", "NLP"],
    category: "AI/ML",
    metrics: [],
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "Transaction Fraud Detection",
    description: "Built an end-to-end Machine Learning fraud detection solution analyzing over 100,000 transactions. Applied feature engineering and deployed the model through an interactive Streamlit application.",
    image: "/projects/fraud.png",
    technologies: ["Python", "Machine Learning", "Scikit-Learn", "Streamlit"],
    category: "AI/ML",
    metrics: ["100K+ Transactions", "Real-Time Predictions"],
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "Uber Auto Analytics Dashboard",
    description: "Designed a Power BI dashboard analyzing ride bookings, revenue trends, customer ratings, and operational KPIs. Delivered actionable business insights through advanced visualizations.",
    image: "/projects/uber.png",
    technologies: ["Power BI", "Excel", "DAX"],
    category: "Data Analytics",
    metrics: ["93K Completed Rides", "51.85M Revenue"],
    github: "#",
    live: "#"
  }
];

const CATEGORIES = ["All", "AI/ML", "Data Analytics"];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = PROJECTS.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-outfit mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8"
          />

          {/* Filter Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {CATEGORIES.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full transition-all duration-300 ${
                  activeCategory === category 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0" 
                    : "hover:bg-accent/50"
                }`}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="h-full overflow-hidden border-border bg-card/50 backdrop-blur group hover:border-blue-500/50 transition-all flex flex-col">
                  {/* Project Image */}
                  <div className="relative h-56 w-full overflow-hidden bg-muted">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                      <div className="flex gap-2">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View Source" className={cn(buttonVariants({ variant: "secondary", size: "icon" }), "rounded-full w-8 h-8")}>
                          <GithubIcon className="w-4 h-4" />
                        </a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="View Live Project" className={cn(buttonVariants({ variant: "secondary", size: "icon" }), "rounded-full w-8 h-8")}>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold font-outfit mb-2 text-foreground group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Metrics if any */}
                    {project.metrics.length > 0 && (
                      <div className="flex gap-4 mb-4 pb-4 border-b border-border/50">
                        {project.metrics.map((metric, i) => (
                          <div key={i} className="text-xs font-medium text-foreground flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            {metric}
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2.5 py-1 rounded-md bg-accent text-accent-foreground text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
