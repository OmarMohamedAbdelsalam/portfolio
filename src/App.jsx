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
    'RTL Modeling',
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
        'Built an SPI slave connected to a single-port RAM and structured the design around an FSM-based control flow. The project explored multiple state encoding styles including gray, one-hot, and sequential encoding, with the final choice guided by timing results after implementation.',
      impact:
        'Simulation, linting, synthesis, implementation, timing comparison, and bitstream generation were all part of the flow.',
    },
    {
      title: 'Spartan-6 DSP48A1 Slice',
      stack: 'Verilog • Digital Design • Directed Testing • Vivado',
      summary:
        'Designed a DSP48A1 slice inspired by the Spartan-6 architecture, covering arithmetic datapath behavior, configurable registers, control through OPMODE, cascade paths, and carry handling. The verification flow relied on directed test patterns and waveform-based checking to validate different operating modes.',
      impact:
        'The deliverables included RTL, testbench, do file, timing-constrained synthesis and implementation, and lint-clean design checks.',
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-white selection:text-black">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-semibold tracking-wide">
            Omar Mohamed
          </a>
          <div className="hidden gap-6 text-sm text-neutral-300 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-28"
      >
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
            Digital IC Design Portfolio
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Omar Mohamed Abdelsalam
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-neutral-300">
            Electronics and Communications Engineering student focused on digital IC
            design, RTL modeling, verification, and FPGA implementation. Building
            practical experience in Verilog, SystemVerilog, ASIC and FPGA design flow,
            and modern EDA tools.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="rounded-2xl border border-white/20 bg-white px-5 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/30">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-neutral-400">Current Focus</p>
                <p className="mt-1 text-xl font-semibold">
                  RTL Design, Verification, and FPGA Flow
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm text-neutral-400">Education</p>
                  <p className="mt-1 font-medium">Helwan University</p>
                  <p className="text-sm text-neutral-300">Class of 2027</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm text-neutral-400">Location</p>
                  <p className="mt-1 font-medium">Helwan, Egypt</p>
                  <p className="text-sm text-neutral-300">Open to internships</p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm text-neutral-400">Main Toolchain</p>
                <p className="mt-1 leading-7 text-neutral-200">
                  Verilog, SystemVerilog, Questa Sim, Vivado, Questa Formal, Tcl,
                  Basys 3, C++, Python
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-8 md:py-16">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">About</p>
            <h2 className="mt-3 text-3xl font-semibold">
              A portfolio built for digital design roles
            </h2>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 leading-8 text-neutral-300">
            I am an Electronics and Communications Engineering student with a strong
            interest in digital IC design, verification, and FPGA-based prototyping.
            My background combines RTL modeling, testbench development, simulation
            flow, and embedded systems fundamentals. I am currently expanding my ASIC
            and FPGA design knowledge through focused training in Verilog,
            SystemVerilog, UVM, and EDA tools.
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-8 md:py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">Skills</p>
        <h2 className="mt-3 text-3xl font-semibold">Technical stack</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-neutral-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-8 md:py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
          Experience & Training
        </p>
        <h2 className="mt-3 text-3xl font-semibold">
          Internships and professional development
        </h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            {experience.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
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
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {training.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-neutral-300">{item.provider}</p>
                  </div>
                  <p className="text-sm text-neutral-400">{item.date}</p>
                </div>
                <p className="mt-4 text-sm leading-7 text-neutral-300">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-8 md:py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">Projects</p>
        <h2 className="mt-3 text-3xl font-semibold">Selected work</h2>
        <p className="mt-4 max-w-3xl leading-8 text-neutral-300">
          These projects reflect the direction of my work in RTL design, datapath
          modeling, verification, and FPGA-oriented implementation flow. I focus on
          writing clean hardware, building practical testbenches, and comparing design
          decisions based on simulation and timing results.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-sm text-neutral-400">{project.stack}</p>
              <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-neutral-300">{project.summary}</p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-neutral-400">
                {project.impact}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-8 md:py-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold">Let’s connect</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-neutral-400">Email</p>
              <a
                href="mailto:omar7030.mo@gmail.com"
                className="mt-1 block text-lg font-medium hover:underline"
              >
                omar7030.mo@gmail.com
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-neutral-400">Phone</p>
              <a
                href="tel:+201021539038"
                className="mt-1 block text-lg font-medium hover:underline"
              >
                (+20) 1021539038
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5 md:col-span-2">
              <p className="text-sm text-neutral-400">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/omar-mohamed-abdelsalam"
                className="mt-1 block break-all text-lg font-medium hover:underline"
              >
                linkedin.com/in/omar-mohamed-abdelsalam
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
