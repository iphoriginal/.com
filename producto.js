// Detectar producto desde el HTML
const productoID = document.querySelector("[data-producto]").dataset.producto;
const producto = productos[productoID];

// Valores por defecto
let color = "Negro";
let memoria = "128 GB";

// Elementos HTML
const precioEl = document.getElementById("precioProducto");
const stockEl = document.getElementById("estadoStock");
const btnWhatsapp = document.getElementById("btnWhatsapp");
const colorSeleccionadoEl = document.getElementById("colorSeleccionado");
const memoriaSeleccionadaEl = document.getElementById("memoriaSeleccionada");
const imagenPrincipal = document.getElementById("imagenPrincipal");
const cantidadDisponibleEl = document.getElementById("cantidadDisponible");

// Función para actualizar producto
function actualizarProducto() {

  if (!producto.variantes[color] || !producto.variantes[color][memoria]) {
    stockEl.textContent = "No disponible";
    stockEl.style.color = "red";
    precioEl.textContent = "—";
    btnWhatsapp.style.pointerEvents = "none";
    btnWhatsapp.style.opacity = "0.5";

    if (cantidadDisponibleEl) {
      cantidadDisponibleEl.textContent = "0";
    }
    return;
  }

  const data = producto.variantes[color][memoria];

  // PRECIO
  precioEl.textContent = `S/ ${data.precio}`;

  // STOCK
  if (data.stock) {
    stockEl.textContent = "En stock";
    stockEl.style.color = "green";
    btnWhatsapp.style.pointerEvents = "auto";
    btnWhatsapp.style.opacity = "1";
  } else {
    stockEl.textContent = "Sin stock";
    stockEl.style.color = "red";
    btnWhatsapp.style.pointerEvents = "none";
    btnWhatsapp.style.opacity = "0.5";
  }

  // TEXTO SELECCIONADO
  colorSeleccionadoEl.textContent = color;
  memoriaSeleccionadaEl.textContent = memoria;

  // CANTIDAD DISPONIBLE
  if (cantidadDisponibleEl) {
    if (data.cantidad !== undefined) {
      cantidadDisponibleEl.textContent = data.cantidad;
    } else {
      cantidadDisponibleEl.textContent = data.stock ? "Disponible" : "0";
    }
  }

  // WHATSAPP
  const mensaje = `Hola, quiero informarme sobre el ${producto.nombre} color ${color}, ${memoria}`;
  btnWhatsapp.href = `https://wa.me/51973390126?text=${encodeURIComponent(mensaje)}`;
}

// EVENTOS COLOR
document.querySelectorAll(".colores .color").forEach(img => {
  img.addEventListener("click", () => {
    color = img.dataset.color;

    document.querySelectorAll(".colores .color").forEach(c => c.classList.remove("activo"));
    img.classList.add("activo");

    // Cambiar imagen
    if (imagenPrincipal) {
      const colorLower = color.toLowerCase();
      imagenPrincipal.src = `../../imagenescatalogo/${productoID}/${colorLower}.png`;
      imagenPrincipal.alt = `${producto.nombre} ${color}`;
    }

    actualizarProducto();
  });
});

// EVENTOS MEMORIA
document.querySelectorAll(".memoria .mem").forEach(btn => {
  btn.addEventListener("click", () => {
    memoria = btn.dataset.memoria;

    document.querySelectorAll(".memoria .mem").forEach(m => m.classList.remove("activo"));
    btn.classList.add("activo");

    actualizarProducto();
  });
});

// Inicializar
actualizarProducto();
