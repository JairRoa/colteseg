function seleccionar() {
  let e = document.getElementById("nav");
  e.classList.remove("responsive"),
    (document.getElementById("menu_hamburguesa").checked = !1);
}
document.addEventListener("DOMContentLoaded", function () {
  const e = document.querySelectorAll('a[href^="#"]'),
    t = document.getElementById("menu_hamburguesa");
  for (const n of e)
    n.addEventListener("click", function (e) {
      e.preventDefault();
      const t = this.getAttribute("href").substring(1),
        n = document.getElementById(t);
      n &&
        (window.scrollTo({
          top: n.offsetTop - document.querySelector(".navbar").offsetHeight,
          behavior: "smooth",
        }),
        (t.checked = !1));
    });
}),
  document.addEventListener("DOMContentLoaded", function () {
    const e = document.querySelector(".slider"),
      t = document.querySelectorAll(".slide"),
      n = t.length;
    let o = 0,
      i;
    function l(e) {
      const t = -e * 100 + "%";
      slider.style.transform = `translateX(${t})`;
    }
    function a() {
      (o = (o + 1) % n), l(o);
    }
    function s() {
      (o = (o - 1 + n) % n), l(o);
    }
    function c() {
      i = setInterval(a, 5e3);
    }
    function d() {
      clearInterval(i);
    }
    c();
    const r = document.querySelector(".prev-button"),
      m = document.querySelector(".next-button");
    r &&
      m &&
      (r.addEventListener("click", function () {
        d(), s(), c();
      }),
      m.addEventListener("click", function () {
        d(), a(), c();
      }));
  }),
  document.addEventListener("DOMContentLoaded", function () {
    const e = document.getElementById("calcular"),
      t = document.getElementById("producto"),
      n = document.getElementById("cantidad"),
      o = document.getElementById("valor-total");
    e &&
      t &&
      n &&
      o &&
      e.addEventListener("click", function () {
        const e =
            parseInt(t.options[t.selectedIndex].getAttribute("data-precio")) ||
            0,
          n = parseInt(n.value) || 0,
          o = e * n;
        o ? (o = `$${o.toLocaleString()}`) : (o = ""), (o.textContent = o);
      });
  }),
  (function e(t) {
    const n = t.closest(".product"),
      o = n.querySelector("h2").textContent.trim(),
      i = `Quiero reservar ${encodeURIComponent(o)}`,
      l = "573224142500",
      a = `https://wa.me/${l}?text=${i}`;
    window.location.href = a;
  })(this),
  (function e(t) {
    const n = t.closest(".instalacion-item"),
      o = n.querySelector("h3").textContent.trim(),
      i = `Requiero más información acerca de ${encodeURIComponent(o)}`,
      l = "573224142500",
      a = `https://wa.me/${l}?text=${i}`;
    window.location.href = a;
  })(this),
  (function e(t) {
    var n = t.closest(".image-text").querySelector("h3").innerText,
      o = "Quiero asesoría sobre " + n,
      i = "https://wa.me/?text=" + encodeURIComponent(o);
    window.open(i, "_blank");
  })(this),
  (function e(t) {
    const n = t.closest(".card"),
      o = n.querySelector("h2").innerText,
      i = "573224142500",
      l = `Requiero servicio de ${encodeURIComponent(o)}`,
      a = `https://api.whatsapp.com/send?phone=${i}&text=${l}`;
    window.open(a, "_blank");
  })(this),
  (function e(t) {
    const n = t.closest(".card"),
      o = n.querySelector("h2").innerText,
      i = "573224142500",
      l = `Quiero asesoría para ${encodeURIComponent(o)}`,
      a = `https://api.whatsapp.com/send?phone=${i}&text=${l}`;
    window.open(a, "_blank");
  })(this);
