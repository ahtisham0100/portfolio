const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`glass-bubble absolute rounded-full bg-gradient-to-br from-terminal-green/10 to-accent/5 
                       ${i % 2 === 0 ? 'animate-float' : 'float-animation'}`}
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 90}%`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 typewriter-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-terminal-green to-accent mx-auto rounded-full"></div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Who I Am */}
          <div className="glass hover-lift glow-on-hover p-8 rounded-2xl group">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-terminal-green/20 border border-terminal-green/30 mr-4 group-hover:shadow-glow transition-all duration-300">
                <svg className="w-6 h-6 text-terminal-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Who I Am</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Highly driven and adaptable Software Engineering student equipped with 
              hands-on experience in full-stack web development. Passionate about creating efficient, user-friendly applications.
            </p>
          </div>

          {/* My Education */}
          <div className="glass hover-lift glow-on-hover p-8 rounded-2xl group">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-accent/20 border border-accent/30 mr-4 group-hover:shadow-glow transition-all duration-300">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground">My Education</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing BE in Software Engineering at National University of Sciences and Technology (NUST)
              with a GPA of 3.07. Previously completed Intermediate education with 88% and Matriculation with 97%.
            </p>
          </div>

          {/* My Expertise */}
          <div className="glass hover-lift glow-on-hover p-8 rounded-2xl group">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-primary/20 border border-primary/30 mr-4 group-hover:shadow-glow transition-all duration-300">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20,18C20.5,18 21,18.4 21,19C21,19.5 20.6,20 20,20H4C3.5,20 3,19.6 3,19C3,18.4 3.4,18 4,18H20M3,7V17H21V7H3M21,5C22,5 23,6 23,7V19C23,20 22,21 21,21H3C2,21 1,20 1,19V7C1,6 2,5 3,5H21M16,10H18V12H16V10M16,13H18V15H16V13Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground">My Expertise</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Proven expertise in building interactive, scalable, and responsive web applications using technologies
              such as React, Node.js, Express, MySQL, and EJS. Adept in designing RESTful APIs and implementing robust
              backend logic.
            </p>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="glass-dark hover-lift p-8 md:p-12 rounded-2xl border border-terminal-green/30">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-terminal-green/20 border-2 border-terminal-green flex items-center justify-center mr-4">
              <span className="text-terminal-green font-bold text-lg">$</span>
            </div>
            <h3 className="text-2xl font-semibold text-terminal-text">Professional Summary</h3>
          </div>
          
          <div className="space-y-4 text-terminal-text/90 leading-relaxed">
            <p>
              I am a Software Engineering student with a passion for full-stack web development. My 6 months of hands-on
              experience has equipped me with the skills to build interactive, scalable, and responsive web applications.
            </p>
            <p>
              I have proven expertise in technologies such as React, Node.js, Express, MySQL, and EJS. I am adept in
              designing RESTful APIs, implementing robust backend logic, and applying Git-based collaborative workflows.
            </p>
            <p>
              Currently, I am expanding my knowledge and skills at NUST (MCS), where I am pursuing my BE in Software
              Engineering. I am always eager to learn new technologies and methodologies to enhance my development capabilities.
            </p>
          </div>

          {/* Terminal cursor effect */}
          <div className="mt-6 flex items-center">
            <span className="text-terminal-green mr-2">{'>'}</span>
            <span className="text-terminal-green terminal-cursor">_</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About