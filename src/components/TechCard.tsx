"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function TechCard({
  title,
  description,
  icon,
  gradient,
  delay = 0,
}: {
  title: string
  description: string
  icon: string
  gradient: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="relative group"
    >
      <Card className="bg-black/30 border border-white/10 backdrop-blur-sm overflow-hidden h-full">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />
        <CardHeader>
          <div className="text-4xl mb-4">{icon}</div>
          <CardTitle className="text-xl text-white">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/60">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default TechCard 