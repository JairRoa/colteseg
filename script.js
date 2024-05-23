// Definir la función seleccionar en el ámbito global
function seleccionar() {
  let nav = document.getElementById("nav");
  nav.classList.remove("responsive");
  document.getElementById("menu_hamburguesa").checked = false; // Desactiva la casilla de verificación
  MenuVisible = false;
}

//======== MENÚ ============//

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');
  const checkbox = document.getElementById("menu_hamburguesa");

  for (const link of links) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top:
            targetElement.offsetTop -
            document.querySelector(".navbar").offsetHeight,
          behavior: "smooth",
        });

        // Desmarca el checkbox para contraer el menú
        checkbox.checked = false;
      }
    });
  }
});

// ========== SLIDER =========== //
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const slideCount = slides.length;
  let currentIndex = 0;
  let intervalId; // Variable para almacenar el ID del intervalo

  function showSlide(index) {
    const offset = -index * 100 + "%"; // Calcula el desplazamiento necesario para mostrar la imagen actual
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
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");

  prevButton.addEventListener("click", function () {
    stopSlider(); // Detiene el slider cuando se hace clic en el botón de retroceso
    prevSlide();
    startSlider(); // Reinicia el slider después de retroceder
  });

  nextButton.addEventListener("click", function () {
    stopSlider(); // Detiene el slider cuando se hace clic en el botón de avance
    nextSlide();
    startSlider(); // Reinicia el slider después de avanzar
  });
});

// ======= COTIZADOR ========//

document.addEventListener("DOMContentLoaded", function () {
  const calcularBtn = document.getElementById("calcular");
  const productoSelect = document.getElementById("producto");
  const cantidadSelect = document.getElementById("cantidad");
  const valorTotalSpan = document.getElementById("valor-total");

  calcularBtn.addEventListener("click", function () {
    const precio = parseInt(
      productoSelect.options[productoSelect.selectedIndex].getAttribute(
        "data-precio"
      )
    );
    const cantidad = parseInt(cantidadSelect.value);
    const valorTotal = precio * cantidad;
    valorTotalSpan.textContent = valorTotal
      ? `\$${valorTotal.toLocaleString()}`
      : "";
  });
});

// ======== RESERVAR ========//
function enviarWhatsApp(element) {
  const productElement = element.closest(".product");
  const h3Content = productElement.querySelector("h2").textContent.trim();
  const message = `Quiero reservar ${encodeURIComponent(h3Content)}`;
  const phoneNumber = "573224142500"; // Número de teléfono de Colombia
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
  window.location.href = whatsappURL;
}

// ======== MAS INFO ========//
function enviarWhatsAppMasInfo(element) {
  const productElement = element.closest(".instalacion-item");
  const h3Content = productElement.querySelector("h3").textContent.trim();
  const message = `Requiero más información acerca de ${encodeURIComponent(
    h3Content
  )}`;
  const phoneNumber = "573224142500"; // Número de teléfono de Colombia
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
  window.location.href = whatsappURL;
}


function sendWhatsAppMessage(button) {
  var h3Text = button.closest('.image-text').querySelector('h3').innerText;
  var message = "Quiero asesoría sobre " + h3Text;
  var whatsappURL = "https://wa.me/?text=" + encodeURIComponent(message);
  window.open(whatsappURL, '_blank');
}

function toggleImageRotation(element) {
  element.classList.toggle('clicked');
}

