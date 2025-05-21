<script setup>
import Typed from 'typed.js';
import { onMounted, ref, watch } from 'vue';

// Theme state
const theme = ref(localStorage.getItem('theme') || 'light');

// Apply theme to body
const applyTheme = () => {
    document.body.classList.toggle('dark-mode', theme.value === 'dark');
    localStorage.setItem('theme', theme.value);
};

// Watch for theme changes
watch(theme, applyTheme, { immediate: true });

// Toggle theme
const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
};

// Typed.js
onMounted(() => {
    const options = {
        strings: [
            '<strong>Web Developer</strong>',
            '<strong>Backend Developer</strong>',
            '<strong>Laravel Developer</strong>',
        ],
        typeSpeed: 150,
        backSpeed: 50,
        loop: true,
    };

    new Typed('#typed', options);
});
</script>
<style scoped>
.profile-logo {
    width: 25px;
    height: 25px;
    object-fit: cover;
    margin-left: 8px;
}
/* Theme toggle button style */
.theme-toggle-btn {
    border: none;
    background: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    margin-left: 1rem;
}
</style>
<style>
/* Global dark mode styles */
body.dark-mode {
    background-color: #181a1b !important;
    color: #f1f1f1 !important;
}
body.dark-mode .bg-light {
    background-color: #23272b !important;
}
body.dark-mode .bg-white {
    background-color: #23272b !important;
}
body.dark-mode .navbar,
body.dark-mode .navbar-light {
    background-color: #23272b !important;
}
body.dark-mode .text-muted {
    color: #b0b3b8 !important;
}
body.dark-mode .card {
    background-color: #23272b !important;
    color: #f1f1f1 !important;
}
body.dark-mode .form-control {
    background-color: #23272b !important;
    color: #f1f1f1 !important;
    border-color: #444;
}
body.dark-mode .btn-outline-dark {
    color: #f1f1f1;
    border-color: #f1f1f1;
}
body.dark-mode .btn-outline-dark:hover {
    background-color: #f1f1f1;
    color: #23272b;
}
body.dark-mode .form-floating > label {
    color: #b0b3b8 !important;
}
</style>
<template>
    <div class="main" id="Home">
        <nav class="fixed-top navbar navbar-expand-lg navbar-light bg-white py-2">
            <div class="container px-5">
                <a class="navbar-brand" href="#Home">
                    <span class="fw-bolder text-primary">Francis Steven D. Almiñe</span>
                    <img class="profile-logo ms-2" loading="eager" src="/favicon.png" />
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                        <li class="nav-item"><a class="nav-link text-primary" href="#Home">Home</a></li>
                        <li class="nav-item"><a class="nav-link text-primary" href="#Resume">Resume</a></li>
                        <li class="nav-item"><a class="nav-link text-primary" href="#Projects">Projects</a></li>
                        <li class="nav-item"><a class="nav-link text-primary" href="#Certificates">Certificates</a></li>
                        <li class="nav-item"><a class="nav-link text-primary" href="#Contact">Contact</a></li>
                        <li class="nav-item d-flex align-items-center">
                            <button
                                class="theme-toggle-btn"
                                :aria-label="theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'"
                                @click="toggleTheme"
                            >
                                <i v-if="theme === 'light'" class="bi bi-moon-stars"></i>
                                <i v-else class="bi bi-sun"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <header class="py-5 mt-5">
            <div class="container px-5 pb-5">
                <div class="row gx-5 align-items-center">
                    <div data-aos="fade-down" class="col-xxl-5">
                        <div class="text-center text-xxl-start">
                            <div class="badge bg-gradient-primary-to-secondary text-white mb-4">
                                <div class="text-uppercase">Software & Web Development</div>
                            </div>
                            <div class="fs-3 fw-light text-muted">
                                I help businesses build, scale, and thrive online.
                            </div>
                            <h1 class="display-3 fw-bolder mb-5">
                                <span class="text-gradient d-inline">Turning Ideas Into Reality</span>
                            </h1>
                            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                <a class="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" href="#Resume">
                                    Resume
                                </a>
                                <a class="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" href="#Projects">
                                    Projects
                                </a>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down" class="col-xxl-7">
                        <div class="d-flex justify-content-center mt-5 mt-xxl-0">
                            <div class="profile bg-gradient-primary-to-secondary">
                                <img class="profile-img" loading="eager" src="@/assets/images/pic.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section class="bg-light py-5">
            <div class="container px-5">
                <div class="row gx-5 justify-content-center">
                    <div class="col-xxl-8">
                        <div class="text-center my-5">
                            <h2 data-aos="fade-down" class="display-5 fw-bolder">
                                <span class="text-gradient d-inline">About Me</span>
                            </h2>
                            <p data-aos="fade-down" class="lead fw-light mb-2">
                                I'm <strong>Francis</strong>, a
                                <span id="typed"></span>.
                            </p>
                            <p data-aos="fade-down" class="text-muted">
                                I specialize in building efficient, secure, and maintainable applications.
                            </p>
                            <div data-aos="fade-down" class="d-flex justify-content-center fs-2 gap-4">
                                <a
                                    class="text-gradient"
                                    href="https://www.facebook.com/francissteven.almine"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i class="bi bi-facebook"></i>
                                </a>
                                <a
                                    class="text-gradient"
                                    href="https://www.linkedin.com/in/francissteven-18466931b/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i class="bi bi-linkedin"></i>
                                </a>
                                <a
                                    class="text-gradient"
                                    href="https://github.com/francissteven"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i class="bi bi-github"></i>
                                </a>
                                <a
                                    class="text-gradient"
                                    href="https://www.instagram.com/frncs_stvn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i class="bi bi-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
