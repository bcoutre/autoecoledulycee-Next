import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

const Accueil = (props) => {
  return (
    <>
      <div className="accueil-container">
        <Head>
          <title>autoecoledulycee</title>
          <meta property="og:title" content="autoecoledulycee" />
        </Head>
        <div className="accueil-container1">
          <svg viewBox="0 0 1024 1024" className="accueil-icon">
            <path d="M1024 429.256c0-200.926-58.792-363.938-131.482-365.226 0.292-0.006 0.578-0.030 0.872-0.030h-82.942c0 0-194.8 146.336-475.23 203.754-8.56 45.292-14.030 99.274-14.030 161.502s5.466 116.208 14.030 161.5c280.428 57.418 475.23 203.756 475.23 203.756h82.942c-0.292 0-0.578-0.024-0.872-0.032 72.696-1.288 131.482-164.298 131.482-365.224zM864.824 739.252c-9.382 0-19.532-9.742-24.746-15.548-12.63-14.064-24.792-35.96-35.188-63.328-23.256-61.232-36.066-143.31-36.066-231.124 0-87.81 12.81-169.89 36.066-231.122 10.394-27.368 22.562-49.266 35.188-63.328 5.214-5.812 15.364-15.552 24.746-15.552 9.38 0 19.536 9.744 24.744 15.552 12.634 14.064 24.796 35.958 35.188 63.328 23.258 61.23 36.068 143.312 36.068 231.122 0 87.804-12.81 169.888-36.068 231.124-10.39 27.368-22.562 49.264-35.188 63.328-5.208 5.806-15.36 15.548-24.744 15.548zM251.812 429.256c0-51.95 3.81-102.43 11.052-149.094-47.372 6.554-88.942 10.324-140.34 10.324-67.058 0-67.058 0-67.058 0l-55.466 94.686v88.17l55.46 94.686c0 0 0 0 67.060 0 51.398 0 92.968 3.774 140.34 10.324-7.236-46.664-11.048-97.146-11.048-149.096zM368.15 642.172l-127.998-24.51 81.842 321.544c4.236 16.634 20.744 25.038 36.686 18.654l118.556-47.452c15.944-6.376 22.328-23.964 14.196-39.084l-123.282-229.152zM864.824 548.73c-3.618 0-7.528-3.754-9.538-5.992-4.87-5.42-9.556-13.86-13.562-24.408-8.962-23.6-13.9-55.234-13.9-89.078s4.938-65.478 13.9-89.078c4.006-10.548 8.696-18.988 13.562-24.408 2.010-2.24 5.92-5.994 9.538-5.994 3.616 0 7.53 3.756 9.538 5.994 4.87 5.42 9.556 13.858 13.56 24.408 8.964 23.598 13.902 55.234 13.902 89.078 0 33.842-4.938 65.478-13.902 89.078-4.004 10.548-8.696 18.988-13.56 24.408-2.008 2.238-5.92 5.992-9.538 5.992z"></path>
          </svg>
          <div className="accueil-container2">
            <span className="accueil-text">
              <span>
                Ouverture du bureau et de la salle de code de 17 à 19h les :
              </span>
              <br></br>
              <span>
                mercredi 25/10
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                Jeudi 26/10,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Mardi 31/10</span>
              <br></br>
              <span>
                Jeudi 02/11
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Retour aux horaires normaux le mardi 07/11.</span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="accueil-top-container">
          <div className="accueil-content-container">
            <img alt="image" src="/logo-400h.png" className="accueil-image" />
            <h1 className="accueil-text13">
              <span>BIENVENUE A L&apos;AUTO-ECOLE DU LYCEE</span>
              <br></br>
            </h1>
            <h2 className="Subheading accueil-subheading">
              Eglantine Conduite
            </h2>
            <div className="accueil-container3">
              <div className="accueil-container4">
                <Script
                  html={`<div id="opinion-system" style="background-color:blue center"
  class="opinion-system-widget-company-rating"
  data-os-company-id="15920"
  data-os-logo='true'
  data-os-review='true'
/>
`}
                ></Script>
              </div>
            </div>
            <span className="accueil-text16">
              Permis B, A1, A2, AM, Formation 125 cm3, et Post-Permis
            </span>
            <nav data-role="Header" className="accueil-navbar">
              <div className="accueil-right-side">
                <div className="accueil-links-container">
                  <span className="accueil-text17">Accueil</span>
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
              <div className="accueil-container5">
                <div data-role="BurgerMenu" className="accueil-burger-menu">
                  <svg viewBox="0 0 1024 1024" className="accueil-burger-menu1">
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
                      <svg viewBox="0 0 1024 1024" className="accueil-icon05">
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
                  <span className="accueil-text20">Suivez nous</span>
                  <div className="accueil-icons-container">
                    <a
                      href="https://www.facebook.com/autoecolelycee"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="accueil-link07"
                    >
                      <svg
                        viewBox="0 0 602.2582857142856 1024"
                        className="accueil-icon07"
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
          <div className="accueil-container6">
            <span className="accueil-text21">
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
        <div className="accueil-footer">
          <div className="accueil-menu">
            <span className="accueil-text43">
              <span>SARL Unipersonnelle Eglantine Conduite</span>
              <br></br>
              <span>3 Bvd Du Lycée 07000 Privas</span>
              <br></br>
              <span>Immatriculée au RCS Aubenas B 912 260 940</span>
              <br></br>
              <span>Agrément N° : E2200700020</span>
            </span>
            <div className="accueil-follow-container1">
              <span className="accueil-text51">Suivez-nous</span>
              <div className="accueil-icons-container1">
                <a
                  href="https://www.facebook.com/autoecolelycee"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="accueil-link11"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="accueil-icon09"
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
            flex-direction: column;
          }
          .accueil-container1 {
            width: 100%;
            height: 187px;
            display: flex;
            align-items: flex-start;
            margin-left: 0px;
            margin-right: 0px;
            background-color: #a01d21;
          }
          .accueil-icon {
            fill: var(--dl-color-gray-white);
            flex: 1;
            width: auto;
            height: 105px;
            align-self: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
          }
          .accueil-container2 {
            flex: 0 0 auto;
            width: 1414px;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            align-self: center;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .accueil-text {
            color: var(--dl-color-gray-white);
            align-self: flex-start;
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
          .accueil-container3 {
            width: auto;
            height: auto;
            align-self: center;
          }
          .accueil-container4 {
            display: contents;
          }
          .accueil-text16 {
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
          .accueil-text17 {
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
          .accueil-container5 {
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
          .accueil-burger-menu1 {
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
          .accueil-icon05 {
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
          .accueil-text20 {
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
          .accueil-icon07 {
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
          .accueil-container6 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .accueil-text21 {
            color: var(--dl-color-gray-black);
          }
          .accueil-iframe {
            width: 642px;
            height: 401px;
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
          .accueil-text51 {
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
          .accueil-icon09 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          @media (max-width: 991px) {
            .accueil-container1 {
              width: auto;
              height: 171px;
              margin-right: 0px;
              padding-right: 0px;
            }
            .accueil-icon {
              fill: var(--dl-color-gray-white);
              width: 106px;
              height: 80px;
              align-self: center;
            }
            .accueil-container2 {
              width: 85%;
              height: 144px;
              flex-wrap: wrap;
              justify-content: center;
            }
            .accueil-text {
              color: var(--dl-color-gray-white);
            }
            .accueil-top-container {
              height: auto;
            }
            .accueil-container3 {
              align-self: center;
            }
            .accueil-burger-menu1 {
              display: flex;
            }
            .accueil-mobile-menu {
              display: none;
            }
            .accueil-main {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .accueil-container1 {
              width: 100%;
              height: 252px;
              align-items: center;
              flex-direction: column;
            }
            .accueil-icon {
              fill: var(--dl-color-gray-white);
              flex: 3;
              width: 200px;
              height: 200px;
              align-self: center;
              padding-left: 0px;
              padding-right: 0px;
            }
            .accueil-container2 {
              width: 100%;
              height: auto;
              flex-wrap: wrap;
              margin-right: 0px;
              justify-content: center;
            }
            .accueil-text {
              align-self: center;
            }
            .accueil-top-container {
              height: auto;
            }
            .accueil-content-container {
              align-items: center;
            }
            .accueil-text13 {
              font-size: 2.5rem;
            }
            .accueil-container3 {
              align-self: center;
            }
            .accueil-text16 {
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
            .accueil-burger-menu1 {
              display: flex;
            }
            .accueil-main {
              padding-top: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .accueil-container6 {
              width: auto;
              align-items: center;
              padding-top: var(--dl-space-space-doubleunit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-doubleunit);
              justify-content: space-between;
            }
            .accueil-text21 {
              text-align: center;
            }
            .accueil-menu {
              flex-direction: column;
            }
            .accueil-text43 {
              text-align: center;
            }
            .accueil-text51 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .accueil-container1 {
              width: 100%;
              height: 278px;
              flex-wrap: wrap;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 0px;
              padding-right: 0px;
              flex-direction: column;
            }
            .accueil-icon {
              fill: var(--dl-color-gray-white);
              width: 99px;
              height: 140px;
              align-self: center;
              margin-left: 0px;
              margin-right: 0px;
              padding-left: 0px;
              padding-right: 0px;
            }
            .accueil-container2 {
              width: 100%;
              height: auto;
              position: relative;
              flex-wrap: wrap;
              align-items: flex-start;
              margin-right: 0px;
              padding-right: 0px;
              flex-direction: column;
            }
            .accueil-text {
              color: var(--dl-color-gray-white);
              background-color: transparent;
            }
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
            .accueil-text13 {
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
            .accueil-container3 {
              align-self: center;
              margin-bottom: 0px;
            }
            .accueil-text16 {
              font-style: normal;
              font-weight: 600;
            }
            .accueil-navbar {
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .accueil-burger-menu1 {
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
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: center;
            }
            .accueil-container6 {
              width: 100%;
              position: relative;
              flex-wrap: wrap;
              align-self: center;
              padding-top: var(--dl-space-space-doubleunit);
              flex-direction: row;
              justify-content: center;
            }
            .accueil-text21 {
              color: var(--dl-color-gray-black);
              align-self: center;
            }
            .accueil-iframe {
              width: 479px;
              height: 340px;
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
