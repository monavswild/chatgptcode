document.getElementById("newsletterForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var emailInput = document.getElementById("emailInput");
  var subscriptionStatus = document.getElementById("subscriptionStatus");

  // You can perform additional validation here before submitting the form
  if (emailInput.value !== "") {
    // Simulating AJAX request to subscribe the user
    setTimeout(function() {
      subscriptionStatus.textContent = "Subscribed successfully!";
      emailInput.value = "";
    }, 2000);
  } else {
    subscriptionStatus.textContent = "Please enter a valid email address.";
  }
});