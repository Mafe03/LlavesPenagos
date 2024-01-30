import React, { useState } from "react";
import cerrojero from "../../assets/images/cerrojero.png";
import recarga from "../../assets/images/recarga.jpg";
import duplicado from "../../assets/images/duplicado.png";

/**
 * Componente para la sección de servicios.
 *
 * @component
 * @example
 * // Uso del componente en otro componente o archivo.
 * import Servicio from './Servicio';
 * // ...
 * <Servicio />
 */
const Servicio = () => {
  return (
    <>
<<<<<<< HEAD
      {/* Sección Hero */}
      <div className="hero">
        {/* ... (Contenido de la sección Hero) */}
=======
      <div className="hero mt-5">
>>>>>>> c952e302e1aad699223802829b6f2720e06407ff
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Servicios</h1>
                <p className="mb-2" style={{ fontSize: "18px" }}>
                  "En Llaves y Extintores Penagos, encendemos la seguridad y
                  apagamos las preocupaciones. Tu tranquilidad, nuestra
                  prioridad."
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap"></div>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      {/* Sección "Why Choose Us" */}
      <div className="why-choose-section">
        {/* ... (Contenido de la sección "Why Choose Us") */}
        <div className="container-sm">
          <div className="row my-5">
            <div className="col-6 col-md-6 col-lg-3 mb-4">
=======

      <div className="why-choose-section ">
        <div className="container-sm ">
          <div className="row my-5 d-flex justify-content-center">
            <div className="col-6 col-md-6 col-lg-3 mb-4 ">
>>>>>>> c952e302e1aad699223802829b6f2720e06407ff
              <div className="feature">
                <div className="icon">
                  <img
                    src={cerrojero}
                    alt="Image"
                    className="imf-fluid"
                    style={{ width: "310px", height: "300px" }}
                  />
                </div>
                <h3 className="font-weight-bold mt-3">Cambio de cerrojeria</h3>
                <p className="mt-3">
                  Nos especializamos en ofrecer un servicio completo y confiable
                  de cambio de cerrajería. Ya sea que necesite actualizar sus
                  cerraduras por razones de seguridad, renovar el aspecto
                  estético de sus puertas o mejorar la eficiencia de su sistema
                  de acceso, estamos aquí para brindarle soluciones a medida..
                </p>
              </div>
            </div>

            <div className="col-6 col-md-6 col-lg-3 mb-4">
              <div className="feature">
                <div className="icon">
                  <img
                    src={duplicado}
                    alt="Image"
                    className="imf-fluid"
                    style={{ width: "310px", height: "300px" }}
                  />
                </div>
                <h3 className="font-weight-bold mt-3">
                  Copia de llave a domicilio
                </h3>
                <p className="mt-3">
                  Entendemos la importancia de contar con llaves de repuesto de
                  manera conveniente y eficiente. Es por eso que ofrecemos un
                  servicio especializado de copia de llaves a domicilio para
                  brindarle la comodidad que necesita.
                </p>
              </div>
            </div>

            <div className="col-6 col-md-6 col-lg-3 mb-4">
              <div className="feature">
                <div className="icon">
                  <img
                    src={recarga}
                    alt="Image"
                    className="imf-fluid"
                    style={{ width: "310px", height: "300px" }}
                  />
                </div>
                <h3 className="font-weight-bold mt-3">Recarga de extintores</h3>
                <p className="mt-3">
                  Nos comprometemos a garantizar su seguridad y la de su
                  entorno. Nuestro servicio de recarga de extintores está
                  diseñado para mantener sus equipos de seguridad en óptimas
                  condiciones, listos para actuar en caso de emergencia.
                </p>
              </div>
            </div>
<<<<<<< HEAD

            <div className="col-6 col-md-6 col-lg-3 mb-4">
              <div className="feature">
                <div className="icon">
                  <img
                    src="images/truck.svg"
                    alt="Image"
                    className="imf-fluid"
                  />
                </div>
                <h3>Fast &amp; Free Shipping</h3>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>

            <div className="col-6 col-md-6 col-lg-3 mb-4">
              <div className="feature">
                <div className="icon">
                  <img src="images/bag.svg" alt="Image" className="imf-fluid" />
                </div>
                <h3>Easy to Shop</h3>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>

            <div className="col-6 col-md-6 col-lg-3 mb-4">
              <div className="feature">
                <div className="icon">
                  <img
                    src="images/support.svg"
                    alt="Image"
                    className="imf-fluid"
                  />
                </div>
                <h3>24/7 Support</h3>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>

            <div className="col-6 col-md-6 col-lg-3 mb-4">
              <div className="feature">
                <div className="icon">
                  <img
                    src="images/return.svg"
                    alt="Image"
                    className="imf-fluid"
                  />
                </div>
                <h3>Hassle Free Returns</h3>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sección de Productos */}
      <div className="product-section pt-0">
        {/* ... (Contenido de la sección de Productos) */}
        <div className="container-sm">
          <div className="row">
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">
                Crafted with excellent material.
              </h2>
              <p className="mb-4">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.{" "}
              </p>
              <p>
                <a href="#" className="btn">
                  Explore
                </a>
              </p>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="#">
                <img
                  src="images/product-1.png"
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title">Nordic Chair</h3>
                <strong className="product-price">$50.00</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </a>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="#">
                <img
                  src="images/product-2.png"
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title">Kruzo Aero Chair</h3>
                <strong className="product-price">$78.00</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </a>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="#">
                <img
                  src="images/product-3.png"
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title">Ergonomic Chair</h3>
                <strong className="product-price">$43.00</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </a>
            </div>
=======
>>>>>>> c952e302e1aad699223802829b6f2720e06407ff
          </div>
        </div>
      </div>
      {/* ... (Contenido del footer) */}
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

export default Servicio;
