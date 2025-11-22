<template>
  <section class="about" id="about">
    <div class="container">
      <h2 class="section__title">About Me</h2>
      <div class="about__content">
        <div class="about__text">
          <p>
            I'm a third-year Electrical Engineering student at North Carolina State University with
            a 4.0 GPA and a passion for control and embedded systems. My experience spans from
            designing automated systems for semi-trucks at Volvo Group to leading data acquisition
            development for Pack Motorsports Baja SAE.
          </p>
          <p>
            I thrive on the challenge of integrating hardware and software to solve real-world
            problems. Whether it's developing real-time control systems, designing custom PCBs, or
            building full-stack interfaces, I bring technical depth and hands-on experience to every
            project.
          </p>

          <!-- Skills Grid -->
          <div class="skills">
            <h3 class="skills__title">Technical Skills</h3>
            <div class="skills__grid">
              <div class="skill-category">
                <h4>Programming</h4>
                <ul class="skill-list">
                  <li>C/C++</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>MATLAB</li>
                  <li>Go</li>
                  <li>Vue.js</li>
                </ul>
              </div>

              <div class="skill-category">
                <h4>Hardware & Design</h4>
                <ul class="skill-list">
                  <li>KiCAD</li>
                  <li>SolidWorks CAD</li>
                  <li>Circuit Design</li>
                  <li>Prototyping</li>
                  <li>Data acquisition</li>
                </ul>
              </div>

              <div class="skill-category">
                <h4>Embedded & Control</h4>
                <ul class="skill-list">
                  <li>Simulink</li>
                  <li>Arduino/Microcontrollers</li>
                  <li>Real-time systems</li>
                  <li>Control algorithms</li>
                </ul>
              </div>
            </div>
          </div>

          <a href="/resume.pdf" class="btn btn--primary" target="_blank" rel="noopener noreferrer">View Resume</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.about {
  background-color: var(--bg-secondary);
}

.about__content {
  max-width: 900px;
  margin: 0 auto;
}

.about__text p {
  font-size: 1.2rem;
  margin-bottom: var(--spacing-md);
  color: var(--text-secondary);
  line-height: 1.8;
}

.skills {
  margin: var(--spacing-lg) 0;
}

.skills__title {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
}

.skills__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

@media (max-width: 768px) {
  .skills__grid {
    grid-template-columns: 1fr;
  }
}

.skill-category h4 {
  color: var(--accent);
  margin-bottom: var(--spacing-sm);
  font-size: 1.2rem;
}

.skill-list {
  list-style: none;
}

.skill-list li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  font-size: 1.1rem;
  color: var(--text-secondary);
  position: relative;
}

.skill-list li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: bold;
}
</style>
