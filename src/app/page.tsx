'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Github,
  Mail,
  MapPin,
  ExternalLink,
  Code,
  Database,
  Cpu,
  Server,
  Users,
  Briefcase,
  GraduationCap,
  Download
} from 'lucide-react'
import { useState, useEffect } from 'react'

const roles = [
  "Building B2B SaaS",
  "Full-Stack Development",
  "AI Integration",
  "Production Management",
  "Team Leadership"
]

const skills = {
  "Programming Languages": ["TypeScript", "JavaScript", "Python", "SQL", "C#"],
  "Web Technologies": ["Next.js (App Router, Server Actions)", "React 19", "HTML5", "CSS3", "Tailwind CSS v4", "Streamlit", "Django"],
  "Backend & APIs": ["Node.js", "Nest.js", "REST APIs", "Server Actions"],
  "Databases & ORM": ["Prisma ORM", "SQLite", "PostgreSQL", "MySQL"],
  "Authentication & Security": ["NextAuth v5", "JWT", "Role-Based Access Control (RBAC)", "bcryptjs", "SSL/TLS"],
  "DevOps & Deployment": ["VPS Deployment", "Nginx", "PM2", "Linux Server Management"],
  "AI & Data": ["RAG Architectures", "LLM Integrations", "Pandas", "NumPy", "TensorFlow"],
  "Tools": ["Git", "GitHub", "VS Code", "Postman"]
}

const projects = [
  {
    title: "DealerHub — Production-Ready B2B Dealer Management SaaS",
    description: "Full-stack B2B SaaS platform for dealer and store management successfully sold to a business client.",
    tech: ["Next.js (App Router)", "TypeScript", "Prisma ORM", "NextAuth v5", "Nginx", "VPS Deployment"],
    features: ["Role-based authentication", "JWT session strategy", "SSL/TLS certificates", "Type-safe backend operations", "Production deployment"]
  },
  {
    title: "Invoice-Based Tax Compliance & Reporting Tool",
    description: "Thesis project - AI-powered tool for parsing invoices and ensuring tax compliance using advanced data processing.",
    tech: ["Python", "PDF Parsing", "Data Extraction", "Feature Engineering", "Tax Compliance"],
    features: ["Automated tax reporting", "Invoice processing", "Data analysis", "Compliance validation"]
  },
  {
    title: "Sales Tracking and Production Modeling Tools",
    description: "Custom internal software systems designed and developed for company-wide operational efficiency.",
    tech: ["Python", "Automation", "Data Processing", "Workflow Optimization"],
    features: ["Sales tracking", "Production modeling", "Workflow automation", "Data accuracy improvements"]
  }
]

const experiences = [
  {
    company: "Pink Home",
    role: "Production Supervisor / Team Leader",
    period: "03/2023 - Present",
    description: "Coordinated and managed sales and production teams of over 30 employees. Conducted process analysis and implemented system improvements to increase production efficiency. Led high-budget hotel projects and custom production orders from planning to delivery. Oversaw production scheduling, logistics coordination, and resource allocation.",
    type: "work"
  },
  {
    company: "Pink Home",
    role: "IT Infrastructure Management",
    period: "07/2022 - 03/2023",
    description: "Managed company-wide IT infrastructure including networks, web systems, and cybersecurity operations. Designed and developed custom internal software systems, including Sales Tracking and Production Modeling tools. Automated internal workflows, improving operational efficiency and data accuracy. Provided daily IT support and ensured uninterrupted system availability. Planned and maintained hardware, software, and network systems.",
    type: "work"
  },
  {
    company: "DealerHub — Production-Ready B2B Dealer Management SaaS",
    role: "Full-Stack Developer | Next.js, TypeScript, Prisma",
    period: "2024 - Present",
    description: "Developed and delivered a full-stack B2B SaaS platform for dealer and store management using Next.js (App Router) and TypeScript. Deployed the application to a VPS environment using Nginx as a reverse proxy. Configured SSL/TLS certificates to enable secure HTTPS communication in production. Implemented role-based authentication and authorization using NextAuth v5 with JWT session strategy. Designed and maintained scalable database schemas using Prisma ORM. Built secure credential-based login with password hashing via bcryptjs. Implemented Server Actions and API route handlers for type-safe backend operations. Delivered a production-ready system and successfully sold the solution to a business client.",
    type: "freelance"
  }
]

const education = {
  university: "Manisa Celal Bayar University",
  degree: "BSc in Computer Engineering",
  period: "06/2025",
  thesis: "Invoice-Based Tax Compliance & Reporting Tool"
}

export default function Home() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false)
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        setIsTyping(true)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto text-center z-10"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
          >
            Birhat Taş
          </motion.h1>
          
          <motion.div
            variants={itemVariants}
            className="text-2xl md:text-3xl text-muted-foreground mb-4 h-8"
          >
            Computer Engineer & Full-Stack Developer
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="text-xl md:text-2xl text-primary mb-8 h-8 flex items-center justify-center"
          >
            <span className="mr-2">{isTyping ? "▸" : ""}</span>
            {roles[currentRoleIndex]}
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
Full-Stack Developer & Computer Engineering Graduate with hands-on experience in building and deploying production-ready web applications. Specialized in Next.js, TypeScript, and Prisma, with a strong focus on scalable system design, secure authentication, and real-world delivery. Experienced in deploying applications to VPS environments with Nginx and SSL, and delivering solutions to business clients. Also interested in data-driven and AI-powered systems, including RAG architectures and LLM integrations.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <Button size="lg" className="text-lg px-8 py-6">
              View Work
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Contact Me
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => window.open('/Birhat-Tas-CV.pdf', '_blank')}
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-6 text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Manisa, Turkey</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>birhat.mff@gmail.com</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              <span>github.com/birhatmf</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20 pointer-events-none" />
      </section>

      {/* Bento Grid Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Skills & Expertise
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Skills Categories */}
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      {category === "Programming Languages" && <Code className="w-5 h-5 text-primary" />}
                      {category === "Web Technologies" && <Code className="w-5 h-5 text-primary" />}
                      {category === "Backend & APIs" && <Server className="w-5 h-5 text-primary" />}
                      {category === "Databases & ORM" && <Database className="w-5 h-5 text-primary" />}
                      {category === "Authentication & Security" && <Server className="w-5 h-5 text-primary" />}
                      {category === "DevOps & Deployment" && <Database className="w-5 h-5 text-primary" />}
                      {category === "AI & Data" && <Cpu className="w-5 h-5 text-primary" />}
                      {category === "Tools" && <Database className="w-5 h-5 text-primary" />}
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Team Leadership
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-2">30+</div>
                  <p className="text-sm text-muted-foreground">Employees managed</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <p className="text-sm text-muted-foreground">Years in production</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-medium mb-2">{education.university}</div>
                  <p className="text-xs text-muted-foreground mb-1">{education.degree}</p>
                  <p className="text-xs text-muted-foreground">Expected: {education.period}</p>
                  <p className="text-xs text-primary mt-2">Thesis: {education.thesis}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Experience
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-start mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-5 h-5 bg-background border-4 border-primary rounded-full" />

                {/* Content */}
                <div className="ml-16 flex-1">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl">{exp.role}</CardTitle>
                          <CardDescription className="text-lg font-medium text-primary">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="text-sm">
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-2">Birhat Taş</h3>
              <p className="text-sm text-muted-foreground">
                Computer Engineer & Full-Stack Developer
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a 
                href="https://github.com/birhatmf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a 
                href="mailto:birhat.mff@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="text-center text-sm text-muted-foreground">
            © 2024 Birhat Taş. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}