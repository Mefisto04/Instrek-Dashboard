"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function ServiceCard({
  title,
  description,
  delay = 0,
}: {
  title: string
  description: string
  delay?: number
}) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay }}>
      <Card className="bg-black/30 border border-white/10 backdrop-blur-sm h-full hover:border-white/20 transition-colors duration-300">
        <CardHeader>
          <CardTitle className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-white">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/60">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ServiceCard 