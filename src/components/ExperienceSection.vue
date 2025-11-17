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
            <h4>{{ item.company }}</h4>
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
    title: 'Mechatronics Engineer Intern',
    company: 'Volvo Group',
    date: 'May 2025 - Aug 2025',
    responsibilities: [
      'Designed automated system for trailer setup using Simulink and Speedgoat',
      'Created custom UI with Next.js and Flask',
      'Interfaced with CAN bus networks and existing hardware systems'
    ]
  },
  {
    title: 'Electronics Junior Lead',
    company: 'Pack Motorsports Baja SAE',
    date: 'Sept 2024 - Present',
    responsibilities: [
      'Leading development of custom data acquisition system',
      'Designing and fabricating sensors and wiring harnesses',
      'Managing concurrent projects across multiple subsystems'
    ]
  },
  {
    title: 'Mechatronics Engineer Intern',
    company: 'Volvo Group',
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
    date: 'Jan 2024 - May 2024',
    responsibilities: [
      'Assembled electrical systems for rover-type wireless communication testbed',
      'Researched reliable IMU sensing for drone testbeds'
    ]
  },
  {
    title: 'Engineering Captain',
    company: 'YETI Robotics',
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
