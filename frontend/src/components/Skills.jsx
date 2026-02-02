import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { portfolioData } from '@/mock';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Animate all skills
          portfolioData.skills.forEach((category) => {
            category.items.forEach((skill) => {
              setTimeout(() => {
                setAnimatedSkills((prev) => ({
                  ...prev,
                  [skill.name]: skill.level
                }));
              }, 100);
            });
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.skills.map((category, catIndex) => (
              <Card
                key={catIndex}
                className="border-none shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <CardHeader className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 text-white rounded-t-lg">
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  {category.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                          {animatedSkills[skill.name] || 0}%
                        </span>
                      </div>
                      <Progress
                        value={animatedSkills[skill.name] || 0}
                        className="h-2.5 bg-gray-200 dark:bg-slate-700"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="mt-12">
            <Card className="border-none shadow-xl">
              <CardHeader className="bg-gradient-to-br from-cyan-600 to-cyan-700 dark:from-cyan-700 dark:to-cyan-800 text-white rounded-t-lg">
                <CardTitle className="text-xl">Professional Skills</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-3">
                  {portfolioData.softSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-slate-700 dark:to-slate-600 text-blue-700 dark:text-cyan-300 font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
