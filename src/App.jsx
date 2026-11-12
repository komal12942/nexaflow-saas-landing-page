
import { useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Clock3,
  Command,
  FolderKanban,
  Layers3,
  Menu,
  MessageSquare,
  Play,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  X,
  Zap,
} from 'lucide-react'

const features = [
  {
    icon: Workflow,
    number: '01',
    title: 'Automate your workflow',
    description:
      'Turn repetitive tasks into smart workflows. Spend less time managing work and more time making progress.',
    className: 'feature-large',
  },
  {
    icon: BarChart3,
    number: '02',
    title: 'Insights that matter',
    description:
      'Understand your team performance with clear analytics and real-time project insights.',
    className: '',
  },
  {
    icon: Users,
    number: '03',
    title: 'One team, one space',
    description:
      'Bring people, conversations and project updates together in one collaborative workspace.',
    className: '',
  },
  {
    icon: Sparkles,
    number: '04',
    title: 'AI-powered assistance',
    description:
      'Get helpful summaries, smart suggestions and a clearer view of what needs your attention next.',
    className: 'feature-wide',
  },
]

const initialTasks = [
  { title: 'Finalize landing page', tag: 'Design', color: 'purple', done: true },
  { title: 'Review sprint progress', tag: 'Planning', color: 'green', done: false },
  { title: 'Prepare product launch', tag: 'Marketing', color: 'orange', done: false },
]

