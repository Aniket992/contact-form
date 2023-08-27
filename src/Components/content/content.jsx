import React from 'react';
import Style from './content.module.css';
const Content = () => {
  return (
    <div>
        <div className={Style.container}>
            <div className={Style.header}>
      <h1>CONTACT US</h1>
      </div>

      <div className={Style.content}>
      <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
      </div>
      </div>
    </div>
  )
}

export default Content;
