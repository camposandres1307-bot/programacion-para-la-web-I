const btnAgregar = document.getElementById("btnAgregar");
const tablaBody = document.querySelector("#tabla tbody");
const totalGeneral = document.getElementById("totalGeneral");

// Imagen del producto
const imagenProducto = document.getElementById("imagenProducto");
const inputNombre = document.getElementById("nombre");

// Lista de productos con imágenes
const imagenes = {
  arroz: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT338IFRB5dwpzJqHU28wmj22s0ZrOJif1Hb2ZZmLp0tA&s=10",
  leche: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpZb0ZzIe7ZTA6-O5czFj63IExFTfPhqL9JiIwl2cV9A&s=10",
  pan: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSOSMJRixB7RpRXd0Dn4LrEH3m18l4GIlRcCo5LkdFbg&s=10",
  papa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3_ZPxHbgYP6fPKoQI4Uz8u13xFl38kbXszObNy1WWqA&s=10",
  papas: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9D-mYYEzY-DoL1vvrAfnflPpG8jLbKL7uOkCjXpERGA&s=10",
  huevo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuTZhX2XQf61N6OxXxGsCUzlqwguy2RJnhFqVlBjMEsw&s=10",
  queso: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe955SJugTODvsdSBqxBN6JOEZPbCQXEYRnU8xfFko1g&s=10",
  pollo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdufP3YSlcocQeOT5qwl_A__xBS27kep53aAaiKtlB7g&s=10",
  carne: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1-mwgw53bXkahizXALTtDW1zxCkScFEWLPeBrNSrn0Q&s=10",
  pescado: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA_HhjlMwiMR2DMHwzukbMg3Mg_MSb4bEiq2M1Hr14ww&s=10",
  azucar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz5IbJnTAoE6-DqhrVtouCt1QNJYWXIkOR2-52ma-Z0A&s=10",
  aceite: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNmEj44nDVS7mwvljYWE4-5QHWDhNeJdJLiA2RPajvlw&s=10",
  mantequilla: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgaI19QdKOllueWN_xWdEoGcyld_L0EluPjB7H0bGYrg&s=10",
  sal: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGi2PYmbCXr4LQbT9iR-70J0zeTkuCxTqN0TZ08R1HRQ&s=10",
  cafe: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEzwtWNIouE8zI8dVRe_H9Q9RUnDqT8nkNGk8oZNNifg&s=10",
  te: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlHnCb2IDP0epJd0OAvtayvjJPH0-_ees9J_MLK9bRuw&s=10",
  galletas: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ-T0KwOJB4ohpAd6KkJIOHHj2Oe8omYeDyLfexKgxKg&s=10",
  jugo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcae5a80CVrkdZlv-lHWTZsntDtlHXsNuBrrPvjjMdMg&s=10",
  manzana: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7LGLpUzyM1PkVUvqK_w4fTTVch1vrFNz7C6i2d6wRLA&s=10",
  banano: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQumciX1lqcaq4R3VxbE6gQj1Nq-50_6NG7qjOCpnyesQ&s=10"
};

// DATLIST (autocompletar productos)
const datalist = document.getElementById("listaProductos");

Object.keys(imagenes).forEach((producto) => {
  const option = document.createElement("option");
  option.value = producto;
  datalist.appendChild(option);
});

// Cambiar imagen al escribir
inputNombre.addEventListener("input", () => {
  const producto = inputNombre.value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "");

  imagenProducto.src = imagenes[producto]
    ? imagenes[producto]
    : "https://via.placeholder.com/110?text=Sin+Imagen";
});

// Agregar producto
btnAgregar.addEventListener("click", () => {
  const nombre = inputNombre.value.trim();
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const precio = parseFloat(document.getElementById("precio").value);

  if (!nombre || isNaN(cantidad) || isNaN(precio)) {
    alert("Por favor complete todos los campos.");
    return;
  }

  agregarProducto(nombre, cantidad, precio);
  limpiar();
});

// Crear fila
function agregarProducto(nombre, cantidad, precio) {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${nombre}</td>

    <td>
      <button class="menos"></button>
      <span class="cant">${cantidad}</span>
      <button class="mas">+</button>
    </td>

    <td>
      $<span class="precio">${precio}</span>
      <button class="editarPrecio"></button>
    </td>

    <td>
      $<span class="total">${(cantidad * precio).toFixed(2)}</span>
    </td>

    <td>
      <button class="eliminar"></button>
    </td>
  `;

  tablaBody.appendChild(tr);
  recalcularTotal();
}

// Limpiar inputs
function limpiar() {
  inputNombre.value = "";
  document.getElementById("cantidad").value = "";
  document.getElementById("precio").value = "";
  imagenProducto.src = "https://via.placeholder.com/110?text=Producto";
}

// Eventos de tabla
tablaBody.addEventListener("click", function (e) {
  const fila = e.target.closest("tr");
  if (!fila) return;

  const cant = fila.querySelector(".cant");
  const precio = fila.querySelector(".precio");

  if (e.target.classList.contains("mas")) {
    cant.textContent = parseInt(cant.textContent) + 1;
  }

  if (e.target.classList.contains("menos")) {
    let actual = parseInt(cant.textContent);
    if (actual > 0) cant.textContent = actual - 1;
  }

  if (e.target.classList.contains("editarPrecio")) {
    const nuevo = prompt("Nuevo precio:", precio.textContent);

    if (nuevo !== null && !isNaN(parseFloat(nuevo))) {
      precio.textContent = parseFloat(nuevo);
    }
  }

  if (e.target.classList.contains("eliminar")) {
    fila.remove();
  }

  actualizarFila(fila);
  recalcularTotal();
});

// actualizar fila
function actualizarFila(fila) {
  const cant = parseInt(fila.querySelector(".cant").textContent);
  const precio = parseFloat(fila.querySelector(".precio").textContent);

  fila.querySelector(".total").textContent = (cant * precio).toFixed(2);

  if (cant === 0) fila.classList.add("low-stock");
  else fila.classList.remove("low-stock");
}

// total general
function recalcularTotal() {
  let suma = 0;

  document.querySelectorAll("#tabla tbody .total").forEach((t) => {
    suma += parseFloat(t.textContent);
  });

  totalGeneral.textContent = `Total general: $${suma.toFixed(2)}`;
}