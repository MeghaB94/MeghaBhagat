function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

window.onhashchange = function () {
  updateContent();
};

function updateContent() {
  // Get the current hash and adjust if empty
  var currentHash = window.location.hash || "#background";

  // Remove 'active' class from all sections
  document.querySelectorAll(".content-section").forEach((section) => {
    section.classList.remove("active");
  });

  // Add 'active' class to the current section
  classSelctor = currentHash.replace("#", ".");
  var activeSection = document.querySelector(classSelctor);
  if (activeSection) {
    activeSection.classList.add("active");
  }
}

// Call updateContent at page load to handle initial hash
window.onload = updateContent;
