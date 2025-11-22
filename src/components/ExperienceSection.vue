<template>
  <section class="experience" id="experience">
    <div class="container">
      <h2 class="section__title">Experience</h2>

      <div class="timeline">
        <div
          v-for="(item, index) in experiences"
          :key="index"
          class="timeline__item"
        >
          <div class="timeline__marker"></div>
          <div class="timeline__content">
            <h3>{{ item.title }}</h3>
            <h4>
              <a
                v-if="item.companyUrl"
                :href="item.companyUrl"
                target="_blank"
                class="company-link"
              >
                {{ item.company }}
              </a>
              <span v-else>{{ item.company }}</span>
            </h4>
            <span class="timeline__date">{{ item.date }}</span>
            <ul>
              <li v-for="(responsibility, idx) in item.responsibilities" :key="idx">
                {{ responsibility }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ExperienceItem } from '@/types'

const experiences: ExperienceItem[] = [
  {
    title: 'Electronics Junior Lead',
    company: 'Pack Motorsports Baja SAE',
    companyUrl: 'https://www.ncstatebaja.com/',
    date: 'Sept 2024 - Present',
    responsibilities: [
      'Development and integration of a custom DAQ system',
      'Fabricated sensors and wiring harnesses to fit the specific needs of the car',
      'Management of multiple concurrent projects and coordination with other subsystems'
    ]
  },
  {
    title: 'Mechatronics Engineer Intern',
    company: 'Volvo Group',
    companyUrl: 'https://www.volvogroup.com/',
    date: 'May 2025 - Aug 2025',
    responsibilities: [
      'Designed automated system for trailer setup using Simulink and Speedgoat',
      'Created custom UI with Next.js and Flask',
      'Interfaced with CAN bus networks and existing hardware systems'
    ]
  },
  {
    title: 'Mechatronics Engineer Intern',
    company: 'Volvo Group',
    companyUrl: 'https://www.volvogroup.com/',
    date: 'May 2024 - Aug 2024',
    responsibilities: [
      'Developed traction features involving airbag suspension',
      'Implemented differential lock simulation in HIL testing',
      'Analyzed and optimized HIL development workflows'
    ]
  },
  {
    title: 'Undergraduate Research Assistant',
    company: 'AERPAW',
    companyUrl: 'https://aerpaw.org/',
    date: 'Jan 2024 - May 2024',
    responsibilities: [
      'Assembled electrical systems for rover-type wireless communication testbed',
      'Researched reliable IMU sensing for drone testbeds'
    ]
  },
  {
    title: 'Engineering Captain',
    company: 'YETI Robotics',
    companyUrl: 'https://www.yetirobotics.org/',
    date: 'Dec 2022 - Jul 2023',
    responsibilities: [
      'Led 60-person engineering team to FRC World Championships',
      'Coordinated mechanical, electrical, and software subteams',
      'Implemented professional codebase structure and GitHub workflow',
      'Achieved zero electrical failures through improved standards'
    ]
  }
]
</script>

<style scoped>
  .experience {
      background-color: var(--bg-secondary);
  }

  .timeline {
      max-width: 800px;
      margin: 0 auto;
      position: relative;
      padding-left: var(--spacing-lg);
  }

  .timeline::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 2px;
      background-color: var(--border);
  }

  .timeline__item {
      position: relative;
      margin-bottom: var(--spacing-lg);
      padding-left: var(--spacing-md);
  }

  .timeline__marker {
      position: absolute;
      left: -9px;
      top: 5px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background-color: var(--accent);
      border: 3px solid var(--bg-secondary);
  }

  .timeline__content h3 {
      font-size: 1.3rem;
      margin-bottom: 0.25rem;
  }

  .timeline__content h4 {
      color: var(--accent);
      font-weight: 600;
      margin-bottom: 0.5rem;
  }

  .company-link {
      color: var(--accent);
      text-decoration: none;
      transition: var(--transition);
      border-bottom: 2px solid transparent;
  }

  .company-link:hover {
      color: var(--accent-hover);
      border-bottom-color: var(--accent-hover);
  }

  .timeline__date {
      display: block;
      color: var(--text-secondary);
      font-size: 0.9rem;
      margin-bottom: var(--spacing-sm);
  }

  .timeline__content ul {
      list-style: none;
      margin-top: var(--spacing-sm);
  }

  .timeline__content li {
      color: var(--text-secondary);
      padding: 0.4rem 0;
      padding-left: 1.5rem;
      position: relative;
  }

  .timeline__content li::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--accent);
  }
</style>
