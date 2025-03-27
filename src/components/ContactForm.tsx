"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // Show success dialog
      setShowDialog(true);
      
      // Reset form
      setFormState({ name: "", email: "", message: "" });
    } catch (error) {
      setIsError(true);
      setErrorMessage(error instanceof Error ? error.message : "An unexpected error occurred");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="py-24 relative z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-500/[0.03] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 md:px-6"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-rose-500 mx-auto mb-8"></div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Have a question or want to discuss how we can help transform your
            business with our next-gen solutions? Reach out to us.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-black/30 border border-white/10 backdrop-blur-md overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-white">
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isError && (
                  <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded text-white text-sm">
                    {errorMessage || "Something went wrong. Please try again."}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm text-white/70">Your Name</label>
                    <Input
                      name="name"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                      className="bg-black/40"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-white/70">
                      Email Address
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                      className="bg-black/40"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-white/70">
                      Your Message
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your project or inquiry..."
                      value={formState.message}
                      onChange={handleInputChange}
                      required
                      className="bg-black/40 min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white py-2 rounded-md transition-all duration-300",
                      isSubmitting && "opacity-70"
                    )}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>

      {/* Success Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto bg-gradient-to-r from-indigo-500 to-violet-500 p-3 rounded-full mb-5">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <DialogTitle className="text-center text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
              Message Sent Successfully!
            </DialogTitle>
            <DialogDescription className="text-center mt-2">
              Thanks for reaching out! We've received your message and will get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-4">
            <Button 
              className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white px-6 py-2 rounded-full"
              onClick={() => setShowDialog(false)}
            >
              Continue Browsing
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
