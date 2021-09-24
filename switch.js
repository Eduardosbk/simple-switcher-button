document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      console.log('Ligado');
      const h1 = document.querySelector('h1');
      h1.innerHTML = 'Ligado';
    } else {
      console.log('Desligado');
      const h1 = document.querySelector('h1');
      h1.innerHTML = '';
      h1.innerHTML = 'Desligado';
    }
  });
});