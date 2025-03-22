// Definir la función seleccionar en el ámbito global
function seleccionar() {
  const nav = document.getElementById("nav");
  if (nav) {
    nav.classList.remove("responsive");
  }
  const menuCheckbox = document.getElementById("menu_hamburguesa");
  if (menuCheckbox) {
    menuCheckbox.checked = false; // Desactiva la casilla de verificación
  }
  // Si se usa una variable global para el estado del menú, asegúrate de declararla.
  // Por ejemplo: window.MenuVisible = false;
  window.MenuVisible = false;
}

//======== MENÚ ============//
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');
  const checkbox = document.getElementById("menu_hamburguesa");
  const navbar = document.querySelector(".navbar");

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement && navbar) {
        window.scrollTo({
          top: targetElement.offsetTop - navbar.offsetHeight,
          behavior: "smooth",
        });
        // Desmarca el checkbox para contraer el menú
        if (checkbox) {
          checkbox.checked = false;
        }
      }
    });
  });
});

// ========== SLIDER =========== //
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const slideCount = slides.length;
  let currentIndex = 0;
  let intervalId; // Almacena el ID del intervalo

  function showSlide(index) {
    const offset = -index * 100 + "%"; // Desplazamiento para mostrar la imagen actual
    if (slider) {
      slider.style.transform = `translateX(${offset})`;
    }
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

  // Eventos de clic para botones de avance y retroceso
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");

  if (prevButton && nextButton) {
    prevButton.addEventListener("click", function () {
      stopSlider();
      prevSlide();
      startSlider();
    });

    nextButton.addEventListener("click", function () {
      stopSlider();
      nextSlide();
      startSlider();
    });
  }
});

// ======= COTIZADOR ========//
document.addEventListener("DOMContentLoaded", function () {
  const calcularBtn = document.getElementById("calcular");
  const productoSelect = document.getElementById("producto");
  const cantidadSelect = document.getElementById("cantidad");
  const valorTotalSpan = document.getElementById("valor-total");

  if (calcularBtn && productoSelect && cantidadSelect && valorTotalSpan) {
    calcularBtn.addEventListener("click", function () {
      // Obtiene el precio almacenado en el atributo data-precio
      const precio = parseInt(
        productoSelect.options[productoSelect.selectedIndex].getAttribute("data-precio")
      );
      const cantidad = parseInt(cantidadSelect.value);
      // Verifica que precio y cantidad sean números válidos
      if (!isNaN(precio) && !isNaN(cantidad)) {
        const valorTotal = precio * cantidad;
        valorTotalSpan.textContent = `$${valorTotal.toLocaleString()}`;
      } else {
        valorTotalSpan.textContent = "";
      }
    });
  }
});

// ======== RESERVAR ========//
function enviarWhatsApp(element) {
  const productElement = element.closest(".product");
  if (productElement) {
    // Se asume que el título se encuentra en un h2; ajustar si fuera otro tag
    const h3Content = productElement.querySelector("h2")?.textContent.trim() || "";
    const message = `Quiero reservar ${encodeURIComponent(h3Content)}`;
    const phoneNumber = "573224142500"; // Número de teléfono en Colombia
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = whatsappURL;
  }
}

// ======== MAS INFO ========//
function enviarWhatsAppMasInfo(element) {
  const productElement = element.closest(".instalacion-item");
  if (productElement) {
    const h3Content = productElement.querySelector("h3")?.textContent.trim() || "";
    const message = `Requiero más información acerca de ${encodeURIComponent(h3Content)}`;
    const phoneNumber = "573224142500"; // Número de teléfono en Colombia
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = whatsappURL;
  }
}

function sendWhatsAppMessage(button) {
  const container = button.closest(".image-text");
  if (container) {
    const h3Text = container.querySelector("h3")?.innerText || "";
    const message = "Quiero asesoría sobre " + h3Text;
    const whatsappURL = "https://wa.me/?text=" + encodeURIComponent(message);
    window.open(whatsappURL, "_blank");
  }
}

function toggleImageRotation(element) {
  element.classList.toggle("clicked");
}

//=========== MANTENIMIENTO DE EQUIPOS =============//
function ServiceWhatsAppMessage(button) {
  const container = button.closest(".card");
  if (container) {
    const title = container.querySelector("h2")?.innerText || "";
    const phoneNumber = "573224142500";
    const message = `Requiero servicio de ${encodeURIComponent(title)}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappUrl, "_blank");
  }
}

//=========== INTEGRACION COMERCIAL =============//
function IntegraWhatsAppMessage(button) {
  const container = button.closest(".card");
  if (container) {
    const title = container.querySelector("h2")?.innerText || "";
    const phoneNumber = "573224142500";
    const message = `Quiero asesoría para ${encodeURIComponent(title)}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappUrl, "_blank");
  }
}
