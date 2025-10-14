import Link from "next/link";
import TypingAnimation from "@/components/TypingAnimation";
import CountdownTimer from "@/components/CountdownTimer";
import ScheduleTabs from "@/components/ScheduleTabs";

export default function Home() {
  // Set the hackathon date (October 15, 2025)
  const hackathonDate = new Date(2025, 9, 15); // Month is 0-indexed, so 9 = October

  return (
    <>
      {/* Hero Section */}
  <section className="relative overflow-hidden hero-animated-bg py-20 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
              <span className="block text-white">HackNext 2025</span>
              <span className="mt-2 block">
                <TypingAnimation text="Innovate. Build. Transform." speed={80} />
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/90 md:text-xl animate-fade-in-up">
              Join the most innovative hackathon of the year. 48 hours of coding, collaboration, and creativity.
              Build something amazing with fellow developers and win exciting prizes!
            </p>
            
            <div className="mt-8">
              <CountdownTimer targetDate={hackathonDate} />
            </div>
            
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#register"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-lg"
              >
                Register Now
              </Link>
              <Link
                href="#about"
                className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-background px-8 text-base font-medium shadow-sm transition-all hover:bg-muted hover:scale-105 hover:shadow-md"
              >
                Learn More
              </Link>
            </div>
            <div className="mt-8 text-sm text-white/70">
              <p>October 15-17, 2025 • Virtual & In-Person</p>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements (layered blobs + subtle wave) */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          {/* Large floating blob (top-right) */}
    <div className="hidden md:block absolute -top-16 -right-20 w-96 h-96 rounded-full opacity-80 filter blur-3xl anim-float"
      style={{ background: 'radial-gradient(circle at 30% 30%, rgba(124,58,237,0.95), rgba(167,139,250,0.55))' }}></div>

          {/* Secondary floating blob (bottom-left) */}
    <div className="hidden md:block absolute -bottom-20 -left-16 w-80 h-80 rounded-full opacity-70 filter blur-2xl anim-float"
      style={{ background: 'radial-gradient(circle at 70% 70%, rgba(167,139,250,0.9), rgba(124,58,237,0.55))', animationDelay: '220ms' }}></div>

          {/* Soft overlay to lift the hero text */}
          <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.12) 45%, rgba(255,255,255,0.0) 100%)', mixBlendMode: 'overlay' }}></div>

          {/* Subtle SVG wave at bottom of hero */}
          <svg className="absolute left-0 right-0 bottom-0 -z-20 w-full h-36 md:h-48 opacity-30" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path fill="url(#g)" d="M0,128L48,112C96,96,192,64,288,69.3C384,75,480,117,576,128C672,139,768,117,864,90.7C960,64,1056,32,1152,42.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0%" stopColor="#cfe6ff" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#9fc4ff" stopOpacity="0.25" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Live Coding Session (visual code panel) */}
      <section className="container live-code-wrap">
        <div className="mx-auto max-w-4xl">
          <div className="live-code-panel">
            <div className="live-code-header">
              <h3 className="text-lg font-semibold text-white">Live Coding Session</h3>
              <div className="ml-auto live-code-dots" aria-hidden>
                <span className="dot-red"></span>
                <span className="dot-yellow"></span>
                <span className="dot-green"></span>
              </div>
            </div>

            <div className="code-block">
              <pre className="code-line line-anim" aria-hidden>
                <code>
                  <div>
                    <span className="typing-line type-delay-1"><span className="code-fade">const</span> <span className="code-highlight">hackathon</span> = {'{'}</span>
                  </div>
                  <div>
                    <span className="typing-line type-delay-2">  <span className="code-highlight">name</span>: <span className="code-fade">&apos;HackNext 2025&apos;</span>,</span>
                  </div>
                  <div>
                    <span className="typing-line type-delay-3">  <span className="code-highlight">duration</span>: <span className="code-fade">&apos;48 hours&apos;</span>,</span>
                  </div>
                  <div>
                    <span className="typing-line type-delay-4">  <span className="code-highlight">innovation</span>: <span className="code-fade">&apos;unlimited&apos;</span></span>
                  </div>
                  <div>
                    <span className="typing-line type-delay-4">{'}'};</span>
                  </div>
                  <div className="typing-cursor" aria-hidden></div>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl animate-scale-in">About HackNext</h2>
            <p className="mt-4 text-lg text-muted-foreground animate-fade-in-up">
              HackNext is more than just a hackathon—it&apos;s a platform for innovation and collaboration.
            </p>
          </div>
          
            <div className="mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 stagger-children">
            <div className="group min-w-0 w-full fancy-card p-3 sm:p-4 animate-fade-in-left">
              <div className="mb-3 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary/10 text-primary animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m7 10 5 5 5-5"></path>
                  <path d="M12 15V6"></path>
                </svg>
              </div>
              <div className="transition-all duration-300 ease-out group-hover:scale-[1.03] group-hover:-translate-y-1">
                <h3 className="text-lg font-medium">Learn</h3>
                <p className="mt-2 text-sm text-muted-foreground break-words whitespace-normal">
                Workshops and mentorship from industry experts to help you level up your skills.
                </p>
              </div>
            </div>
            
            <div className="group min-w-0 w-full fancy-card p-3 sm:p-4 animate-fade-in-up">
              <div className="mb-3 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary/10 text-primary animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 5H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
                  <path d="m8 12 2 2 6-6"></path>
                </svg>
              </div>
              <div className="transition-all duration-300 ease-out group-hover:scale-[1.03] group-hover:-translate-y-1">
                <h3 className="text-lg font-medium">Build</h3>
                <p className="mt-2 text-sm text-muted-foreground break-words whitespace-normal">
                Turn your ideas into reality with cutting-edge technology and collaborative teams.
                </p>
              </div>
            </div>
            
            <div className="group min-w-0 w-full fancy-card p-3 sm:p-4 animate-fade-in-right">
              <div className="mb-3 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary/10 text-primary animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"></path>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.9 4.9 1.4 1.4"></path>
                  <path d="m17.7 17.7 1.4 1.4"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.3 17.7-1.4 1.4"></path>
                  <path d="m19.1 4.9-1.4 1.4"></path>
                </svg>
              </div>
              <div className="transition-all duration-300 ease-out group-hover:scale-[1.03] group-hover:-translate-y-1">
                <h3 className="text-lg font-medium">Connect</h3>
                <p className="mt-2 text-sm text-muted-foreground break-words whitespace-normal">
                Network with like-minded individuals, industry professionals, and potential employers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section - interactive tabs */}
      <ScheduleTabs />

      {/* Prizes Section */}
      <section id="prizes" className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl animate-scale-in">Amazing Prizes</h2>
            <p className="mt-4 text-lg text-muted-foreground animate-fade-in-up">
              Win big with our exciting prize pool worth over $20,000!
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 md:grid-cols-3 stagger-children">
            <div className="rounded-lg border bg-card p-4 sm:p-6 shadow-sm hover-scale hover-glow animate-fade-in-left">
              <div className="mb-4 text-center">
                <div className="inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary/10 text-primary animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 4h12v6h-12z"></path>
                    <path d="M8.5 14v2"></path>
                    <path d="M15.5 14v2"></path>
                    <path d="M6 10v10h12v-10"></path>
                  </svg>
                </div>
                <h3 className="mt-4 text-2xl font-bold">1st Place</h3>
              </div>
              <ul className="mt-4 space-y-2 text-center">
                <li>$10,000 Cash Prize</li>
                <li>Mentorship Opportunities</li>
                <li>Investor Connections</li>
                <li>Premium Tech Gadgets</li>
              </ul>
            </div>
            
            <div className="rounded-lg border bg-card p-4 sm:p-6 shadow-sm hover-scale hover-glow animate-fade-in-up">
              <div className="mb-4 text-center">
                <div className="inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary/10 text-primary animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 4h12v6h-12z"></path>
                    <path d="M8.5 14v2"></path>
                    <path d="M15.5 14v2"></path>
                    <path d="M6 10v10h12v-10"></path>
                  </svg>
                </div>
                <h3 className="mt-4 text-2xl font-bold">2nd Place</h3>
              </div>
              <ul className="mt-4 space-y-2 text-center">
                <li>$5,000 Cash Prize</li>
                <li>Cloud Credits</li>
                <li>Development Resources</li>
                <li>Tech Gadgets</li>
              </ul>
            </div>
            
            <div className="rounded-lg border bg-card p-4 sm:p-6 shadow-sm hover-scale hover-glow animate-fade-in-right">
              <div className="mb-4 text-center">
                <div className="inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary/10 text-primary animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 4h12v6h-12z"></path>
                    <path d="M8.5 14v2"></path>
                    <path d="M15.5 14v2"></path>
                    <path d="M6 10v10h12v-10"></path>
                  </svg>
                </div>
                <h3 className="mt-4 text-2xl font-bold">3rd Place</h3>
              </div>
              <ul className="mt-4 space-y-2 text-center">
                <li>$2,500 Cash Prize</li>
                <li>Software Subscriptions</li>
                <li>Development Resources</li>
                <li>Swag Packages</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl animate-scale-in">Our Sponsors</h2>
            <p className="mt-4 text-lg text-muted-foreground animate-fade-in-up">
              HackNext is made possible by the generous support of our sponsors.
            </p>
          </div>
          
          <div className="mt-16">
            <h3 className="text-center text-xl font-medium">Platinum Sponsors</h3>
            <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4 stagger-children">
              {["adobe.svg","amazon.svg","google.svg","microsoft.svg"].map((file, idx) => (
                <div key={idx} className="flex items-center justify-center rounded-lg border bg-card p-3 sm:p-6 hover-scale hover-glow animate-fade-in-up">
                  <img src={`/sponsors/${file}`} alt={`Platinum sponsor ${idx + 1}`} className="max-h-10 sm:max-h-12 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center animate-fade-in-up">
            <Link
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-muted hover-scale hover-glow"
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>

      {/* Award Categories */}
      <section id="awards" className="py-12 bg-muted/10">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-semibold">Award Categories</h3>
            <p className="mt-2 text-muted-foreground">Recognizing excellence across a variety of domains — from web development to AI and community impact.</p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="fancy-card award-tile p-4">
              <div>
                <div className="award-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M16 18l6-6-6-6" stroke="white" />
                    <path d="M8 6l-6 6 6 6" stroke="white" />
                  </svg>
                </div>
                <h4 className="mt-4 text-lg font-medium">Best Web Development</h4>
                <p className="mt-2 text-sm text-muted-foreground">Awarded to the team that builds the most robust, performant and accessible web project.</p>
              </div>
              <span className="prize-badge">$5,000</span>
            </div>

            <div className="fancy-card award-tile p-4">
              <div>
                <div className="award-icon">
                  {/* simple brain icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20" stroke="white" />
                    <path d="M20 12c0-4.418-3.582-8-8-8" stroke="white" />
                    <path d="M4 12c0 4.418 3.582 8 8 8" stroke="white" />
                  </svg>
                </div>
                <h4 className="mt-4 text-lg font-medium">Best AI Integration</h4>
                <p className="mt-2 text-sm text-muted-foreground">Recognizes innovative and responsible use of AI or ML to solve real problems.</p>
              </div>
              <span className="prize-badge">$7,500</span>
            </div>

            <div className="fancy-card award-tile p-4">
              <div>
                <div className="award-icon">
                  {/* simple star */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" stroke="white" />
                  </svg>
                </div>
                <h4 className="mt-4 text-lg font-medium">Student Choice Award</h4>
                <p className="mt-2 text-sm text-muted-foreground">Voted by participating students — the crowd favorite for creativity and impact.</p>
              </div>
              <span className="prize-badge">$2,000</span>
            </div>

            <div className="fancy-card award-tile p-4">
              <div>
                <div className="award-icon">
                  {/* simple paintbrush icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 22s4-2 6-4 6-6 8-8 4-6 4-6l-6 4-8 8-4 6z" stroke="white" />
                  </svg>
                </div>
                <h4 className="mt-4 text-lg font-medium">Best Design & UX</h4>
                <p className="mt-2 text-sm text-muted-foreground">For the team with the most polished, user-friendly interface and delightful interactions.</p>
              </div>
              <span className="prize-badge">$3,000</span>
            </div>

            <div className="fancy-card award-tile p-4">
              <div>
                <div className="award-icon">
                  {/* heart icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.9 0L12 5.5l-0.9-0.9a5.5 5.5 0 1 0-7.9 7.9L12 21l8.8-8.8a5.5 5.5 0 0 0 0-7.9z" stroke="white" />
                  </svg>
                </div>
                <h4 className="mt-4 text-lg font-medium">Community Impact</h4>
                <p className="mt-2 text-sm text-muted-foreground">Honors projects that meaningfully address community needs or social good.</p>
              </div>
              <span className="prize-badge">$2,500</span>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Register Now</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Secure your spot for HackNext 2025. Limited seats available!
            </p>
          </div>
          
          <div className="mt-12 mx-auto max-w-md">
            <div className="fancy-card p-6 mx-2">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="role" className="text-sm font-medium">Your Role</label>
                  <select
                    id="role"
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                  >
                    <option value="">Select your role</option>
                    <option value="student">Student</option>
                    <option value="professional">Professional</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Find answers to common questions about HackNext.
            </p>
          </div>
          
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="fancy-card p-6">
              <h3 className="text-lg font-medium">Who can participate?</h3>
              <p className="mt-2 text-muted-foreground">
                Anyone can participate! Whether you&apos;re a student, professional, or hobbyist, HackNext welcomes all skill levels and backgrounds.
              </p>
            </div>
            
            <div className="fancy-card p-6">
              <h3 className="text-lg font-medium">Do I need a team?</h3>
              <p className="mt-2 text-muted-foreground">
                You can register individually or as a team of up to 4 people. We&apos;ll also have team formation activities if you&apos;re looking to join a team.
              </p>
            </div>
            
            <div className="fancy-card p-6">
              <h3 className="text-lg font-medium">Is there a registration fee?</h3>
              <p className="mt-2 text-muted-foreground">
                No, participation is completely free thanks to our generous sponsors!
              </p>
            </div>
            
            <div className="fancy-card p-6">
              <h3 className="text-lg font-medium">What should I bring?</h3>
              <p className="mt-2 text-muted-foreground">
                Bring your laptop, charger, and any other devices you might need. For in-person participants, we&apos;ll provide food, drinks, and a comfortable hacking space.
              </p>
            </div>
            
            <div className="fancy-card p-6">
              <h3 className="text-lg font-medium">Will there be prizes?</h3>
              <p className="mt-2 text-muted-foreground">
                Yes! We have a prize pool worth over $20,000, including cash prizes, tech gadgets, and opportunities for the winning teams.
              </p>
            </div>
            
            <div className="fancy-card p-6">
              <h3 className="text-lg font-medium">How will projects be judged?</h3>
              <p className="mt-2 text-muted-foreground">
                Projects will be judged based on innovation, technical complexity, design, and potential impact by a panel of industry experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have questions? Reach out to our team.
            </p>
          </div>
          
          <div className="mt-12 mx-auto max-w-md">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm font-medium">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm font-medium">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                    placeholder="Your email"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
