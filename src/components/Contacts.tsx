import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { IoMailOutline } from 'react-icons/io5';
import styled from 'styled-components';
import { breakpoints } from '../theme';
import emailjs from '@emailjs/browser';
function Contacts() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isChecked) {
      setError('Devi accettare il trattamento dei dati.');
      return;
    }

    if (formRef.current) {
      emailjs
        .sendForm(
          'service_g083kdi', // <-- Sostituisci con il tuo Service ID
          'template_483xml9', // <-- Sostituisci con il tuo Template ID
          formRef.current,
          'MJBbNYTcMzViUjQqn' // <-- Sostituisci con il tuo Public Key
        )
        .then(
          () => {
            setIsSent(true);
            setError('');
            formRef.current?.reset(); // Reset del form dopo l'invio
          },
          (error) => {
            console.error("Errore nell'invio:", error);
            setError('Si è verificato un errore. Riprova più tardi.');
          }
        );
    }
  };
  return (
    <Container id='contacts'>
      <h1>CONTATTI</h1>
      <motion.form
        ref={formRef}
        initial='hidden'
        whileInView='visible'
        // viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { scale: 1, opacity: 1 },
          hidden: { scale: 0, opacity: 0 },
        }}
        action=''
        onSubmit={sendEmail}
      >
        <div className='formTitle'>
          <p className='main'>Contattaci</p>
          <p className='sub'>Hai un’idea? Costruiamola insieme</p>
        </div>
        <div className='formGroup'>
          <label htmlFor='name'>Nome</label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Il tuo nome'
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='email@example.com'
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='message'>Messaggio</label>
          <textarea
            id='message'
            name='message'
            placeholder='Di cosa hai bisogno?'
            required
          />
        </div>
        <div className='disclaimer'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <p>Accetto il trattamento dei dati personali</p>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button
          type='submit'
          disabled={isSent}
        >
          {isSent ? 'Messaggio inviato!' : 'Invia'}
        </button>{' '}
      </motion.form>
      <div className='info'>
        <motion.p
          initial='hidden'
          whileInView='visible'
          // viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.4 }}
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: '50px', opacity: 0 },
          }}
        >
          Siamo pronti ad ascoltare le tue esigenze e trasformarle in soluzioni
          digitali su misura. Compila il form o contattaci direttamente per
          iniziare!
        </motion.p>
        <div className='cardContainer'>
          {/* <motion.div
            initial='hidden'
            whileInView='visible'
            // viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { scale: 1, opacity: 1 },
              hidden: { scale: 0, opacity: 0 },
            }}
            className='infocard'
          >
            <IoCallOutline size='50px' />
            <div className='text'>
              <div className='name'>numero di telefono</div>
              <div className='value'>+39 32974823749</div>
            </div>
          </motion.div> */}
          <motion.div
            className='infocard'
            initial='hidden'
            whileInView='visible'
            // viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { scale: 1, opacity: 1 },
              hidden: { scale: 0, opacity: 0 },
            }}
          >
            <IoMailOutline size='80px' />
            <div className='text'>
              <div className='name'>indirizzo email</div>
              <div className='value'>sint.italiasnc@gmail.com</div>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial='hidden'
          whileInView='visible'
          // viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.6 }}
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: '50px', opacity: 0 },
          }}
        >
          Parlaci della tua idea senza impegno! Ti guideremo verso la soluzione
          più adatta per far crescere il tuo business.
        </motion.p>
      </div>
    </Container>
  );
}

export default Contacts;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  /* padding: 20px; */
  background-color: #1e1e1e;
  z-index: 10;
  padding: 20px;
  padding-top: 15vh;
  padding-top: 15dvh;
  /* scroll-snap-align: start; */
  form {
    /* scroll-snap-align: end; */
    scroll-margin-bottom: 20px;
    /* scroll-snap-stop: normal; */

    display: flex;
    flex-direction: column;
    align-items: start;

    gap: 10px;
    background-color: #d9d9d920;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 10px 0px #d9d9d9;
    .formTitle {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .main {
        text-transform: uppercase;
        font-size: 14px;
      }
      .sub {
        font-size: 22px;
        font-weight: bold;
        line-height: 1.1em;
      }
    }
    .formGroup {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 5px;
      label {
        font-size: 18px;
      }
      input {
        all: unset;
        background-color: #d9d9d920;
        padding: 5px 20px;
        border-radius: 10px;
        border: 1px solid #d9d9d9;
      }
      textarea {
        all: unset;
        background-color: #d9d9d920;
        padding: 5px 20px;
        border-radius: 10px;
        border: 1px solid #d9d9d9;
      }
    }
    .disclaimer {
      display: flex;
      align-items: start;
      gap: 5px;
      p {
        font-size: 0.7em;
        a {
          color: #5555ff;
        }
      }
    }
    button {
      background-color: #d9d9d920;
      width: 100%;
      padding: 5px;
      border-radius: 1000px;
      border: 1px solid #d9d9d9;
      text-transform: uppercase;
      font-weight: bolder;
      font-size: 20px;
    }
  }
  .info {
    /* scroll-snap-align: end; */
    scroll-snap-stop: normal;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    color: #d9d9d9;
    padding: 20px;
    p {
      text-align: center;
      font-size: 19px;
      font-weight: lighter;
    }
    .cardContainer {
      display: flex;
      justify-content: space-evenly;
      .infocard {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        .text {
          display: flex;
          flex-direction: column;

          .name {
            font-size: 24px;
            font-weight: bold;
            text-transform: uppercase;
            text-align: center;
          }
          .value {
            font-size: 18px;
            text-align: center;
          }
        }
      }
    }
  }
  @media (min-width: ${breakpoints.laptop}) {
    height: 100vh;
    height: 100dvh;
    flex-direction: row;
    justify-content: center;
    /* scroll-snap-align: start; */
    position: relative;
    h1 {
      position: absolute;
      top: 15vh;
    }
    form,
    .info {
      scroll-snap-align: unset !important;
      max-width: 512px;
      justify-content: space-between;
      height: 500px;
    }
  }
`;
