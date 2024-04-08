import React from 'react';
import styled from 'styled-components';

// Estilos para el contenedor de las tarjetas de producto
const TarjetasContenedor = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;

  @media (min-width: 768px) {
    /* 3 columnas para tablets */
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    /* 4 columnas o más para pantallas de PC */
    grid-template-columns: repeat(4, 1fr);
  }
`;

// Estilos para la tarjeta de producto
const TarjetaProducto = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

// Componente de tarjeta de producto
function Producto({ nombre, precio, imagen }) {
  return (
    <TarjetaProducto>
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
    </TarjetaProducto>
  );
}

// Componente contenedor de tarjetas de producto
function TarjetasProductos() {
  const productos = [
    { id: 1, nombre: 'Producto 1', precio: 20, imagen: 'imagen1.jpg' },
    { id: 2, nombre: 'Producto 2', precio: 30, imagen: 'imagen2.jpg' },
    // Agrega más productos según sea necesario
  ];

  return (
    <TarjetasContenedor>
      {productos.map(producto => (
        <Producto
          key={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
          imagen={producto.imagen}
        />
      ))}
    </TarjetasContenedor>
  );
}

export default TarjetasProductos;
