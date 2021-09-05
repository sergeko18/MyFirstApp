import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx';
import s from './Profile.module.css';

const Content = () => {
    return <div className={s.content}>

    <div className={s.img1}>
    
      <img  src='https://stimg.cardekho.com/images/car-images/930x620/Skoda/Superb/6764/1590559103723/227_Steel-Grey_454642.jpg?tr=w-420'></img>
    </div>

    <div className ={s.img2}>
      <img src='https://cdn.iconscout.com/icon/free/png-128/skoda-3441045-2874154.png' />
    </div> 

    <div>
      Ava + discription
    </div>

    <MyPosts />

   




  </div>}



export default Content;