<template>
  <nav class="nav" :style="{ boxShadow: scrolled ? '0 2px 10px var(--shadow)' : 'none' }">
    <div class="nav__container">
      <a href="#home" class="nav__logo" @click.prevent="scrollToSection('home')">VW</a>
      <div class="nav__menu">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="`#${link.id}`"
          class="nav__link"
          :class="{ active: activeSection === link.id }"
          @click.prevent="scrollToSection(link.id)"
        >
          {{ link.label }}
        </a>
      </div>
      <button class="theme-toggle" @click="toggleTheme" aria-label="Toggle theme">
        <span class="theme-toggle__track"></span>
        <span class="theme-toggle__icon">{{ themeIcon }}</span>
        <span class="theme-toggle__slider"></span>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
]

const theme = ref<'light' | 'dark'>('light')
const scrolled = ref(false)
const activeSection = ref('home')

const themeIcon = computed(() => theme.value === 'light' ? '🌙' : '☀️')

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme.value)
  localStorage.setItem('theme', theme.value)
}

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

const handleScroll = () => {
  scrolled.value = window.scrollY > 50

  // Update active section
  const scrollPosition = window.scrollY + 500
  const sections = navLinks.map(link => ({
    id: link.id,
    element: document.getElementById(link.id)
  }))

  for (const section of sections) {
    if (section.element) {
      const sectionTop = section.element.offsetTop
      const sectionHeight = section.element.offsetHeight

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        activeSection.value = section.id
        break
      }
    }
  }
}

onMounted(() => {
  // Check for saved theme preference or default to system preference
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  theme.value = savedTheme || (systemPrefersDark ? 'dark' : 'light')
  document.documentElement.setAttribute('data-theme', theme.value)

  // Listen for scroll events
  window.addEventListener('scroll', handleScroll)

  // Listen for system theme changes
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const handleSystemThemeChange = (e: MediaQueryListEvent) => {
    if (!localStorage.getItem('theme')) {
      theme.value = e.matches ? 'dark' : 'light'
      document.documentElement.setAttribute('data-theme', theme.value)
    }
  }
  mediaQuery.addEventListener('change', handleSystemThemeChange)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
