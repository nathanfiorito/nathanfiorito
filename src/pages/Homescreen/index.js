import React from 'react'

import './Homescreen.css'

import Profile from '../../components/Profile'

import useWindowsSize from '../../hooks/useWindowSize'

export default function Homescreen(){
  const [height, width] = useWindowsSize();
    return(
      <div className={`${width < 600 ? 'center-h' : 'center-v' }`}>
        <Profile/>
      </div>
    )
}