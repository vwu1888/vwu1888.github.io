<template>
  <section class="contact" id="contact">
    <div class="container">
      <h2 class="section__title">Get In Touch</h2>
      <div class="contact__content">
        <p class="contact__description">
          I'm always open to new opportunities, collaborations, or just a conversation about
          engineering and technology. Feel free to reach out!
        </p>
        <div class="contact__links">
          <a
            href="mailto:vwu1888@gmail.com"
            class="contact__link"
            aria-label="Email"
            title="vwu1888@gmail.com"
            @click="copyEmail"
          >
            <img src="/icons/email.svg" alt="Email" class="contact__icon" />
            <span class="contact__text">{{ emailButtonText }}</span>
          </a>

          <a
            href="https://www.linkedin.com/in/vincentjwu/"
            class="contact__link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <img src="/icons/linkedin-logo.svg" alt="LinkedIn" class="contact__icon" />
            <span class="contact__text">LinkedIn</span>
          </a>

          <a
            href="https://github.com/vwu1888"
            class="contact__link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <img src="/icons/github-logo.svg" alt="GitHub" class="contact__icon" />
            <span class="contact__text">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emailButtonText = ref('vwu1888@gmail.com')

const copyEmail = (event: MouseEvent) => {
  event.preventDefault()
  const email = 'vwu1888@gmail.com'

  navigator.clipboard
    .writeText(email)
    .then(() => {
      emailButtonText.value = 'Email copied!'
      setTimeout(() => {
        emailButtonText.value = email
      }, 2000)
    })
    .catch(() => {
      // Fallback: open mailto if clipboard fails
      window.location.href = `mailto:${email}`
    })
}
</script>

<style scoped>
.contact__content {
  max-width: 750px;
  margin: 0 auto;
  text-align: center;
}

.contact__description {
  font-size: 1.4rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
}

.contact__links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
}

@media (max-width: 768px) {
  .contact__links {
    grid-template-columns: 1fr;
  }
}

.contact__link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);
  background-color: var(--bg-secondary);
  border: 2px solid var(--border);
  border-radius: 8px;
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 600;
  transition: var(--transition);
}

.contact__link:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
  box-shadow: 0 4px 12px var(--shadow);
}

.contact__icon {
  width: 60px;
  height: 60px;
  transition: var(--transition);
  filter: invert(0);
}

[data-theme='dark'] .contact__icon {
  filter: invert(1);
}

.contact__text {
  font-size: 1rem;
  text-align: center;
  word-break: break-word;
}
</style>
