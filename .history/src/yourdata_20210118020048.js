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
import xboxIcon from "./images/xbox.png"
import stairsIcon from "./images/stairs.png"
import wolframIcon from "./images/wolfram.png"
import dotsIcon from "./images/dots.png"
import blueIcon from "./images/blue.png"
import passIcon from "./images/1password.png"
import balsamiqIcon from "./images/balsamiq.png"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "PTC",
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

  // About Secton --------------
  aboutParaOne:
    "PTC is a student-run nonprofit that runs events for high school and middle school students on topics in tech. In order to provide more opportunities for students, PTC will be launching PTC Hacks this year!",
  aboutParaTwo:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  aboutParaThree:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

  //   End About Section ---------------------

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
    { id: 1, img: balsamiqIcon },
    { id: 2, img: passIcon },
    { id: 3, img: dotsIcon },
    { id: 4, img: wolframIcon },
    { id: 5, img: stairsIcon },
  ],

  //   Contact Section --------------

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
