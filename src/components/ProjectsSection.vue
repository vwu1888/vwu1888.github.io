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

<style scoped>
.project {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  align-items: center;
}

@media (max-width: 768px) {
  .project {
    grid-template-columns: 1fr;
  }
}

.project--featured {
  background-color: var(--bg-secondary);
  padding: var(--spacing-lg);
  border-radius: 12px;
  box-shadow: 0 4px 20px var(--shadow);
}

.project__tag {
  display: inline-block;
  color: var(--accent);
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
}

.project__title {
  font-size: 1.8rem;
  margin-bottom: var(--spacing-sm);
}

.project__description {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  line-height: 1.7;
}

.project__tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  list-style: none;
  margin-bottom: var(--spacing-md);
}

.project__tech li {
  background-color: var(--code-bg);
  padding: 0.4rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: var(--font-mono);
  color: var(--accent);
  border: 1px solid var(--border);
}

.project__links {
  margin-bottom: var(--spacing-md);
}

.project__link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  transition: var(--transition);
}

.project__link:hover {
  transform: translateX(5px);
}

.project__note {
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-style: italic;
}

.project__image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 20px var(--shadow);
}

.project__placeholder {
  width: 100%;
  aspect-ratio: 16/9;
  background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--border) 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-weight: 600;
}

/* Subsections */
.project__subsections {
  margin-top: var(--spacing-md);
}

.subsection {
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
  cursor: pointer;
  transition: var(--transition);
}

.subsection:hover {
  border-color: var(--accent);
}

.subsection summary {
  font-weight: 600;
  color: var(--accent);
  cursor: pointer;
  user-select: none;
}

.subsection p {
  margin-top: var(--spacing-sm);
  color: var(--text-secondary);
}
</style>
