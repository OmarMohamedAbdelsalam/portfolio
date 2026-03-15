import { motion } from 'framer-motion'
import {
  ArrowDownRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Microchip,
  Phone,
  Radar,
  Cpu,
  Binary,
  Workflow,
} from 'lucide-react'
import profileImage from './assets/profile.JPG'
import cvFile from './assets/cv.pdf'

export default function App() {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const skills = [
    'Verilog',
    'SystemVerilog',
    'RTL Design',
    'Testbench Development',
    'Vivado',
    'Questa Sim',
    'Questa Formal',
    'FPGA Prototyping',
    'STA',
    'CDC',
    'Linting',
    'Tcl',
    'C++',
    'Embedded C',
    'Python',
    'MATLAB',
    'STM32',
    'Arduino',
    'PIC',
    'ATmega32',
  ]

  const experience = [
    {
      title: 'Sales & Business Development Intern',
      company: 'Schneider Electric',
      date: 'Aug 2025 - Sep 2025',
      points: [
        'Explored EcoStruxure architecture with focus on energy management and IoT solutions.',
        'Built a strong understanding of product sales lifecycle, customer needs, and channel relationships.',
        'Worked with industry professionals and developed both technical and commercial communication skills.',
      ],
    },
    {
      title: 'Technical Intern - After-Sales & Spare Parts',
      company: 'EGYBRIT',
      date: 'Jul 2025 - Aug 2025',
      points: [
        'Diagnosed and repaired industrial machinery faults using diagnostic tools and software.',
        'Supported maintenance and troubleshooting in materials handling systems.',
        'Gained practical exposure to the integration of electronics, mechanics, and logistics.',
      ],
    },
    {
      title: 'Network & Systems Security Intern',
      company: 'Americana',
      date: 'Aug 2024 - Sep 2024',
      points: [
        'Monitored enterprise network infrastructure including firewalls, routers, and switches.',
        'Supported patch management and vulnerability assessment tasks.',
        'Contributed to basic infrastructure security and operational monitoring.',
      ],
    },
  ]

  const training = [
    {
      title: 'Digital Design Using Verilog and FPGA Flow Using Vivado',
      provider: 'Eng. Kareem Waseem',
      date: 'Feb 2026 - Mar 2026',
      details:
        'Designed combinational and sequential logic, FSMs, and memory blocks in Verilog, built testbenches, automated simulation using Tcl, and practiced synthesis and timing analysis on Vivado with Basys 3 FPGA flow.',
    },
    {
      title: 'Digital Verification Using SystemVerilog and UVM',
      provider: 'Eng. Kareem Waseem',
      date: 'Feb 2026 - Present',
      details:
        'Studied SystemVerilog datatypes, interfaces, threading, subroutines, SVA, UVM architecture, sequences, TLM, phasing, verification planning, constrained random testing, and coverage concepts.',
    },
    {
      title: 'Embedded Systems Diploma',
      provider: 'Eng. Mohamed Zaghloul',
      date: '230 Hours',
      details:
        'Covered computer architecture, C programming, data structures, AVR interfacing, RTOS, testing, validation, and software engineering fundamentals.',
    },
  ]

  const projects = [
    {
      title: 'SPI Slave with Single Port RAM',
      stack: 'Verilog • FSM Design • QuestaSim • Vivado',
      summary:
        'Built an SPI slave connected to a single-port RAM using an FSM-based control flow. Explored multiple state encoding styles including gray, one-hot, and sequential encoding, then selected the final approach based on timing results after implementation.',
      impact:
        'Included simulation, linting, synthesis, implementation, timing comparison, and bitstream generation.',
      icon: Workflow,
    },
    {
      title: 'Spartan-6 DSP48A1 Slice',
      stack: 'Verilog • Digital Design • Directed Testing • Vivado',
      summary:
        'Designed a DSP48A1 slice inspired by the Spartan-6 architecture, covering arithmetic datapath behavior, configurable registers, OPMODE-controlled functionality, cascade paths, and carry handling.',
      impact:
        'Included RTL, testbench, do file, timing-constrained synthesis and implementation, and lint-clean design checks.',
      icon: Cpu,
    },
  ]

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#060816] text-neutral-100 selection:bg-cyan-200 selection:text-black">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_24%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]" />
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]"
        />
        <motion.div
          animate={{ x: ['-10%', '10%', '-10%'], y: ['0%', '8%', '0%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="absolute -left-16 top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
        />
        <motion.div
          animate={{ x: ['10%', '-5%', '10%'], y: ['0%', '-10%', '0%'] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="absolute right-0 top-64 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
        />
      </div>

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#060816]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3 text-lg font-semibold tracking-wide">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
              <Microchip size={18} />
            </span>
            Omar Mohamed
          </a>

          <div className="hidden gap-6 text-sm text-neutral-300 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition duration-200 hover:text-cyan-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyan-200">
            <Binary size={14} />
            Digital IC Design Portfolio
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Building digital systems with a focus on RTL, verification, and FPGA flow.
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-neutral-300">
            I am Omar Mohamed Abdelsalam, an Electronics and Communications Engineering student focused on digital IC design,
            RTL modeling, verification, and implementation-oriented design flow using modern EDA tools.
          </p>

          <div className="grid max-w-2xl gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-sm text-neutral-400">Current Focus</p>
              <p className="mt-2 font-medium text-white">RTL + Verification</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-sm text-neutral-400">Education</p>
              <p className="mt-2 font-medium text-white">Helwan University</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-sm text-neutral-400">Availability</p>
              <p className="mt-2 font-medium text-white">Open to internships</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-2xl border border-cyan-300/20 bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              View Projects
              <ArrowDownRight size={16} />
            </a>

            <a
              href={cvFile}
              download="Omar_Mohamed_CV.pdf"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-300/30 hover:bg-white/10"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex items-center"
        >
          <div className="relative grid w-full gap-5 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-950/20">
            <div className="absolute inset-0 rounded-[28px] bg-[linear-gradient(135deg,rgba(34,211,238,0.10),transparent_40%,rgba(59,130,246,0.08))]" />
            <div className="relative grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-center">
              <div className="space-y-4">
                <div className="mx-auto h-56 w-56 overflow-hidden rounded-[28px] border border-cyan-300/15 bg-slate-900 md:h-64 md:w-full">
                  <img
                    src={profileImage}
                    alt="Omar Mohamed"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[Radar, Cpu, Binary].map((Icon, index) => (
                    <motion.div
                      key={index}
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2.6 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                      className="flex h-14 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-cyan-300"
                    >
                      <Icon size={18} />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-neutral-400">Name</p>
                  <p className="mt-1 text-2xl font-semibold">Omar Mohamed Abdelsalam</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-sm text-neutral-400">Primary Direction</p>
                    <p className="mt-1 font-medium">Digital IC Design</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-sm text-neutral-400">Location</p>
                    <p className="mt-1 font-medium">Helwan, Egypt</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm text-neutral-400">Main Toolchain</p>
                  <p className="mt-2 leading-7 text-neutral-200">
                    Verilog, SystemVerilog, Questa Sim, Vivado, Questa Formal, Tcl, Basys 3, C++, Python
                  </p>
                </div>

                <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/8 p-4 text-sm leading-7 text-cyan-50">
                  Interested in digital design roles where clean RTL, structured verification, and implementation-aware thinking matter.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <SectionShell id="about" eyebrow="About" title="Digital design, verification, and implementation mindset">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 leading-8 text-neutral-300"
          >
            I am an Electronics and Communications Engineering student with a growing focus on digital IC design,
            verification, and FPGA-based implementation. My work is centered around RTL development, simulation,
            testbench creation, and practical design flow using industry-relevant tools. I enjoy building clean hardware,
            studying design tradeoffs, and translating specifications into dependable digital systems.
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="grid gap-4"
          >
            <InfoCard
              icon={Microchip}
              title="RTL-Oriented Thinking"
              text="Focused on writing structured Verilog and SystemVerilog with attention to architecture, modularity, and implementation tradeoffs."
            />
            <InfoCard
              icon={Workflow}
              title="Verification Awareness"
              text="Interested in testbench development, assertions, coverage-oriented thinking, and reliable validation of digital behavior."
            />
            <InfoCard
              icon={Cpu}
              title="Implementation Flow"
              text="Comfortable moving from design and simulation to synthesis, timing review, and FPGA-oriented workflow."
            />
          </motion.div>
        </div>
      </SectionShell>

      <SectionShell id="skills" eyebrow="Skills" title="Technical stack">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-3"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-neutral-200 transition hover:border-cyan-300/20 hover:bg-cyan-300/10 hover:text-cyan-100"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </SectionShell>

      <SectionShell id="experience" eyebrow="Experience & Training" title="Internships and professional development">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            {experience.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition hover:border-cyan-300/20 hover:bg-white/[0.06]"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-neutral-300">{item.company}</p>
                  </div>
                  <p className="text-sm text-neutral-400">{item.date}</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-neutral-300">
                  {item.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6">
            {training.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition hover:border-cyan-300/20 hover:bg-white/[0.06]"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-neutral-300">{item.provider}</p>
                  </div>
                  <p className="text-sm text-neutral-400">{item.date}</p>
                </div>
                <p className="mt-4 text-sm leading-7 text-neutral-300">{item.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="projects" eyebrow="Projects" title="Selected work">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl leading-8 text-neutral-300"
        >
          These projects reflect the direction of my work in RTL design, datapath modeling, verification, and FPGA-oriented implementation flow. I focus on writing clean hardware, building practical testbenches, and comparing design decisions based on simulation and timing results.
        </motion.p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-300">
                    <Icon size={20} />
                  </div>
                  <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">Case Study</span>
                </div>

                <p className="mt-6 text-sm text-neutral-400">{project.stack}</p>
                <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-300">{project.summary}</p>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-neutral-400">
                  {project.impact}
                </div>
              </motion.div>
            )
          })}
        </div>
      </SectionShell>

      <SectionShell id="contact" eyebrow="Contact" title="Let’s connect">
        <div className="grid gap-4 md:grid-cols-2">
          <ContactCard icon={Mail} title="Email" href="mailto:omar7030.mo@gmail.com" value="omar7030.mo@gmail.com" />
          <ContactCard icon={Phone} title="Phone" href="tel:+201021539038" value="(+20) 1021539038" />
          <ContactCard
            icon={Linkedin}
            title="LinkedIn"
            href="https://www.linkedin.com/in/omar-mohamed-abdelsalam"
            value="linkedin.com/in/omar-mohamed-abdelsalam"
          />
          <ContactCard
            icon={Github}
            title="GitHub"
            href="https://github.com/OmarMohamedAbdelsalam"
            value="github.com/OmarMohamedAbdelsalam"
          />
        </div>
      </SectionShell>

      <footer className="mx-auto mt-8 max-w-6xl px-6 pb-10 pt-4 text-sm text-neutral-500">
        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <p>Omar Mohamed Abdelsalam</p>
          <p className="inline-flex items-center gap-2">
            <MapPin size={14} />
            Helwan, Egypt
          </p>
        </div>
      </footer>
    </div>
  )
}

function SectionShell({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-8 md:py-16">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  )
}

function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300/20 hover:bg-white/[0.06]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-300">
        <Icon size={20} />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-neutral-300">{text}</p>
    </div>
  )
}

function ContactCard({ icon: Icon, title, href, value }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300/20 hover:bg-white/[0.06]"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-300">
        <Icon size={20} />
      </div>
      <p className="mt-4 text-sm text-neutral-400">{title}</p>
      <p className="mt-1 break-all text-lg font-medium text-white">{value}</p>
    </a>
  )
}