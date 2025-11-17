<template>
  <section class="about" id="about">
    <div class="container">
      <h2 class="section__title">About Me</h2>
      <div class="about__content">
        <div class="about__text">
          <p>
            I'm a third-year Electrical Engineering student at North Carolina State University with
            a 4.0 GPA and a passion for mechatronics and embedded systems. My experience spans from
            designing automated systems for semi-trucks at Volvo Group to leading data acquisition
            development for Baja SAE racing.
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
                  <li>Python</li>
                  <li>C/C++</li>
                  <li>Java</li>
                  <li>MATLAB</li>
                  <li>Go</li>
                </ul>
              </div>

              <div class="skill-category">
                <h4>Hardware/Tools</h4>
                <ul class="skill-list">
                  <li>KiCAD</li>
                  <li>SolidWorks</li>
                  <li>Simulink</li>
                  <li>Arduino</li>
                  <li>Real-time computers</li>
                </ul>
              </div>

              <div class="skill-category">
                <h4>Web Development</h4>
                <ul class="skill-list">
                  <li>Next.js</li>
                  <li>React</li>
                  <li>Flask</li>
                  <li>JavaScript</li>
                  <li>HTML/CSS</li>
                </ul>
              </div>
            </div>
          </div>

          <a href="/resume.pdf" class="btn btn--primary">View Resume</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
