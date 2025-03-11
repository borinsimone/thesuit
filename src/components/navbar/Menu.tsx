import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { CgClose } from 'react-icons/cg';
import { IoCallOutline } from 'react-icons/io5';
import { breakpoints, FadeIn, FromLeft } from '../../theme';
import logo from '../../assets/logo.png';
interface MenuProps {
  isAtTop: boolean;
  setIsAtTop: React.Dispatch<React.SetStateAction<boolean>>;
}
function Menu({ isAtTop }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  let links = [
    {
      name: 'home',
      link: '#home',
    },
    {
      name: 'chi siamo',
      link: '#about',
    },
    {
      name: 'servizi',
      link: '#services',
    },
    {
      name: 'contattaci',
      link: '#contacts',
    },
  ];
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <Container
      logovisible={isAtTop}
      isopen={isOpen}
    >
      <a
        href='#home'
        className='logoMobile'
      >
        <img
          src={logo}
          alt=''
        />
      </a>
      <motion.button
        className='menuIcon'
        onClick={() => setIsOpen(!isOpen)}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '2rem',
        }}
      >
        {isOpen ? <CgClose color='#d9d9d9' /> : <FaBars color='#1e1e1e' />}
      </motion.button>
      <motion.div
        className='menu'
        initial={{ opacity: 0, x: '-100%' }}
        animate={{
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : '-100%',
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
      >
        {links.map((link) => (
          <a
            onClick={() => setIsOpen(false)}
            href={link.link}
            key={link.link}
          >
            {link.name}
          </a>
        ))}
        {/* <a
          href='mailto:sint.italiasnc@gmail.com?subject=Richiesta%20Informazioni&body=Salve,%20vorrei%20sapere%20di%20più.'
          className='mail'
        >
          <IoMailOutline />
        </a>
        <a href='tel:'></a>
        <IoCallOutline /> */}
      </motion.div>
      <nav>
        <FadeIn
          // transition={{ duration: 0.5 }}
          className='logo'
        >
          <div className='logoImg'>
            <img
              src={logo}
              alt=''
            />
          </div>
          <span>the</span>
          <br />
          suit
        </FadeIn>
        <ul>
          {links.map((link, index) => (
            <motion.li
              initial='hidden'
              whileInView='visible'
              transition={{ duration: 0.3, delay: 0.2 * index }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: '50px', opacity: 0 },
              }}
              key={index}
            >
              <a href={link.link}>{link.name}</a>
            </motion.li>
          ))}
        </ul>
        <FromLeft
          className='contacts'
          delay={0.8}
        >
          <a href={links[links.length - 1].link}>
            {links[links.length - 1].name}
            <IoCallOutline
              size='40px'
              color='#1e1e1e'
            />
          </a>
        </FromLeft>
      </nav>
    </Container>
  );
}

export default Menu;
const Container = styled.div<{ logovisible: boolean; isopen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  height: 10vh;
  height: 10dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 101;
  background-color: #d9d9d9;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    position: absolute;
    right: 20px;
    cursor: pointer;
  }
  .menu {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    height: 100dvh;
    width: 100vw;
    background-color: #1e1e1e50;
    -webkit-backdrop-filter: blur(30px);
    backdrop-filter: blur(30px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    a {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1.4rem;
    }
  }
  nav {
    display: none;
    z-index: 100;
  }
  .logoMobile {
    position: absolute;
    left: 20px;
    transform: translateX(0);
    transition: 400ms;
    background-color: #d9d9d9;
    background-color: ${(props) => (props.isopen ? '#d9d9d900' : '#d9d9d9')};
    border-radius: 50%;
    img {
      height: 9vh;
      /* opacity: 0; */
    }
  }
  ${(props) =>
    props.logovisible &&
    css`
      .logoMobile {
        left: 50%;
        transform: translateX(-50%);
        img {
          opacity: 1;
        }
      }
      button {
        opacity: 0;
      }
    `};

  @media (min-width: ${breakpoints.tablet}) {
    border-bottom: 2px solid #1e1e1e;
    background-color: #d9d9d9;
    .logoMobile {
      display: none;
    }
    button,
    .menu {
      display: none !important;
    }
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      width: 100%;
      height: 100%;
      color: #1e1e1e;
      max-width: 1024px;
      padding: 0 10px;
      .logo {
        position: relative;
        color: #1e1e1e;
        font-size: 40px;

        .logoImg {
          top: -10px;
          right: -10px;
          height: 60px;
        }
      }
      ul {
        display: flex;
        flex-direction: row;
        gap: 20px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        li {
          color: #1e1e1e;
          text-transform: uppercase;
          font-size: 20px;
          font-family: 'roboto mono';
          transition: background-color 300ms
            cubic-bezier(0.175, 0.885, 0.32, 1.275);
          a {
          }
          &:last-child {
            display: none;
          }
          padding: 2px 10px;
          border-radius: 10px;
          background-color: #1e1e1e00;
          &:hover {
            background-color: #1e1e1e20;
          }
        }
      }
      .contacts {
        color: #1e1e1e;
        text-transform: uppercase;
        font-size: 28px;
        font-family: 'roboto mono';
        a {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
          svg {
            transition: 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: absolute;
            opacity: 0.3;
            path {
              fill: #1e1e1e;
            }
          }
          &:hover {
            svg {
              transform: rotate(90deg) scale(2);
            }
            transform: scale(1.2);
          }
        }
      }
    }
  }
`;
