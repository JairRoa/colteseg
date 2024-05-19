// Definir la función seleccionar en el ámbito global
function seleccionar() {
  let nav = document.getElementById("nav");
  nav.classList.remove("responsive");
  document.getElementById("menu_hamburguesa").checked = false; // Desactiva la casilla de verificación
  MenuVisible = false;
}

document.addEventListener("DOMContentLoaded", function() {
  // Aquí va tu código JavaScript
  let MenuVisible = false;

  function mostrarOcultarMenu() {
      let nav = document.getElementById("nav");
      if (MenuVisible) {
          nav.classList.remove("responsive");
          document.getElementById("menu_hamburguesa").checked = false; // Desactiva la casilla de verificación
          MenuVisible = false;
      } else {
          nav.classList.add("responsive");
          MenuVisible = true;
      }
  }
});








// ========== SLIDER =========== //
document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const slideCount = slides.length;
  let currentIndex = 0;
  let intervalId; // Variable para almacenar el ID del intervalo

  function showSlide(index) {
    const offset = -index * 100 + '%'; // Calcula el desplazamiento necesario para mostrar la imagen actual
    slider.style.transform = `translateX(${offset})`; // Aplica el desplazamiento al slider
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    showSlide(currentIndex);
  }

  function startSlider() {
    intervalId = setInterval(nextSlide, 5000);
  }

  function stopSlider() {
    clearInterval(intervalId);
  }

  startSlider(); // Inicia el slider automáticamente

  // Agrega eventos de clic a botones de avance y retroceso
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');

  prevButton.addEventListener('click', function() {
    stopSlider(); // Detiene el slider cuando se hace clic en el botón de retroceso
    prevSlide();
    startSlider(); // Reinicia el slider después de retroceder
  });

  nextButton.addEventListener('click', function() {
    stopSlider(); // Detiene el slider cuando se hace clic en el botón de avance
    nextSlide();
    startSlider(); // Reinicia el slider después de avanzar
  });
});



// ======= COTIZADOR ========//

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('calcular').addEventListener('click', function() {
      // Obtener el precio del producto seleccionado
      var productoSelect = document.getElementById('producto');
      var precio = parseFloat(productoSelect.options[productoSelect.selectedIndex].getAttribute('data-precio'));
      
      // Obtener la cantidad seleccionada
      var cantidad = parseInt(document.getElementById('cantidad').value);
      
      // Calcular el valor total
      var valorTotal = precio * cantidad;
      
      // Formatear el valor total a pesos colombianos
      var valorTotalCOP = valorTotal.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
      
      // Mostrar el valor total en el campo correspondiente
      document.getElementById('valor-total').value = valorTotalCOP;
  });

  // Asegurarse de que los elementos del slide también estén listos
  var slides = document.querySelectorAll('.slide');
  if (slides.length > 0) {
      var currentSlide = 0;

      function showSlide(index) {
          slides.forEach(function(slide, i) {
              slide.style.display = (i === index) ? 'block' : 'none';
          });
      }

      function nextSlide() {
          currentSlide = (currentSlide + 1) % slides.length;
          showSlide(currentSlide);
      }

      showSlide(currentSlide);
      document.getElementById('next-slide').addEventListener('click', nextSlide);
  }
});

