import { assetManifest } from "../assets/assetManifest.js";

const products = [
  {
    id: 1,
    slug: "ef-21w",
    name: "EF-21W",
    category: "Portable Projector",
    image: assetManifest.products.ef21w,
    resolution: "Full HD ",
    brightness: "1000 Lumens",
    brochure: "/brochures/EF21.pdf",
    description: "Epson EpiqVision Mini EF-21W Full HD Smart Portable Laser Home Projector",
    description1: "Maximise your entertainment, colour your lifestyle.",
    overview:
      "The EH-LS9000B is a 4K laser projector designed for serious home cinema, delivering stunning picture quality and immersive entertainment.",


    applications: [
      {
        title: "Vibrant Colours",
        description:"Proprietary 3LCD multi-array laser diode technology creates excellent brightness levels while significantly enhancing black density, resulting in exceptionally bright, clear images. Our technology ensures 1,000 lumens of colour (IDMS-rated) and white (ISO-rated) brightness2, with vivid images of up to 381cm (150 inches).\nAdditionally, enjoy up to 20,000 hours thanks to the laser light source life technology5 on your projector. That's more than 10 years of entertainment6!",
        image: assetManifest.application.vibrant,
      },
      {
        title: "Ease of Setup",
        description:
          "Immerse yourself in your entertainment projected onto ceilings or any blank walls.\n Additionally, be blown away with its instant and automated keystone, focus, obstacle avoidance and screen fit for ease of calibration, allowing you to customise your setup effortlessly.",
        image: assetManifest.application.businessApplication,
      },
      {
        title: "Sleek and smart",
        description:
          "The EpiqVision Mini EF-21W combines sleek, smart design with a trendy Ice Green colour, enhancing any home decor. Its rounded rear and angular front design creates a streamlined, sophisticated look.",
        image: assetManifest.application.gamingApplication,
      },
    ],
    Specifications: {
      Resolution: "Full HD (1920 × 1080)",
      Brightness: "1000 Lumens",
      Contrast: "5,000,000:1",
      LightSource: "Laser Diode",
      DisplayTechnology: "3LCD (RGB Liquid Crystal Shutter)",
      LCDSize: "0.62-inch",
      ThrowType: "Standard Throw",
      ThrowRatio: "1.0 – 1.81",
      ScreenSize: '30" – 150"',
      Connectivity: "HDMI (ARC), USB-A, USB Mini-B, Audio Out, Wi-Fi",
      InternalSpeaker: "5W × 2",
      Weight: "Approx. 2.3 kg",
      Dimensions: "197 × 191 × 110.5 mm",
      PowerConsumption: "106W / 78W",
      FanNoise: "23dB / 19dB",
      Warranty: "2 Years"
    },
    features: [
      "1,000 lumens of colour (IDMS-rated) and white brightness (ISO-rated)2",
      "Built-in Google TVTM1 and Google Cast",
      "Over 5,000,000:1 contrast ratio4",
      "HDR103 and HLG for great image quality and contrast",
      "Rotatable stand allowing 360-degree horizontal and 150-degree vertical adjustments",
      "Instant automated image adjustments",
    ],
    gallery: [
      assetManifest.products.ef21w,
      assetManifest.products.ef21w1,
      assetManifest.products.ef21w2,
     

    ],


  },
  {
    id: 2,
    slug: "ef-22n",
    name: "EF-22N",
    category: "Portable Projector",
    image: assetManifest.products.ef22n,
    resolution: "Full HD",
    brightness: "1000 Lumens",
    brochure: "/brochures/EF21.pdf",
    description: "Epson EpiqVision Mini EF-22N Full HD Smart Portable Laser Home Projector",
    description1: "Maximise your entertainment, colour your lifestyle.",
  
    overview:
      "Enjoy an epic viewing experience with the Epson EpiqVision Mini EF-22N home projector.",


    applications: [
      {
        title: "All-in-One Lifestyle Companion",
        description:
          "The Epson EpiqVision Mini EF-22N home projector is perfect for your home entertainment setup, with its Full HD resolution, 1,000 lumens of equal white and colour brightness2, smart function, 5W x 2 speakers that support Dolby AudioTM, high contrast ratio, laser light source technology, and built-in Google TVTM1 and Google Cast.\nThe latest EpiqVision Mini range comes in 2 colours, blending in yet aesthetically enhancing your home entertainment setup.",
        image: assetManifest.application.homeApplication,
      },
      {
        title: "Sleek and smart",
        description:
          "The EpiqVision Mini EF-22N combines sleek, smart design with a trendy Metallic Navy colour and metallic finish, enhancing any home decor. Its rounded rear and angular front design creates a streamlined, sophisticated look.",
        image: assetManifest.application.sleek,
      },
      {
        title: "Tailored Home Entertainment Experience",
        description:
          "The smart projector comes with built-in Google TVTM1 and Google Cast, offering thousands of movies, shows and games from the Google Play Store, including Netflix, YouTube and your favourite applications. Voice command and personalised recommendations means you can spend more time immersed in your movies and less time on searching for your next show to stream.",
        image: assetManifest.application.tailored,
      },
    ],
    Specifications: {
      Resolution: "Full HD (1920 × 1080)",
      Brightness: "1000 Lumens",
      Contrast: "5,000,000:1",
      LightSource: "Laser Diode",
      DisplayTechnology: "3LCD (RGB Liquid Crystal Shutter)",
      LCDSize: "0.62-inch",
      ThrowType: "Standard Throw",
      ThrowRatio: "1.0 – 1.81",
      ScreenSize: '30" – 150"',
      Connectivity: "HDMI (ARC), USB-A, USB Mini-B, Audio Out, Wi-Fi",
      InternalSpeaker: "5W × 2 + Passive Radiator",
      Weight: "Approx. 3.0 kg",
      Dimensions: "236 × 191 × 191 mm",
      PowerConsumption: "103W / 73W",
      FanNoise: "22dB / 18dB",
      Warranty: "2 Years"
    },
    features: [
      "1,000 lumens of colour (IDMS-rated) and white brightness (ISO-rated)2",
      "Built-in Google TVTM1 and Google Cast",
      "Built-in 5W x 2 speakers that support Dolby Audio",
      "HDR103 and HLG for great image quality and contrast",
      "Rotatable stand allowing 360-degree horizontal and 150-degree vertical adjustments",
      "Instant automated image adjustments",
    ],
    gallery: [
      assetManifest.products.ef22n,
      assetManifest.products.ef22n1,
      assetManifest.products.ef22n2,


    ],
  },

];

export default products;