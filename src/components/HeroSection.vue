<template>
  <section class="hero" id="home">
    <div class="container">
      <div class="hero__content">
        <img
          v-if="imageLoaded"
          src="/images/profile.jpg"
          alt="Vincent Wu"
          class="hero__image"
          @error="imageLoaded = false"
        />
        <h1 class="hero__title">Hi, I'm <span class="highlight">Vincent Wu</span></h1>
        <p class="hero__subtitle">
          Electrical Engineering Student | Control Systems | Embedded Systems Developer
        </p>
        <p class="hero__description">
          I design and build intelligent systems that bridge hardware and software.
        </p>
        <div class="hero__cta">
          <a href="#projects" class="btn btn--primary" @click.prevent="scrollToSection('projects')"
            >View My Work</a
          >
          <a href="#contact" class="btn btn--secondary" @click.prevent="scrollToSection('contact')"
            >Get in Touch</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const imageLoaded = ref(true)

const scrollToSection = (sectionId: string) => {
  const target = document.getElementById(sectionId)
  if (target) {
    const offset = 80
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    })
  }
}
</script>

<style scoped>
/* ===========================
   Hero Section
   =========================== */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-top: 80px;
}

.hero__content {
  max-width: 800px;
}

.hero__image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  object-position: 40% center;
  margin-bottom: var(--spacing-md);
  box-shadow: 0 4px 12px var(--shadow);
}

.hero__title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
  line-height: 1.2;
}

.highlight {
  color: var(--accent);
}

.hero__subtitle {
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
}

.hero__description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
}

.hero__cta {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hero__cta {
    flex-direction: column;
  }
}
</style>
