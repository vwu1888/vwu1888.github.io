<script setup lang="ts">
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'

import { RouterView } from 'vue-router'

onMounted(() => {
  // Performance Monitoring
  if ('performance' in window) {
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const pageLoadTime = perfData.loadEventEnd - perfData.fetchStart
      console.log(`⚡ Page loaded in ${pageLoadTime.toFixed(2)}ms`)
    })
  }
})
</script>

<template>
  <div id="app">
    <NavBar />
    <main>
      <RouterView />
    </main>
    <FooterSection />
  </div>
</template>

<style scoped>
main {
  min-height: calc(100vh - 60px);
}
</style>
