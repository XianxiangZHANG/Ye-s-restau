/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "CHEZ YE",
  title: "Bonjour! C'est Chez Ye",
  subTitle: emoji(
    "Ici, vous pourrez déguster de délicieux plats chinois."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  instagram: "https://www.instagram.com/yyh_hyy_?igsh=dW03dDVhd3F4Nmdm",
  gmail: "hongtinghye@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "À propos de Chez Ye",
  subTitle: "Chez Ye est un restaurant chinois avec une longue histoire.",
  skills: [
    "Créé il y a cent ans et héritant du savoir-faire culinaire de quatre générations. Le restaurant est célèbre pour ses plats traditionnels chinois authentiques, en particulier ses plats classiques faits maison et ses plats de banquet exquis. Les habitants et les touristes peuvent y découvrir la saveur chinoise authentique et une expérience culinaire chaleureuse."
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
   
  ],
  display: true // Set false to hide this section, defaults to true
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer(Intern)",
      company: "Gradel Light Weight",
      companylogo: require("./assets/images/logo_gradel.png"),
      date: "April 2024 – September 2024",
      desc: "I interned at Gradel LW for six months and independently created a usable database system for the company using Django.",
      descBullets: [
        "Designed the database structure.",
        "Created the website based on the database by Django and Bootstrap.",
        "Familiar with basic robot operation.",
        "Functioned as a full-stack developer, independently managing and completing the entire project.",
      ]
    },
    {
      role: "Unit Tester(Intern)",
      company: "LS2N",
      companylogo: require("./assets/images/logo_ls2n.png"),
      date: "May 2023 – September 2023",
      desc: "I interned at LS2N for four months and was integrated into the Bayesian network project of the laboratory. I wrote unit test codes for the project's functions and successfully configured CI/CD scripts to demonstrate unit test code coverage and code.",
      descBullets: [
        "Created the Gitlab Wiki Documentation.",
        "Created new functions to deal with the images.",
        "Contributed extensively to the unit test code.",
        "Perfected the CI/CD setup.",
        "Implemented Gitlab Pages configuration to display code coverage and documentation.",
      ]
    },
  ]
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Poulet Kung Pao",
      logo: require("./assets/images/gbjd.webp"),
      subHeader: emoji("🌶️🌶️"),
      duration: "Poitrine de poulet, cacahuètes, piments séchés, oignons, carottes, poivrons",
      desc: "12€",
      
    },
    {
      schoolName: "Tofu Mapo",
      logo: require("./assets/images/mpdf.webp"),
      subHeader: emoji("🌶️🌶️🌶️"),
      duration: "Tofu, viande de porc hachée, oignons verts",
      desc: "10€",
    },
    {
      schoolName: "Bœuf braisé à la chinoise",
      logo: require("./assets/images/hsnr.webp"),
      subHeader: emoji("🌶️"),
      duration: "Bœuf, carottes, pommes de terre, ail jeune",
      desc: "14€",
    },
    {
      schoolName: "Soupe aigre-piquante",
      logo: require("./assets/images/slt.webp"),
      subHeader: emoji("🌶️🌶️"),
      duration: "Champignons noirs, tofu, œufs, pousses de bambou, carottes",
      desc: "8€",
    },
    {
      schoolName: "Aubergines sauce Yu Xiang",
      logo: require("./assets/images/yxqz.webp"),
      subHeader: emoji("🌶️🌶️"),
      duration: "Aubergines, viande de porc hachée, oignons verts",
      desc: "9€",
    },
    {
      schoolName: "Porc aigre-doux",
      logo: require("./assets/images/tclj.webp"),
      subHeader: emoji("🌶️"),
      duration: "Porc, ananas, poivrons",
      desc: "11€",
    },
    {
      schoolName: "Bœuf à l'huître",
      logo: require("./assets/images/hynr.webp"),
      subHeader: emoji("🌶️"),
      duration: "Bœuf, poivrons, oignons, carottes",
      desc: "13€",
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I EXPERIRNCED",
  projects: [
    {
      
      projectName: "Leibniz Manuscript Detection and Segmentation",
      projectDesc: "Our project aims to detect and segment mathematical expressions in Leibniz's manuscripts. We generated 300 artificial images through data augmentation to expand the dataset and used a deep convolutional neural network to train the model.",
      footerLink: [
        {
          name: "Source code",
          url: "https://github.com/XianxiangZHANG/Leibniz-Manuscript-Detection-Segmentation"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      
      projectName: "The digital logbook for DIVANUM",
      projectDesc: "Our project aims to design a health data recording website for the elderly. This will make it easier for the elderly to record their own health information and for health institutions to query user information.",
      footerLink: [
        {
          name: "Source code",
          url: "https://github.com/XianxiangZHANG/divanum"
        }
      ]
    },
    {
      
      projectName: "Environmental protection publicity website",
      projectDesc: "The project aims to promote environmental protection through a website, with a special focus on the carbon cycle.",
      footerLink: [
        {
          name: "Source code",
          url: "https://github.com/XianxiangZHANG/Hyblab2023/tree/main/carbone"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contactez Nous ☎️"),
  subtitle:
    "Contactez-nous pour réserver.Et si vous avez des suggestions ou des commentaires, vous pouvez nous contacter.",
  number: "+33-0763725553",
  email_address: "hongtinghye@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  workExperiences,
  educationInfo,
  techStack,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
