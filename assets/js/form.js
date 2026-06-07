/* ============================================================
   FORM VALIDATION & SUBMISSION
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ── Enquiry / CTA Form ──
  const enquiryForm = document.querySelector('.js-enquiry-form');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name  = enquiryForm.querySelector('[name="name"]');
      const phone = enquiryForm.querySelector('[name="phone"]');

      if (!name.value.trim()) { showError(name, 'Please enter your name'); return; }
      if (!isValidPhone(phone.value)) { showError(phone, 'Please enter a valid 10-digit mobile number'); return; }

      // TODO: Replace with real API / WhatsApp redirect
      const whatsappMsg = encodeURIComponent(
        'Jai Shree Ram! My name is ' + name.value +
        '. I am interested in a yatra package. Please call me on ' + phone.value + '.'
      );
      window.open('https://wa.me/919876543210?text=' + whatsappMsg, '_blank');
    });
  }

  // ── Contact Page Form ──
  const contactForm = document.querySelector('.js-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // TODO: Connect to backend / EmailJS / Formspree
      alert('Thank you! We will contact you within 24 hours. Jai Shree Ram! 🙏');
      contactForm.reset();
    });
  }

  function isValidPhone(phone) {
    return /^[6-9]\d{9}$/.test(phone.replace(/\s/g, ''));
  }

  function showError(input, msg) {
    input.style.borderColor = '#E24B4A';
    input.setAttribute('placeholder', msg);
    input.focus();
    setTimeout(function () {
      input.style.borderColor = '';
      input.setAttribute('placeholder', input.dataset.placeholder || '');
    }, 3000);
  }

});
