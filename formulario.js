const form = document.querySelector('form');
const fileInputs = document.querySelectorAll('input[type="file"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Guardar la información en la base de datos o enviarla por correo electrónico
  console.log('Información guardada correctamente');
});

fileInputs.forEach((input) => {
  input.addEventListener('change', (event) => {
    const fileName = event.target.files[0].name;
    const parentLabel = event.target.parentElement;
    parentLabel.insertAdjacentHTML('beforeend', `<span>${fileName}</span>`);
  });
});
