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
  { id: 'contact', label: 'Contact' },
]

const theme = ref<'light' | 'dark'>('light')
const scrolled = ref(false)
const activeSection = ref('home')

const themeIcon = computed(() => (theme.value === 'light' ? '🌙' : '☀️'))

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
      behavior: 'smooth',
    })
  }
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 50

  // Update active section
  const scrollPosition = window.scrollY + 500
  const sections = navLinks.map((link) => ({
    id: link.id,
    element: document.getElementById(link.id),
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

<style scoped>
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--bg-primary);
  border-bottom: 1px solid var(--border);
  z-index: 1000;
  transition: var(--transition);
}

.nav__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-sm) var(--spacing-md);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-sm);
}

.nav__logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent);
  text-decoration: none;
  transition: var(--transition);
  flex-shrink: 0;
}

.nav__logo:hover {
  opacity: 0.8;
}

.nav__menu {
  display: flex;
  gap: var(--spacing-md);
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  max-width: 100%;
 }

/* Hide scrollbar for Chrome, Safari and Opera */
.nav__menu::-webkit-scrollbar {
  display: none;
}

@media (max-width: 768px) {
  .nav__container {
    gap: var(--spacing-xs);
    padding: var(--spacing-sm);
  }

  .nav__menu {
    gap: var(--spacing-sm);
    padding: 0 var(--spacing-xs);
  }

  .nav__link {
    white-space: nowrap;
  }

  .theme-toggle {
    flex-shrink: 0;
  }
}

.nav__link {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
  position: relative;
  cursor: pointer;
  padding-bottom: 5px;
}

.nav__link::after {
  content: '';
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--accent);
  transition: width 0.3s ease;
}

.nav__link:hover::after,
.nav__link.active::after {
  width: 100%;
}

.theme-toggle {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  position: relative;
  width: 60px;
  height: 30px;
  flex-shrink: 0;
}

.theme-toggle__track {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--border);
  border-radius: 15px;
  transition: var(--transition);
}

.theme-toggle:hover .theme-toggle__track {
  background-color: var(--accent);
}

.theme-toggle__slider {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 24px;
  height: 24px;
  background-color: var(--bg-primary);
  border-radius: 50%;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.theme-toggle__icon {
  position: absolute;
  font-size: 1.1rem;
  top: 10%;
  right: 3px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

[data-theme='dark'] .theme-toggle__slider {
  transform: translateX(30px);
}

[data-theme='dark'] .theme-toggle__track {
  background-color: var(--accent);
}

[data-theme='dark'] .theme-toggle__icon {
  transform: translateX(-30px);
}
</style>
