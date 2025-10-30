document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();  

 //validation
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value;
  const agree = document.getElementById("agree").checked;

  if (!name || !email || !subject || !agree) {
    alert("Please fill in all required fields and agree to the terms.");
    return;
  }

 
  document.getElementById("successMessage").classList.remove("hidden");

 
  this.reset();
});
