import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/next.svg" alt="HackNext Logo" width={120} height={30} className="dark:invert" />
            </Link>
            <p className="text-sm text-muted-foreground">
              The premier hackathon event for innovators and creators. Join us to build the future.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#schedule" className="text-sm text-muted-foreground hover:text-foreground">
                    Schedule
                  </Link>
                </li>
                <li>
                  <Link href="#prizes" className="text-sm text-muted-foreground hover:text-foreground">
                    Prizes
                  </Link>
                </li>
                <li>
                  <Link href="#sponsors" className="text-sm text-muted-foreground hover:text-foreground">
                    Sponsors
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a href="https://twitter.com/hacknext" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://github.com/hacknext" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/hacknext" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border/40 pt-8">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} HackNext. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}