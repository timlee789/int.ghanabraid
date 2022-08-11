
import cla from '../styles/form.module.css';
import {useRef, useState} from 'react';
import {useRouter} from 'next/router'
import Image from 'next/image';
import Head from 'next/head';
import Ghanabraid from '../components/TapeClip';

export default function Home() {
  
  //    const refName = useRef();
  //    const refTel = useRef();
  //    const refEmail = useRef();
    
  //    const router = useRouter()
  //    const [Radio, setRadio] = useState();
  //    const [Check, setCheck] = useState();
  //    async function submitHandler(event) {
  //      event.preventDefault();
  //      const enteredName = refName.current.value;
  //      const enteredTel = refTel.current.value;
  //      const enteredEmail = refEmail.current.value;
  //      const enteredPrize = Radio;
  //      const enteredCheck = Check;
      
  //      const inputData ={
  //        name: enteredName,
  //        tel: enteredTel,
  //        email: enteredEmail,
  //        prize: enteredPrize,
  //        beautician: enteredCheck,
  //        date: Date(),
  //      }
  //      console.log(inputData);
  //      addDataHandler(inputData)

  //       document.getElementById('name').value='';
  //       document.getElementById('tel').value='';
  //       document.getElementById('email').value='';
  //       document.getElementsByName('prize').value='';
  //       document.getElementsByName('beautician').value='';
  //    }
  //    async function addDataHandler(inputData) {

  //     const response = await fetch('/api/postshaiti',
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

// export async function getStaticProps(){
 
//   const client = await MongoClient.connect(
//           `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@clustertim.koved.mongodb.net/Landing?retryWrites=true&w=majority`
//           );
//   const db = client.db();
//   const myCollection = db.collection('insta-event');
//   const products = await myCollection.find({}).toArray(); 
// return{
//   props: {
//     landingdata: products.map(meetup => ({
//       id: meetup._id.toString(),
//       image: meetup.image || null,
//       name: meetup.name
//     })),
//   }
//  }
  
// }