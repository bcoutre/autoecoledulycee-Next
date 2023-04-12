import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

const Accueil = (props) => {
  return (
    <>
      <div className="accueil-container">
        <Head>
          <title>autoecoledulycee</title>
          <meta property="og:title" content="autoecoledulycee" />
        </Head>
        <div className="accueil-top-container">
          <div className="accueil-content-container">
            <img
              alt="image"
              src="/playground_assets/logo-400h.png"
              className="accueil-image"
            />
            <h1 className="accueil-text">
              <span>BIENVENUE A L&apos;AUTO-ECOLE DU LYCEE</span>
              <br></br>
            </h1>
            <h2 className="Subheading accueil-subheading">
              Eglantine Conduite
            </h2>
            <span className="accueil-text03">
              Permis B, A1, A2, AM, Formation 125 cm3, et Post-Permis
            </span>
            <nav data-role="Header" className="accueil-navbar">
              <div className="accueil-right-side">
                <div className="accueil-links-container">
                  <span className="accueil-text04">Accueil</span>
                  <Link href="/formations">
                    <a className="accueil-link">Formations</a>
                  </Link>
                  <Link href="/preparation">
                    <a className="accueil-link01">Préparation Examen</a>
                  </Link>
                  <Link href="/apres-examen">
                    <a className="accueil-link02">
                      <span>Après l&apos;examen</span>
                      <br></br>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="accueil-container1">
                <div data-role="BurgerMenu" className="accueil-burger-menu">
                  <svg viewBox="0 0 1024 1024" className="accueil-burger-menu">
                    <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                    <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                    <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                  </svg>
                </div>
              </div>
              <div data-role="MobileMenu" className="accueil-mobile-menu">
                <div className="accueil-nav">
                  <div className="accueil-top">
                    <div
                      data-role="CloseMobileMenu"
                      className="accueil-close-menu"
                    >
                      <svg viewBox="0 0 1024 1024" className="accueil-icon3">
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="accueil-right-side1">
                    <div className="accueil-links-container1">
                      <Link href="/">
                        <a className="accueil-link03">Accueil</a>
                      </Link>
                      <Link href="/formations">
                        <a className="accueil-link04">Formations</a>
                      </Link>
                      <Link href="/preparation">
                        <a className="accueil-link05">Avant l&apos;examen</a>
                      </Link>
                      <Link href="/apres-examen">
                        <a className="accueil-link06">Après l&apos;examen</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="accueil-follow-container">
                  <span className="accueil-text07">Suivez nous</span>
                  <div className="accueil-icons-container">
                    <a
                      href="https://www.facebook.com/autoecolelycee"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="accueil-link07"
                    >
                      <svg
                        viewBox="0 0 602.2582857142856 1024"
                        className="accueil-icon5"
                      >
                        <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div id="main-section" className="accueil-main">
          <div className="accueil-container2">
            <span className="accueil-text08">
              <span>3 Boulevard du lycée</span>
              <br></br>
              <a href="tel:+33 4 75 64 49 10">04 75 64 49 10</a>
              <a href="tel:+33 4 75 64 49 10">
                <br></br>
              </a>
              <a href="mailto:autoecoledulycee.privas@gmail.com?subject=Demande d'information">
                autoecoledulycee.privas@gmail.com
              </a>
              <br></br>
              <span>---</span>
              <br></br>
              <span>Bureau et leçons de code :</span>
              <br></br>
              <span>Mardi : 17h-19h</span>
              <br></br>
              <span>Mercredi : 17h-19h</span>
              <br></br>
              <span>Jeudi : 18h-19h</span>
              <br></br>
              <span>Samedi : 11h-12h</span>
              <br></br>
              <span>---</span>
              <br></br>
              <span>Leçons de conduite :</span>
              <br></br>
              <span>Du lundi au Samedi de 8h à 19h</span>
            </span>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2457.441881348849!2d4.596878376123943!3d44.731810615696936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b53af0f188638b%3A0x4a94d53970a20c3b!2sAuto%20Ecole%20du%20Lyc%C3%A9e!5e1!3m2!1sfr!2sfr!4v1671619201173!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
              className="accueil-iframe"
            ></iframe>
          </div>
        </div>
        <div className="accueil-container3">
          <div className="accueil-code-embed">
            <DangerousHTML
              html={`<div id="opinion-system" style="background-color:blue center"
  class="opinion-system-widget-company-rating"
  data-os-company-id="15920"
  data-os-logo='false'
  data-os-review='true'
></div>
`}
            ></DangerousHTML>
          </div>
        </div>
        <div className="accueil-footer">
          <div className="accueil-menu">
            <span className="accueil-text30">
              <span>SARL Unipersonnelle Eglantine Conduite</span>
              <br></br>
              <span>3 Bvd Du Lycée 07000 Privas</span>
              <br></br>
              <span>Immatriculée au RCS Aubenas B 912 260 940</span>
              <br></br>
              <span>Agrément N° : E2200700020</span>
            </span>
            <div className="accueil-follow-container1">
              <span className="accueil-text38">Suivez-nous</span>
              <div className="accueil-icons-container1">
                <a
                  href="https://www.facebook.com/autoecolelycee"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="accueil-link11"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="accueil-icon7"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .accueil-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .accueil-top-container {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .accueil-content-container {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .accueil-image {
            width: auto;
            height: 314px;
            max-width: 700px;
            object-fit: cover;
          }
          .accueil-text03 {
            padding-top: var(--dl-space-space-doubleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .accueil-navbar {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            max-width: 1000px;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .accueil-right-side {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .accueil-links-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .accueil-text04 {
            margin-right: var(--dl-space-space-doubleunit);
          }
          .accueil-link {
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .accueil-link01 {
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .accueil-link02 {
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .accueil-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .accueil-burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .accueil-burger-menu {
            width: 24px;
            height: 24px;
            display: none;
          }
          .accueil-mobile-menu {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: none;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .accueil-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .accueil-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .accueil-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .accueil-icon3 {
            width: 24px;
            height: 24px;
          }
          .accueil-right-side1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .accueil-links-container1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: 16px;
            flex-direction: column;
            justify-content: space-between;
          }
          .accueil-link03 {
            margin-bottom: 8px;
            text-decoration: none;
          }
          .accueil-link04 {
            margin-bottom: 8px;
            text-decoration: none;
          }
          .accueil-link05 {
            margin-bottom: 8px;
            text-decoration: none;
          }
          .accueil-link06 {
            text-decoration: none;
          }
          .accueil-follow-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .accueil-text07 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .accueil-icons-container {
            width: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .accueil-link07 {
            display: contents;
          }
          .accueil-icon5 {
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          .accueil-main {
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-quadruple);
            justify-content: center;
          }
          .accueil-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .accueil-text08 {
            color: var(--dl-color-gray-black);
          }
          .accueil-iframe {
            width: 642px;
            height: 401px;
          }
          .accueil-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .accueil-code-embed {
            width: auto;
            height: auto;
            align-self: center;
          }
          .accueil-footer {
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .accueil-menu {
            width: 100%;
            display: flex;
            max-width: 1000px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .accueil-follow-container1 {
            display: flex;
            align-items: center;
            margin-left: 50px;
            flex-direction: column;
            justify-content: space-between;
          }
          .accueil-text38 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .accueil-icons-container1 {
            width: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .accueil-link11 {
            display: contents;
          }
          .accueil-icon7 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          @media (max-width: 991px) {
            .accueil-top-container {
              height: auto;
            }
            .accueil-burger-menu {
              display: flex;
            }
            .accueil-mobile-menu {
              display: none;
            }
            .accueil-container3 {
              align-items: center;
              justify-content: center;
            }
            .accueil-code-embed {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .accueil-top-container {
              height: auto;
            }
            .accueil-content-container {
              align-items: center;
            }
            .accueil-text {
              font-size: 2.5rem;
            }
            .accueil-text03 {
              font-style: normal;
              text-align: center;
              font-weight: 600;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .accueil-navbar {
              padding: var(--dl-space-space-halfunit);
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .accueil-right-side {
              display: none;
            }
            .accueil-burger-menu {
              display: flex;
            }
            .accueil-main {
              padding-top: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .accueil-container2 {
              width: auto;
              align-items: center;
              padding-top: var(--dl-space-space-doubleunit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-doubleunit);
              justify-content: space-between;
            }
            .accueil-text08 {
              text-align: center;
            }
            .accueil-container3 {
              align-items: center;
              justify-content: center;
            }
            .accueil-code-embed {
              align-self: center;
            }
            .accueil-menu {
              flex-direction: column;
            }
            .accueil-text30 {
              text-align: center;
            }
            .accueil-text38 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .accueil-top-container {
              height: auto;
            }
            .accueil-content-container {
              width: 100%;
              height: auto;
            }
            .accueil-image {
              height: auto;
              max-width: 100%;
            }
            .accueil-text {
              width: 100%;
              height: auto;
              font-size: 2rem;
              text-align: center;
              padding-left: 0px;
            }
            .accueil-subheading {
              font-size: 1.3rem;
              text-align: center;
            }
            .accueil-text03 {
              font-style: normal;
              font-weight: 600;
            }
            .accueil-navbar {
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .accueil-burger-menu {
              display: flex;
              z-index: 200;
            }
            .accueil-mobile-menu {
              display: none;
            }
            .accueil-main {
              width: 100%;
              align-self: center;
              padding-top: 0px;
              justify-content: center;
            }
            .accueil-container2 {
              width: 100%;
              flex-wrap: wrap;
              align-self: center;
              padding-top: var(--dl-space-space-doubleunit);
              flex-direction: row;
              justify-content: center;
            }
            .accueil-text08 {
              color: var(--dl-color-gray-black);
              align-self: center;
            }
            .accueil-container3 {
              align-items: center;
              justify-content: center;
              background-color: var(--dl-color-gray-white);
            }
            .accueil-code-embed {
              align-self: center;
            }
            .accueil-menu {
              width: 315px;
              align-self: center;
            }
            .accueil-follow-container1 {
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Accueil
