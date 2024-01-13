form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    console.log(email.value, password.value);
    
     if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
     }
    const userDetails = { email: email.value.trim(), password: password.value.trim() }

  console.log(userDetails);
  event.currentTarget.reset();
};

