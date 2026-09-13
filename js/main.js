let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a ");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*= " + id + "]")
          .classList.add("active");
      });
    }
  });
};

const navbarToggle = document.querySelector(".navbar-toggle");
const navbar = document.querySelector(".nav-bar");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbar.classList.toggle("active");
});

const typedText = document.querySelector(".text-animation span");

if (typedText) {
  const words = ["WEB DEVELOPER", "FRONT-END DEVELOPER"];
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const typeLoop = () => {
    const currentWord = words[wordIndex];

    if (!deleting) {
      charIndex++;
      typedText.textContent = currentWord.slice(0, charIndex);

      if (charIndex === currentWord.length) {
        deleting = true;
        setTimeout(typeLoop, 1200);
        return;
      }
    } else {
      charIndex--;
      typedText.textContent = currentWord.slice(0, charIndex);

      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    const speed = deleting ? 90 : 150;
    setTimeout(typeLoop, speed);
  };

  typeLoop();
}

const sendEmail = (e) => {
  e.preventDefault(); 

  const full_name = document.getElementById("full_name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone_number = document.getElementById("phone_number").value.trim();
  const message = document.getElementById("message").value.trim();

  if (full_name === "" || email === "" || phone_number === "" || message === "") {
    alert("please fill in all fields before sending the message.");
    return; 
  }

  const params = {
    full_name: full_name,
    email: email,
    phone_number: phone_number,
    message: message,
  };

  const serviceID = "service_75pdwq8"; 
  const templateID = "template_44lshiu"; 

  emailjs.send(serviceID, templateID, params)
    .then(res => {
        alert("Message sent successfully!");
        document.querySelector("form").reset();
    })
    .catch(err => {
        console.error("Failed to send message:", err);
    });
};
