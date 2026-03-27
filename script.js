document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Highlight current page in navbar
  const currentPage = window.location.pathname.split('/').pop();
  const navItems = document.querySelectorAll('.nav-links a');
  
  navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      item.classList.add('active');
    }
  });

  // Handle Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerText;
      submitBtn.innerText = 'Sending...';
      submitBtn.disabled = true;

      // You'll need to replace these with your actual Service ID and Template ID from EmailJS
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(() => {
            formMessage.innerText = 'Message sent successfully!';
            formMessage.style.color = 'green';
            contactForm.reset();
        }, (error) => {
            console.log('FAILED...', error);
            formMessage.innerText = 'Failed to send message. Please try again.';
            formMessage.style.color = 'red';
        })
        .finally(() => {
            submitBtn.innerText = originalBtnText;
            submitBtn.disabled = false;
            
            // Reset message after 5 seconds
            setTimeout(() => {
                formMessage.innerText = 'Send a Message';
                formMessage.style.color = 'var(--primary-blue)';
            }, 5000);
        });
    });
  }
});
// 🔥 TOGGLE FUNCTION (rope click)
function toggleShutter() {
  const shutter = document.querySelector(".shutter");
  const rope = document.querySelector(".rope");

  if (!shutter || !rope) return;

  // rope animation
  rope.classList.add("pull");

  setTimeout(() => {
    rope.classList.remove("pull");
  }, 400);

  // shutter toggle
  shutter.classList.toggle("active");
}


// 🔥 AUTO ADD ROPE + SHUTTER

document.addEventListener("DOMContentLoaded", () => {

  // Rope
  const rope = document.createElement("div");
  rope.className = "rope";
  rope.innerHTML = `<div class="handle"></div>`;
  rope.onclick = toggleShutter;

  // Shutter
  const shutter = document.createElement("div");
  shutter.className = "shutter";
  shutter.innerHTML = `
    <div class="shutter-content">
      <h2>✨ Welcome to NexusEdu</h2>
    </div>
  `;

  document.body.appendChild(rope);
  document.body.appendChild(shutter);

});
