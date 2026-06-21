"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Loader2, CheckCircle2 } from "lucide-react";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.2-3.8s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C6.2 1.4 5 1.8 5 1.8a5.5 5.5 0 0 0-.2 3.8 5.5 5.5 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 20a5 5 0 0 1-5-2.5"/></svg>;
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormData = z.infer<typeof formSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const formUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdBzLIgHvMYTZM1UsWrOob7M78CGTILlt9I-Ce3X3FI64qJCg/formResponse";
      const formData = new URLSearchParams();
      formData.append("entry.1430359327", data.fullName);
      formData.append("entry.518976152", data.email);
      const combinedMessage = `Subject: ${data.subject}\n\nMessage: ${data.message}`;
      formData.append("entry.704476240", combinedMessage);

      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Failed to submit form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-outfit mb-4"
          >
            Let's Build Something Amazing Together
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4"
          />
          <p className="text-muted-foreground max-w-xl">
            Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-full bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <a href="tel:+919567209599" className="text-muted-foreground hover:text-blue-500 transition-colors">+91 95672 09599</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-full bg-purple-500/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a href="mailto:shareef2003p@gmail.com" className="text-muted-foreground hover:text-purple-500 transition-colors">shareef2003p@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-full bg-pink-500/10 text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground">Kerala, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-full bg-blue-600/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <LinkedinIcon className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/muhammedshareef-p" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-600 transition-colors">linkedin.com/in/muhammedshareef-p</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-full bg-slate-500/10 text-slate-500 group-hover:bg-slate-500 group-hover:text-white transition-colors">
                  <GithubIcon className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">GitHub</h4>
                  <a href="https://github.com/ShareefMuhammed" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-slate-500 transition-colors">github.com/ShareefMuhammed</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input 
                    id="fullName" 
                    placeholder="John Doe" 
                    autoComplete="name"
                    spellCheck="false"
                    {...register("fullName")}
                    className={errors.fullName ? "border-destructive focus-visible:ring-destructive" : "focus-visible:ring-blue-500"}
                  />
                  {errors.fullName && <p className="text-sm text-destructive" role="alert">{errors.fullName.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    inputMode="email"
                    autoComplete="email"
                    spellCheck="false"
                    placeholder="john@example.com" 
                    {...register("email")}
                    className={errors.email ? "border-destructive focus-visible:ring-destructive" : "focus-visible:ring-blue-500"}
                  />
                  {errors.email && <p className="text-sm text-destructive" role="alert">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="Project Inquiry" 
                  autoComplete="off"
                  {...register("subject")}
                  className={errors.subject ? "border-destructive focus-visible:ring-destructive" : "focus-visible:ring-blue-500"}
                />
                {errors.subject && <p className="text-sm text-destructive" role="alert">{errors.subject.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project or inquiry…" 
                  rows={5}
                  className={`resize-none ${errors.message ? "border-destructive focus-visible:ring-destructive" : "focus-visible:ring-blue-500"}`}
                  {...register("message")}
                />
                {errors.message && <p className="text-sm text-destructive" role="alert">{errors.message.message}</p>}
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 py-6 text-lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending…
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    Message Sent!
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>

              {/* ARIA live region for screen readers */}
              <div aria-live="polite" className="sr-only">
                {isSuccess && "Your message has been sent successfully."}
                {Object.keys(errors).length > 0 && "There are errors in the form. Please fix them before submitting."}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
