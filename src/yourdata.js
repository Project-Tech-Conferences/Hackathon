// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

import linkedinIcon from "./images/linkedin-icon.webp"
import igIcon from "./images/ig-icon.webp"
import fbIcon from "./images/fb-icon.webp"
import youtubeIcon from "./images/youtube-icon.webp"
// import ptcIcon from "./images/PTC Logo Transparent.webp"
import ptcIcon from "./images/PTC Logo Transparent.png"

// Sponsor Images

import stairsIcon from "./images/stairs.png"
import wolframIcon from "./images/wolfram.png"
import dotsIcon from "./images/dots.png"
import wolframIcon_ from "./images/wolfram_BG.png"
import passIcon from "./images/1password.png"
import balsamiqIcon from "./images/balsamiq.png"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "PTC Hacks",
  headerTagline: [
    //Line 1 For Header
    "Building digital",
    //Line 2 For Header
    "products, brands,",
    //Line 3 For Header
    "and experience",
  ],
  //   Header Paragraph
  headerParagraph:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",

  // End Header Details -----------------------

  /*
    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  // ],

  // End Work Section -----------------------

  // About Section --------------
  aboutParaOne:
    "PTC is a Canadian nonprofit organization established in May of 2019.",
  aboutParaTwo:
    "We're on a mission to inspire and empower the next generation of programmers by providing high school and middle school students with opportunities to discover the world of technology!",
  //   End About Section ---------------------

  // What Section --------------
  whatParaOne: `Over FOUR weeks, you'll have THREE weekly multi-part coding problems 
    of varying difficulty to challenge yourself with! Learning from our tutorials 
    and post-challenge problem solutions is a great way to improve your problem-solving 
    and coding skills`,
  //   End What Section ---------------------

  // Learning Section --------------
  learningParaOne: `Our goal is to provide free resources to help you learn!`,
  learningParaTwo: `hints and resources during the contest`,
  learningParaThree: `post-challenge solutions a week after the deadline closes`,
  //   End Learning Section ---------------------

  // getStarted Section --------------
  getStartedParaOne: `Create an `,
  getStartedParaTwo: `Read the `,
  getStartedParaThree: `Start Solving weekly `,
  getStartedParaFour: `Check out your score on your personal `,
  //   End getStarted Section ---------------------

  // ptcMedia Section --------------
  ptcMediaParaOne: `Follow our socials for updates on PTC events!`,
  // End ptcMedia Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: htmlIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 2,
      img: cssIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 3,
      img: jsIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 4,
      img: reactIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 5,
      img: designIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 6,
      img: codeIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  sponsors: [
    { id: 0, icon: "balsamiq", img: balsamiqIcon },
    { id: 1, icon: "password", img: passIcon },
    { id: 2, icon: "dots", img: dotsIcon },
    { id: 3, icon: "wolfram", img: wolframIcon },
    { id: 4, icon: "stairs", img: stairsIcon },
  ],

  prizes: [{ id: 0, icon: "wolfram_", img: wolframIcon_ }],

  contactSubHeading: "Let's create your next experience together",
  ptcIcon: ptcIcon,
  social: [
    // Add Or Remove The Link Accordingly
    {
      key: 1,
      img: linkedinIcon,
      url: "https://www.linkedin.com/company/projecttc/",
    },
    {
      key: 2,
      img: igIcon,
      url: "https://www.instagram.com/projecttechconferences/",
    },
    {
      key: 3,
      img: fbIcon,
      url: "https://www.facebook.com/projecttechconferences",
    },
    {
      key: 4,
      img: youtubeIcon,
      url: "https://www.youtube.com/channel/UCv7Db7tLjNOn4AFqTGEAArQ",
    },
  ],

  // End Contact Section ---------------
}
