<template>
  <footer class="footer">
    <div class="container">
      <p>Design and built by Vincent Wu in 2025.</p>
      <p class="footer__location">📍 Raleigh, North Carolina</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
  .footer {
      background-color: var(--bg-secondary);
      padding: var(--spacing-md) 0;
      text-align: center;
      border-top: 1px solid var(--border);
  }

  .footer p {
      color: var(--text-secondary);
      margin: 0.5rem 0;
  }

  .footer__location {
      font-size: 0.9rem;
  }
</style>
