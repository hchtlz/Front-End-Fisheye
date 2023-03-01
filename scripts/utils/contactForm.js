export function displayModal() {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'block'
}

export function closeModal() {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'none'
}

// validation du formulaire

export function validateForm(event) {
  event.preventDefault()

  let error = false

  const firstName = document.getElementById('firstName').value
  const lastName = document.getElementById('lastName').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value

  const firstNameError = document.getElementById('firstNameErr')
  const lastNameError = document.getElementById('lastNameErr')
  const emailError = document.getElementById('emailErr')
  const messageError = document.getElementById('messageErr')
  
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

  if (firstName.length < 2) {
    error = true
    firstNameError.innerHTML = 'Veuillez entrer votre prénom'
    document.getElementById('firstName').style.border = '1px solid red'
  }
  if (lastName.length < 2) {
    error = true
    lastNameError.innerHTML = 'Veuillez entrer votre nom'
    document.getElementById('lastName').style.border = '1px solid red'
  }
  if (!emailRegex.test(email)) {
    error = true
    emailError.innerHTML = 'Veuillez entrer une adresse mail valide'
    document.getElementById('email').style.border = '1px solid red'
  }
  if (message.length < 10) {
    error = true
    messageError.innerHTML = 'Veuillez entrer un message d\'au moins 10 caractères'
    document.getElementById('message').style.border = '1px solid red'
  }
  if (!error) {
    closeModal()
  }
}