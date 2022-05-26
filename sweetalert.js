let form = document.getElementById("formulario-tarjeta");
  
form.addEventListener("submitButton", (event) => {
 
  event.preventDefault();
  
  Swal.fire(
    'Gracias por tu compra',
    'Tu producto llegara pronto',
    'success'
  )
})