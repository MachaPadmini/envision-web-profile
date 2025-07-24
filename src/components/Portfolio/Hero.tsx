import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 tech-gradient rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-accent/20 rounded-full opacity-30 animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/20 rounded-full opacity-40 animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Name and Title */}
          <div className="fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4 leading-tight">
              <span className="block">Software</span>
              <span className="block text-accent">Engineer</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
              Full-Stack Software Engineer with a passion for solving complex problems and building 
              <span className="text-accent font-medium"> scalable, secure, and cloud-native applications</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="slide-up flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-navy-light text-primary-foreground shadow-card hover:shadow-card-hover transition-smooth"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="slide-up flex justify-center space-x-6 mb-16">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card shadow-card hover:shadow-card-hover hover:bg-accent hover:text-accent-foreground transition-smooth hover-lift"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card shadow-card hover:shadow-card-hover hover:bg-accent hover:text-accent-foreground transition-smooth hover-lift"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:contact@example.com"
              className="p-3 rounded-full bg-card shadow-card hover:shadow-card-hover hover:bg-accent hover:text-accent-foreground transition-smooth hover-lift"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={scrollToNext}
            className="animate-bounce hover:text-accent transition-smooth"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;