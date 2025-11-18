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
          <a href="mailto:vwu1888@gmail.com" class="contact__link">
            <span class="contact__icon">✉️</span>
            <span>vwu1888@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/vincentjwu/" class="contact__link" target="_blank">
            <span class="contact__icon">💼</span>
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/vwu1888" class="contact__link" target="_blank">
            <span class="contact__icon">💻</span>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.contact__content {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.contact__description {
  font-size: 1.1rem;
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
  font-size: 1.5rem;
}
</style>
