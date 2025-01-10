<script setup>
import { ref } from "vue";

// Define reactive form state
const form = ref({
  name: "",
  subject: "",
  email: "",
  message: "",
});

// Function to handle form submission
const sendMail = (event) => {
  event.preventDefault(); // Prevent default form submission

  const params = {
    name: form.value.name,
    subject: form.value.subject,
    email: form.value.email,
    message: form.value.message,
  };

  emailjs
    .send("service_jng6yhp", "template_lkjh7rr", params)
    .then((response) => {
      alert("Email sent successfully!");
      // Clear the form
      form.value = {
        name: "",
        subject: "",
        email: "",
        message: "",
      };
    })
    .catch((error) => {
      alert("Failed to send email. Please try again later.");
      console.error("Error:", error);
    });
};
</script>

<template>
    <div class="main">
        <section class="py-5">
            <div class="container px-5">
                <!-- Contact form-->
                <div data-aos="fade-down" class="bg-light rounded-4 py-5 px-4 px-md-5">
                    <div data-aos="fade-down" data-aos-duration="2000" class="text-center mb-5">
                        <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
                            <i class="bi bi-envelope"></i>
                        </div>
                        <h1 class="fw-bolder" id="Contact">Get in touch</h1>
                        <p class="lead fw-normal text-muted mb-0">Let's work together!</p>
                    </div>
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-8 col-xl-6">
                            <form id="contactForm" @submit="sendMail">
                                <div
                                data-aos="fade-right"
                                data-aos-duration="2000"
                                class="form-floating mb-3"
                                >
                                <input
                                    v-model="form.name"
                                    class="form-control"
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name..."
                                />
                                <label for="name">Full name</label>
                                </div>
                                <div
                                data-aos="fade-right"
                                data-aos-duration="3000"
                                class="form-floating mb-3"
                                >
                                <input
                                    v-model="form.subject"
                                    class="form-control"
                                    id="subject"
                                    type="text"
                                    placeholder="Enter your subject.."
                                />
                                <label for="subject">Subject</label>
                                </div>
                                <div
                                data-aos="fade-right"
                                data-aos-duration="4000"
                                class="form-floating mb-3"
                                >
                                <input
                                    v-model="form.email"
                                    class="form-control"
                                    id="email"
                                    type="email"
                                    placeholder="name@example.com"
                                />
                                <label for="email">Email address</label>
                                </div>
                                <div
                                data-aos="fade-right"
                                data-aos-duration="5000"
                                class="form-floating mb-3"
                                >
                                <textarea
                                    v-model="form.message"
                                    class="form-control"
                                    id="message"
                                    type="text"
                                    placeholder="Enter your message here..."
                                    style="height: 10rem"
                                ></textarea>
                                <label for="message">Message</label>
                                </div>
                                <div
                                data-aos="fade-right"
                                data-aos-duration="6000"
                                class="d-grid"
                                >
                                <button
                                    class="btn btn-primary btn-lg"
                                    id="submitButton"
                                    type="submit"
                                >
                                    Submit
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>