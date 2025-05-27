<script setup>
  import Main from './components/Main.vue'
  import Resume from './components/Resume.vue'
  import Projects from './components/Projects.vue'
  import Certificates from './components/Certificates.vue'
  import Contact from './components/Contact.vue'
  import Footer from './components/Footer.vue'
  import { ref, onMounted, onUnmounted } from 'vue';

  const showScrollTop = ref(false);

  const handleScroll = () => {
    showScrollTop.value = window.scrollY > 300;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
</script>

<template>
  <Main/>
  <Resume/>
  <Projects/>
  <Certificates/>
  <Contact/>
  <Footer/>
  <button
    v-if="showScrollTop"
    class="scroll-to-top-btn"
    @click="scrollToTop"
    aria-label="Scroll to top"
  >
    <i class="bi bi-arrow-up-short"></i>
  </button>
</template>

<style scoped>
.scroll-to-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 9999;
  background: #1e30f3;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  cursor: pointer;
  transition: opacity 0.3s;
}
.scroll-to-top-btn:hover {
  background: #0d1bbf;
}
</style>
