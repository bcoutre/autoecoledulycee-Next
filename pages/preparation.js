import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Preparation = (props) => {
  return (
    <>
      <div className="preparation-container1">
        <Head>
          <title>Preparation - autoecoledulycee</title>
          <meta property="og:title" content="Preparation - autoecoledulycee" />
        </Head>
        <div className="preparation-top-container">
          <div className="preparation-content-container">
            <img
              alt="image"
              src="/logo-400h.png"
              className="preparation-image"
            />
            <h1 className="preparation-text10">
              <span>BIENVENUE A L&apos;AUTO-ECOLE DU LYCEE</span>
              <br></br>
            </h1>
            <h2 className="Subheading preparation-subheading">
              Eglantine Conduite
            </h2>
            <span className="preparation-text13">
              Permis B, A1, A2, AM, Formation 125 cm3, et Post-Permis
            </span>
          </div>
          <nav data-role="Header" className="preparation-navbar">
            <div className="preparation-right-side1">
              <div className="preparation-links-container1">
                <Link href="/">
                  <a className="preparation-link1">Accueil</a>
                </Link>
                <Link href="/formations">
                  <a className="preparation-link2">Formations</a>
                </Link>
                <span className="preparation-text14">Préparation Examen</span>
                <Link href="/apres-examen">
                  <a className="preparation-link3">
                    <span>Après l&apos;examen</span>
                    <br></br>
                  </a>
                </Link>
              </div>
            </div>
            <div data-role="BurgerMenu" className="preparation-burger-menu1">
              <svg viewBox="0 0 1024 1024" className="preparation-burger-menu2">
                <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              </svg>
            </div>
            <div data-role="MobileMenu" className="preparation-mobile-menu">
              <div className="preparation-nav">
                <div className="preparation-top">
                  <div
                    data-role="CloseMobileMenu"
                    className="preparation-close-menu"
                  >
                    <svg viewBox="0 0 1024 1024" className="preparation-icon4">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <div className="preparation-right-side2">
                  <div className="preparation-links-container2">
                    <Link href="/">
                      <a className="preparation-link4">Accueil</a>
                    </Link>
                    <Link href="/formations">
                      <a className="preparation-link5">Formations</a>
                    </Link>
                    <Link href="/preparation">
                      <a className="preparation-link6">Avant l&apos;examen</a>
                    </Link>
                    <Link href="/apres-examen">
                      <a className="preparation-link7">Après l&apos;examen</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="preparation-follow-container1">
                <span className="preparation-text17">Suivez nous</span>
                <a
                  href="https://www.facebook.com/autoecolelycee"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="preparation-link8"
                >
                  <div className="preparation-icons-container1">
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="preparation-icon6"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div id="main-section" className="preparation-main">
          <h1>Préparation à l&apos;examen</h1>
          <span className="preparation-text19">
            <span>
              D&apos;une durée de 30 minutes, l&apos;examen permet à un
              inspecteur de valider un niveau suffisant. 
            </span>
            <br></br>
            <span>
              Durant cet examen, seront posées les questions de vérification (3
              points) listées à la fin de votre livret de conduite et dans les
              deux vidéos suivantes : 
            </span>
          </span>
          <div className="preparation-container2">
            <iframe
              src="https://www.youtube.com/embed/JSRctG-efQQ"
              className="preparation-iframe1"
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/EZXLKHMjJOY"
              allowFullScreen
              className="preparation-iframe2"
            ></iframe>
          </div>
        </div>
        <div className="preparation-footer">
          <div className="preparation-menu">
            <span>
              <span>SARL Unipersonnelle Eglantine Conduite</span>
              <br></br>
              <span>3 Bvd Du Lycée 07000 Privas</span>
              <br></br>
              <span>Immatriculée au RCS Aubenas B 912 260 940</span>
              <br></br>
              <span>Agrément N° : E2200700020</span>
            </span>
            <div className="preparation-follow-container2">
              <span className="preparation-text31">Suivez-nous</span>
              <div className="preparation-icons-container2">
                <a
                  href="https://www.facebook.com/autoecolelycee"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="preparation-link9"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="preparation-icon8"
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
          .preparation-container1 {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .preparation-top-container {
            width: 100%;
            height: 600px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .preparation-content-container {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .preparation-image {
            width: auto;
            height: 314px;
            max-width: 700px;
            object-fit: cover;
          }
          .preparation-text13 {
            font-style: normal;
            font-weight: 600;
            padding-top: var(--dl-space-space-doubleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .preparation-navbar {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            max-width: 1000px;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .preparation-right-side1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .preparation-links-container1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .preparation-link1 {
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .preparation-link2 {
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .preparation-text14 {
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .preparation-link3 {
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .preparation-burger-menu1 {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .preparation-burger-menu2 {
            width: 24px;
            height: 24px;
          }
          .preparation-mobile-menu {
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
          .preparation-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .preparation-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .preparation-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .preparation-icon4 {
            width: 24px;
            height: 24px;
          }
          .preparation-right-side2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .preparation-links-container2 {
            display: flex;
            align-items: flex-start;
            margin-bottom: 16px;
            flex-direction: column;
            justify-content: space-between;
          }
          .preparation-link4 {
            margin-bottom: 8px;
            text-decoration: none;
          }
          .preparation-link5 {
            margin-bottom: 8px;
            text-decoration: none;
          }
          .preparation-link6 {
            margin-bottom: 8px;
            text-decoration: none;
          }
          .preparation-link7 {
            text-decoration: none;
          }
          .preparation-follow-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .preparation-text17 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .preparation-link8 {
            display: contents;
          }
          .preparation-icons-container1 {
            width: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
          }
          .preparation-icon6 {
            width: 24px;
            height: 24px;
          }
          .preparation-main {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .preparation-text19 {
            color: var(--dl-color-gray-500);
          }
          .preparation-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .preparation-iframe1 {
            width: 320px;
            height: 200px;
          }
          .preparation-iframe2 {
            width: 320px;
            height: 200px;
          }
          .preparation-footer {
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .preparation-menu {
            width: 100%;
            display: flex;
            max-width: 1000px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .preparation-follow-container2 {
            display: flex;
            align-items: center;
            margin-left: 50px;
            flex-direction: column;
            justify-content: space-between;
          }
          .preparation-text31 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .preparation-icons-container2 {
            width: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .preparation-link9 {
            display: contents;
          }
          .preparation-icon8 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          @media (max-width: 991px) {
            .preparation-mobile-menu {
              display: none;
            }
            .preparation-text19 {
              color: var(--dl-color-gray-black);
            }
          }
          @media (max-width: 767px) {
            .preparation-top-container {
              height: auto;
            }
            .preparation-content-container {
              align-items: center;
              padding-bottom: 0px;
            }
            .preparation-text10 {
              font-size: 2.5rem;
            }
            .preparation-text13 {
              text-align: center;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .preparation-navbar {
              width: auto;
              padding: 0px;
            }
            .preparation-right-side1 {
              display: none;
            }
            .preparation-burger-menu1 {
              display: flex;
            }
            .preparation-main {
              margin: 0px;
              padding-top: var(--dl-space-space-doubleunit);
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .preparation-text19 {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .preparation-menu {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .preparation-top-container {
              width: auto;
              height: auto;
            }
            .preparation-content-container {
              width: auto;
              height: auto;
              padding-bottom: 0px;
            }
            .preparation-image {
              height: auto;
              max-width: 100%;
            }
            .preparation-text10 {
              width: 100%;
              height: auto;
              font-size: 2rem;
              text-align: center;
              padding-left: 0px;
            }
            .preparation-subheading {
              font-size: 1.3rem;
              text-align: center;
            }
            .preparation-navbar {
              width: auto;
              height: auto;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
            }
            .preparation-main {
              padding: var(--dl-space-space-doubleunit);
            }
            .preparation-follow-container2 {
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Preparation
