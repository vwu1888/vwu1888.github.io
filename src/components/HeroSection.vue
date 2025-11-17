<template>
  <section class="hero" id="home">
    <div class="container">
      <div class="hero__content">
        <img
          v-if="profileImageExists"
          src="/images/profile.jpg"
          alt="Vincent Wu"
          class="hero__image"
          @error="handleImageError"
        >
        <h1 class="hero__title">
          Hi, I'm <span class="highlight">Vincent Wu</span>
        </h1>
        <p class="hero__subtitle">
          Electrical Engineering Student | Control Systems | Embedded Systems Developer
        </p>
        <p class="hero__description">
          I design and build intelligent systems that bridge hardware and software.
        </p>
        <div class="hero__cta">
          <a href="#projects" class="btn btn--primary" @click.prevent="scrollToSection('projects')">View My Work</a>
          <a href="#contact" class="btn btn--secondary" @click.prevent="scrollToSection('contact')">Get in Touch</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const profileImageExists = ref(true)

const scrollToSection = (sectionId: string) => {
  const target = document.getElementById(sectionId)
  if (target) {
    const offset = 80
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }
}

const handleImageError = () => {
  profileImageExists.value = false
}
</script>
