import React from 'react'

import './Profile.css'

import Photo from '../../assets/img/perfil.jpg';
import githubLogo from '../../assets/img/githubLogo.svg';
import twitterLogo from '../../assets/img/twitterLogo.svg';
import linkedinLogo from '../../assets/img/linkedinLogo.svg';

export default function Homescreen() {
  return (
      <>
        <div className='flex-row'>
          <div>
            <img src={Photo} className='center profile-picture' alt='Profile'></img>
          </div>
          <div className='flex-column center-h'>
            <p className='center-h name'>Nathan Fiorito</p>
            <p className='center-h developer'>FULL-STACK DEVELOPER</p>
              <div className='center flex-row'>
                <a href='https://github.com/NFiorito/'>
                  <div className='social-link'>
                    <img className='icon  ' src={githubLogo} alt='Github Logo'></img>
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