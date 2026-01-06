if (document.querySelector(".producto")) {

  document.querySelectorAll(".producto").forEach(card => {

    const id = card.dataset.id;
    const producto = productos[id];

    // ❌ Si no existe el producto → ocultar
    if (!producto) {
      card.style.display = "none";
      return;
    }

    // 🔥 CONTROL MANUAL DE VISIBILIDAD
    if (producto.visible === false) {
      card.style.display = "none";
      return;
    } else {
      card.style.display = "block";
    }

    // 👉 Lógica SOLO para mostrar texto de stock
    let hayStock = false;

    for (const color in producto.variantes) {
      for (const memoria in producto.variantes[color]) {
        if (producto.variantes[color][memoria].stock === true) {
          hayStock = true;
          break;
        }
      }
      if (hayStock) break;
    }

    const stockEl = document.getElementById(`stock-${id}`);
    if (!stockEl) return;

    if (hayStock) {
      stockEl.textContent = "En stock";
      stockEl.classList.add("stock-en");
      stockEl.classList.remove("stock-sin");
    } else {
      stockEl.textContent = "Sin stock";
      stockEl.classList.add("stock-sin");
      stockEl.classList.remove("stock-en");
    }

  });

}
