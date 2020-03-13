import React, { useState } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import '../../assets/styles/normolize.scss';
import '../../assets/styles/fonts.scss';
import '../../assets/styles/styles.global.scss';
import styles from './Layout.module.scss';

import call from '../../assets/img/call.svg';
import Popup from '../UI/popup/popup';



const Layout = (props) => {

  

  const [popup, setPopup] = useState(false);

  const [menuOpen, setMenuStae] = useState(false);

  const switchMenu = () => {
    setMenuStae(!menuOpen);
  };


  return (
    <>
      <Header menu={menuOpen} onBurgerClick={switchMenu} />
      <main>{props.children}</main>
      <Footer />

     
        <Popup isopen={popup} onClose={() => { setPopup(false) }} />
      

      <div onClick={() => { setPopup(true) }} className={styles.call}><img src={call} alt="call" /></div>
    </>
  )
}



export default Layout;