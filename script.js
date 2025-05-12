// Dark mode toggle functionality
document.addEventListener("DOMContentLoaded", function () {
    const themeBtn = document.getElementById("themeToggle");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeBtn.textContent = "🌞";
    } else {
        document.body.classList.remove("dark-mode");
        themeBtn.textContent = "🌙";
    }

    themeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeBtn.textContent = "🌞";
            localStorage.setItem("theme", "dark");
        } else {
            themeBtn.textContent = "🌙";
            localStorage.setItem("theme", "light");
        }
    });

    // Age display logic
    const age = calculateAge("2004-05-19");
    const ageParagraph = document.getElementById("age-display");
    if (ageParagraph) {
        ageParagraph.textContent =
            "I am a " + age + "-year-old computer engineering student with a strong interest in programming, cybersecurity, and IT support.";
    }
});

// Age calculator
function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (!name || !email || !message) {
        alert("All fields are required.");
        return;
    }

    const parms = {
        name: name,
        email: email,
        message: message,
        To : "rgeni2020@gmail.com",
        From : email
    };

    emailjs.send("service_9kg8tjb", "template_89slgas", parms).then(function () {
        alert("Mail sent successfully");
        document.getElementById("contactForm").reset();
    }, function (error) {
        alert("Failed to send email. Please try again later.");
        console.error("EmailJS Error:", error);
    });
});

