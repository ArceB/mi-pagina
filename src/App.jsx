import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header.jsx';
import Inicio from "./components/Inicio";
//import Cripto from "./components/Cripto";
//import Yo from "./components/Yo";
//import Contacto from "./components/Contacto";
//import CV from "./components/Cv";
//import Llave from "./components/Llave";
import Timeline from './components/Timeline';
import TwoCards from './components/TwoCards';
import SmallBanners from './components/SmallBanners';
import CircleHoverImages from "./components/CircleHoverImages";
import PdfDownload from './components/PdfDownload';

import img1 from './images/otro1.jpg';
import img2 from './images/otro4.jpg';
import img3 from './images/otro6.jpg';
import img4 from './images/otro7.jpg';
import img5 from './images/otro8.jpg';

import video1 from './images/otro2.mp4';
import video2 from './images/otro3.mp4';
import video3 from './images/otro5.mp4';


import previewCv from './images/cv.jpg';
import pdfCv from './archivos/cv.pdf';

const images = [
  {
    primary: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/800px-2023_Facebook_icon.svg.png",
    secondary: "https://scontent.fmex23-1.fna.fbcdn.net/v/t39.30808-6/365557971_6436060649845866_1696875577930442924_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF5APtg_6QenRaWdi1GnbLZIAKvDrhwLyQgAq8OuHAvJHjN7XaWS2sGgQtyvJhSASysqm6tzgbMBLhU8yYSXG8u&_nc_ohc=BDjd3NLIEo0Q7kNvwHaWQ41&_nc_oc=AdnOOLR7bocqO18qDR_j7CsH2Ig4RJCmfC4-wF3voajgdGi0OCYMPXPVbfcMXcFnngY&_nc_zt=23&_nc_ht=scontent.fmex23-1.fna&_nc_gid=0ZxytExxDcs7mu95EAemAA&oh=00_Affi4Pt2iOdVWcX6xipQFQr9A8qR2viSkH13Lo2LpjTKwQ&oe=68FFA44C",
    alt: "fb",
    link: "https://www.facebook.com/arcee.beermudeezm",
  },
  {
    primary: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/330px-Instagram_logo_2022.svg.png",
    secondary: "https://scontent.fmex23-1.fna.fbcdn.net/v/t39.30808-6/365557971_6436060649845866_1696875577930442924_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF5APtg_6QenRaWdi1GnbLZIAKvDrhwLyQgAq8OuHAvJHjN7XaWS2sGgQtyvJhSASysqm6tzgbMBLhU8yYSXG8u&_nc_ohc=BDjd3NLIEo0Q7kNvwHaWQ41&_nc_oc=AdnOOLR7bocqO18qDR_j7CsH2Ig4RJCmfC4-wF3voajgdGi0OCYMPXPVbfcMXcFnngY&_nc_zt=23&_nc_ht=scontent.fmex23-1.fna&_nc_gid=0ZxytExxDcs7mu95EAemAA&oh=00_Affi4Pt2iOdVWcX6xipQFQr9A8qR2viSkH13Lo2LpjTKwQ&oe=68FFA44C",
    alt: "IG",
    link: "https://www.instagram.com/arce.bermudez/",
  },
  {
    primary: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png",
    secondary: "https://scontent.fmex23-1.fna.fbcdn.net/v/t39.30808-6/365557971_6436060649845866_1696875577930442924_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF5APtg_6QenRaWdi1GnbLZIAKvDrhwLyQgAq8OuHAvJHjN7XaWS2sGgQtyvJhSASysqm6tzgbMBLhU8yYSXG8u&_nc_ohc=BDjd3NLIEo0Q7kNvwHaWQ41&_nc_oc=AdnOOLR7bocqO18qDR_j7CsH2Ig4RJCmfC4-wF3voajgdGi0OCYMPXPVbfcMXcFnngY&_nc_zt=23&_nc_ht=scontent.fmex23-1.fna&_nc_gid=0ZxytExxDcs7mu95EAemAA&oh=00_Affi4Pt2iOdVWcX6xipQFQr9A8qR2viSkH13Lo2LpjTKwQ&oe=68FFA44C",
    alt: "in",
    link: "https://www.linkedin.com/in/arcelia-ameyalli-berm%C3%BAdez-moreno-625287337/",
  },
  {
    primary: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/768px-Gmail_icon_%282020%29.svg.png",
    secondary: "https://scontent.fmex23-1.fna.fbcdn.net/v/t39.30808-6/365557971_6436060649845866_1696875577930442924_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF5APtg_6QenRaWdi1GnbLZIAKvDrhwLyQgAq8OuHAvJHjN7XaWS2sGgQtyvJhSASysqm6tzgbMBLhU8yYSXG8u&_nc_ohc=BDjd3NLIEo0Q7kNvwHaWQ41&_nc_oc=AdnOOLR7bocqO18qDR_j7CsH2Ig4RJCmfC4-wF3voajgdGi0OCYMPXPVbfcMXcFnngY&_nc_zt=23&_nc_ht=scontent.fmex23-1.fna&_nc_gid=0ZxytExxDcs7mu95EAemAA&oh=00_Affi4Pt2iOdVWcX6xipQFQr9A8qR2viSkH13Lo2LpjTKwQ&oe=68FFA44C",
    alt: "GM",
    link: "mailto:arcebermudezm@gmail.com",
  },
];

