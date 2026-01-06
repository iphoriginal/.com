const productos = {
  iphone11: {
    nombre: "iPhone 11",
	visible: false,
    variantes: {
      Negro: {
        "128 GB": { precio: 1299, stock: false, cantidad: 0 },
        "256 GB": { precio: 1399, stock: false, cantidad: 0 },
      },
      Blanco: {
        "128 GB": { precio: 1299, stock: false, cantidad: 0 },
        "256 GB": { precio: 1399, stock: false, cantidad: 0 },
      },
      Verde: {
        "128 GB": { precio: 1299, stock: false, cantidad: 0 },
        "256 GB": { precio: 1399, stock: false, cantidad: 0 },
      }
    }
  },

  iphone11pro: {
    nombre: "iPhone 11 Pro",
	visible: false,
    variantes: {
      Negro: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
      },
      Plata: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
      },
      Dorado: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
      },
      Verde: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
      }
    }
  },

  iphone11promax: {
    nombre: "iPhone 11 Pro Max",
	visible: false,
    variantes: {
      Negro: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
      },
      Plata: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
      },
      Dorado: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
      },
      Verde: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
      }
    }
  },
  iphone12: {
    nombre: "iPhone 12",
	visible: false,
    variantes: {
      Negro: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
      },
      Blanco: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
      },
      Azul: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
      },
      Verde: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
      }
    }
  },
  iphone12mini: {
    nombre: "iPhone 12 Mini",
	visible: false,
    variantes: {
      Negro: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
      },
      Blanco: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
      },
      Azul: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
      },
      Verde: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
      }
    }
  },
  iphone12pro: {
    nombre: "iPhone 12 Pro",
	visible: false,
    variantes: {
      Negro: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false },
      },
      Azul: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
      },
      Dorado: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
      },
      Plata: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
      },
    }
  },
  iphone12promax: {
    nombre: "iPhone 12 Pro Max",
	visible: false,
    variantes: {
      Negro: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
      },
      Azul: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
      },
      Dorado: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
      },
      Plata: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
      },
    }
  },
  iphone13: {
    nombre: "iPhone 13",
	visible: true,
    variantes: {
      Negro: {
        "128 GB": { precio: 1350, stock: false, cantidad: 0 },
        "256 GB": { precio: 1400, stock: false, cantidad: 0 },
        "512 GB": { precio: 1450, stock: false, cantidad: 0 },
      },
      Azul: {
        "128 GB": { precio: 1350, stock: false, cantidad: 0 },
        "256 GB": { precio: 1400, stock: false, cantidad: 0 },
        "512 GB": { precio: 1450, stock: false, cantidad: 0 },
      },
      Blanco: {
        "128 GB": { precio: 1350, stock: false, cantidad: 0 },
        "256 GB": { precio: 1400, stock: false, cantidad: 0 },
        "512 GB": { precio: 1450, stock: false, cantidad: 0 },
      },
      Rosa: {
        "128 GB": { precio: 1350, stock: false, cantidad: 0 },
        "256 GB": { precio: 1400, stock: false, cantidad: 0 },
        "512 GB": { precio: 1450, stock: false, cantidad: 0 },
      },
      Verde: {
        "128 GB": { precio: 1350, stock: false, cantidad: 0 },
        "256 GB": { precio: 1400, stock: false, cantidad: 0 },
        "512 GB": { precio: 1450, stock: false, cantidad: 0 },
      },
    }
  },
  iphone13mini: {
    nombre: "iPhone 13 Mini",
	visible: true,
    variantes: {
      Negro: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
      Azul: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
      Blanco: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
      Rosa: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
      Verde: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
    }
  },
  iphone13pro: {
    nombre: "iPhone 13 Pro",
	visible: true,
    variantes: {
      Negro: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
      Azul: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
      Blanco: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
      Dorado: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
      Verde: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
    }
  },
  iphone13promax: {
    nombre: "iPhone 13 Pro Max",
	visible: true,
    variantes: {
      Negro: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
      Azul: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
      Dorado: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
      Verde: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
    }
  },
  iphone14: {
    nombre: "iPhone 14",
	visible: false,
    variantes: {
      Negro: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
      Azul: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
      Blanco: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
    }
  },
  iphone14plus: {
    nombre: "iPhone 14 Plus",
	visible: false,
    variantes: {
      Negro: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
      Azul: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
      Blanco: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
    }
  },
  iphone14pro: {
    nombre: "iPhone 14 Pro",
	visible: false,
    variantes: {
      Negro: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
      Plata: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
      Dorado: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
    }
  },
  iphone14promax: {
    nombre: "iPhone 14 Pro Max",
	visible: false,
    variantes: {
      Negro: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
      Plata: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
      Dorado: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
    }
  },
  iphone15: {
    nombre: "iPhone 15",
    visible: false,
    variantes: {
      Negro: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
      Azul: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
      Verde: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
      Rosa: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
    }
  },
  iphone15plus: {
    nombre: "iPhone 15 Plus",
    visible: false,
    variantes: {
      Negro: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
      Azul: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
      Verde: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
      Rosa: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
    }
  },
  iphone15pro: {
    nombre: "iPhone 15 Pro",
    visible: false,
    variantes: {
      Negro: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
      Azul: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
      Plata: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
    }
  },
  iphone15promax: {
    nombre: "iPhone 15 Pro Max",
    visible: false,
    variantes: {
      Negro: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
      Azul: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
      Plata: {
        "128 GB": { precio: 1699, stock: false, cantidad: 0 },
        "256 GB": { precio: 1899, stock: false, cantidad: 0 },
        "512 GB": { precio: 2099, stock: false, cantidad: 0 },
      },
    }
  }
};
// ACTUALIZAR PRECIOS DEL CATÁLOGO
document.querySelectorAll(".producto").forEach(card => {
  const id = card.dataset.id;
  const producto = productos[id];
  if (!producto) return;

  let precios = [];

  for (const color in producto.variantes) {
    for (const memoria in producto.variantes[color]) {
      precios.push(producto.variantes[color][memoria].precio);
    }
  }

  const precioMin = Math.min(...precios);

  const precioEl = document.getElementById(`precio-${id}`);
  if (precioEl) {
    precioEl.textContent = `Precio desde S/ ${precioMin}`;
  }
});
