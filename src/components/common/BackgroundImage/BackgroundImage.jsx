import React from 'react';
import s from './BackgroundImage.module.css';
import bgImg from '../../../assets/images/bgImg.png';

const BackgroundImage = (props) => {
   return (
      <div className={s.block}>
         <img src={bgImg} alt="" />
      </div>
   );
}


export default BackgroundImage;