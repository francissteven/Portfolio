<script setup>
    import Alpinejs from './icons/Alpinejs.vue';
    import Bootstrap from './icons/Bootstrap.vue';
    import CodeIgniter from './icons/CodeIgniter.vue';
    import Css from './icons/Css.vue';
    import GitGitHub from './icons/GitGitHub.vue';
    import HTML from './icons/HTML.vue';
    import JavaScript from './icons/JavaScript.vue';
    import Laravel from './icons/Laravel.vue';
    import Livewire from './icons/Livewire.vue';
    import MySQL from './icons/MySQL.vue';
    import PHP from './icons/PHP.vue';
    import Vuejs from './icons/Vuejs.vue';
    import WebDevelopment from './icons/WebDevelopment.vue';
</script>
<template>
    <div class="main">
        <div class="container px-5 my-5">
            <div class="text-center mb-5">
                <h1 data-aos="fade-down" class="display-5 fw-bolder mb-0">
                    <span class="text-gradient d-inline" id="Resume">Resume</span>
                </h1>
            </div>
            <div class="row gx-5 justify-content-center">
                <div class="col-lg-11 col-xl-9 col-xxl-8">
                    <section>
                        <div class="d-flex align-items-center justify-content-between mb-4">
                            <h2 data-aos="fade-right" class="text-primary fw-bolder mb-0">Experience</h2>
                            <a data-aos="fade-left" class="btn btn-primary px-4 py-3 btn-sm" href="@/assets/files/ALMINE_RESUME.pdf" download="ALMINE_RESUME.pdf">
                                <div class="d-inline-block bi bi-download me-2"></div>
                                Download Resume
                            </a>
                        </div>

                        <div data-aos="zoom-in" class="card shadow border-0 rounded-4 mb-5">
                            <div class="card-body p-5">
                                <div class="row align-items-center gx-5">
                                    <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                        <div class="bg-light p-4 rounded-4">
                                            <div class="text-primary fw-bolder mb-2">2024 - Present</div>
                                            <div class="small fw-bolder">Software Developer</div>
                                            <div class="small text-muted">SSA Consulting Group Services International</div>
                                            <div class="small text-muted">Pasig City, Metro Manila</div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div>
                                            Assist in designing and building tools, services, and applications for the web and websites. 
                                            Creates modern applications and use innovative workarounds for issues in collaboration with their team of developers.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" class="card shadow border-0 rounded-4 mb-5">
                            <div class="card-body p-5">
                                <div class="row align-items-center gx-5">
                                    <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                        <div class="bg-light p-4 rounded-4">
                                            <div class="text-primary fw-bolder mb-2">2024 - 2024</div>
                                            <div class="small fw-bolder">Web Developer Intern</div>
                                            <div class="small text-muted">Bicol University</div>
                                            <div class="small text-muted">Legazpi City, Albay</div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div>
                                            Modifying existing and creating additional system features. 
                                            Built responsive, accessible, and dynamic web pages to enable users to easily navigate site.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h2 data-aos="fade-right" class="text-secondary fw-bolder mb-4">Education</h2>
                        <div data-aos="zoom-in" class="card shadow border-0 rounded-4 mb-5">
                            <div class="card-body p-5">
                                <div class="row align-items-center gx-5">
                                    <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                        <div class="bg-light p-4 rounded-4">
                                            <div class="text-secondary fw-bolder mb-2">2020 - 2024</div>
                                            <div class="mb-2">
                                                <div class="small fw-bolder">Bicol University</div>
                                                <div class="small text-muted">Legazpi City, Albay</div>
                                            </div>
                                            <div class="fst-italic">
                                                <div class="small text-muted">Bachelor of Science</div>
                                                <div class="small text-muted">Information Technology</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div>
                                            The Bachelor of Science in Information Technology <strong>(BSIT)</strong> is a four-year degree program that trains students to conceptualize, design, and implement software applications. 
                                            It prepares graduates for IT roles involving the installation, operation, development, maintenance, and administration of computer applications. 
                                            The program aims to develop information technologists who can help individuals and organizations solve problems using IT techniques and processes. 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="pb-5"></div>
                    <section>
                        <div data-aos="zoom-in" class="card shadow border-0 rounded-4 mb-5">
                            <div class="card-body p-5">
                                <div class="mb-5">
                                    <div class="d-flex align-items-center mb-4">
                                        <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                            <i class="bi bi-tools"></i>
                                        </div>
                                        <h3 class="fw-bolder mb-0">
                                            <span class="text-gradient d-inline">Professional Skills</span>
                                        </h3>
                                    </div>
                                    <WebDevelopment/>
                                </div>
                        
                                <!-- Web Tools Section -->
                                <div class="mb-0">
                                    <div class="d-flex align-items-center mb-4">
                                        <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                            <i class="bi bi-code-slash"></i>
                                        </div>
                                        <h3 class="fw-bolder mb-0">
                                            <span class="text-gradient d-inline">Web Tools</span>
                                        </h3>
                                    </div>

                                    <div class="row row-cols-2 row-cols-md-3 g-3 mb-4">
                                        <Alpinejs/><Bootstrap/><CodeIgniter/>
                                        <Css/><GitGitHub/><HTML/>
                                        <Laravel/><Livewire/><MySQL/>
                                        <PHP/><Vuejs/><JavaScript/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>                         
                </div>
            </div>
        </div>
    </div>
</template>