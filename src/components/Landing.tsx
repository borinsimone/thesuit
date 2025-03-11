import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { breakpoints } from '../theme';
interface LandingProps {
  scrollY: number;
  isAtTop: boolean;
  setIsAtTop: React.Dispatch<React.SetStateAction<boolean>>;
}
function Landing({ isAtTop, setIsAtTop }: LandingProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setScrollPosition(rect.bottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    let initialScrollPos;
    if (containerRef.current) {
      initialScrollPos = containerRef.current.getBoundingClientRect().bottom;
    }
    setScrollPosition(initialScrollPos ?? 0);
  }, []);
  useEffect(() => {
    if (scrollPosition < 600) {
      setIsAtTop(true);
    } else {
      setIsAtTop(false);
    }
    return () => {};
  }, [scrollPosition]);

  return (
    <Container
      top={isAtTop}
      ref={containerRef}
    >
      <div className='header'>
        <div className='text'>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className='main'
          >
            Soluzioni digitali su misura, cuciti per il tuo business
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className='sub'
          >
            Progettiamo soluzioni digitali su misura, dai siti web alle app e
            software, per soddisfare le esigenze del tuo business. Con
            esperienza e precisione, miglioriamo la tua visibilità online e
            ottimizziamo i processi aziendali, proprio come un sarto che
            confeziona l'abito perfetto.
          </motion.p>
        </div>

        <div className='btnContainer'>
          <motion.a
            href='#services'
            initial='hidden'
            whileInView='visible'
            transition={{ duration: 0.3, delay: 0.8 }}
            variants={{
              visible: { scale: 1, opacity: 1 },
              hidden: { scale: 0, opacity: 0 },
            }}
            className='btn1'
          >
            scopri cosa possiamo fare per te
          </motion.a>
          <motion.a
            className='btn2'
            href='#contacts'
            initial='hidden'
            whileInView='visible'
            transition={{ duration: 0.3, delay: 0.8 }}
            variants={{
              visible: { scale: 1, opacity: 1 },
              hidden: { scale: 0, opacity: 0 },
            }}
          >
            inizia il tuo progetto
          </motion.a>
        </div>
      </div>
    </Container>
  );
}

export default Landing;
interface StyledProps {
  top?: boolean;
  isopen?: boolean;
  logoVisible?: boolean;
}
const Container = styled.div<StyledProps>`
  height: 100vh;
  height: 100dvh;
  width: 100%;
  color: #1e1e1e;
  /* scroll-snap-align: start; */

  scroll-snap-stop: normal;

  z-index: 100;
  .header {
    background-color: #d9d9d9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    height: 50vh;
    height: 50dvh;
    gap: 20px;
    position: sticky;
    top: -40vh;
    padding: 20px;
    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
      p {
        max-width: 1024px;
        text-align: center;
        line-height: 0.9em;
        opacity: 1;
        transition: opacity 0.3s;
      }
      .main {
        font-weight: bold;
        font-size: 39px;
      }
      .sub {
        font-weight: lighter;
        font-size: 18px;
      }
      @media (min-width: ${breakpoints.tablet}) {
        p {
          width: 90%;
        }
        .main {
          font-size: 39px;
          line-height: 1.4em;
        }
        .sub {
          font-size: 18px;
          font-weight: 100;
          line-height: 1.2em;
        }
      }
    }
    .btnContainer {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      transition: 300ms;
      display: none;
      a {
        text-align: center;
        text-transform: uppercase;
        padding: 5px 10px;
        width: 100%;
        border-radius: 500px;
        &:nth-child(1) {
          background-color: #1e1e1e;
          color: #d9d9d9;
        }
      }
      .btn1 {
        transition: 300ms;

        &:hover {
          color: #1e1e1e;
          background-color: #d9d9d9;
          border: 1px solid #1e1e1e;
          transform: scale(2);
        }
      }
      .btn2 {
        transition: 300ms;
        border: 1px solid #1e1e1e;
        &:hover {
          border: 0px;
          color: #d9d9d9;
          background-color: #1e1e1e;
          border: 1px solid #1e1e1e;
          transform: scale(2);
        }
      }
    }
    ${(props) =>
      props.top &&
      css`
        p {
          opacity: 0 !important;
        }
        .btnContainer {
          opacity: 0 !important;
        }
      `};
  }
  @media (min-width: ${breakpoints.mobile}) {
    .header {
      .btnContainer {
        display: flex;
      }
    }
  }
  @media (min-width: ${breakpoints.laptop}) {
    .header {
      .text {
        flex-direction: row;
        max-width: 1024px;
        height: 20vh;
      }
      .btnContainer {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap !important;
        width: 1024px;
      }
    }
  }
`;
// width: 100vw;
//   /* height: 60dvh; */
//   background-color: #d9d9d9;
//   /* background-color: ${(props) => (props.top ? 'red' : 'green')}; */
//   height: 50vh;
//   height: 50dvh;
//   color: #1e1e1e;
//   position: sticky;
//   top: -40dvh;

//   -webkit-box-shadow: 0px 5px 19px 5px #d9d9d9;
//   box-shadow: 0px 5px 19px 5px #d9d9d9;
//   display: flex;
//   flex-direction: column;

//   align-items: center;
//   justify-content: end;
//   gap: 20px;
//   padding: 20px;
//   padding-top: 10dvh;
//   margin-bottom: 60dvh;
//   z-index: 11;

//   @media (min-width: ${breakpoints.tablet}) {
//     flex-direction: row;
//     .main,
//     .sub {
//       max-width: 512px;
//     }
//   }

//     @media (max-width: ${breakpoints.tablet}) {
//       display: none !important;
//       background-color: red;
//     }
//   }
