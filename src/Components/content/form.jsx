import React from 'react'
import Style from './form.module.css';


const Form  = () => {
  return (
    <div className={Style.formcontainer}>
     <div className={Style.form}>
     <div className={Style.upperbuttons}>
        <button className={Style.buttons}><img src="white message.png" alt="" />VIA SUPPORT CHAT</button>
        <button className={Style.buttons}><img src="Vector.png" alt="" />VIA CALL</button>
        </div>
        <button className={Style.emailbutton}><img src="black message.png" alt="" />VIA EMAIL FORM</button>
       <div>
         <div className={Style.label}>Name</div>
        <input type="text" name="" id=""  />
        </div>
        <div>
        <div className={Style.label}>E-Mail</div>
        <input type="text" name="" id=""  />
        </div>
        <div>
        <div className={Style.label}>TEXT</div>
        <input type="text" name="" id=""   />
        </div>
        <div>
        <button className={Style.buttons} id={Style.submit}>SUBMIT</button>
        </div>
     </div>
     <div className={Style.image}>
        <img src="Service 24_7-pana 1.png" alt="" />
     </div>
    </div>
  )
}

export default Form ;
