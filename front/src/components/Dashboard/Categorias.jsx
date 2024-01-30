import React, { useState } from "react";
/**
 * Componente de la página de Categorías.
 * @component
 * @returns {JSX.Element} JSX para renderizar la página de categorías.
 */
const Categorias = () => {
  return (
    <>
      {/* Contenido principal de la página */}
      <main className="main users chart-page" id="skip-target">
        <div className="container">
          <h2 className="main-title">Categorias</h2>
          {/* Sección para las tarjetas de estadísticas (actualmente vacía) */}
          <div className="row stat-cards">
            <div className="col-md-6 col-xl-3"></div>
          </div>
        </div>
      </main>
      <footer class="footer">
        <div class="container footer--flex">
          <div class="footer-start">
            <p>
              {/* Año de copyright y enlace al sitio Elegant Dashboard */}
              2021 © Elegant Dashboard -{" "}
              <a
                href="elegant-dashboard.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                elegant-dashboard.com
              </a>
            </p>
          </div>
          <ul class="footer-end">
            <li>
              <a href="##">About</a>
            </li>
            <li>
              <a href="##">Support</a>
            </li>
            <li>
              <a href="##">Puchase</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Categorias;
