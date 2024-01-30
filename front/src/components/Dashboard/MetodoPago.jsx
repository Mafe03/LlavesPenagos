import React, { useState } from "react";

/**
 * Componente que representa la página de Métodos de Pago en el panel de administración.
 * Muestra información relacionada con los métodos de pago disponibles.
 *
 * @component
 * @example
 * // Uso del componente en una ruta específica
 * <Route path="/metodo-pago" element={<MetodoPago />} />
 *
 * @returns {JSX.Element} El componente de la página de Métodos de Pago.
 */
const MetodoPago = () => {
  return (
    <>
      <main className="main users chart-page" id="skip-target">
        <div className="container">
          <h2 className="main-title">Metodos de Pagos</h2>
          <div className="row stat-cards">
            <div className="col-md-6 col-xl-3"></div>
          </div>
        </div>
      </main>
      <footer class="footer">
        <div class="container footer--flex">
          <div class="footer-start">
            <p>
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

export default MetodoPago;
