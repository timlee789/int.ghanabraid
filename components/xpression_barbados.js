import React from 'react';
import cla from '../styles/form.module.css';
import {useRef, useState} from 'react';
import {useRouter} from 'next/router'
import Image from 'next/image';
import Head from 'next/head'

function xpression( ) {
   
    //  const refName = useRef();
    //  const refTel = useRef();
    //  const refEmail = useRef();
    
    //  const router = useRouter()
    
     
    //  async function submitHandler(event) {
    //    event.preventDefault();
    //    const enteredName = refName.current.value;
    //    const enteredTel = refTel.current.value;
    //    const enteredEmail = refEmail.current.value;
     
      
    //    const inputData ={
    //      name: enteredName,
    //      tel: enteredTel,
    //      email: enteredEmail,
       
    //      date: Date(),
    //    }
    //    console.log(inputData);
    //    addDataHandler(inputData)

    //     document.getElementById('name').value='';
    //     document.getElementById('tel').value='';
    //     document.getElementById('email').value='';
      
    //  }
    //  async function addDataHandler(inputData) {

    //     const response = await fetch('/api/postsghana',
    //         {
    //             method: 'POST',
    //             body: JSON.stringify(inputData),
    //             headers: {
    //                 'Content-type': 'application/json'
    //             }
    //         })
    //     const data = await response.json();
    //     router.push('/thanks')
    // }
  return (
    
    <div className={cla.main}> 
     <Head>  
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>3X Ghana Braid Giveaway Event</title>
        <meta name="description" content="3X Ghana Braid Giveaway Event" />
        <link rel="image_src" href="https://bijouxhair.com/tim/landing2/3xghanaphoto6.jpg" />     
        <meta property="og:title" content="3X Ghana Braid Giveaway Event" />    
        <meta property="og:image" content="https://bijouxhair.com/tim/landing2/3xghanaphoto6.jpg"/>
        <meta property="og:description" content="3X Ghana Braid Giveaway Event"/>
        <meta property="og:site_name" content="Beauty Elements"/> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head> 
        {/* <center>
        <Image src='https://bijouxhair.com/tim/landing2/xpressionhead.jpg' width='800px' height='500px' alt='banner' />
        <div className={cla.ula2}>Fill out the Registration and Win !</div>
      <div className={cla.inputframe}>
      <form onSubmit={submitHandler}>
         <input type='text' id='name' ref={refName} placeholder='Name' className={cla.inputbox} required /><br/>
         <input type='text' id='tel' ref={refTel} placeholder='Tel' className={cla.inputbox} required /><br/>
         <input type='text' id='email' ref={refEmail} placeholder='Email' className={cla.inputbox} required /> 
         <button className={cla.btn}>Submit</button>
       </form>
       </div>
       <div className={cla.textbox}>
       <div className={cla.ula2}>To get the free giveaway Hair: </div>
       <ul className={cla.ula}>
         <li>  5 winners will be selected every 2 weeks.</li>
         <li>  5 Packs 3x Ghana braid 50 for each Winner.</li>
       </ul>
       </div>
       </center> */}
     {/* <div className={cla.phototitle}>3X Ghana Braid Special Event</div> */}
     <div className={cla.album2}>
       <div >
       <Image src='https://bijouxhair.com/tim/landing2/4xxpression_head.jpg' alt='banner' width='800px' height='400px' className={cla.image}/>
       </div>
     </div>
     <div className={cla.wrapper}><h1 className={cla.coming}>Coming soon to Barbados</h1></div>
       <div className={cla.album2}>
       <div >
       <Image src='https://bijouxhair.com/tim/landing2/4xxpression1.jpg' alt='banner' width='800px' height='960px' className={cla.image}/>
       {/* <div className={cla.videotitle}>3X Ghana Braid 40 50 60 70</div> */}
       </div>
     </div>
     <div className={cla.album2}>
       <div >
       <Image src='https://bijouxhair.com/tim/landing2/4xxpression2.jpg' alt='banner' width='800px' height='960px' className={cla.image}/>
       {/* <div className={cla.videotitle}>3X Ghana Braid 40 50 60 70</div> */}
       </div>
     </div>
   
       
       <Image src='https://bijouxhair.com/tim/landing2/3xghanaspec.jpg' alt='banner' width='800px' height='206px' className={cla.image}/>
       
       
       <div className={cla.footer}>
        <div className={cla.footimage}>
        <a href="https://bijouxhair.com/" target='_blank' rel="noreferrer"
          ><Image alt=""  src="https://bijouxhair.com/catalog/webmain/beautyelementlogo.jpg" width='180px' height='60px' /></a>
      </div>
      </div>
       </div>
    
  )
}

export default xpression