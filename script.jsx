const roles = [
    "Web Developer",
    "Frontend Developer",
    "Java Programmer"
];

const typingText = document.getElementById("typing-text");

let roleIndex = 0;
let charIndex = 0;

function typeRole() {

    if (charIndex < roles[roleIndex].length) {

        typingText.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeRole, 100);

    } else {

        setTimeout(deleteRole, 1500);
    }
}

function deleteRole() {

    if (charIndex > 0) {

        typingText.textContent =
            roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(deleteRole, 50);

    } else {

        roleIndex++;

        if (roleIndex === roles.length) {
            roleIndex = 0;
        }

        setTimeout(typeRole, 300);
    }
}

// typeRole();