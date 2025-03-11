import { motion } from 'framer-motion';

import styled from 'styled-components';
import { breakpoints, FadeIn, FromLeft } from '../theme';
import logo_bianco from '../assets/logo_bianco.png';
function Footer() {
  return (
    <Container>
      <div className='content'>
        <FadeIn className='logoFooter'>
          <div className='logoImg'>
            <img
              src={logo_bianco}
              alt=''
            />
          </div>
          <div className='logoText'>
            <span>the</span> <span>suit</span>
          </div>
        </FadeIn>
        <div className='info'>
          {/* <div className='infoGroup'>
          <label>telefono</label>
          <div className='value'>+39 32974823749</div>
        </div> */}
          <FromLeft className='infoGroup'>
            <label>email</label>
            <div className='value'>sint.italiasnc@gmail.com</div>
          </FromLeft>
          <FromLeft className='infoGroup'>
            <label>p. iva</label>
            <div className='value'>13037030015</div>
          </FromLeft>
          <FromLeft className='infoGroup'>
            <label>rea</label>
            <div className='value'>1334813</div>
          </FromLeft>
        </div>
        <ul>
          <motion.a
            initial='hidden'
            whileInView='visible'
            transition={{ duration: 0.3 }}
            variants={{
              visible: { scale: 1, opacity: 1 },
              hidden: { scale: 0, opacity: 0 },
            }}
            href='home'
          >
            home
          </motion.a>
          <motion.a
            initial='hidden'
            whileInView='visible'
            transition={{ duration: 0.3 }}
            variants={{
              visible: { scale: 1, opacity: 1 },
              hidden: { scale: 0, opacity: 0 },
            }}
            href='about'
          >
            chi siamo
          </motion.a>
          <motion.a
            initial='hidden'
            whileInView='visible'
            transition={{ duration: 0.3 }}
            variants={{
              visible: { scale: 1, opacity: 1 },
              hidden: { scale: 0, opacity: 0 },
            }}
            href='services'
          >
            servizi
          </motion.a>
          <motion.a
            initial='hidden'
            whileInView='visible'
            transition={{ duration: 0.3 }}
            variants={{
              visible: { scale: 1, opacity: 1 },
              hidden: { scale: 0, opacity: 0 },
            }}
            href='contacts'
          >
            contattaci
          </motion.a>
        </ul>
      </div>
    </Container>
  );
}

export default Footer;
const Container = styled.div`
  background-color: #2c2c2c;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  z-index: 10;

  scroll-snap-stop: normal;
  .content {
    width: 100%;
    max-width: 1024px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
  .logoFooter {
    display: flex;
    align-items: center;
    gap: 2px;
    .logoImg {
      height: 70px;
      aspect-ratio: 1;

      border-radius: 50%;
    }
    .logoText {
      display: flex;
      flex-direction: column;
      justify-content: center;

      span {
        line-height: 0.9em;
        font-size: 39px;
        text-transform: uppercase;

        &:nth-child(1) {
          line-height: 0.8em;
          font-size: 12px;
        }
      }
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 5px;
    flex: 1;
    max-width: 300px;
    .infoGroup {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: end;
      label {
        text-transform: uppercase;
        font-weight: bolder;
      }
      .value {
        font-weight: lighter;
        opacity: 0.8;
      }
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: start;
    a {
      text-transform: uppercase;
    }
  }
  @media (min-width: ${breakpoints.laptop}) {
    .content {
      flex-direction: row;
      justify-content: space-between;
      align-items: start;
    }
  }
`;
