import cla from '../styles/form.module.css';
import {useRef, useState} from 'react';
import {useRouter} from 'next/router'
import Image from 'next/image';
import Head from 'next/head';
import Ghanabraid from '../components/TapeClip';

export default function Home() {
 
  return (
    <div className={cla.main}>
       <Head>  
        <meta name="viewport" content="width=1150"/>
        <title>Welcome to Ghana Braid</title>
        <meta name="description" content="Ghana Braid Evènman kado" />
        <link rel="image_src" href="https://bijouxhair.com/tim//ad/xpressionhead.jpg" />     
        <meta property="og:title" content="Ghana Braid Evènman kado" />    
        <meta property="og:image" content="https://bijouxhair.com/tim//ad/xpressionhead.jpg"/>
        <meta property="og:description" content="Ghana Braid Evènman kado"/>
        <meta property="og:site_name" content="Beauty Elements"/> 
    </Head>
      <main className={cla.body}>
        <Ghanabraid />
      </main>

      {/* <!-- FOOTER --> */}


  
</div>
  )
}

