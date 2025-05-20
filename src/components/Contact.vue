<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

// Define reactive form state
const form = ref({
  name: "",
  subject: "",
  email: "",
  message: "",
});

// Reference to the form element
const formRef = ref(null);

// Function to handle form submission
const sendMail = () => {
  emailjs
    .sendForm(
      "service_jng6yhp",
      "template_lkjh7rr",
      formRef.value,
      { publicKey: "8xCFavoHcMudi6ACP" }
    )
    .then(() => {
      alert("Email sent successfully!");
      // Clear the form
      form.value = {
        name: "",
        subject: "",
        email: "",
        message: "",
      };
      formRef.value.reset();
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
                            <form id="contactForm" ref="formRef" @submit.prevent="sendMail">
                                <div data-aos="fade-right" data-aos-duration="2000" class="form-floating mb-3">
                                    <input
                                        v-model="form.name"
                                        class="form-control"
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Enter your name..."
                                    />
                                    <label for="name">Full name</label>
                                </div>
                                <div data-aos="fade-right" data-aos-duration="3000" class="form-floating mb-3">
                                    <input
                                        v-model="form.subject"
                                        class="form-control"
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        placeholder="Enter your subject.."
                                    />
                                    <label for="subject">Subject</label>
                                </div>
                                <div data-aos="fade-right" data-aos-duration="4000" class="form-floating mb-3">
                                    <input
                                        v-model="form.email"
                                        class="form-control"
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="name@example.com"
                                    />
                                    <label for="email">Email address</label>
                                </div>
                                <div data-aos="fade-right" data-aos-duration="5000" class="form-floating mb-3">
                                    <textarea
                                        v-model="form.message"
                                        class="form-control"
                                        id="message"
                                        name="message"
                                        type="text"
                                        placeholder="Enter your message here..."
                                        style="height: 10rem"
                                    ></textarea>
                                    <label for="message">Message</label>
                                </div>
                                <div data-aos="fade-right" data-aos-duration="6000" class="d-grid">
                                    <button class="btn btn-primary btn-lg" id="submitButton" type="submit">
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