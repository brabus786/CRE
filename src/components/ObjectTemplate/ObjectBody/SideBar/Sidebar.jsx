import React from 'react';
import Button from '../../../UI/Button/Button';
import styles from './SideBar.module.scss';
import globalData from '../../../../assets/globalData';
import {useRouter} from 'next/router';


import telegram from '../../../../assets/img/messengers/telegram.svg';
import viber from '../../../../assets/img/messengers/viber.svg';
import facebook from '../../../../assets/img/messengers/facebook.svg';
import twitter from '../../../../assets/img/messengers/twitter.svg';
// import instagram from '../../../../assets/img/messengers/instagram.svg';


const SideBar = (props) => {

    
 
const router = useRouter();
const link = router.asPath;
const mesViber = 'Здравствуйте. Меня заинтересовал этот объект ( ' + props.data.title + ' ID - ' + props.data.local_realty_id + ')  цена ' + props.data.price + 'usd';




const scroll = () => {
    
    console.log(props.topCTA);
    window.scrollTo({
        top: props.topCTA,
        behavior: "smooth"
    }); 
};

    return (
        <div className={styles.SideBar}>
            <ul className={styles.info}>
                <li><span className={styles.row_name_bold}>Цена</span><span className={styles.cena}>{props.data.price}</span><span className={styles.currency}>{props.data.currency}</span></li>
                <li><span className={styles.row_name_bold}>Цена за м/кв</span><span className={styles.cena}>{Math.floor(props.data.price / props.data.total_area)}</span><span className={styles.currency}>{props.data.currency}</span></li>
                <li><span className={styles.row_name}>Площадь</span><span className={styles.params}>{props.data.total_area} кв. м.</span></li>
                <li><span className={styles.row_name}>Район</span><span className={styles.params}>{props.data.district}</span></li>
                <li><span className={styles.row_name}>Адрес</span><span className={styles.params}>ул. {props.data.street}</span></li>
                {/* <li><span className={styles.row_name}>Стены</span><span className={styles.params}>{props.data.wall_type}</span></li> */}
                <li><span className={styles.row_name}>Этажей</span><span className={styles.params}>{props.data.floors}</span></li>
                {/* <li><span className={styles.row_name}>Этаж</span><span className={styles.params}>{props.data.floor}</span></li> */}
                {/* <li><span className={styles.row_name}>Количество комнат</span><span className={styles.params}>{props.data.rooms_count}</span></li> */}
                <li><span className={styles.row_name}>Тип сделки</span><span className={styles.params}>{props.data.advert_type}</span></li>
                <li><span className={styles.row_name}>Телефон</span><div className={styles.tel}><a href={`tel:${globalData.tel1}`}>{globalData.tel1}</a><a href={`tel:${globalData.tel2}`}>{globalData.tel2}</a></div></li>
            </ul>

            <ul className={styles.messengers}>

                <li><a href=""><img src={telegram} alt="telegram" /></a></li>
                
                {/* <li><a target="_blanck" href={`viber://forward?url=https://${globalData.domen}${link}&text=${props.data.title}`}><img src={viber} alt="viber" /></a></li> */}

                <li><a className={styles.viber} target="_blanck" href={`viber://pa?chatURI=commercialrealestate-kh&text=${mesViber}`}><span className={styles.hint}>Получить консультацию по этому объекту через Viber</span><img src={viber} alt="viber" /></a></li>

               
                <li><a target="_blanck" href={`http://www.facebook.com/share.php?u=https://${globalData.domen}${link}&title=${props.data.title}`}><img src={facebook} alt="facebook" /></a></li>
               
               
                <li><a target="_blanck" href={`http://twitter.com/intent/tweet?status=${props.data.title}+https://${globalData.domen}`}><img src={twitter} alt="twitter" /></a></li>
              
              
                {/* <li><a href=""><img src={instagram} alt="instagram" /></a></li> */}
            </ul>
       

        <div className={styles.wrap_button}>
            <Button onClick={() => {scroll()}} stretch color={'orange'} text={'Предложи свою ценy'} />
        </div>
        </div >
    );

};

export default SideBar;