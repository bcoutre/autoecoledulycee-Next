import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import PlaceCard from '../components/place-card'

const Formations = (props) => {
  return (
    <>
      <div className="formations-container">
        <Head>
          <title>Formations - autoecoledulycee</title>
          <meta property="og:title" content="Formations - autoecoledulycee" />
        </Head>
        <div className="formations-top-container">
          <div className="formations-content-container">
            <img
              alt="image"
              src="/logo-400h.png"
              className="formations-image"
            />
            <h1 className="formations-text">
              <span>BIENVENUE A L&apos;AUTO-ECOLE DU LYCEE</span>
              <br></br>
            </h1>
            <h2 className="Subheading formations-subheading">
              Eglantine Conduite
            </h2>
            <span className="formations-text03">
              Permis B, A1, A2, AM, Formation 125 cm3, et Post-Permis
            </span>
          </div>
          <nav data-role="Header" className="formations-navbar">
            <div className="formations-right-side">
              <div className="formations-links-container">
                <Link href="/">
                  <a className="formations-link">Accueil</a>
                </Link>
                <span className="formations-text04">Formations</span>
                <Link href="/preparation">
                  <a className="formations-link1">Préparation Examen</a>
                </Link>
                <Link href="/apres-examen">
                  <a className="formations-link2">
                    <span>Après l&apos;examen</span>
                    <br></br>
                  </a>
                </Link>
              </div>
            </div>
            <div data-role="BurgerMenu" className="formations-burger-menu">
              <svg viewBox="0 0 1024 1024" className="formations-burger-menu1">
                <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              </svg>
            </div>
            <div data-role="MobileMenu" className="formations-mobile-menu">
              <div className="formations-nav">
                <div className="formations-top">
                  <div
                    data-role="CloseMobileMenu"
                    className="formations-close-menu"
                  >
                    <svg viewBox="0 0 1024 1024" className="formations-icon3">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <div className="formations-right-side1">
                  <div className="formations-links-container1">
                    <Link href="/">
                      <a className="formations-link3">Accueil</a>
                    </Link>
                    <Link href="/formations">
                      <a className="formations-link4">Formations</a>
                    </Link>
                    <Link href="/preparation">
                      <a className="formations-link5">Avant l&apos;examen</a>
                    </Link>
                    <Link href="/apres-examen">
                      <a className="formations-link6">Après l&apos;examen</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="formations-follow-container">
                <span className="formations-text07">Suivez nous</span>
                <div className="formations-icons-container">
                  <a
                    href="https://www.facebook.com/autoecolelycee"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="formations-link7"
                  >
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="formations-icon5"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div id="main-section" className="formations-main">
          <h1>Formations voiture</h1>
          <div className="formations-cards-container">
            <PlaceCard
              city="B-Traditionnel"
              image="https://images.unsplash.com/photo-1532004252750-b411a84c8a41?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxkcml2ZXxlbnwwfHx8fDE2NzI2NjcxNjM&amp;ixlib=rb-4.0.3&amp;w=300"
              description="Formez vous dès 16 ans et passez l'examen à partir de 17 ans."
            ></PlaceCard>
            <PlaceCard
              city="B Conduite Accompagnée - AAC"
              image="https://images.unsplash.com/photo-1541968047768-c92c393e0e79?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxkcml2ZXxlbnwwfHx8fDE2NzI2NjcxNjM&amp;ixlib=rb-4.0.3&amp;w=300"
              description="Accessible dès 15 ans, après la formation en auto-école (20h de conduite minimum), partez pour 1 an de conduite avec vos accompagnateurs (Parents, ...), et passez votre permis à partir de 17 ans (Celui-ci ne sera valide qu'au jour de vos 18 ans.)"
            ></PlaceCard>
            <PlaceCard
              city="B Conduite Supervisée - CS"
              image="https://images.unsplash.com/photo-1606243333008-4b0264a0df7b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxkcml2ZXxlbnwwfHx8fDE2NzI2NjcxNjM&amp;ixlib=rb-4.0.3&amp;w=300"
              description="Même principe que la conduite accompagnée, pour les personnes déjà majeures. La période de conduite supervisée peut-être plus courte. "
            ></PlaceCard>
            <PlaceCard
              city="Post Permis"
              image="https://images.unsplash.com/photo-1543279385-618b485c1677?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGRyaXZlfGVufDB8fHx8MTY3MjY2NzE2Mw&amp;ixlib=rb-4.0.3&amp;w=300"
              description="Vous ressentez le besoin de faire un point ou de vous remettre à niveau après une longue période sans conduire. Après une heure de bilan, nous vous proposerons un programme adapté."
            ></PlaceCard>
          </div>
          <h1>Formations moto</h1>
          <div className="formations-cards-container1">
            <PlaceCard
              city="A"
              image="https://images.unsplash.com/photo-1611241443322-b5524914fe20?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1vdG9jeWNsZXxlbnwwfHx8fDE2NzI2Njc0MzI&amp;ixlib=rb-4.0.3&amp;w=300"
              description="Sous réserve d'avoir plus de 20 ans et 2 ans de permis A2, cette formation de 7 heures, permet de conduire les motos de plus de 35kW."
            ></PlaceCard>
            <PlaceCard
              city="A2"
              image="https://images.unsplash.com/photo-1566977648246-da64745c247a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDYwfHxtb3RvY3ljbGV8ZW58MHx8fHwxNjcyNjY3NTA5&amp;ixlib=rb-4.0.3&amp;w=300"
              description="Accessible dès 18 ans (formation possible avant), pour conduire les motos d'une puissance n'excédant pas 35 kW  (47,5 ch), dont le rapport puissance/poids est inférieur ou égal à 0,2 kW par kg, ou de puissance maximale avant bridage, inférieure à 70 kW (95 ch)."
            ></PlaceCard>
            <PlaceCard
              city="A1"
              image="https://images.unsplash.com/photo-1565701926808-3b96e3801878?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQ3fHxtb3RvY3ljbGV8ZW58MHx8fHwxNjcyNjY3NDY0&amp;ixlib=rb-4.0.3&amp;w=300"
              description="Accessible dès  16 ans, permet de conduire des motos jusqu'à 125 cm3 (15 kW)."
            ></PlaceCard>
            <PlaceCard
              city="AM (ancien BSR)"
              image="https://images.unsplash.com/photo-1600668274777-e4e9a5933891?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQwfHxzY29vdGVyfGVufDB8fHx8MTY3MjY2NzQwNg&amp;ixlib=rb-4.0.3&amp;w=300"
              description="Permet de conduire des véhicules motorisés de 50 cm3 dès 14 ans. Formation de 8h."
            ></PlaceCard>
            <PlaceCard
              city="Formation 125"
              image="https://images.unsplash.com/photo-1600405387738-16ab27acc7ae?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxtb3RvJTIwY3ljbGV8ZW58MHx8fHwxNjcyNjY3NjYy&amp;ixlib=rb-4.0.3&amp;w=300"
              description="Permet aux détenteurs du permis B depuis plus de 2 ans, de conduire des motos jusqu'à 125 cm3. Formation d'une durée de 7h."
            ></PlaceCard>
          </div>
        </div>
        <div className="formations-footer">
          <div className="formations-menu">
            <span>
              <span>SARL Unipersonnelle Eglantine Conduite</span>
              <br></br>
              <span>3 Bvd Du Lycée 07000 Privas</span>
              <br></br>
              <span>Immatriculée au RCS Aubenas B 912 260 940</span>
              <br></br>
              <span>Agrément N° : E2200700020</span>
            </span>
            <div className="formations-follow-container1">
              <span className="formations-text18">Suivez-nous</span>
              <div className="formations-icons-container1">
                <a
                  href="https://www.facebook.com/autoecolelycee"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="formations-link8"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="formations-icon7"
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
          .formations-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .formations-top-container {
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .formations-content-container {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .formations-image {
            width: auto;
            height: 314px;
            max-width: 700px;
            object-fit: cover;
          }
          .formations-text03 {
            font-style: normal;
            font-weight: 600;
            padding-top: var(--dl-space-space-doubleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .formations-navbar {
            width: auto;
            display: flex;
            padding: 0px00;
            max-width: auto;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: 0px000;
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: center;
          }
          .formations-right-side {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .formations-links-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .formations-link {
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .formations-text04 {
            margin-right: var(--dl-space-space-doubleunit);
          }
          .formations-link1 {
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .formations-link2 {
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .formations-burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .formations-burger-menu1 {
            width: 24px;
            height: 24px;
          }
          .formations-mobile-menu {
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
          .formations-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .formations-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .formations-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .formations-icon3 {
            width: 24px;
            height: 24px;
          }
          .formations-right-side1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .formations-links-container1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: 16px;
            flex-direction: column;
            justify-content: space-between;
          }
          .formations-link3 {
            margin-bottom: 8px;
            text-decoration: none;
          }
          .formations-link4 {
            margin-bottom: 8px;
            text-decoration: none;
          }
          .formations-link5 {
            margin-bottom: 8px;
            text-decoration: none;
          }
          .formations-link6 {
            text-decoration: none;
          }
          .formations-follow-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .formations-text07 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .formations-icons-container {
            width: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .formations-link7 {
            display: contents;
          }
          .formations-icon5 {
            width: 24px;
            height: 24px;
          }
          .formations-main {
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
          .formations-cards-container {
            width: 100%;
            display: flex;
            grid-gap: var(--dl-space-space-doubleunit);
            flex-wrap: wrap;
            max-width: 1000px;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .formations-cards-container1 {
            width: 100%;
            display: flex;
            grid-gap: var(--dl-space-space-doubleunit);
            flex-wrap: wrap;
            max-width: 1000px;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .formations-footer {
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .formations-menu {
            width: 100%;
            display: flex;
            max-width: 1000px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .formations-follow-container1 {
            display: flex;
            align-items: center;
            margin-left: 50px;
            flex-direction: column;
            justify-content: space-between;
          }
          .formations-text18 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .formations-icons-container1 {
            width: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .formations-link8 {
            display: contents;
          }
          .formations-icon7 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          @media (max-width: 991px) {
            .formations-cards-container {
              justify-content: center;
            }
            .formations-cards-container1 {
              justify-content: center;
            }
          }
          @media (max-width: 767px) {
            .formations-content-container {
              align-items: center;
            }
            .formations-text {
              font-size: 2.5rem;
            }
            .formations-text03 {
              text-align: center;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .formations-navbar {
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .formations-right-side {
              display: none;
            }
            .formations-burger-menu {
              display: flex;
            }
            .formations-main {
              padding: var(--dl-space-space-doubleunit);
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .formations-menu {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .formations-content-container {
              width: 100%;
              height: auto;
            }
            .formations-image {
              height: auto;
              max-width: 100%;
            }
            .formations-text {
              width: 100%;
              height: auto;
              font-size: 2rem;
              text-align: center;
              padding-left: 0px;
            }
            .formations-subheading {
              font-size: 1.3rem;
              text-align: center;
            }
            .formations-text03 {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .formations-navbar {
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .formations-main {
              padding: var(--dl-space-space-unit);
              padding-top: var(--dl-space-space-doubleunit);
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .formations-cards-container {
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .formations-follow-container1 {
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Formations
