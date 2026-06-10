"use client";

import { motion } from "framer-motion";
import { Award, Code, Database, Layout, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CERTIFICATIONS = [
  {
    title: "Master Class: Data Analytics Using Python",
    issuer: "ScaleUp Conclave",
  },
  {
    title: "AI Bootcamp",
    issuer: "Upcode Software Labs",
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
  },
];

const SERVICES = [
  {
    title: "Data Analytics Dashboards",
    description: "Business intelligence dashboards using Power BI and Excel to drive decisions.",
    icon: Database,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Machine Learning Solutions",
    description: "Predictive analytics and intelligent automation systems to optimize operations.",
    icon: Sparkles,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "Web Application Development",
    description: "Responsive and scalable modern web applications using Next.js and React.",
    icon: Layout,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
  {
    title: "AI-Powered Applications",
    description: "LLM, RAG, NLP, and intelligent assistant development for complex tasks.",
    icon: Code,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Certifications Row */}
        <div className="mb-24">
          <div className="flex flex-col items-center mb-12 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold font-outfit mb-4"
            >
              Certifications
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full border-border bg-card/50 backdrop-blur hover:border-purple-500/50 transition-all group cursor-default">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground leading-tight mb-1">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services Row */}
        <div>
          <div className="flex flex-col items-center mb-12 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold font-outfit mb-4"
            >
              Services I Offer
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full border-border bg-card/50 backdrop-blur hover:shadow-lg hover:shadow-primary/5 transition-all group overflow-hidden">
                  <CardContent className="p-8">
                    <div className={`w-14 h-14 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <service.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground font-outfit mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
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
