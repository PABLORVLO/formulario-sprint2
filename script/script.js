// Inicializar el array de productos vacío
let products = [];

// Obtener los elementos del formulario y la tabla
const form = document.querySelector('#product-form');
const tableBody = document.querySelector('#product-table tbody');

// Agregar un evento de submit al formulario
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores del formulario
    const name = document.querySelector('#product-name').value;
    const price = parseFloat(document.querySelector('#product-price').value);
    const quantity = parseInt(document.querySelector('#product-quantity').value);
    const category = document.querySelector('#product-category').value;

    // Agregar el producto al array de productos
    products.push({
        name: name,
        price: price,
        quantity: quantity,
        category: category
    });

    // Limpiar el formulario
    form.reset();

    // Actualizar la tabla con los productos
    updateTable();
});

// Función para actualizar la tabla con los productos
function updateTable() {
    // Limpiar la tabla
    tableBody.innerHTML = '';

    // Recorrer el array de productos y agregar cada producto a la tabla
    products.forEach((product, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.price.toFixed(2)}</td>
            <td>${product.quantity}</td>
            <td>${
product.category
}</td>
<td>
<button onclick="deleteProduct(${index})">Eliminar</button>
<button onclick="editProduct(${index})">Editar</button>
</td>
`;
tableBody.appendChild(row);
});
}

// Función para eliminar un producto del array de productos
function deleteProduct(index) {
products.splice(index, 1);
updateTable();
}

// Función para editar un producto del array de productos
function editProduct(index) {
// Obtener el producto a editar del array de productos
const product = products[index];

// Asignar los valores del producto al formulario
document.querySelector('#product-name').value = product.name;
document.querySelector('#product-price').value = product.price;
document.querySelector('#product-quantity').value = product.quantity;
document.querySelector('#product-category').value = product.category;

// Eliminar el producto del array de productos
products.splice(index, 1);

// Actualizar la tabla con los productos
updateTable();
}