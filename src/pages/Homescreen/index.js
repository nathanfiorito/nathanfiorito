import './Homescreen.css'

import Photo from '../../assets/img/perfil.jpg';
import githubLogo from '../../assets/img/githubLogo.svg';
import twitterLogo from '../../assets/img/twitterLogo.svg';
import linkedinLogo from '../../assets/img/linkedinLogo.svg';

export default function Homescreen() {
  return (
      <>
        <div className='info'>
          <div className='profile'>
            <img src={Photo} className='profile-picture' alt='Profile'></img>
            <h2 className='name'>Nathan Fiorito</h2>
            <h3 className='developer'>FULL-STACK DEVELOPER</h3>
          </div>
          <div className='social-medias'>
            <div className='social-link-div'>
              <img src={githubLogo} alt='Github Logo'></img>
              <h3 className='social-link-text'>Visite o meu Github!</h3>
            </div>
            <div className='social-link-div'>
              <img src={twitterLogo} alt='Twitter Logo'></img>
              <h3 className='social-link-text'>Me siga no Twitter!</h3>
            </div>
            <div className='social-link-div'>
              <img src={linkedinLogo} alt='Linkedin Logo'></img>
              <h3 className='social-link-text'>Acesse o meu Linkedin!</h3>
            </div>
          </div>
        </div>
      </>
  );
}