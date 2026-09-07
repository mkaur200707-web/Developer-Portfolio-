const roles = [
    "Frontend Developer",
    "Web Designer",
    "Java Programmer",
    "Creative Developer"
];

const typingText = document.getElementById("typingText");

let roleIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function typingAnimation() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingText.textContent = currentRole.substring(0, characterIndex + 1);
        characterIndex++;

        if (characterIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typingAnimation, 1600);
            return;
        }
    } else {
        typingText.textContent = currentRole.substring(0, characterIndex - 1);
        characterIndex--;

        if (characterIndex === 0) {
            isDeleting = false;
            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typingAnimation, isDeleting ? 50 : 100);
}

typingAnimation();

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {

        navigationLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");
        navLinks.classList.remove("show");
    });
});
function openCertificate(title) {
    document.getElementById("certificateTitle").textContent = title;
    document.getElementById("certificateModal").classList.add("show");
}

function closeCertificate() {
    document.getElementById("certificateModal").classList.remove("show");
}

window.onclick = function(event) {
    const modal = document.getElementById("certificateModal");

    if (event.target === modal) {
        closeCertificate();
    }
};
