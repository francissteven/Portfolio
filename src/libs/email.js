function sendMail(event) {
    event.preventDefault(); // Prevent default form submission

    let params = {
        name: document.getElementById("name").value,
        subject: document.getElementById("subject").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_jng6yhp", "template_lkjh7rr", params)
        .then((response) => {
            alert("Email sent successfully!");
            // Optionally, you can clear the form after submission
            document.getElementById("contactForm").reset();
        })
        .catch((error) => {
            alert("Failed to send email. Please try again later.");
            console.error("Error:", error);
        });
}
