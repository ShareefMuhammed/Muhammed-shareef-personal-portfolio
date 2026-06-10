"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "C++", level: 80 },
      { name: "C", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "Data Analytics",
    skills: [
      { name: "Excel", level: 95 },
      { name: "Power BI", level: 85 },
      { name: "Pandas & NumPy", level: 90 },
      { name: "Data Cleaning", level: 90 },
      { name: "EDA", level: 85 },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "Scikit-Learn", level: 80 },
      { name: "Regression & Classification", level: 85 },
      { name: "Clustering", level: 80 },
      { name: "Predictive Modeling", level: 85 },
      { name: "NLP", level: 70 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React", level: 75 },
      { name: "Next.js", level: 70 },
      { name: "Django", level: 80 },
      { name: "Flask", level: 85 },
      { name: "Firebase", level: 75 },
    ],
  },
];

const TOOLS = ["Git", "GitHub", "Streamlit", "OpenCV", "Google Workspace", "VS Code", "Jupyter", "Figma"];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full border-border bg-card/50 backdrop-blur hover:border-purple-500/50 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-foreground font-outfit">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, index) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-muted-foreground">{skill.name}</span>
                          <span className="text-sm font-medium text-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-6 text-foreground font-outfit">Tools & Platforms</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {TOOLS.map((tool, idx) => (
              <motion.div
                key={tool}
                whileHover={{ scale: 1.05, y: -5 }}
                className="px-6 py-3 rounded-full bg-muted/50 border border-border text-foreground text-sm font-medium hover:border-blue-500 hover:text-blue-500 transition-all cursor-default"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
