import images from "../assets";

const faqDB = [
  {
    question: "Who can become a Campus Ambassador?",
    answer:
      "You only need to be a college student in order to become a part of the Campus Ambassador Program. All you need is a valid college ID and you are good to go.",
  },
  {
    question: "What are the criteria on which a Campus Ambassador is judged?",
    answer:
      'You can Contact Team Antaragni by "Contact Us" section available on the CA website. Our Team will get back to you through the Email Address or Phone Number provided by you',
  },
  {
    question: "How to become a Campus Ambassador?",
    answer:
      "In order to become a Campus Ambassador you need to visit ca.antaragni.in and register yourself by providing the required details.",
  },
  {
    question: "How can a CA get assistance from Team Antaragni when required?",
    answer:
      'You can Contact Team Antaragni by "Contact Us" section available on the CA website. Our Team will get back to you through the Email Address or Phone Number provided by you',
  },
];

const expectationDB = [
  {
    id: 1,
    img: images.expect1,
    title: "ADVERTISE",
    desc: " Publicize Antaragni and its sponsors in your college by sharing posts by becoming a focal point for your respective college ",
  },
  {
    id: 2,
    img: images.expect2,
    title: "ORGANISE",
    desc: " Organize events, workshops and sessions regarding Antaragni and what it has to offer with assistance from mentors ",
  },
  {
    id: 3,
    img: images.expect3,
    title: "CONDUCT",
    desc: " Help in management of elimination rounds in your college and city to select participants for the main event ",
  },
  {
    id: 4,
    img: images.expect4,
    title: "COORDINATE",
    desc: "Collaborate with the Antaragni team in organising on-ground events in your city ",
  },
];

const incentivesDB = [
  {
    id: 1,
    img: images.incentive1,
    title: "CERTIFICATION",
    desc: " Certificate of appreciation from Antaragni’23, IIT Kanpur recognizing your hardwork ",
  },
  {
    id: 2,
    img: images.incentive2,
    title: "PRONITES",
    desc: " Free entry for the top performing campus ambassadors in exclusive Pronites @Antaragni'23 ",
  },
  {
    id: 3,
    img: images.incentive3,
    title: "OPPORTUNITIES",
    desc: " Top performing campus ambassadors will get a chance to gain professional experience through insternship provided by top companies ",
  },
  {
    id: 4,
    img: images.incentive4,
    title: "GOODIES & MERCHANDISE",
    desc: " Win Antaragni merchandise, promising rewards, gift vouchers from top brands and much more! ",
  },
];

const whycaDB = [
  {
    id: 1,
    img: images.whyca1,
    title: "BE A LEADER",
    desc: " Represent your college as you help organize one of Asia's largest cultural fests ",
  },
  {
    id: 2,
    img: images.whyca2,
    title: "NETWORKING",
    desc: " Get opportunities to interact with celebrities from various fields ",
  },
  {
    id: 3,
    img: images.whyca3,
    title: "ENHANCE YOUR SKILLS",
    desc: " Improve your communication and managerial abilities ",
  },
  {
    id: 4,
    img: images.whyca4,
    title: "FREE COURSES",
    desc: " Top performing CAs to get access to Online courses and an earning opportunity based on performance ",
  },
];

const contactsDB = [
  {
    id: 1,
    Pic: images.luffy,
    Name: "Eren Yeager",
    Post: "Organizer,",
    Dept: "Hospitality",
    Contact: "9876543201",
    Email: "abcd@gmail.com",
    Facebook: "abcd@gmail.com",
    LinkedIn: "abcd@gmail.com",
  },
  {
    id: 2,
    Pic: images.luffy,
    Name: "Levi Ackerman",
    Post: "Organizer,",
    Dept: "Hospitality",
    Contact: "9876543201",
    Email: "abcd@gmail.com",
    Facebook: "abcd@gmail.com",
    LinkedIn: "abcd@gmail.com",
  },
  {
    id: 3,
    Pic: images.luffy,
    Name: "Erwin Agneous",
    Post: "Organizer,",
    Dept: "Hospitality",
    Contact: "9876543201",
    Email: "abcd@gmail.com",
    Facebook: "abcd@gmail.com",
    LinkedIn: "abcd@gmail.com",
  },
  {
    id: 4,
    Pic: images.luffy,
    Name: "Urek Mazino",
    Post: "Organizer,",
    Dept: "Hospitality",
    Contact: "9876543201",
    Email: "abcd@gmail.com",
    Facebook: "abcd@gmail.com",
    LinkedIn: "abcd@gmail.com",
  },
];

const sponsorsDB1 = [
  {
    id: 1,
    img: images.expectPic,
    url: "ADVERTISE",
  },
  {
    id: 2,
    img: images.whyCAPic,
    url: "ORGANISE",
  },
  {
    id: 3,
    img: images.expectPic,
    url: "CONDUCT",
  },
  {
    id: 4,
    img: images.whyCAPic,
    url: "COORDINATE",
  },
];

const sponsorsDB2 = [
  {
    id: 1,
    img: images.incentivePic,
    url: "ADVERTISE",
  },
  {
    id: 2,
    img: images.aboutPic,
    url: "ORGANISE",
  },
  {
    id: 3,
    img: images.incentivePic,
    url: "CONDUCT",
  },
  {
    id: 4,
    img: images.aboutPic,
    url: "COORDINATE",
  },
];

const data = {
  faqDB,
  expectationDB,
  incentivesDB,
  whycaDB,
  contactsDB,
  sponsorsDB1,
  sponsorsDB2,
};

export default data;