const bannersOtros = [
  {
    type: 'image',
    src: img4,
    alt: 'Imagen local',
    title: 'Imagen bonita',
  },
  {
    type: 'image',
    src: img1,
    alt: 'Imagen local',
    title: 'Imagen bonita',
  },
  {
    type: 'video',
    src: video1,
    alt: 'Video local',
    title: 'Video interesante',
  },
  {
    type: 'image',
    src: img2,
    alt: 'Imagen local',
    title: 'Imagen bonita',
  },
  {
    type: 'video',
    src: video2,
    alt: 'Video local',
    title: 'Video interesante',
  },
  {
    type: 'image',
    src: img3,
    alt: 'Imagen local',
    title: 'Imagen bonita',
  },
  {
    type: 'video',
    src: video3,
    alt: 'Video local',
    title: 'Video interesante',
  },
  {
    type: 'image',
    src: img5,
    alt: 'Imagen local',
    title: 'Imagen bonita',
  },
];

/*const bannersData = [
  {
    src: "https://upload.wikimedia.org/wikipedia/en/f/f4/Taylor_Swift_%E2%80%93_The_Life_of_a_Showgirl_%28album_cover%29.png",
    alt: "TS",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/f/fd/Short_n%27_Sweet_-_Sabrina_Carpenter.png",
    alt: "SC",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/b/b2/Olivia_Rodrigo_-_SOUR.png?20210413234024",
    alt: "OR",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/2/27/Justin_Bieber_-_Purpose_%28Official_Album_Cover%29.png",
    alt: "JB",
  },
];
const bannersPeli = [
  {
    src: "https://m.media-amazon.com/images/S/pv-target-images/e438a62db14e7464b6f9c672e5bc134824766cf47583aeeb3e1e6b4164e5d2fb.jpg",
    alt: "PLL",
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BZDljNzZmMGMtM2FmNC00ZTkzLTg2OTctNDAxZGViYjVlYjAxXkEyXkFqcGc@._V1_.jpg",
    alt: "GG",
  },
  {
    src: "https://pequenasjoyasocultas.com/wp-content/uploads/2023/07/Gilmore-Girls-1-768x1024.jpg",
    alt: "GG1",
  },
  {
    src: "https://images.radio-canada.ca/q_auto,w_700/v1/ici-info/perso/anne-with-an-e-netflix.jpg",
    alt: "ST",
  },
];*/


const cardsData = [
  {
    title: "Criptografía del antiguo Egipto",
    description: "En una tumba de alrededor del año 1900 a.C., se encontró un texto con jeroglíficos modificados a propósito para ocultar su significado. Aunque no era criptografía en el sentido moderno (no se buscaba la seguridad, sino el misterio), se considera uno de los primeros ejemplos de escritura cifrada.",
    image: "https://www.todolibroantiguo.es/criptografia-libros-antiguos/assets/img/egipto-350.jpg"
  },
  {
    title: "Segunda Guerra Mundial",
    description: "El trabajo de Alan Turing en la máquina Enigma no solo ayudó a descifrar los mensajes nazis, sino que también sentó las bases de la computación moderna. La criptografía pasó de ser un arte manual a convertirse en una disciplina matemática y computacional.",
    image: "https://content-historia.nationalgeographic.com.es/medio/2021/02/17/alan-turing-a-los-16-anos-edad-a-la-que-acerco-al-trabajo-de-einstein-dando-muestras-de-su-temprano-genio-en-cuanto-a-las-matematicas-se-referia_d9b52e34_675x919.jpg"
  }
];

const eventos = [
  {
    title: "Técnico en programación",
    date: "2016 - 2019",
    description: "Centro de Estudios Científicos y Tecnológicos N° 9 'Juan de Dios Bátiz' IPN"
  },
  {
    title: "Ingeniería Ambiental",
    date: "2020 - 2025",
    description: "Universidad Autónoma Metropolitana Unidad Azcapotzalco"
  },
  {
    title: "Ingeniería en Sistemas Computacionale",
    date: "2021 - 2026",
    description: "ESCOM - Escuela Superior de Cómputo - IPN"
  }
];

function App() {
  return (
    <>
      <Header />
      <Inicio />
      <Timeline events={eventos} />
      <TwoCards cards={cardsData} />

      
      {/** 
      <p className="text-rose-700">Escuchar música</p>
      <SmallBanners banners={bannersData} />

      <p className="text-rose-700">Series y películas</p>
      <SmallBanners banners={bannersPeli} />*/}
      <SmallBanners items={bannersOtros} />

      <PdfDownload
        pdfSrc={pdfCv}
        previewImgSrc={previewCv}
        altText="Vista previa de mi CV"
        fileName="cv.pdf"
      />
      <CircleHoverImages items={images} />


    </>
  );
}

export default App
