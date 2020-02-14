import React,{useState}from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';


import '../../assets/styles/normolize.scss';
import '../../assets/styles/fonts.scss';
import '../../assets/styles/styles.global.scss';
import styles from './Layout.module.scss';



const Layout = (props) => {

  const [menuOpen, setMenuStae] = useState(false);
  
  const switchMenu = () => {
    setMenuStae(!menuOpen);
  };

  
  return (
    <>
      <Header menu={menuOpen} onBurgerClick={switchMenu} />
      <main>{props.children}</main>   
      <Footer />
    </>
  )
}



export default Layout;