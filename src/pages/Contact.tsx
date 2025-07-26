import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { siteConfig } from '../content';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedin: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, linkedin, message } = formData;

    if (!name || !email || !linkedin || !message) {
      alert('Please fill in all the fields before submitting.');
      return;
    }

    const subject = encodeURIComponent('Contact from Portfolio Website');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nLinkedIn: ${linkedin}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-foreground dark:text-foreground">
      {/* Content Wrapper */}
      <main className="flex-1">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto overflow-x-hidden">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Form Section */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal">Let's</h1>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-300 [-webkit-text-stroke:2px_black] dark:[-webkit-text-stroke:2px_white]">talk</h1>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal">for</h1>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold">Something special</h2>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-foreground/80 leading-relaxed">
                I seek to push the limits of creativity to create high-engaging,
                user-friendly, and memorable interactive experiences.
              </p>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="space-y-3 sm:space-y-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="h-12 sm:h-14 px-4 sm:px-6 border-2 border-black dark:border-white bg-transparent text-sm sm:text-base"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="h-12 sm:h-14 px-4 sm:px-6 border-2 border-black dark:border-white bg-transparent text-sm sm:text-base"
                  />
                  <Input
                    type="text"
                    name="linkedin"
                    placeholder="Your LinkedIn profile"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    required
                    className="h-12 sm:h-14 px-4 sm:px-6 border-2 border-black dark:border-white bg-transparent text-sm sm:text-base"
                  />
                  <Textarea
                    name="message"
                    placeholder="How can I help?*"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="px-4 sm:px-6 py-3 sm:py-4 border-2 border-black dark:border-white bg-transparent resize-none text-sm sm:text-base"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <Button
                    type="submit"
                    className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-6 sm:px-8 py-3 sm:py-4 h-12 sm:h-14 text-sm sm:text-base w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Get In Touch
                  </Button>

                  {/* Social Links */}
                  <div className="flex gap-4 pt-2 justify-center sm:justify-start w-full sm:w-auto">
                    <a href="https://www.linkedin.com/in/yaganti-lohithnath-reddy-40a36728b/" target="_blank" rel="noopener noreferrer">
                      <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://github.com/LOHITHNATH2910" target="_blank" rel="noopener noreferrer">
                      <img src="/github.svg" alt="GitHub" className="w-8 h-8 hover:scale-110 transition-transform dark:invert" />
                    </a>
                    <a href="https://leetcode.com/u/Lohithnath2910/" target="_blank" rel="noopener noreferrer">
                      <img src="/leetcode (1).svg" alt="LeetCode" className="w-8 h-8 hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://instagram.com/lohith_2910" target="_blank" rel="noopener noreferrer">
                      <img src="/instagram (1).svg" alt="Instagram" className="w-8 h-8 hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </form>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold">Get in touch</h3>
                <p className="text-sm sm:text-base text-foreground/80">
                  I'm always open to discussing new opportunities, creative projects, or collaborations.
                </p>
              </div>

              {[{ title: 'Email', value: siteConfig.email, Icon: Mail, href: `mailto:${siteConfig.email}` },
                { title: 'Phone', value: siteConfig.phone, Icon: Phone, href: `tel:${siteConfig.phone}` },
                { title: 'Location', value: siteConfig.location, Icon: MapPin, href: '' }].map(({ title, value, Icon, href }, i) => (
                <Card key={i} className="border-2 border-black dark:border-white bg-transparent">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black dark:bg-white rounded-full flex items-center justify-center">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-black" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm sm:text-base">{title}</h4>
                        {href ? (
                          <a href={href} className="text-foreground/80 hover:text-foreground text-sm sm:text-base">
                            {value}
                          </a>
                        ) : (
                          <p className="text-foreground/80 text-sm sm:text-base">{value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Availability */}
              <Card className="bg-gray-50 dark:bg-gray-800 border-2 border-black dark:border-white">
                <CardContent className="p-4 sm:p-6">
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Current Availability</h4>
                  <p className="text-foreground/80 mb-3 sm:mb-4 text-sm sm:text-base">
                    I'm currently available for freelance projects and full-time opportunities.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                      Available for new projects
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
