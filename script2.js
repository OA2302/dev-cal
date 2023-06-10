function showAlert() {
    // Create the alert element
    const alert = document.createElement("div");
    alert.classList.add("alert");
  
    // Add the message to the alert
    const message = document.createElement("p");
    message.innerText = "Your submission was successful!";
    alert.appendChild(message);
  
    // Add the alert to the body of the document
    document.body.appendChild(alert);
  }
  
  // When the document is loaded, show the alert
  window.onload = showAlert;