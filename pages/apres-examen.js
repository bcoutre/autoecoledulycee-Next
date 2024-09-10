import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const ApresExamen = (props) => {
  return (
    <>
      <div className="apres-examen-container">
        <Head>
          <title>Apres-examen - autoecoledulycee</title>
          <meta property="og:title" content="Apres-examen - autoecoledulycee" />
        </Head>
        <div className="apres-examen-top-container">
          <div className="apres-examen-content-container">
            <img
              alt="image"
              src="/logo-400h.png"
              className="apres-examen-image"
            />
            <h1 className="apres-examen-text10">
              <span>BIENVENUE A L&apos;AUTO-ECOLE DU LYCEE</span>
              <br></br>
            </h1>
            <h2 className="Subheading apres-examen-subheading">
              Eglantine Conduite
            </h2>
            <span className="apres-examen-text13">
              Permis B, A1, A2, AM, Formation 125 cm3, et Post-Permis
            </span>
          </div>
          <nav data-role="Header" className="apres-examen-navbar">
            <div className="apres-examen-right-side1">
              <div className="apres-examen-links-container1">
                <Link href="/">
                  <a className="apres-examen-link10">Accueil</a>
                </Link>
                <Link href="/formations">
                  <a className="apres-examen-link11">Formations</a>
                </Link>
                <Link href="/preparation">
                  <a className="apres-examen-link12">Préparation Examen</a>
                </Link>
                <span className="apres-examen-text14">
                  <span>Après l&apos;examen</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div data-role="BurgerMenu" className="apres-examen-burger-menu1">
              <svg
                viewBox="0 0 1024 1024"
                className="apres-examen-burger-menu2"
              >
                <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              </svg>
            </div>
            <div data-role="MobileMenu" className="apres-examen-mobile-menu">
              <div className="apres-examen-nav">
                <div className="apres-examen-top">
                  <div
                    data-role="CloseMobileMenu"
                    className="apres-examen-close-menu"
                  >
                    <svg viewBox="0 0 1024 1024" className="apres-examen-icon4">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <div className="apres-examen-right-side2">
                  <div className="apres-examen-links-container2">
                    <Link href="/">
                      <a className="apres-examen-link13">Accueil</a>
                    </Link>
                    <Link href="/formations">
                      <a className="apres-examen-link14">Formations</a>
                    </Link>
                    <Link href="/preparation">
                      <a className="apres-examen-link15">Avant l&apos;examen</a>
                    </Link>
                    <Link href="/apres-examen">
                      <a className="apres-examen-link16">Après l&apos;examen</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="apres-examen-follow-container1">
                <span className="apres-examen-text17">Suivez nous</span>
                <a
                  href="https://www.facebook.com/autoecolelycee"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="apres-examen-link17"
                >
                  <div className="apres-examen-icons-container1">
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="apres-examen-icon6"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div id="main-section" className="apres-examen-main">
          <h1>Après l&apos;examen</h1>
          <span className="apres-examen-text19">
            <span>
              Votre examen est maintenant terminé, vous pourrez voir vos
              résultas 48 ou 72 heures après, en suivant
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://www.securite-routiere.gouv.fr/resultats-du-permis-de-conduire#/step-connexion"
              target="_blank"
              rel="noreferrer noopener"
              className="apres-examen-link18"
            >
              ce lien
            </a>
            <span>.</span>
            <br></br>
            <span>
              Le PDF que vous téléchargerez sert de permis provisoire pendant 4
              mois.
            </span>
            <br></br>
            <span>
              Pour faire la demande de votre titre définitif, suivez
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://permisdeconduire.ants.gouv.fr/"
              target="_blank"
              rel="noreferrer noopener"
              className="apres-examen-link19"
            >
              ce lien
            </a>
            <span>.</span>
            <br></br>
            <span>
              N&apos;oubliez pas de passer à l&apos;auto-école récupérer votre
              &quot;A&quot;.
            </span>
          </span>
        </div>
        <div className="apres-examen-footer">
          <div className="apres-examen-menu">
            <span>
              <span>SARL Unipersonnelle Eglantine Conduite</span>
              <br></br>
              <span>3 Bvd Du Lycée 07000 Privas</span>
              <br></br>
              <span>Immatriculée au RCS Aubenas B 912 260 940</span>
              <br></br>
              <span>Agrément N° : E2200700020</span>
            </span>
            <div className="apres-examen-follow-container2">
              <span className="apres-examen-text37">Suivez-nous</span>
              <div className="apres-examen-icons-container2">
                <a
                  href="https://www.facebook.com/autoecolelycee"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="apres-examen-link20"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="apres-examen-icon8"
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
          .apres-examen-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .apres-examen-top-container {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .apres-examen-content-container {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .apres-examen-image {
            width: auto;
            height: 314px;
            max-width: 700px;
            object-fit: cover;
          }
          .apres-examen-text13 {
            padding-top: var(--dl-space-space-doubleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .apres-examen-navbar {
            width: 100%;
            display: flex;
            padding: 0px;
            max-width: 1000px;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .apres-examen-right-side1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .apres-examen-links-container1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .apres-examen-link10 {
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .apres-examen-link11 {
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .apres-examen-link12 {
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .apres-examen-text14 {
            margin-right: var(--dl-space-space-doubleunit);
          }
          .apres-examen-burger-menu1 {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .apres-examen-burger-menu2 {
            width: 24px;
            height: 24px;
          }
          .apres-examen-mobile-menu {
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
          .apres-examen-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .apres-examen-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .apres-examen-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .apres-examen-icon4 {
            width: 24px;
            height: 24px;
          }
          .apres-examen-right-side2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .apres-examen-links-container2 {
            display: flex;
            align-items: flex-start;
            margin-bottom: 16px;
            flex-direction: column;
            justify-content: space-between;
          }
          .apres-examen-link13 {
            margin-bottom: 8px;
            text-decoration: none;
          }
          .apres-examen-link14 {
            margin-bottom: 8px;
            text-decoration: none;
          }
          .apres-examen-link15 {
            margin-bottom: 8px;
            text-decoration: none;
          }
          .apres-examen-link16 {
            text-decoration: none;
          }
          .apres-examen-follow-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .apres-examen-text17 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .apres-examen-link17 {
            display: contents;
          }
          .apres-examen-icons-container1 {
            width: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
          }
          .apres-examen-icon6 {
            width: 24px;
            height: 24px;
          }
          .apres-examen-main {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: flex-start;
          }
          .apres-examen-text19 {
            color: var(--dl-color-gray-black);
            text-align: justify;
          }
          .apres-examen-link18 {
            text-decoration: underline;
          }
          .apres-examen-link19 {
            text-decoration: underline;
          }
          .apres-examen-footer {
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .apres-examen-menu {
            width: 100%;
            display: flex;
            max-width: 1000px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .apres-examen-follow-container2 {
            display: flex;
            align-items: center;
            margin-left: 50px;
            flex-direction: column;
            justify-content: space-between;
          }
          .apres-examen-text37 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .apres-examen-icons-container2 {
            width: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .apres-examen-link20 {
            display: contents;
          }
          .apres-examen-icon8 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          @media (max-width: 991px) {
            .apres-examen-top-container {
              width: auto;
              height: auto;
            }
            .apres-examen-burger-menu1 {
              display: none;
            }
            .apres-examen-mobile-menu {
              display: none;
            }
            .apres-examen-text19 {
              color: var(--dl-color-gray-black);
              text-align: justify;
            }
          }
          @media (max-width: 767px) {
            .apres-examen-top-container {
              width: auto;
              height: auto;
            }
            .apres-examen-content-container {
              align-items: center;
            }
            .apres-examen-text10 {
              font-size: 2.5rem;
            }
            .apres-examen-text13 {
              font-style: normal;
              text-align: center;
              font-weight: 600;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .apres-examen-navbar {
              width: auto;
              height: auto;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .apres-examen-right-side1 {
              display: none;
            }
            .apres-examen-burger-menu1 {
              display: flex;
            }
            .apres-examen-main {
              padding-top: var(--dl-space-space-doubleunit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .apres-examen-text19 {
              text-align: justify;
            }
            .apres-examen-menu {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .apres-examen-top-container {
              width: auto;
              height: auto;
              z-index: 100;
            }
            .apres-examen-content-container {
              width: 100%;
              height: auto;
            }
            .apres-examen-image {
              height: auto;
              max-width: 100%;
            }
            .apres-examen-text10 {
              width: 100%;
              height: auto;
              font-size: 2rem;
              text-align: center;
              padding-left: 0px;
            }
            .apres-examen-subheading {
              font-size: 1.3rem;
              text-align: center;
            }
            .apres-examen-text13 {
              font-style: normal;
              font-weight: 600;
            }
            .apres-examen-navbar {
              width: auto;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .apres-examen-burger-menu1 {
              z-index: 200;
            }
            .apres-examen-main {
              padding-top: var(--dl-space-space-doubleunit);
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .apres-examen-text19 {
              text-align: justify;
              margin-bottom: 0px;
            }
            .apres-examen-follow-container2 {
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default ApresExamen
