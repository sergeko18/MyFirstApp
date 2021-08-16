import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Content = () => {
    return <content className={s.content}>

    <div className={s.img1}>
    
      <img  src='https://www.google.com/imgres?imgurl=http%3A%2F%2Felitefon.ru%2Fimages%2F201211%2Felitefon.ru_5852.jpg&imgrefurl=http%3A%2F%2Felitefon.ru%2Fgirls%2F5852-pljazh-more-devushka.html&tbnid=tGYmeGEImPtq7M&vet=12ahUKEwjVm8mL0ZfyAhUNuhQKHbPgCR8QMygJegUIARCzAQ..i&docid=Yzv3Pi71wox5fM&w=1920&h=1200&q=%D0%BC%D0%BE%D1%80%D0%B5&hl=ru&ved=2ahUKEwjVm8mL0ZfyAhUNuhQKHbPgCR8QMygJegUIARCzAQ'></img>
    </div>

    <div className ={s.img2}>
      <img src='https://i.pinimg.com/originals/b0/6f/c3/b06fc3a9d0faaf130efa0cf82e4cf8ad.png' />
    </div> 

    <div>
      Ava + discription
    </div>

    <MyPosts />

   




  </content>}



export default Content;