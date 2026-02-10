const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Mesajınız için teşekkürler! En kısa sürede dönüş yapacağım. 😊");
      contactForm.reset();
    });
