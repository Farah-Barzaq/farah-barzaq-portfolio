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
// menuIcon.onclick = () => {
//     menuIcon.classList.toggle("fa-bars");
//     navBar.classList.toggle("active");
// }
const navbarToggle = document.querySelector(".navbar-toggle");
const navbar = document.querySelector(".nav-bar");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbar.classList.toggle("active");
});

// const sendEmail = (e) => {
//   e.preventDefault(); // لمنع الصفحة من التحديث عند الضغط على الزر

//   // سحب البيانات من الحقول (تأكدي أن الـ ID مطابق لما في الـ HTML)
//   const params = {
//     full_name: document.getElementById("full_name").value,
//     email: document.getElementById("email").value,
//     phone_number: document.getElementById("phone_number").value,
//     message: document.getElementById("message").value,
//   };

//   const serviceID = "service_75pdwq8"; // تجدينه في Email Services
//   const templateID = "template_44lshiu"; // تجدينه في Email Templates

//   emailjs.send(serviceID, templateID, params)
//     .then(res => {
//         // إذا نجح الاختبار
//         alert("تم الإرسال بنجاح! تفحصي بريدك الآن.");
//         console.log(res);
//     })
//     .catch(err => {
//         // إذا فشل (سيظهر لكِ السبب في الـ Console)
//         console.error("فشل الإرسال:", err);
//     });
// };
const sendEmail = (e) => {
  e.preventDefault(); 

  // 1. سحب البيانات
  const full_name = document.getElementById("full_name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone_number = document.getElementById("phone_number").value.trim();
  const message = document.getElementById("message").value.trim();

  // 2. التحقق من أن الحقول ليست فارغة
  if (full_name === "" || email === "" || phone_number === "" || message === "") {
    alert("يرجى ملء جميع الحقول المطلوبة قبل الإرسال!");
    return; // التوقف عن الإكمال في حال وجود حقل فارغ
  }

  // 3. إكمال عملية الإرسال إذا كانت البيانات موجودة
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
        alert("تم الإرسال بنجاح!");
        document.querySelector("form").reset();
    })
    .catch(err => {
        console.error("فشل الإرسال:", err);
    });
};
// function changeMode() {
//   document.body.classList.toggle("light-mode");
// }