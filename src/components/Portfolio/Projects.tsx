import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Code, Database, Cpu, Gamepad2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Reinforcement Learning in Gaming - Mario Agent",
      description: "Developed and trained the 'Mario Agent,' a reinforcement learning agent using OpenAI Gym and nes-py emulator. The agent autonomously navigates the Mario game, successfully dodging obstacles, collecting power-ups, and completing levels.",
      technologies: ["Python", "OpenAI Gym", "nes-py", "Deep Q-Networks", "Reinforcement Learning", "Neural Networks"],
      githubUrl: "https://github.com/padmini-macha/mario-agent",
      liveUrl: null,
      icon: Gamepad2,
      impact: "Achieved autonomous gameplay with optimized Q-value learning and performance tracking"
    },
    {
      title: "Virtual Event Management Platform",
      description: "Built a full-stack web application using Vue.js, Node.js, and MongoDB for scalable event handling. Designed RESTful APIs and implemented secure login, data flow, and component-based architecture.",
      technologies: ["Vue.js", "Node.js", "MongoDB", "RESTful APIs", "Authentication", "Full-Stack"],
      githubUrl: "https://github.com/padmini-macha/event-management",
      liveUrl: null,
      icon: Database,
      impact: "Scalable architecture supporting multiple concurrent events with secure user management"
    },
    {
      title: "Tetris Game with Python and Pygame",
      description: "Developed a 2D game in Python applying OOP and real-time UI logic. Implemented scoring, collision detection, and responsive game controls for a smooth user experience.",
      technologies: ["Python", "Pygame", "OOP", "Game Development", "UI/UX", "Real-time Logic"],
      githubUrl: "https://github.com/padmini-macha/tetris-game",
      liveUrl: null,
      icon: Gamepad2,
      impact: "Smooth gameplay experience with optimized collision detection and responsive controls"
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