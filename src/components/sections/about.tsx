"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, BarChart3, Brain, Users } from "lucide-react";

const HIGHLIGHTS = [
  {
    title: "Problem Solver",
    description: "Transforming complex problems into practical, efficient solutions through logical thinking and clean code.",
    icon: Lightbulb,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    title: "Data Analytics Enthusiast",
    description: "Extracting actionable insights from large datasets to drive data-driven decision making.",
    icon: BarChart3,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Machine Learning Developer",
    description: "Building predictive models and intelligent systems using modern ML frameworks.",
    icon: Brain,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "Technical Community Leader",
    description: "Organizing events, conducting workshops, and mentoring peers in technology.",
    icon: Users,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-outfit mb-4"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6 text-lg text-muted-foreground leading-relaxed text-pretty"
          >
            <p>
              I am a B.Tech Computer Science Engineering graduate from Kerala, India, with a strong interest in <strong className="text-foreground font-medium">Software Development, Data Analytics, Artificial Intelligence, and Machine Learning.</strong>
            </p>
            <p>
              I enjoy transforming complex problems into practical solutions through technology. My experience includes developing AI-powered applications, fraud detection systems, analytics dashboards, and leading technical communities.
            </p>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {HIGHLIGHTS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-border bg-card/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group">
                  <CardContent className="p-6 space-y-4">
                    <div className={`w-12 h-12 rounded-lg ${item.bg} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
