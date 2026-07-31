import aboutCompanyName from './Images/about/companyname.jpg';
import aboutMission from './Images/about/mission.jpg';
// Backgrounds----------------------------------------------
import Home from './Images/backgrounds/homeprojectors.jpeg';
import backgroundPortable from './Images/backgrounds/Portable.jpeg';
import ultra from './Images/backgrounds/ultrashot.jpeg';
import backgroundPortablePdf from './Images/backgrounds/portable.pdf';
import red from './Images/backgrounds/red.jpg';
import backgroundSub3 from './Images/backgrounds/sub3.avif';
// Categories----------------------------------------------
import categoryCat1 from './Images/categories/cat1.jpeg';
import categoryCat2 from './Images/categories/cat2.jpeg';
import categoryCat3 from './Images/categories/cat3.jpeg';
// Hero----------------------------------------------
import heroContactHero from './Images/hero/contact-hero.jpg';
import heroImage from './Images/hero/hero.avif';
import heroMainImage from './Images/hero/image.png';
import heroSub1 from './Images/hero/sub1.avif';
import heroSub2 from './Images/hero/sub2.avif';
import heroSub3 from './Images/hero/sub3.avif';
import heroSub4 from './Images/hero/sub4.jpeg';
import heroSub5 from './Images/hero/sub5.jpeg';
import heroSub6 from './Images/hero/sub6.avif';
import Ultracinema from './Images/hero/Ultra-cinema-hero.avif'
import Homecinema from './Images/hero/home-cinema-hero.jpg';
import portablecinema from './Images/hero/portable-cinema-hero.jpg';
import EnquiryImage from './Images/hero/enquiry-hero.jpg';

// Logos----------------------------------------------
import logoAcd from './Images/logos/ACD.webp';
import logoAvd from './Images/logos/avd.png';
import logoAvdLogo from './Images/logos/avd-logo.png';
// Applications----------------------------
import homeApplication from "./Images/applications/home.jpg";
import gamingApplication from "./Images/applications/gaming.jpg";
import businessApplication from "./Images/applications/business.jpg";
import qb1000b1 from "./Images/applications/qb1000b1.jpg"
import qb1000b2 from "./Images/applications/qb1000b2.jpg"
import qb1000b3 from "./Images/applications/qb1000b3.jpg"
import sleek from "./Images/applications/sleek.jpg"
import smart from "./Images/applications/smart.jpg"
import tailored from "./Images/applications/tailored.jpg"
import vibrant from "./Images/applications/vibrant.jpg"
// Products----------------------------------------------
import productHero from './Images/products/product-hero.avif';
import ef21w from './Images/products/ef-21w.png';
import ef22n from './Images/products/ef-22n.png';
import ef22n1 from './Images/products/ef-22n1.png'; 
import ef22n2 from './Images/products/ef-22n2.png';
import ef21w1 from './Images/products/ef-21w1.png';
import ef21w2 from './Images/products/ef-21w2.png';
import ehls650b from './Images/products/eh-ls650b.png';
import ehls670b from './Images/products/eh-ls670b.webp';
import ehls800b from './Images/products/eh-ls800b.png';
import ehls9000b from './Images/products/eh-ls9000b.png';
import ehqb1000b from './Images/products/eh-qb1000b.png';
import ehtw6250 from './Images/products/eh-tw6250.png';
import ehtw7100 from './Images/products/eh-tw7100.png';
import ehtw9400 from './Images/products/eh-tw9400.png';



// Videos---------------------------------
import loadingVideo from './videos/open.mp4';

export const assetManifest = {
  about: {
    companyName: aboutCompanyName,
    mission: aboutMission,
  },
  backgrounds: {
    portable: backgroundPortable,
    portablePdf: backgroundPortablePdf,
    home: Home,
    ultra: ultra,
    red: red,
    sub3: backgroundSub3,
  },
  application: {
    homeApplication,
    gamingApplication,
    businessApplication,
    sleek,
    smart,
    vibrant,
    tailored,
    qb1000b1,
    qb1000b2,
    qb1000b3,
  },

  categories: {
    cat1: categoryCat1,
    cat2: categoryCat2,
    cat3: categoryCat3,
  },
  hero: {
    contactHero: heroContactHero,
    heroImage: heroImage,
    mainImage: heroMainImage,
    Ultracinema: Ultracinema,
     Homecinema: Homecinema,
     portablecinema: portablecinema,
     EnquiryImage: EnquiryImage,
    sub1: heroSub1,
    sub2: heroSub2,
    sub3: heroSub3,
    sub4: heroSub4,
    sub5: heroSub5,
    sub6: heroSub6,
   
  
  },
  logos: {
    acd: logoAcd,
    avd: logoAvd,
    avdLogo: logoAvdLogo,
    
  },
  products: {
    hero: productHero,
    
    ef21w: ef21w,
    ef22n: ef22n,
    ehls650b: ehls650b,
    ehls670b: ehls670b,
    ehls800b: ehls800b,
    ehls9000b: ehls9000b,
    ehqb1000b: ehqb1000b,
    ehtw6250: ehtw6250,
    ehtw7100: ehtw7100,
    ehtw9400: ehtw9400,
    ef22n1: ef22n1,
    ef22n2: ef22n2,
    ef21w1: ef21w1,
     ef21w2: ef21w2,

  
    
  },
  videos: {
    loading: loadingVideo,
  },
};

export default assetManifest;
