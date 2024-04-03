import React, { useState } from 'react';
import styled from 'styled-components';

// Estilos para el contenedor del Navbar
const NavbarContainer = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Estilos para el icono de menú hamburguesa
const Hamburguesa = styled.img`
  display: none; // Ocultar por defecto en pantallas más grandes
  @media /* (max-width: 768px) */ {
    display: block; // Mostrar en dispositivos móviles
    cursor: pointer;
    width: 30px; // ajusta el tamaño según sea necesario
    height: 30px;
  }
`;

// Componente Navbar
function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <NavbarContainer>
      <h1>Tech-Store</h1>
      <Hamburguesa 
        src="https://tuwebcreativa.com/s/img/wp-content/uploads/2023/03/Menu-hamburguesa-HTML-y-CSS.png.webp" // Reemplaza "url_de_la_imagen" con la URL de la imagen de menú hamburguesa
        alt="Icono de menú hamburguesa"
        onClick={() => setMenuVisible(!menuVisible)}
      />
      <ul style={{ display: menuVisible ? 'block' : 'none' }}>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#acerca">Acerca</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </NavbarContainer>
  );
}

export default Navbar;
