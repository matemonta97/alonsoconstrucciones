/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 
(function(){
    emailjs.init({
      publicKey: "NCVoqm-CcgDAbAsq0",
    });
 })();


  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

     // Validación manual de los campos
     let name = document.getElementById("name");
     let email = document.getElementById("email");
     let phone = document.getElementById("phone");
     let message = document.getElementById("message");

     let isValid = true;

     // Validar que los campos no estén vacíos
     [name, email, phone, message].forEach((field) => {
       if (!field.value.trim()) {
         field.classList.add("is-invalid");
         isValid = false;
       } else {
         field.classList.remove("is-invalid");
       }
     });

     // Validar formato de email
     if (email.value.trim() && !/^\S+@\S+\.\S+$/.test(email.value)) {
       email.classList.add("is-invalid");
       document.querySelector(".email-invalid").style.display = "block";
       isValid = false;
     } else {
       document.querySelector(".email-invalid").style.display = "none";
     }

     // Validar que el teléfono sea numérico y tenga al menos 6 dígitos
     if (!/^\d{6,}$/.test(phone.value.trim())) {
        phone.classList.add("is-invalid");
        document.querySelector(".phone-invalid").style.display = "block";
        isValid = false;
      } else {
        document.querySelector(".phone-invalid").style.display = "none";
      }

     if (!isValid) return;

    const formData = {
        from_name: name.value,
        reply_to: email.value,
        to_name: "Alonso Construcciones",
        phone: phone.value,
      message: message.value,
    };

    // console.log(formData)
    document.getElementById("successAlert").classList.remove("d-none");
    emailjs
      .send("service_gzg98bs", "template_zi6ka83", formData)
      .then(
        (response) => {
          console.log("Correo enviado:", response.status, response.text);
        },
        (error) => {
          alert("Error al enviar el correo.");
          console.error("Error:", error);
        }
      );
  });

document.querySelector("#year").textContent = new Date().getFullYear();
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
