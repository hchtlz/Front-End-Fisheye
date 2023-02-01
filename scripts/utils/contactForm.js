export function displayModal() {
    const modal = document.getElementById("contact_modal");
	  modal.style.display = "block";
}

export function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

// validation du formulaire

// DONT WORK YET
export function validateForm() {

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const firstNameError = document.getElementById("firstNameErr");
  const lastNameError = document.getElementById("lastNameErr");
  const emailError = document.getElementById("emailErr");
  const messageError = document.getElementById("messageErr");
  
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (firstName.length < 2) {
    firstNameError.innerHTML = "Veuillez entrer votre prénom";
  }
  if (lastName.length < 2) {
    lastNameError.innerHTML = "Veuillez entrer votre nom";
  }
  if (!emailRegex.test(email)) {
    emailError.innerHTML = "Veuillez entrer une adresse mail valide";
  }
  if (message.length < 10) {
    messageError.innerHTML = "Veuillez entrer un message";
  }
}