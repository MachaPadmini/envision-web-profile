import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand & Description */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Software Engineer</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Passionate about building scalable, secure applications and solving complex problems 
                with modern technologies. Always excited to work on innovative projects.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:contact@example.com"
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-primary-foreground/80 hover:text-primary-foreground transition-smooth py-1"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold">Get In Touch</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>📧 pdmnmacha98@gmail.com</p>
                <p>📱 2036272017</p>
                <p>📍 Connecticut, CT</p>
              </div>
              <div className="pt-2">
                <a 
                  href="/resume.pdf" 
                  download
                  className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-smooth"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-primary-foreground/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-primary-foreground/80 text-sm">
                © {currentYear} Software Engineer Portfolio. All rights reserved.
              </p>
              <p className="text-primary-foreground/80 text-sm flex items-center gap-1">
                Built with <Heart size={16} className="text-red-400" /> using React & TypeScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;