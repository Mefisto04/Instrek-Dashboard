"use client"

import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import ElegantShape from "@/components/ElegantShape"
import TechCard from "@/components/TechCard"
import ServiceCard from "@/components/ServiceCard"
import Navbar from "@/components/Navbar"
import ContactForm from "@/components/ContactForm"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

export default function HeroGeometric({
  badge = "Next-Gen Technology",
  title1 = "Shaping the",
  title2 = "Future",
}: {
  badge?: string
  title1?: string
  title2?: string
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* Navbar */}
      <Navbar />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-20 md:pt-32">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
          >
            <span className="text-sm text-white/60 tracking-wide">{badge}</span>
          </motion.div>

          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">{title1}</span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 ",
                  pacifico.className,
                )}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              Empowering businesses, governments, and institutions with cutting-edge automation, smart city innovations,
              and advanced IT services.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-4"
          >
            <Button className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white px-6 py-2 rounded-full">
              Our Solutions
            </Button>
            <Button 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/5 px-6 py-2 rounded-full"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Company Overview Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="relative z-10 container mx-auto px-4 md:px-6 py-24"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
            Company Overview
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-rose-500 mx-auto mb-8"></div>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            Instrek Technologies is shaping the future with AI, IoT, AIoT, Blockchain and next-gen digital solutions.
            With a mission to make India AI-ready, we drive strategic consulting, workforce hiring & training, and
            scalable tech solutions.
          </p>
        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <TechCard
            title="Artificial Intelligence"
            description="Leveraging cutting-edge AI to create intelligent systems that learn, adapt, and solve complex problems."
            icon="🧠"
            gradient="from-blue-500 to-indigo-700"
            delay={0.3}
          />
          <TechCard
            title="IoT & AIoT"
            description="Connecting the physical and digital worlds through smart devices and AI-powered Internet of Things solutions."
            icon="🌐"
            gradient="from-purple-500 to-violet-700"
            delay={0.5}
          />
          <TechCard
            title="Blockchain"
            description="Building secure, transparent, and decentralized systems for the future of digital transactions and data integrity."
            icon="🔗"
            gradient="from-rose-500 to-red-700"
            delay={0.7}
          />
        </div>

        {/* Services Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
            Our Services & Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-rose-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            title="Conversational AI"
            description="Advanced chatbots and virtual assistants that provide natural, human-like interactions for customer service and operational efficiency."
            delay={0.3}
          />
          <ServiceCard
            title="Agentic AI"
            description="Autonomous AI agents that can perform complex tasks, make decisions, and execute workflows with minimal human intervention."
            delay={0.4}
          />
          <ServiceCard
            title="Digital Transformation"
            description="End-to-end solutions to modernize legacy systems and processes, enabling businesses to thrive in the digital age."
            delay={0.5}
          />
          <ServiceCard
            title="Smart City Solutions"
            description="Integrated technologies for urban environments that enhance quality of life, sustainability, and efficient resource management."
            delay={0.6}
          />
        </div>
      </motion.div>

      {/* Contact Form Section */}
      <ContactForm />

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  )
} 