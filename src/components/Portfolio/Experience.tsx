import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Cognizant Technology Solutions",
      position: "Senior Software Engineer",
      duration: "2022 - Present",
      location: "Remote",
      type: "Full-time",
      achievements: [
        "Led development of cloud-native microservices architecture serving 100K+ users",
        "Reduced application response time by 45% through optimization and caching strategies",
        "Mentored 5 junior developers and established coding standards across teams",
        "Implemented CI/CD pipelines that reduced deployment time from 2 hours to 15 minutes",
        "Architected security-first solutions with zero security incidents in production"
      ],
      technologies: ["Java", "Spring Boot", "AWS", "Docker", "Kubernetes", "PostgreSQL", "Redis"]
    },
    {
      company: "Beyond Soft Solutions",
      position: "Full-Stack Developer",
      duration: "2020 - 2022",
      location: "Hybrid",
      type: "Full-time",
      achievements: [
        "Developed and maintained 8+ client applications using React and Node.js",
        "Collaborated with cross-functional teams to deliver projects 20% ahead of schedule",
        "Integrated third-party APIs and payment gateways for e-commerce platforms",
        "Optimized database queries resulting in 60% improvement in application performance",
        "Participated in code reviews and maintained 95%+ test coverage across projects"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "MySQL", "JavaScript", "HTML/CSS"]
    },
    {
      company: "Tech Startup (Freelance)",
      position: "Software Development Consultant",
      duration: "2019 - 2020",
      location: "Remote",
      type: "Contract",
      achievements: [
        "Built MVP for fintech startup that secured $500K in seed funding",
        "Designed scalable database schema for user management and transaction processing",
        "Implemented real-time notifications and analytics dashboard",
        "Established development workflow and deployment processes",
        "Delivered project within tight deadline while maintaining high code quality"
      ],
      technologies: ["Python", "Django", "React", "PostgreSQL", "AWS", "Stripe API"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Professional Experience</h2>
            <p className="text-xl text-muted-foreground">
              A timeline of my professional journey, highlighting key achievements and technologies used.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={exp.company}
                className="shadow-card hover:shadow-card-hover transition-smooth hover-lift relative overflow-hidden"
              >
                {/* Timeline Indicator */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent"></div>
                
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-primary mb-1">{exp.position}</CardTitle>
                      <div className="flex items-center gap-2 text-accent font-semibold mb-2">
                        <Building2 size={16} />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location} • {exp.type}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li 
                          key={achievementIndex}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="bg-card hover:bg-accent hover:text-accent-foreground transition-smooth cursor-default"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Download Resume */}
          <div className="text-center mt-12">
            <a 
              href="/resume.pdf" 
              download
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium shadow-card hover:shadow-card-hover hover:bg-navy-light transition-smooth"
            >
              Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;