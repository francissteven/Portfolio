import './assets/css/main.css';
import './libs/email';

import { createApp } from 'vue';
import App from './App.vue';

// Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'; // Includes Bootstrap and Popper.js

// Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.min.css';

// AOS (Animate on Scroll) library
import 'aos/dist/aos.css';
import AOS from 'aos';

// Initialize the Vue app
const app = createApp(App);

// Initialize Bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// Initialize AOS animations
AOS.init();

// Mount the Vue app
app.mount('#app');
