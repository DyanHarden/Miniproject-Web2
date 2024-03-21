// scripts.js

// Message To Local Storage
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    // Get form data
    const formData = new FormData(this);
    const formDataObject = Object.fromEntries(formData.entries());
    // Save form data to local storage
    localStorage.setItem("contactFormData", JSON.stringify(formDataObject));

    // Show Bootstrap alert
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

    // Clear form fields (optional)
    this.reset();
  });

$(document).ready(function () {
  $("a.nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      // Simpan hash
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

// Function to display form data from local storage in alert
function alertFormData() {
  var contactFormData = localStorage.getItem("contactFormData");
  if (contactFormData) {
    var parsedFormData = JSON.parse(contactFormData);
    alert("Form Data:\n" + JSON.stringify(parsedFormData, null, 2));
  }
}

// =================================================================================================
// Smooth Scrooling
$(document).ready(function () {
  $("a.nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      // Simpan hash
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

// Animasi Gambar Jumbotron
const jumbotronImage = document.getElementById("jumbotronImage");

jumbotronImage.addEventListener("click", function () {
  this.style.transition = "transform 0.5s ease";
  this.style.transform = "scale(1.1)"; // Perbesar gambar

  setTimeout(() => {
    this.style.transform = "scale(1)";
  }, 2000);
});