function Logo() {
  return (
    <a href="#home" className="logo" aria-label="NexaFlow home">
      <span className="logo-icon"><Command size={21} /></span>
      <span>Nexa<span className="logo-accent">Flow</span></span>
    </a>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="nav-inner container">
        <Logo />

        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#features" onClick={closeMenu}>Features</a>
          <a href="#how-it-works" onClick={closeMenu}>How it works</a>
          <a href="#pricing" onClick={closeMenu}>Pricing</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" className="mobile-contact" onClick={closeMenu}>Contact us</a>
        </nav>

        <div className="nav-actions">
          <a href="#contact" className="nav-login">Let's talk</a>
          <a href="#pricing" className="button button-dark nav-cta">
            Get started <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}

function DashboardPreview() {
  const [tasks, setTasks] = useState(initialTasks)

  const completed = tasks.filter((task) => task.done).length
  const progress = Math.round((completed / tasks.length) * 100)

  const toggleTask = (index) => {
    setTasks((current) =>
      current.map((task, i) =>
        i === index ? { ...task, done: !task.done } : task
      )
    )
  }

  return (
    <div className="dashboard-window">
      <div className="dashboard-topbar">
        <div className="window-dots"><i /><i /><i /></div>
        <div className="dashboard-address">app.nexaflow.com / overview</div>
        <div className="dashboard-avatar">K</div>
      </div>

      <div className="dashboard-body">
        <aside className="dashboard-sidebar">
          <div className="side-brand"><span className="side-brand-icon"><Command size={15} /></span> Workspace</div>
          <div className="side-link side-active"><Layers3 size={15} /> Overview</div>
          <div className="side-link"><FolderKanban size={15} /> Projects</div>
          <div className="side-link"><CheckCircle2 size={15} /> My tasks</div>
          <div className="side-link"><Users size={15} /> Team</div>
          <div className="sidebar-bottom">WORKSPACE</div>
          <div className="side-link"><CircleHelp size={15} /> Help center</div>
        </aside>

        <div className="dashboard-main">
          <div className="dashboard-heading">
            <div>
              <p className="eyebrow">MONDAY, YOUR WAY</p>
              <h3>Good morning, Komal <span>✳</span></h3>
              <p className="muted">Here's what's happening with your workspace.</p>
            </div>
            <span className="live-label"><span /> Live overview</span>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-icon green-icon"><FolderKanban size={17} /></span>
              <p>Active projects</p>
              <strong>12</strong>
              <small className="positive">↗ 12% this month</small>
            </div>
            <div className="stat-card">
              <span className="stat-icon purple-icon"><CheckCircle2 size={17} /></span>
              <p>Tasks completed</p>
              <strong>48</strong>
              <small className="positive">↗ 8% this week</small>
            </div>
            <div className="stat-card">
              <span className="stat-icon orange-icon"><Clock3 size={17} /></span>
              <p>Hours saved</p>
              <strong>24<span className="stat-unit">h</span></strong>
              <small className="positive">↗ 5h this week</small>
            </div>
          </div>

          <div className="dashboard-lower">
            <div className="task-panel">
              <div className="panel-heading">
                <div><h4>Today's tasks</h4><p>Stay on top of your priorities</p></div>
                <span className="task-count">{completed}/{tasks.length}</span>
              </div>
              {tasks.map((task, index) => (
                <button
                  className={`task-row ${task.done ? 'task-done' : ''}`}
                  key={task.title}
                  onClick={() => toggleTask(index)}
                >
                  <span className={`task-check ${task.done ? 'checked' : ''}`}>
                    {task.done && <Check size={12} />}
                  </span>
                  <span className="task-name">{task.title}</span>
                  <span className={`task-tag ${task.color}`}>{task.tag}</span>
                </button>
              ))}
              <div className="progress-line"><span style={{ width: `${progress}%` }} /></div>
              <small className="progress-caption">{progress}% of your tasks completed</small>
            </div>

            <div className="focus-panel">
              <span className="focus-icon"><Target size={19} /></span>
              <p className="focus-label">WEEKLY FOCUS</p>
              <strong>Make room for what matters.</strong>
              <p className="focus-description">Your team is making great progress. Keep the momentum going!</p>
              <div className="focus-avatars"><span>K</span><span>A</span><span>R</span><b>+4</b></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow" />
      <div className="container hero-container">
        <div className="hero-copy">
          <div className="announcement"><span><Sparkles size={13} /></span> A smarter way to work <ArrowRight size={13} /></div>
          <h1>Less busywork.<br /><span>More brilliant</span><br />work.</h1>
          <p className="hero-description">
            Meet the workspace that brings your projects, people and ideas together. Plan smarter, collaborate better and make every day count.
          </p>
          <div className="hero-buttons">
            <a href="#pricing" className="button button-green">Start for free <ArrowRight size={17} /></a>
            <a href="#how-it-works" className="button button-outline"><Play size={15} /> See how it works</a>
          </div>
          <div className="hero-proof">
            <div className="proof-avatars"><span>K</span><span>A</span><span>R</span><span>S</span></div>
            <p><strong>Built for better work.</strong><br />Made for teams that think ahead.</p>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <DashboardPreview />
          <div className="floating-note note-top"><span className="note-icon"><Zap size={17} /></span><div><strong>Work smarter</strong><small>Your workflow, simplified</small></div></div>
          <div className="floating-note note-bottom"><span className="note-check"><Check size={17} /></span><div><strong>You're on track!</strong><small>Keep up the great work</small></div></div>
        </div>
      </div>
      <div className="hero-bottom container">
        <span>ONE WORKSPACE. ENDLESS POSSIBILITIES.</span>
        <div><span>PLAN</span><i /> <span>COLLABORATE</span><i /> <span>GROW</span></div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section className="section features-section" id="features">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">WHAT MAKES US DIFFERENT</span>
          <h2>Everything you need.<br /><span>Nothing you don't.</span></h2>
          <p>All your work essentials, thoughtfully brought together to help you do your best work.</p>
        </div>
        <div className="features-grid">
          {features.map(({ icon: Icon, number, title, description, className }) => (
            <article className={`feature-card ${className}`} key={number}>
              <div className="feature-card-top"><span className="feature-icon"><Icon size={22} /></span><span className="feature-number">{number}</span></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href="#how-it-works" className="feature-link">Explore feature <ArrowUpRight size={15} /></a>
              {number === '04' && <div className="ai-decoration"><Sparkles size={22} /><span>Ideas into action</span><i /><i /><i /></div>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    ['01', 'Bring your team together', 'Create your workspace and invite the people you work with.'],
    ['02', 'Organize your projects', 'Set priorities, assign tasks and build a workflow that fits you.'],
    ['03', 'Make progress visible', 'Track results, discover insights and celebrate every milestone.'],
  ]

  return (
    <section className="section process-section" id="how-it-works">
      <div className="container process-container">
        <div className="process-intro">
          <span className="section-kicker">SIMPLE BY DESIGN</span>
          <h2>From scattered<br />to <span>in sync.</span></h2>
          <p>Getting organized shouldn't feel like another project. With NexaFlow, getting started is refreshingly simple.</p>
          <a href="#pricing" className="text-link">Find your plan <ArrowRight size={16} /></a>
        </div>
        <div className="steps-list">
          {steps.map(([number, title, description]) => (
            <div className="step-item" key={number}>
              <span className="step-number">{number}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
              <ArrowUpRight className="step-arrow" size={19} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-card">
        <div className="about-art">
          <div className="art-circle circle-a" />
          <div className="art-circle circle-b" />
          <div className="art-center"><Command size={45} /><span>Make work<br />flow.</span></div>
          <div className="art-label label-a"><Zap size={15} /> Focus</div>
          <div className="art-label label-b"><Users size={15} /> Together</div>
          <div className="art-label label-c"><Target size={15} /> Progress</div>
        </div>
        <div className="about-copy">
          <span className="section-kicker">A LITTLE ABOUT US</span>
          <h2>Work should feel like <span>progress.</span></h2>
          <p>We believe great work happens when people have the clarity, tools and space to do what they do best.</p>
          <p>NexaFlow brings the moving parts of modern teamwork into one thoughtful workspace — so you can spend less energy coordinating and more energy creating.</p>
          <a href="#contact" className="button button-dark">Get to know us <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const [yearly, setYearly] = useState(false)

  const plans = [
    {
      name: 'Starter',
      description: 'For individuals and small teams getting organized.',
      monthly: 0,
      yearly: 0,
      features: ['Up to 3 projects', 'Basic task management', 'Essential workspace', 'Community support'],
      featured: false,
    },
    {
      name: 'Pro',
      description: 'For teams ready to do their best work together.',
      monthly: 12,
      yearly: 9,
      features: ['Unlimited projects', 'Advanced analytics', 'AI-powered suggestions', 'Team collaboration', 'Priority support'],
      featured: true,
    },
  ]

  return (
    <section className="section pricing-section" id="pricing">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">SIMPLE, TRANSPARENT PRICING</span>
          <h2>A plan for your <span>next big thing.</span></h2>
          <p>Start small, find your flow and grow when you're ready.</p>
          <div className="billing-toggle">
            <button className={!yearly ? 'billing-active' : ''} onClick={() => setYearly(false)}>Monthly</button>
            <button className={yearly ? 'billing-active' : ''} onClick={() => setYearly(true)}>Yearly <span>Save 25%</span></button>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article className={`price-card ${plan.featured ? 'price-featured' : ''}`} key={plan.name}>
              {plan.featured && <div className="popular-label"><Sparkles size={13} /> MOST POPULAR</div>}
              <div className="price-plan-name">{plan.name}</div>
              <p className="price-description">{plan.description}</p>
              <div className="price-amount">
                <strong>{plan.monthly === 0 ? 'Free' : `$${yearly ? plan.yearly : plan.monthly}`}</strong>
                {plan.monthly !== 0 && <span>/ user / month</span>}
              </div>
              {plan.monthly !== 0 && <p className="billing-note">{yearly ? 'Billed annually' : 'Billed monthly'}</p>}
              <a href="#contact" className={`button ${plan.featured ? 'button-green' : 'button-outline price-outline'}`}>
                {plan.monthly === 0 ? 'Get started free' : 'Choose Pro'} <ArrowRight size={16} />
              </a>
              <div className="plan-divider" />
              <p className="includes-label">WHAT'S INCLUDED</p>
              <ul className="plan-features">
                {plan.features.map((item) => <li key={item}><CheckCircle2 size={16} /> {item}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <p className="pricing-disclaimer">Illustrative pricing for this demo product. No payment is collected.</p>
      </div>
    </section>
  )
}

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-container">
        <div className="contact-copy">
          <span className="section-kicker">LET'S TALK</span>
          <h2>Have a project<br />in <span>mind?</span></h2>
          <p>Tell us what you're working on. We'd love to hear from you and explore how NexaFlow can help.</p>
          <div className="contact-detail"><span><MessageSquare size={17} /></span><div><strong>Have a question?</strong><small>Drop us a message using the form.</small></div></div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send us a message</h3>
          <p>We usually get back within 1–2 business days.</p>
          <label htmlFor="contact-name">Your name</label>
          <input id="contact-name" name="name" type="text" placeholder="e.g. Alex Morgan" required minLength={2} />
          <label htmlFor="contact-email">Email address</label>
          <input id="contact-email" name="email" type="email" placeholder="you@example.com" required />
          <label htmlFor="contact-message">Your message</label>
          <textarea id="contact-message" name="message" rows="4" placeholder="Tell us a little about what you need..." required minLength={10} />
          <button className="button button-green form-submit" type="submit">Send message <ArrowRight size={16} /></button>
          {submitted && <div className="success-message" role="status"><CheckCircle2 size={17} /> Thanks! Your message has been received in this demo.</div>}
          <small className="form-disclaimer">Demo form: messages are not sent to a server.</small>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Logo />
            <p>Make space for better work.<br />Make every moment count.</p>
          </div>
          <div className="footer-column"><strong>Explore</strong><a href="#features">Features</a><a href="#how-it-works">How it works</a><a href="#pricing">Pricing</a></div>
          <div className="footer-column"><strong>Company</strong><a href="#about">About us</a><a href="#contact">Contact</a><a href="#home">Back to top ↑</a></div>
          <div className="footer-note"><Sparkles size={19} /><strong>Make work flow.</strong><span>One thoughtful step at a time.</span></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} NexaFlow. All rights reserved.</span><span>Designed with intention <span className="heart">♥</span></span></div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <About />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
