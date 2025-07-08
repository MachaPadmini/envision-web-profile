import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Cognizant Technology Solutions",
      position: "Process Executive – Data",
      duration: "Nov 2021 - Jul 2023",
      location: "Hyderabad, India",
      type: "Full-time",
      achievements: [
        "Improved data-driven decision-making by developing dashboards and reports for enterprise clients",
        "Enhanced data security by identifying and resolving system vulnerabilities",
        "Led data integrity reviews aligned with performance and compliance KPIs in regulated sectors",
        "Collaborated with cross-functional teams to troubleshoot data and software delivery issues",
        "Streamlined data processing workflows resulting in improved efficiency"
      ],
      technologies: ["Python", "SQL", "Data Analytics", "Dashboard Development", "Security Auditing"]
    },
    {
      company: "Beyond Soft Solutions",
      position: "Junior Software Engineer",
      duration: "Nov 2019 - Sep 2021",
      location: "Hyderabad, India",
      type: "Full-time",
      achievements: [
        "Developed backend and data integration pipelines using Python and Java",
        "Collaborated with engineers to improve system performance and optimize backend processes",
        "Gained hands-on experience with debugging, testing, and secure deployment processes",
        "Applied design patterns and algorithms to deliver efficient features with long-term maintainability",
        "Contributed to reducing system latency through performance optimization techniques"
      ],
      technologies: ["Python", "Java", "Backend Development", "Data Integration", "Performance Optimization"]
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