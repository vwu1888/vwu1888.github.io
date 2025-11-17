<template>
  <div class="home-view">
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ExperienceSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ContactSection from '@/components/ContactSection.vue'

import { onMounted } from 'vue'

onMounted(() => {
  // Set up intersection observer for fade-in animations
  const observerOptions = {
    threshold: 0,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe all sections and project cards
  document.querySelectorAll('section, .project').forEach(el => {
    observer.observe(el)
  })
})
</script>

<style scoped>
.home-view {
  width: 100%;
}
</style>
