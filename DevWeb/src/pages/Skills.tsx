import React from 'react'
import { motion } from 'framer-motion'

// Import icons from a hypothetical icons file
import { ReactIcon, TypeScriptIcon, JavaScriptIcon, HTMLIcon, CSSIcon, NodeIcon, ExpressIcon, MongoDBIcon,JavaIcon} from './icons/icons'

interface Skill {
  name: string
  icon: React.ReactNode
  color: string
}

const skills: Skill[] = [
  { name: 'React', icon: <ReactIcon />, color: '#61DAFB' },
  { name: 'TypeScript', icon: <TypeScriptIcon />, color: '#3178C6' },
  { name: 'JavaScript', icon: <JavaScriptIcon />, color: '#F7DF1E' },
  { name: 'HTML', icon: <HTMLIcon />, color: '#E34F26' },
  { name: 'CSS', icon: <CSSIcon />, color: '#1572B6' },
  { name: 'Node.js', icon: <NodeIcon />, color: '#339933' },
  { name: 'Express', icon: <ExpressIcon />, color: '#000000' },
  { name: 'MongoDB', icon: <MongoDBIcon />, color: '#47A248' },
  { name: 'Java' , icon: <JavaIcon />, color: '#' },
]

const SkillIcon: React.FC<{ skill: Skill }> = ({ skill }) => (
  <motion.div
    className="flex flex-col items-center justify-center p-4 bg-zinc-900 rounded-xl shadow-md"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <motion.div
      className="w-16 h-16 mb-2"
      style={{ color: skill.color }}
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      {skill.icon}
    </motion.div>
    <span className="text-sm font-medium text-gray-200">{skill.name}</span>
  </motion.div>
)

export default function SkillsSection() {
  return (
    <section className="min-h-screen w-full bg-black py-24 flex items-center justify-center mt-20" id="skills">
      <div className="max-w-3xl mx-auto px-4 w-full">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="font-bold text-4xl bg-gray-800 rounded-lg bg-foreground text-background inline-block px-3 py-2">
              My Skills
            </div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl">
              Technologies I Work With
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed pb-4">
              Here are the technologies and tools I use to bring ideas to life.
              From front-end to back-end, I&apos;ve got you covered.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12">
          {skills.map((skill) => (
            <SkillIcon key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
