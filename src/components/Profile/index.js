import React from 'react'

import './Profile.css'

import Photo from '../../assets/img/perfil.jpg';
import githubLogo from '../../assets/img/githubLogo.svg';
import twitterLogo from '../../assets/img/twitterLogo.svg';
import linkedinLogo from '../../assets/img/linkedinLogo.svg';

import useWindowSize from '../../hooks/useWindowSize'

export default function Homescreen() {
  const [height, width] = useWindowSize();
  
  return (
      <>
        <div className={width < 601 ? 'flex-column':'flex-row'}>
          <div className='center'>
            <img src={Photo} className='profile-picture' alt='Profile'></img>
          </div>
          <div className="flex-column center-h">
            <p className='center-h name'>Nathan Fiorito</p>
            <p className='center-h developer'>FULL-STACK DEVELOPER</p>
              <div className={`center ${width < 601 ? 'flex-column' : 'flex-row'}`}>
                <a href='https://github.com/NFiorito/'>
                  <div className='social-link'>
                    <img className='icon' src={githubLogo} alt='Github Logo'></img>
                    <h3>Visite o meu Github!</h3>
                  </div>
                </a>
                <a href='https://twitter.com/FioritoNathan'>
                  <div className='social-link'>
                    <img className='icon' src={twitterLogo} alt='Twitter Logo'></img>
                    <h3>Me siga no Twitter!</h3>
                  </div>
                </a>
                <a href='https://www.linkedin.com/in/nathanfiorito/'>
                  <div className='social-link'>
                    <img className='icon' src={linkedinLogo} alt='Linkedin Logo'></img>
                    <h3>Acesse o meu Linkedin!</h3>
                  </div>
                </a>
              </div>
          </div>
        </div>
      </>
  );
}