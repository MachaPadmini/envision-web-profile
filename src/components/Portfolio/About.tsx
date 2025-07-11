import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Cloud, Brain, Shield } from 'lucide-react';

const About = () => {
  const skillCategories = [
    {
      category: "Languages and Web",
      skills: ["C", "C++", "Java", "Python", "R", "HTML", "CSS", "Vue.js", "JavaScript", "Node.js"]
    },
    {
      category: "Frameworks and Libraries",
      skills: ["Pandas", "NumPy", "Seaborn", "Pygame"]
    },
    {
      category: "Databases and Tools",
      skills: ["SQL", "MySQL", "MongoDB", "Git", "VS Code", "PyCharm", "Eclipse", "Colab", "RStudio"]
    },
    {
      category: "Cloud Systems",
      skills: ["AWS", "Google Cloud Platform", "Windows", "Linux", "PowerShell"]
    }
  ];

  const strengths = [
    {
      icon: Code2,
      title: 'Full-Stack Expertise',
      description: 'Proficient in both frontend and backend technologies, with experience in modern frameworks and cloud platforms.'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Experienced in designing and implementing scalable cloud solutions using AWS and Azure services.'
    },
    {
      icon: Brain,
      title: 'AI & Innovation',
      description: 'Passionate about AI and machine learning, constantly exploring new technologies and their practical applications.'
    },
    {
      icon: Shield,
      title: 'Security-First',
      description: 'Strong security awareness with focus on building secure, robust applications that protect user data.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A passionate Software Engineer with expertise in full-stack development, cloud computing, and AI. 
              I thrive on solving complex problems and building applications that make a real-world impact.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Background & Education */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary mb-4">Background & Education</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With a strong foundation in computer science and years of hands-on experience, I've developed 
                  a comprehensive understanding of software development lifecycle, from conception to deployment.
                </p>
                <p>
                  My journey in technology has taken me through various domains including enterprise applications, 
                  cloud infrastructure, and AI-powered solutions. I believe in writing clean, maintainable code 
                  and following best practices for security and scalability.
                </p>
                <p>
                  What sets me apart is my adaptability to new technologies, strong problem-solving skills, 
                  and my ability to bridge the gap between technical complexity and business requirements.
                </p>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {skillCategories.map((category) => (
                  <div key={category.category}>
                    <h4 className="font-semibold text-accent mb-2">{category.category}:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, index) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="px-3 py-1 bg-card hover:bg-accent hover:text-accent-foreground transition-smooth cursor-default"
                          style={{
                            animationDelay: `${index * 0.1}s`
                          }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Strengths Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, index) => (
              <Card 
                key={strength.title}
                className="group shadow-card hover:shadow-card-hover transition-smooth hover-lift"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                      <strength.icon size={32} className="text-accent group-hover:text-accent-foreground" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-3">{strength.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{strength.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;