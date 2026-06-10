"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-outfit mb-4"
          >
            Experience & Education
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Experience */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-outfit">Experience</h3>
            </div>

            <div className="relative pl-8 border-l border-border space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-background bg-blue-500" />
                <Card className="bg-card/50 backdrop-blur border-border hover:border-blue-500/50 transition-colors">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-foreground font-outfit mb-1">Program Committee Lead</h4>
                    <p className="text-blue-500 font-medium mb-3">TACS MEA</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>Aug 2025 – Present</span>
                    </div>
                    <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside">
                      <li>Led a team of 10+ members</li>
                      <li>Organized 12+ technical and non-technical programs</li>
                      <li>Conducted workshops and coding sessions</li>
                      <li>Collaborated with faculty and industry experts</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-purple-500/10 rounded-xl text-purple-500">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-outfit">Education</h3>
            </div>

            <div className="relative pl-8 border-l border-border space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-background bg-purple-500" />
                <Card className="bg-card/50 backdrop-blur border-border hover:border-purple-500/50 transition-colors">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-foreground font-outfit mb-1">B.Tech in Computer Science and Engineering</h4>
                    <p className="text-purple-500 font-medium mb-3">MEA Engineering College, Kerala</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>September 2022 – June 2026</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Relevant coursework: Data Structures, Algorithms, Database Management, Machine Learning, and Software Engineering.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
