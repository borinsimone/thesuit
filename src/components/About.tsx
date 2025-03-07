import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { breakpoints } from '../theme';
function About() {
  return (
    <Container id='about'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        // viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { x: 0, opacity: 1 },
          hidden: { x: '-200px', opacity: 0 },
        }}
      >
        <p className='main'>Sartoria Digitale per il Tuo Successo.</p>
      </motion.div>
      <motion.div
        initial='hidden'
        whileInView='visible'
        // viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.2 }}
        variants={{
          visible: { x: 0, opacity: 1 },
          hidden: { x: '-200px', opacity: 0 },
        }}
      >
        <p className='sub'>
          Siamo un team di esperti che crea soluzioni digitali su misura per il
          tuo business. Con esperienza e precisione, sviluppiamo siti web, app e
          software che ottimizzano i tuoi processi e migliorano la tua presenza
          online.
        </p>
      </motion.div>
    </Container>
  );
}

export default About;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 15px;
  background-color: #ffffff10;
  padding: 40px;
  padding-top: 20vh;
  padding-top: 20dvh;
  scroll-snap-align: start;

  scroll-snap-stop: normal;
  p {
    text-align: center;
  }
  .main {
    font-size: 35px;
    line-height: 1em;
    font-weight: bolder;
    text-transform: uppercase;
  }
  .sub {
    font-size: 22px;
    line-height: 1.1em;
    font-weight: 100;
  }
  @media (min-width: ${breakpoints.laptop}) {
    justify-content: center;
    padding: 0;
    .main,
    .sub {
      max-width: 1024px;
    }
    .main {
      font-size: 40px;
    }
  }
`;
