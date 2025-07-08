import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Code, Database, Cpu } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Cloud-Native E-Commerce Platform",
      description: "A scalable microservices-based e-commerce platform built with React, Node.js, and deployed on AWS with Docker containers. Features real-time inventory management, payment processing, and advanced analytics.",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker", "Kubernetes", "Stripe API"],
      githubUrl: "https://github.com/example/ecommerce-platform",
      liveUrl: "https://demo-ecommerce.vercel.app",
      icon: Database,
      impact: "Reduced server costs by 40% and improved response times by 60%"
    },
    {
      title: "AI-Powered Code Review Assistant",
      description: "An intelligent code review tool that uses machine learning to identify potential bugs, security vulnerabilities, and suggest code improvements. Integrated with popular IDEs and version control systems.",
      technologies: ["Python", "TensorFlow", "FastAPI", "React", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/example/ai-code-reviewer",
      liveUrl: "https://ai-reviewer-demo.com",
      icon: Cpu,
      impact: "Reduced code review time by 50% and improved code quality scores by 35%"
    },
    {
      title: "Real-Time Collaborative IDE",
      description: "A web-based collaborative coding environment with real-time synchronization, integrated chat, code execution, and project sharing capabilities. Supports multiple programming languages.",
      technologies: ["TypeScript", "Socket.io", "Monaco Editor", "Express", "Redis", "AWS"],
      githubUrl: "https://github.com/example/collaborative-ide",
      liveUrl: "https://collab-ide-demo.com",
      icon: Code,
      impact: "Used by 10,000+ developers across 50+ countries for collaborative coding"
    },
    {
      title: "Smart Home Security System",
      description: "IoT-based security system with computer vision for intrusion detection, mobile app for remote monitoring, and machine learning for behavioral pattern analysis.",
      technologies: ["Python", "OpenCV", "React Native", "MQTT", "TensorFlow", "Firebase"],
      githubUrl: "https://github.com/example/smart-security",
      liveUrl: null,
      icon: Database,
      impact: "99.2% accuracy in intrusion detection with minimal false positives"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of selected projects demonstrating technical expertise, problem-solving skills, 
              and real-world impact across various domains.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="group shadow-card hover:shadow-card-hover transition-smooth hover-lift overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                      <project.icon size={24} className="text-accent group-hover:text-accent-foreground" />
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="opacity-70 hover:opacity-100 transition-smooth"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={20} />
                        </a>
                      </Button>
                      {project.liveUrl && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="opacity-70 hover:opacity-100 transition-smooth"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={20} />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-primary group-hover:text-accent transition-smooth">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Impact */}
                  <div className="mb-4 p-3 bg-accent/5 rounded-lg border-l-4 border-accent">
                    <p className="text-sm font-medium text-accent">Impact: {project.impact}</p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button 
                        size="sm"
                        className="flex-1 bg-primary hover:bg-navy-light"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github size={20} className="mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;