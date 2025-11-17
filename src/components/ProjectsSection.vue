<template>
  <section class="projects" id="projects">
    <div class="container">
      <h2 class="section__title">Featured Projects</h2>

      <article
        v-for="project in projects"
        :key="project.id"
        class="project"
        :class="{ 'project--featured': project.featured }"
      >
        <div v-if="project.imagePosition === 'left'" class="project__image">
          <img
            v-if="project.imageSrc"
            :src="project.imageSrc"
            :alt="project.title"
            @error="handleImageError"
          />
          <div v-else class="project__placeholder">Image Coming Soon</div>
        </div>

        <div class="project__content">
          <span v-if="project.tag" class="project__tag">{{ project.tag }}</span>
          <h3 class="project__title">{{ project.title }}</h3>
          <p class="project__description">{{ project.description }}</p>
          <ul class="project__tech">
            <li v-for="tech in project.technologies" :key="tech">{{ tech }}</li>
          </ul>
          <div v-if="project.githubUrl" class="project__links">
            <a :href="project.githubUrl" class="project__link" target="_blank">
              View on GitHub →
            </a>
          </div>
          <p v-if="project.note" class="project__note">{{ project.note }}</p>

          <div v-if="project.subsections" class="project__subsections">
            <details
              v-for="subsection in project.subsections"
              :key="subsection.title"
              class="subsection"
            >
              <summary>{{ subsection.title }}</summary>
              <p>{{ subsection.description }}</p>
            </details>
          </div>
        </div>

        <div v-if="project.imagePosition === 'right'" class="project__image">
          <img
            v-if="project.imageSrc"
            :src="project.imageSrc"
            :alt="project.title"
            @error="handleImageError"
          />
          <div v-else class="project__placeholder">Image Coming Soon</div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Project } from '@/types'

const projects: Project[] = [
  {
    id: 'baja-daq',
    featured: true,
    tag: 'Featured Project',
    title: 'Baja SAE Data Acquisition System',
    description:
      "Leading the development and integration of a custom DAQ system for Pack Motorsports' off-road racing vehicle. Designing sensors, fabricating wiring harnesses, and managing concurrent projects across multiple subsystems.",
    technologies: ['KiCAD PCB Design', 'Embedded C', 'CAN Bus', 'Sensor Integration'],
    githubUrl: 'https://github.com/wmBaja/PCB-Design',
    imageSrc: '/images/baja-daq.jpg',
    imagePosition: 'left',
    subsections: [
      {
        title: 'Engine RPM Sensor',
        description:
          'Custom piezo-based sensor for accurate engine speed measurement in harsh racing conditions.',
      },
      {
        title: 'Suspension Hall Effect Sensor',
        description: 'PCB-based hall effect sensor for real-time suspension travel monitoring.',
      },
      {
        title: 'MDF4 Logging System',
        description:
          'Industry-standard data logging implementation for comprehensive vehicle telemetry (In Development).',
      },
    ],
  },
  {
    id: 'media-control',
    featured: false,
    title: 'Custom Media Control Box',
    description:
      'Physical volume mixer for Windows applications. Forked the open-source DEEJ project and developed custom Arduino firmware to handle multiple encoders, buttons, and LEDs for per-application audio control.',
    technologies: ['Arduino/C++', 'Hardware Integration', 'Windows API', '3D Design'],
    githubUrl: 'https://github.com/vwu1888/deej',
    imagePosition: 'left',
  },
  {
    id: 'led-matrix',
    featured: false,
    title: '8x8 LED Rasterization Driver',
    description:
      'Digital logic final project featuring frame-based animation system. Built with discrete logic components, EEPROM frame storage, and switch-based playback controls. Demonstrates fundamental understanding of digital circuits and memory interfacing.',
    technologies: ['Digital Logic', 'EEPROM', 'Circuit Design', 'Breadboard Prototyping'],
    imageSrc: '/images/led-matrix.jpg',
    imagePosition: 'right',
  },
]

const handleImageError = (e: Event) => {
  const target = e.target as HTMLImageElement
  const parent = target.parentElement
  if (parent) {
    target.style.display = 'none'
    const placeholder = document.createElement('div')
    placeholder.className = 'project__placeholder'
    placeholder.textContent = 'Image Coming Soon'
    parent.appendChild(placeholder)
  }
}
</script>
