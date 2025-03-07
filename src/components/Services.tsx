import React from 'react';
import styled from 'styled-components';
import card from '../assets/card.png';
import pc from '../assets/pc.png';
import cart from '../assets/Shopping Cart.png';
import stats from '../assets/Statistics.png';
import { motion } from 'framer-motion';
import { breakpoints, FromBot, FromLeft } from '../theme';
function Services() {
  let cards = [
    {
      img: stats,
      title: 'bpm gestionali',
      text: 'Software personalizzati per ottimizzare i processi aziendali, migliorando l’efficienza e la gestione delle risorse.',
    },
    {
      img: cart,
      title: 'e-commerce',
      text: 'E-commerce sicuri e facili da gestire, con integrazioni per pagamenti e spedizioni, progettati per massimizzare le vendite.',
    },
    {
      img: pc,
      title: 'Siti web aziendali',
      text: 'Siti web su misura, responsivi e ottimizzati per SEO, pensati per riflettere la tua identità e supportare il business.',
    },
  ];

  return (
    <Container id='services'>
      <div className='header'>
        <FromLeft className='title'>Scopri i nostri servizi</FromLeft>
        <FromLeft className='subtitle'>
          <span>SARTORIA DIGITALE</span> su misura per far crescere il tuo
          business.
        </FromLeft>
      </div>

      <MainService>
        <motion.div
          initial='hidden'
          whileInView='visible'
          // viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          variants={{
            visible: { scale: 1, opacity: 1 },
            hidden: { scale: 0, opacity: 0 },
          }}
          className='card'
        >
          <img
            src={card}
            alt=''
          />
        </motion.div>
        <div className='text'>
          <FromLeft className='main'>
            Risposte tecnologiche ideali per la tua impresa per migliorare la
            gestione dell'azienda.
          </FromLeft>
          <FromLeft delay={0.5}>
            Creiamo soluzioni per comunicazione interna, gestione e automazione
            dei dati, migliorando efficienza e riducendo errori.
          </FromLeft>
          <FromLeft delay={0.8}>
            Grazie alla nostra tecnologia <span>NFC</span>, integriamo sistemi
            smart che velocizzano i processi e semplificano l’accesso ai dati
            aziendali.
          </FromLeft>
        </div>
      </MainService>
      <CardContainer>
        {cards.map((card, index) => (
          <div
            className='card'
            key={index}
          >
            <motion.img
              initial='hidden'
              whileInView='visible'
              // viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              variants={{
                visible: { scale: 1, opacity: 1 },
                hidden: { scale: 0, opacity: 0 },
              }}
              src={card.img}
              alt={card.title}
            />
            <div className='text'>
              <FromBot className='main'>{card.title}</FromBot>
              <FromBot delay={0.4}>{card.text}</FromBot>
            </div>
          </div>
        ))}
      </CardContainer>
    </Container>
  );
}

export default Services;
const Container = styled.div`
  min-height: 100dvh;
  min-height: 100vh;
  width: 100%;
  padding: 20px;
  padding-top: 15vh;
  padding-top: 15dvh;
  padding-bottom: 10vh;
  padding-bottom: 10dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  background-color: #d9d9d9;
  z-index: 10;
  color: #1e1e1e;
  scroll-snap-align: start;

  scroll-snap-stop: normal;
  div {
    text-align: center;
  }
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    .title {
      font-size: 40px;
      font-weight: bolder;
      line-height: 0.9em;
    }
    .subtitle {
      font-size: 20px;
      font-weight: lighter;
      line-height: 1.1em;
      span {
        font-weight: bold;
      }
    }
  }
  @media (min-width: ${breakpoints.laptop}) {
    height: 100vh;
    height: 100dvh;
    justify-content: space-evenly;
  }
`;
const MainService = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  max-width: 1024px;
  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    div {
      font-size: 18px;
      line-height: 1.1em;
      font-weight: lighter;
    }
    .main {
      font-size: 24px;
      font-weight: bolder;
    }
  }
  @media (min-width: ${breakpoints.laptop}) {
    flex-direction: row;
    .text {
      width: 50%;
    }
    .card {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 60%;
      }
    }
  }
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 300px;

    img {
      height: 100px;
    }
    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      p {
        font-size: 20px;
        line-height: 1.1em;
        font-weight: lighter;
      }
      .main {
        font-size: 24px;
        font-weight: bolder;
        text-transform: uppercase;
      }
    }
  }
  @media (min-width: ${breakpoints.laptop}) {
    flex-direction: row;
  }
`;
