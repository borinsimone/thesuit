import { useEffect, useState } from 'react';

import './App.css';
import styled from 'styled-components';
import Menu from './components/navbar/Menu';
import Landing from './components/Landing';
import About from './components/About';
import { motion } from 'framer-motion';
import Services from './components/Services';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import { breakpoints } from './theme';

import logo_bianco from './assets/logo_bianco.png';
function App() {
  const [isAtTop, setIsAtTop] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);

    if (document.readyState === 'complete') {
      setTimeout(() => {
        setIsLoaded(true);
        console.log('assets loaded');
      }, 1000);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Funzione per interpolare il valore di bottom tra 20vh e 5vh
  const getBottomValue = () => {
    const minScroll = 0;
    const maxScroll = 700;
    const minBottom = 15; // 20vh
    const maxBottom = 5; // 5vh

    // Calcola il valore interpolato (clamp tra 0 e 700)
    const progress =
      Math.min(Math.max(scrollY, minScroll), maxScroll) / maxScroll;
    return minBottom - progress * (minBottom - maxBottom);
  };
  const interpolatingOpacity = () => {
    const minScroll = 0;
    const maxScroll = 700;
    const minOpacity = 0.5;
    const maxOpacity = 1;

    // Normalizza il valore di scroll tra 0 e 1
    const progress =
      Math.min(Math.max(scrollY, minScroll), maxScroll) / maxScroll;

    // Inverti la progressione (da 1 a 0 invece di 0 a 1)
    return maxOpacity - progress * (maxOpacity - minOpacity);
  };
  return (
    <Container>
      {!isLoaded && <SplashPage>carico</SplashPage>}
      {isLoaded && (
        <>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className='logo'
            style={{
              bottom: `${getBottomValue()}vh`,
              opacity: interpolatingOpacity(),
            }}
          >
            <div className='logoImg'>
              <img
                src={logo_bianco}
                alt='logo'
              />
            </div>
            <span>the</span>
            <br />
            suit
          </motion.div>

          <div id='home'></div>

          <Menu
            isAtTop={isAtTop}
            setIsAtTop={setIsAtTop}
          />
          <Landing
            scrollY={scrollY}
            isAtTop={isAtTop}
            setIsAtTop={setIsAtTop}
          />
          <About />
          <Services />
          <Contacts />
          <Footer />
        </>
      )}
    </Container>
  );
}

export default App;
const SplashPage = styled.div`
  z-index: 10000;
  height: 100vh;
  height: 100dvh;
  width: 100%;
  background-color: #1e1e1e;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  /* height: 100vh;
  height: 100dvh; */
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  #home {
    scroll-snap-align: start;
  }
  .logo {
    .logoImg {
      height: 150px;
      aspect-ratio: 1;

      position: absolute;
      right: -20px;
      top: -40px;
    }
    position: fixed;
    /* bottom: 20vh; */
    font-size: 7rem;
    text-transform: uppercase;
    line-height: 0.8em;
    font-weight: bold;
    /* text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.6); */
    font-family: 'Roboto Mono';
    color: #fff;
    span {
      font-size: 0.7em;
      line-height: 0.7em;
    }
  }
  @media (min-width: ${breakpoints.laptop}) {
    .logo {
      transform: scale(1.3);
    }
  }
`;
