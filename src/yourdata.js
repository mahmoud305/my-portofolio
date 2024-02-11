// Skills Icons
import cppIcon from "./images/cpp.svg"
import javaIcon from "./images/java.svg"
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript2.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"
import angular from "./images/angular.svg"
import linkedInIcon from "./images/linkedinIcon.svg"
import gitIcon from "./images/git.svg"
import sassIcon from "./images/sass.svg"
import nodejs from "./images/nodejs.svg"
import BootStrapIcon from "./images/bootstrap.svg"
import typescript from "./images/typescript.svg"
import express from "./images/express.svg"
// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import facebookIcon from "./images/facebook.svg"
// projects Images
import proj7 from "./images/proj7.PNG"
import proj8 from "./images/proj8.PNG"
import proj1 from "./images/proj1.PNG"
import proj2 from "./images/proj2.PNG"
import proj3 from "./images/proj3.PNG"
import proj4 from "./images/proj4.PNG"
import proj5 from "./images/proj5.PNG"
import proj6 from "./images/proj6.PNG"
import backend from "./images/backend.PNG"
import me from "./images/me22.png"


export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Mahmoud Ashraf Abo-Hgr",
  headerTagline: [
    //Line 1 For Header
    "Software Engineer,",
    //Line 2 For Header
    /* " Back-end Developer",
     //Line 3 For Header
     " & Mentor",*/
  ],
  //   Header Paragraph
  headerParagraph:
    "eager to enhance my experience in the SWE field as well as the business field and to gain as much valuable knowledge as possible.",

  //Contact Email
  contactEmail: "mahmoud.abohgrr@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [

    {
      title: "Blog API ", //Project Title - Add Your Project Title Here
      para:
        `A blog API with system users : USER,  ADMIN, SUPER_ADMIN.\n[Nodejs, Express.js, MongoDB]. `, // Add Your Service Type Here

      imageSrc: backend,      //Project Image - Add Your Project Image Here
      url: "https://github.com/mahmoud305/Blog-App-API",//Project URL - Add Your Project Url Here
    },
    {
      title: "Movie React Club ", //Project Title - Add Your Project Title Here
      para:
        `Movies website depend on The Movie DB api with login and registeration api.\n[React, React Hooks,User API,  The Movie DB API, HTML, CSS3,Git]. `, // Add Your Service Type Here

      imageSrc: proj7,      //Project Image - Add Your Project Image Here
      url: "https://mahmoud305.github.io/movie-club-react/",//Project URL - Add Your Project Url Here
    },
    {
      title: "React Routing", //Project Title - Add Your Project Title Here
      para:
        `Website for react Rounting .\n[React, React Hooks, React Refs, HTML, CSS3]. `, // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: proj8,      //Project URL - Add Your Project Url Here
      url: "https://mahmoud305.github.io/first-react/",
    },
    {
      title: "Movie4U", //Project Title - Add Your Project Title Here
      para:
        `Angular Movies website depend on The Movie DB api with login and registeration api.\n[Angular, typeScript, HTML, CSS3, The Movie DB API , User API ,Git]. `, // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: proj1,// "./proj1.png",      //Project URL - Add Your Project Url Here
      url: "https://mahmoud305.github.io/The-Movie_DB-Angular/",
    },
    {
      title: "Movie4U_JS", //Project Title - Add Your Project Title Here
      para:
        "Movies website depend on The Movie DB api .\n[JS , JQuery , CSS ,HTML].", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: proj2,// "./proj2.png",      //Project URL - Add Your Project Url Here
      url: "https://mahmoud305.github.io/the-movie-db-js/",
    },
    {
      title: "What to eat?", //Project Title - Add Your Project Title Here
      para:
        "Website for displaying recipes for lunch , click on the meal to get the recipe of it .\n[JavaScript, Recipe API,  HTML, CSS ]", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        proj3,// "./proj3.png",
      //Project URL - Add Your Project Url Here
      url: "https://mahmoud305.github.io/recipe_API_FrontEnd/",
    },
    {
      title: "CRUD With Local Storage", //Project Title - Add Your Project Title Here
      para: "The App can be used be used in many Fields as it contains the CRUD operations.\n[javaScript, HTML,CSS].", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        proj4, //"./proj4.png",
      //Project URL - Add Your Project Url Here
      url: "https://mahmoud305.github.io/crud-using-local-storage/",
    },
    {
      title: "Juinior bookmark", //Project Title - Add Your Project Title Here
      para:
        "bookmark to save your the favourite url using local storage.\n[JS, HTML, CSS, Bootstrap 5]",    //Project Image - Add Your Project Image Here
      imageSrc:
        proj5,// "./proj5.png",
      //Project URL - Add Your Project Url Here
      url: "https://mahmoud305.github.io/junior_bookmark-/",
    },
    {
      title: "Responsive Compony Portofoloi", //Project Title - Add Your Project Title Here
      para:
        "responsive compony portofolia made with\n[JS, JQuery, Bootstrap 5, HTML, CSS]", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: proj6,// "./proj6.png",
      //Project URL - Add Your Project Url Here
      url: "https://mahmoud305.github.io/Responsive-Portofolia/",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------

  profileName: "Mahmoud Ashraf Ali Abo-Hgr",
  profileRule: "Software Engineer ",
  profileEmial: "mahmoud.abohgrr@gmail.com",
  profilePhone: "(002) 01102488789",
  aboutParaOne:
    "I'm Mahmoud Ashraf Ali Abo-Hgr , a 4th year student at faculty of computer and artificial intelligence ,Cario university.",
  aboutParaTwo:
    `I like to code things from scratch, and enjoy bringing ideas to life. I genuinely care about people, appreciate the teamwork,
    I look forward working with different types of people as well as learning new tools and techniques .\n\n`,
  aboutParaThree: "",
  // "Coursera is one of my favourite sites . Most of the courses i had taken in Coursera was more than perfect ,the instructors and the material of study are very powerfull and more than satisfying . here is some of the courses i really enjoyed :",
  aboutImage: me
  // "https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
  //"./me22.png"
  ,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here \n Learning react never exhaust the mind. \nsolving errors, learning, & leveling up one day at a time.
  //\n I value simple content structure, i enjoy doing it simply.\n I value simple content structure, i enjoy doing it simply.
  //  \nI design and code beautifully simple things, and I love what I do.\nsolving errors, learning, & leveling up one day at a time.
  //\n solving errors, learning, & leveling up one day at a time.
  skills: [
    {
      img: nodejs,
      para:
        "Node js",
    },
    {
      img: jsIcon,
      para:
        "JavaScript",
    },
    {
      img: typescript,
      para:
        "Typescript ",
    },
    {
      img: express,
      para:
        "expresss.js ",
    },
    {
      img: reactIcon,
      para:
        "React ",
    },
    {
      img: htmlIcon,
      para:
        "HTML5 ",
    },

    {
      img: cssIcon,
      para:
        "CSS3 ",
    },
    {
      img: sassIcon,
      para:
        "Sass",
    },
    {
      img: BootStrapIcon,
      para:
        "Bootstrap 5",
    },

    {
      img: angular,
      para:
        "Angular ",
    },

    {
      img: cppIcon,
      para:
        "C++ ",
    },
    {
      img: javaIcon,
      para:
        "Java ",
    },
    {
      img: codeIcon,
      para:
        "Problem solving ",
    },

    {
      img: gitIcon,
      para:
        "Git ",
    }
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Certificates",
  certificates: [

    {
      Ceertificate: "Frontend Development Diploma",
      CertificateLink: "https://drive.google.com/file/d/1RxymY_yWviqmeVJEaqMUaUtUuiJkkkE0/view?usp=sharing",
    },

   {
      Ceertificate: "Programming Foundations with JavaScript, HTML and CSS ",
      CertificateLink: "https://coursera.org/share/c7d1f9fb55d81e1f42450696b6f54003",
    },

    {
      Ceertificate: "Design Patterns",
      CertificateLink: "https://coursera.org/share/06dcbd6e81c2da18d60ee0b9122a05fb",
    },

    {
      Ceertificate: "Data Structures and Performance",
      CertificateLink: "https://coursera.org/share/181a0d20e7bb04207da70de48de2346c",
    },

   {
      Ceertificate: "Object-Oriented Design",
      CertificateLink: "https://coursera.org/share/e890c97c675ee5e23f0e5d621cb7f8d9",
    },

   {
      Ceertificate: "Introduction to Cybersecurity Tools & Cyber Attacks",
      CertificateLink: "https://coursera.org/share/8591cd6de7b63e9f6794b77dcf844d9e",
    },

  ],
  promotionPara:
    "",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/mahmoud305" },
    {
      img: linkedInIcon
      ,
      url: "https://www.linkedin.com/in/mahmoud-ashraf-abo-hgr-319567202",

    },
    {
      img: facebookIcon,
      url: "https://www.facebook.com/profile.php?id=100005680801853a",
    },
    // {
    //   img: instagramIcon,
    //   url: "https://www.instagram.com/",
    // },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
