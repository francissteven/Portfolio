import './assets/css/main.css'
import './libs/email'

import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bootstrap'
import '@popperjs/core/dist/umd/popper.min.js'
import 'aos/dist/aos.css'
import AOS from 'aos'

const app = createApp(App);
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
AOS.init();
app.mount('#app');
