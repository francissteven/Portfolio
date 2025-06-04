<script setup>
    import { onMounted, nextTick } from 'vue';
    import { Tooltip } from 'bootstrap/dist/js/bootstrap.bundle';
    import { gsap } from 'gsap';

    onMounted(() => {
        nextTick(() => {
            const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
            tooltipTriggerList.forEach(el => new Tooltip(el));
        });
    });

    onMounted(() => {
        gsap.to('.profile-image', {
            y: -20,
            repeat: -1,
            yoyo: true,
            duration: 2,
            ease: 'power1.inOut'
        });
    });
</script>
<template>
    <div class="main">
        <section class="py-5">
            <div class="container px-5 mb-5">
                <div class="text-center mb-5">
                    <h1 data-aos="fade-down" class="display-5 fw-bolder mb-0">
                        <span class="text-gradient d-inline" id="Projects">Projects</span>
                        <img class="profile-image" width="100" height="150" loading="eager" src="@/assets/images/me.png" />
                    </h1>
                </div>
                <div class="row gx-5 justify-content-center">
                    <div class="col-sm-12 col-lg-11 col-xl-9 col-xxl-8">
                        <div data-aos="zoom-in" class="card overflow-hidden shadow-lg rounded-5 border-0 mb-5" style="background-color: #f7f7f7;">
                            <div class="card-body p-4">
                                <div class="d-flex flex-column flex-lg-row align-items-center">
                                    <img 
                                        class="img-fluid rounded-4 shadow-sm mb-3 mb-lg-0" 
                                        src="@/assets/images/projects/p1.jpg" 
                                        alt="Project Image" 
                                        style="width: 100%; max-width: 300px; height: auto; object-fit: cover;"
                                    >
                                    <div class="p-3" style="flex: 1;">
                                        <h4 class="fw-bold text-primary mb-2">CAPSTONE Thesis</h4>
                                        <p>PAWsitive: A Web-Based Pet Care Veterinary Clinic Management System 
                                            <i class="text-secondary">(private repository)</i>
                                        </p>
                                        <img 
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                                            class="img-fluid me-1" 
                                            style="width:30px;height:30px;"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="custom-tooltip"
                                            data-bs-title="PHP"
                                        >
                                        <img 
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                                            class="img-fluid me-1" 
                                            style="width:30px;height:30px;"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="custom-tooltip"
                                            data-bs-title="Bootstrap"
                                        >
                                        <img 
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
                                            class="img-fluid me-1" 
                                            style="width:30px;height:30px;"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="custom-tooltip"
                                            data-bs-title="MySQL"
                                        >
                                        <img 
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
                                            class="img-fluid me-1" 
                                            style="width:30px;height:30px;"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="custom-tooltip"
                                            data-bs-title="Sass"
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" class="card overflow-hidden shadow-lg rounded-5 border-0 mb-5" style="background-color: #f7f7f7;">
                            <div class="card-body p-4">
                                <div class="d-flex flex-column flex-lg-row align-items-center">
                                    <img 
                                        class="img-fluid rounded-4 shadow-sm mb-3 mb-lg-0" 
                                        src="@/assets/images/projects/p2.jpg" 
                                        alt="Project Image" 
                                        style="width: 100%; max-width: 300px; height: auto; object-fit: cover;"
                                    >
                                    <div class="p-3" style="flex: 1;">
                                        <h4 class="fw-bold text-primary mb-2">Internship</h4>
                                        <p>BUCS-RDMS: Research Document Management System 
                                            <i class="text-secondary">(private repository)</i>
                                        </p>
                                        <img 
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/alpinejs/alpinejs-original.svg" 
                                            class="img-fluid me-1" 
                                            style="width:30px;height:30px;"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="custom-tooltip"
                                            data-bs-title="Alpine.js"
                                        >
                                        <img 
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" 
                                            class="img-fluid me-1" 
                                            style="width:30px;height:30px;"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="custom-tooltip"
                                            data-bs-title="Bootstrap"
                                        >
                                        <img 
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain-wordmark.svg"
                                            class="img-fluid me-1" 
                                            style="width:30px;height:30px;"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="custom-tooltip"
                                            data-bs-title="CodeIgniter"
                                        >
                                        <img 
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
                                            class="img-fluid me-1" 
                                            style="width:30px;height:30px;"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="custom-tooltip"
                                            data-bs-title="MySQL"
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" class="card overflow-hidden shadow-lg rounded-5 border-0 mb-5" style="background-color: #f7f7f7;">
                            <div class="card-body p-4">
                                <div class="d-flex flex-column flex-lg-row align-items-center">
                                    <img 
                                        class="img-fluid rounded-4 shadow-sm mb-3 mb-lg-0" 
                                        src="@/assets/images/projects/p3.jpg" 
                                        alt="Project Image" 
                                        style="width: 100%; max-width: 300px; height: auto; object-fit: cover;"
                                    >
                                    <div class="p-3" style="flex: 1;">
                                        <h4 class="fw-bold text-primary mb-2">Personal Project</h4>
                                        <p>Twitter Clone
                                            <i class="text-secondary">(private repository)</i>
                                        </p>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" 
                                            class="img-fluid me-1" 
                                            style="width:30px;height:30px;"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="custom-tooltip"
                                            data-bs-title="Bootstrap"
                                        >
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" 
                                            class="img-fluid me-1" 
                                            style="width:30px;height:30px;"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="custom-tooltip"
                                            data-bs-title="Laravel"
                                        >
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" 
                                            class="img-fluid me-1" 
                                            style="width:30px;height:30px;"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="custom-tooltip"
                                            data-bs-title="MySQL"
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" class="card overflow-hidden shadow-lg rounded-5 border-0 mb-5" style="background-color: #f7f7f7;">
                            <div class="card-body p-4">
                                <div class="d-flex flex-column flex-lg-row align-items-center">
                                    <img 
                                        class="img-fluid rounded-4 shadow-sm mb-3 mb-lg-0" 
                                        src="@/assets/images/projects/p4.jpg" 
                                        alt="Project Image" 
                                        style="width: 100%; max-width: 300px; height: auto; object-fit: cover;"
                                    >
                                    <div class="p-3" style="flex: 1;">
                                        <h4 class="fw-bold text-primary mb-2">E-Commerce Project</h4>
                                        <p>Pet Accessories Shop
                                            <i class="text-secondary">(private repository)</i>
                                        </p>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" 
                                            class="img-fluid me-1" 
                                            style="width:30px;height:30px;"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="custom-tooltip"
                                            data-bs-title="PHP"
                                        >
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" 
                                            class="img-fluid me-1" 
                                            style="width:30px;height:30px;"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="custom-tooltip"
                                            data-bs-title="Bootstrap"
                                        >
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" 
                                            class="img-fluid me-1" 
                                            style="width:30px;height:30px;"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="custom-tooltip"
                                            data-bs-title="MySQL"
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" class="card overflow-hidden shadow-lg rounded-5 border-0 mb-5" style="background-color: #f7f7f7;">
                            <div class="card-body p-4">
                                <div class="d-flex flex-column flex-lg-row align-items-center">
                                    <img 
                                        class="img-fluid rounded-4 shadow-sm mb-3 mb-lg-0" 
                                        src="@/assets/images/projects/p5.jpg" 
                                        alt="Project Image" 
                                        style="width: 100%; max-width: 300px; height: auto; object-fit: cover;"
                                    >
                                    <div class="p-3" style="flex: 1;">
                                        <h4 class="fw-bold text-primary mb-2">Personal Project</h4>
                                        <p>Web-Based Veterinary Clinic Management System 
                                            <i class="text-secondary">(private repository)</i>
                                        </p>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/alpinejs/alpinejs-original.svg" 
                                            class="img-fluid me-1" 
                                            style="width:30px;height:30px;"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="custom-tooltip"
                                            data-bs-title="Alpine.js"
                                        >
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" 
                                            class="img-fluid me-1" 
                                            style="width:30px;height:30px;"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="custom-tooltip"
                                            data-bs-title="Bootstrap"
                                        >
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" 
                                            class="img-fluid me-1" 
                                            style="width:30px;height:30px;"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="custom-tooltip"
                                            data-bs-title="Laravel"
                                        >
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" 
                                            class="img-fluid me-1" 
                                            style="width:30px;height:30px;"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="custom-tooltip"
                                            data-bs-title="MySQL"
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" class="card overflow-hidden shadow-lg rounded-5 border-0 mb-5" style="background-color: #f7f7f7;">
                            <div class="card-body p-4">
                                <div class="d-flex flex-column flex-lg-row align-items-center">
                                    <img 
                                        class="img-fluid rounded-4 shadow-sm mb-3 mb-lg-0" 
                                        src="@/assets/images/projects/p6.jpg" 
                                        alt="Project Image" 
                                        style="width: 100%; max-width: 300px; height: auto; object-fit: cover;"
                                    >
                                    <div class="p-3" style="flex: 1;">
                                        <h4 class="fw-bold text-primary mb-2">Personal Project</h4>
                                        <p>Task Management System 
                                            <i class="text-secondary">(private repository)</i>
                                        </p>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" 
                                            class="img-fluid me-1" 
                                            style="width:30px;height:30px;"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="custom-tooltip"
                                            data-bs-title="Bootstrap"
                                        >
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" 
                                            class="img-fluid me-1" 
                                            style="width:30px;height:30px;"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="custom-tooltip"
                                            data-bs-title="Laravel"
                                        >
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/livewire/livewire-original.svg" 
                                            class="img-fluid me-1" 
                                            style="width:30px;height:30px;"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="custom-tooltip"
                                            data-bs-title="Livewire"
                                        >
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" 
                                            class="img-fluid me-1" 
                                            style="width:30px;height:30px;"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-custom-class="custom-tooltip"
                                            data-bs-title="MySQL"
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                
        </section>
    </div>
</template>

<style scoped>
.main {
  overflow-x: hidden;
}
</style>