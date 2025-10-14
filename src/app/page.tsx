import Link from "next/link";
import TypingAnimation from "@/components/TypingAnimation";
import CountdownTimer from "@/components/CountdownTimer";

export default function Home() {
  // Set the hackathon date (October 15, 2023)
  const hackathonDate = new Date(2023, 9, 15); // Month is 0-indexed, so 9 = October

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 py-20 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-primary">HackNext 2023</span>
              <span className="mt-2 block">
                <TypingAnimation text="Innovate. Build. Transform." speed={80} />
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl animate-fade-in-up">
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
            <div className="mt-8 text-sm text-muted-foreground">
              <p>October 15-17, 2023 • Virtual & In-Person</p>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10 opacity-30">
          {/* hide large decorative blobs on very small screens to avoid overflow */}
          <div className="hidden sm:block absolute sm:-top-24 sm:-left-24 sm:h-96 sm:w-96 h-56 w-56 rounded-full bg-primary/20 blur-3xl animate-pulse"></div>
          <div className="hidden sm:block absolute sm:-bottom-24 sm:-right-24 sm:h-96 sm:w-96 h-56 w-56 rounded-full bg-primary/20 blur-3xl animate-pulse"></div>
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
          
          <div className="mt-16 grid gap-8 md:grid-cols-3 stagger-children">
            <div className="rounded-lg border bg-card p-6 shadow-sm hover-scale hover-glow animate-fade-in-left">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m7 10 5 5 5-5"></path>
                  <path d="M12 15V6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium">Learn</h3>
              <p className="mt-2 text-muted-foreground">
                Workshops and mentorship from industry experts to help you level up your skills.
              </p>
            </div>
            
            <div className="rounded-lg border bg-card p-6 shadow-sm hover-scale hover-glow animate-fade-in-up">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 5H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
                  <path d="m8 12 2 2 6-6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium">Build</h3>
              <p className="mt-2 text-muted-foreground">
                Turn your ideas into reality with cutting-edge technology and collaborative teams.
              </p>
            </div>
            
            <div className="rounded-lg border bg-card p-6 shadow-sm hover-scale hover-glow animate-fade-in-right">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary animate-pulse">
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
              <h3 className="text-xl font-medium">Connect</h3>
              <p className="mt-2 text-muted-foreground">
                Network with like-minded individuals, industry professionals, and potential employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Event Schedule</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Mark your calendar for these important dates and events.
            </p>
          </div>
          
          <div className="mt-16 space-y-8">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-medium">Day 1: Opening Ceremony</h3>
                  <p className="mt-1 text-muted-foreground">October 15, 2023 • 9:00 AM - 12:00 PM</p>
                </div>
                <div className="rounded-full bg-primary/10 px-4 py-1 text-xs font-medium text-primary">
                  Day 1
                </div>
              </div>
              <div className="mt-4">
                <p>Welcome address, team formation, and kickoff presentations from our sponsors.</p>
              </div>
            </div>
            
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-medium">Day 2: Hacking & Workshops</h3>
                  <p className="mt-1 text-muted-foreground">October 16, 2023 • 9:00 AM - 9:00 PM</p>
                </div>
                <div className="rounded-full bg-primary/10 px-4 py-1 text-xs font-medium text-primary">
                  Day 2
                </div>
              </div>
              <div className="mt-4">
                <p>Full day of coding, mentorship sessions, and technical workshops.</p>
              </div>
            </div>
            
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-medium">Day 3: Presentations & Awards</h3>
                  <p className="mt-1 text-muted-foreground">October 17, 2023 • 10:00 AM - 4:00 PM</p>
                </div>
                <div className="rounded-full bg-primary/10 px-4 py-1 text-xs font-medium text-primary">
                  Day 3
                </div>
              </div>
              <div className="mt-4">
                <p>Project submissions, team presentations, judging, and awards ceremony.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <div className="rounded-lg border bg-card p-6 shadow-sm hover-scale hover-glow animate-fade-in-left">
              <div className="mb-4 text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary animate-pulse">
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
            
            <div className="rounded-lg border bg-card p-6 shadow-sm hover-scale hover-glow animate-fade-in-up">
              <div className="mb-4 text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary animate-pulse">
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
            
            <div className="rounded-lg border bg-card p-6 shadow-sm hover-scale hover-glow animate-fade-in-right">
              <div className="mb-4 text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary animate-pulse">
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
            <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4 stagger-children">
              {["adobe.svg","amazon.svg","google.svg","microsoft.svg"].map((file, idx) => (
                <div key={idx} className="flex items-center justify-center rounded-lg border bg-card p-6 hover-scale hover-glow animate-fade-in-up">
                  <img src={`/sponsors/${file}`} alt={`Platinum sponsor ${idx + 1}`} className="max-h-12 w-auto object-contain" />
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

      {/* Registration Section */}
      <section id="register" className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Register Now</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Secure your spot for HackNext 2023. Limited seats available!
            </p>
          </div>
          
          <div className="mt-12 mx-auto max-w-md">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
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
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-medium">Who can participate?</h3>
              <p className="mt-2 text-muted-foreground">
                Anyone can participate! Whether you&apos;re a student, professional, or hobbyist, HackNext welcomes all skill levels and backgrounds.
              </p>
            </div>
            
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-medium">Do I need a team?</h3>
              <p className="mt-2 text-muted-foreground">
                You can register individually or as a team of up to 4 people. We&apos;ll also have team formation activities if you&apos;re looking to join a team.
              </p>
            </div>
            
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-medium">Is there a registration fee?</h3>
              <p className="mt-2 text-muted-foreground">
                No, participation is completely free thanks to our generous sponsors!
              </p>
            </div>
            
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-medium">What should I bring?</h3>
              <p className="mt-2 text-muted-foreground">
                Bring your laptop, charger, and any other devices you might need. For in-person participants, we&apos;ll provide food, drinks, and a comfortable hacking space.
              </p>
            </div>
            
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-medium">Will there be prizes?</h3>
              <p className="mt-2 text-muted-foreground">
                Yes! We have a prize pool worth over $20,000, including cash prizes, tech gadgets, and opportunities for the winning teams.
              </p>
            </div>
            
            <div className="rounded-lg border bg-card p-6 shadow-sm">
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
