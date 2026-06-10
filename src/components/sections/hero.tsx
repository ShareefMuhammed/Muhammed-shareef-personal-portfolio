"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <p className="text-blue-500 font-medium tracking-wide">HELLO, WORLD! 👋</p>
              <h1 className="text-4xl md:text-6xl font-bold font-outfit leading-tight">
                I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Muhammed Shareef P</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                Software Engineer | Data Analyst | Machine Learning Enthusiast
              </h2>
            </div>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed text-pretty">
              B.Tech Computer Science Engineering graduate dedicated to building intelligent software solutions, data-driven applications, and AI-powered systems. Demonstrated expertise in Machine Learning, Data Analytics, Python development, and modern web technologies.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="#projects" className={cn(buttonVariants({ size: "lg" }), "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0")}>
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a href="/resume.jpg" download="Muhammed_Shareef_Resume.jpg" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-border hover:bg-accent/50")}>
                Download Resume <Download className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border mt-8">
              <div>
                <p className="text-3xl font-bold font-outfit text-foreground">4+</p>
                <p className="text-sm text-muted-foreground">Major Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold font-outfit text-foreground">10+</p>
                <p className="text-sm text-muted-foreground">Events Led</p>
              </div>
              <div>
                <p className="text-3xl font-bold font-outfit text-foreground">100K+</p>
                <p className="text-sm text-muted-foreground">Txns Analyzed</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image & Floating Badges */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 backdrop-blur-3xl animate-pulse" />
              {/* Profile Image placeholder, wait user didn't give image, I should use a generic developer illustration or initials avatar */}
              <div className="absolute inset-4 rounded-full overflow-hidden border border-border bg-card">
                 <Image src="/profile.jpg" alt="Muhammed Shareef P" fill className="object-cover" priority />
              </div>
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute top-12 -left-8 bg-card/80 backdrop-blur-md p-3 rounded-2xl border border-border shadow-lg flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
                </div>
                <span className="font-medium text-sm">Frontend</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-24 -right-12 bg-card/80 backdrop-blur-md p-3 rounded-2xl border border-border shadow-lg flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <span className="font-medium text-sm">Data Analyst</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, -8, 0] }} 
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 right-12 bg-card/80 backdrop-blur-md p-3 rounded-2xl border border-border shadow-lg flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M2 12h20"/></svg>
                </div>
                <span className="font-medium text-sm">AI/ML</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
