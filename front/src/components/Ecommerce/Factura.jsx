import React, { useState } from "react";
import { NavLink } from "react-router-dom";
/**
 * Functional component representing the final step of the checkout process.
 * @returns {JSX.Element} React component.
 */
const Factura = () => {
  /**
   * Render the Factura component.
   * @returns {JSX.Element} JSX for the component.
   */
  return (
    <>
      <div className="untree_co-section before-footer-section">
        <div className="container-sm">
          <section className="container py-5">
            <div
              id="ast-checkout-wrap"
              className="ast-checkout-smaller ast-checkout-uppercase"
            >
              <NavLink to={"/Ecommerce/Carrito"}>
                <a href="" className="ast-current">
                  <span className="ast-step-number">1</span>
                  <p>Carrito de Compras</p>
                </a>
              </NavLink>
              <span class="ahfb-svg-iconset ast-inline-flex svg-baseline ms-2 me-2">
                <i class="fa-solid fa-chevron-right"></i>
              </span>{" "}
              <NavLink to={"/Ecommerce/PasarelaPago"}>
                <a href="">
                  <span className="ast-step-number">2</span>
                  <p>Verificar detalles</p>
                </a>
              </NavLink>
              <span className="ahfb-svg-iconset ast-inline-flex svg-baseline ms-2 me-2">
                <i className="fa-solid fa-chevron-right"></i>
              </span>{" "}
              <NavLink to={"/Ecommerce/Factura"}>
                <a
                  href="#"
                  className="ast-disable-click
                                  "
                >
                  <span className="ast-step-number">3</span>
                  <p>Orden Completa</p>
                </a>
              </NavLink>
            </div>
            <div className="row  pt-5 pb-3">
              <div className="col-lg-12">
                <h1 className="h1 text-start text-center">Pedido finalizado</h1>
                <div className="col-4 text-center m-auto">
                  <NavLink to="/Ecommerce/Perfil">
                    <button
                      href="#"
                      className="btn btn-dark w-100 mt-5 btn-gradient"
                    >
                      Ver facturas
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <footer className="footer-section">
        <div className="container relative">
          <div className="row">
            <div className="col-lg-8">
              <div className="subscription-form">
                <h3 className="d-flex align-items-center">
                  <span className="me-1">
                    <img
                      src="images/envelope-outline.svg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </span>
                  <span>Subscribe to Newsletter</span>
                </h3>

                <form action="#" className="row g-3">
                  <div className="col-auto">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="col-auto">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-primary">
                      <span className="fa fa-paper-plane"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="row g-5 mb-5">
            <div className="col-lg-4">
              <div className="mb-4 footer-logo-wrap">
                <a href="#" className="footer-logo">
                  Furni<span>.</span>
                </a>
              </div>
              <p className="mb-4">
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant
              </p>

              <ul className="list-unstyled custom-social">
                <li>
                  <a href="#">
                    <span className="fa fa-brands fa-facebook-f"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-brands fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-brands fa-instagram"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-brands fa-linkedin"></span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-8">
              <div className="row links-wrap">
                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Support</a>
                    </li>
                    <li>
                      <a href="#">Knowledge base</a>
                    </li>
                    <li>
                      <a href="#">Live chat</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Jobs</a>
                    </li>
                    <li>
                      <a href="#">Our team</a>
                    </li>
                    <li>
                      <a href="#">Leadership</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Nordic Chair</a>
                    </li>
                    <li>
                      <a href="#">Kruzo Aero</a>
                    </li>
                    <li>
                      <a href="#">Ergonomic Chair</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-top copyright">
            <div className="row pt-4">
              <div className="col-lg-6">
                <p className="mb-2 text-center text-lg-start">
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script>.
                  All Rights Reserved. &mdash; Designed with love by{" "}
                  <a href="https://untree.co">Untree.co</a> Distributed By{" "}
                  <a hreff="https://themewagon.com">ThemeWagon</a>
                </p>
              </div>

              <div className="col-lg-6 text-center text-lg-end">
                <ul className="list-unstyled d-inline-flex ms-auto">
                  <li className="me-4">
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Factura;