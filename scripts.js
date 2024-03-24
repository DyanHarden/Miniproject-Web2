// scripts.js

// Message To Local Storage
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const formDataObject = Object.fromEntries(formData.entries());

    localStorage.setItem("contactFormData", JSON.stringify(formDataObject));

    // Bootstrap alert
    var alertDiv = document.createElement("div");
    alertDiv.classList.add(
      "alert",
      "alert-success",
      "alert-dismissible",
      "fade",
      "show"
    );
    alertDiv.setAttribute("role", "alert");
    alertDiv.innerHTML = `
    Pesan telah dikirim, mohon cek balasan email secara berkala :)
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;
    document.getElementById("contactme").appendChild(alertDiv);

    // Display form data from local storage in alert
    alertFormData();
    // Reset form
    this.reset();
  });

$(document).ready(function () {
  $("a.nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// Function alert menampilkan data
function alertFormData() {
  var contactFormData = localStorage.getItem("contactFormData");
  if (contactFormData) {
    var parsedFormData = JSON.parse(contactFormData);
    var name = parsedFormData.name;
    var email = parsedFormData.email;
    var message = parsedFormData.message;
    var alertMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    alert("DATA TERKIRIM:\n" + alertMessage);
  }
}

// =================================================================================================
// Smooth Scrooling
$(document).ready(function () {
  $("a.nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      var targetOffset = $(hash).offset().top;
      var scrollDuration = 800;
      var startTime = performance.now();
      var startScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      function scrollAnimation(currentTime) {
        var elapsedTime = currentTime - startTime;
        var ease = Math.easeInOutQuad(
          elapsedTime,
          startScroll,
          targetOffset - startScroll,
          scrollDuration
        );
        window.scrollTo(0, ease);
        if (elapsedTime < scrollDuration) {
          requestAnimationFrame(scrollAnimation);
        } else {
          window.location.hash = hash;
        }
      }

      requestAnimationFrame(scrollAnimation);
    }
  });
});

// Fungsi untuk perhitungan easing
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

// Animasi Gambar Jumbotron
const jumbotronImage = document.getElementById("jumbotronImage");

jumbotronImage.addEventListener("click", function () {
  this.style.transition = "transform 0.5s ease";
  this.style.transform = "scale(1.1)";

  setTimeout(() => {
    this.style.transform = "scale(1)";
  }, 2000);
});
// =====

// Animasi pada Certification Section
document.addEventListener("DOMContentLoaded", function () {
  const certificationCards = document.querySelectorAll("#certificate .card");

  certificationCards.forEach(function (card) {
    // Event untuk desktop
    card.addEventListener("mousedown", handleMouseDown);
    card.addEventListener("mouseup", handleMouseUp);
    card.addEventListener("mouseleave", handleMouseLeave);

    // Event untuk perangkat sentuh
    card.addEventListener("touchstart", handleTouchStart);
    card.addEventListener("touchend", handleTouchEnd);
    card.addEventListener("touchcancel", handleTouchCancel);
  });

  function handleMouseDown() {
    animateCardInteraction(this);
  }

  function handleMouseUp() {
    resetCardStyle(this);
  }

  function handleMouseLeave() {
    resetCardStyle(this);
  }

  function handleTouchStart() {
    animateCardInteraction(this);
  }

  function handleTouchEnd() {
    resetCardStyle(this);
  }

  function handleTouchCancel() {
    resetCardStyle(this);
  }

  function animateCardInteraction(card) {
    card.style.transition = "transform 0.2s, box-shadow 0.2s";
    card.style.transform = "scale(0.95)";
    card.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.3)";
  }

  function resetCardStyle(card) {
    card.style.transition = "transform 0.2s, box-shadow 0.2s";
    card.style.transform = "scale(1)";
    card.style.boxShadow = "none";
  }
});
