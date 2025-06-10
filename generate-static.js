const ejs = require("ejs");
const fs = require("fs");

const data = {
  title: "Weeb",
  header: {
    logo: "weeb",
    menu_list: ["About Us", "Solutions", "Pricing", "Resources"],
    button_list: [
      {
        class:
          "actions-header__button _button _button--min _button--transparent",
        label: "Log In",
      },
      {
        class: "actions-header__button _button",
        label: "Join Now",
      },
    ],
  },
  hero: {
    title: `
       Design
        <span class="block-header__line block-header__line--bottom">Faster</span
        > <span class="block-header__purple">&</span
        > <span class="block-header__line block-header__line--top">Better</span>
    `,
    text: `Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet, dui sit suspendisse.`,
    button_list: [
      {
        class: 'block-header__button _button',
        label: 'Join Now'
      },
      {
        class: 'block-header__button _button _button--white-border',
        label: 'View Demo'
      }
    ],
    centered: true
  },
  companies: {
    title: 'Join Leading Companies',
    logos: [
      { src: './img/companies/Group 2.svg', alt: 'company-logo-1'},
      { src: './img/companies/Group 3.svg', alt: 'company-logo-2'},
      { src: './img/companies/Group 4.svg', alt: 'company-logo-3'},
      { src: './img/companies/Group 5.svg', alt: 'company-logo-4'},
      { src: './img/companies/Group 6.svg', alt: 'company-logo-5'}
    ]
  },
  discover: {
    title: `<span class="block-header__purple-light">Unlimited</span> <span class="block-header__border"><span>ideas</span></span> for your next great projects`,
    text: `Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc.
            Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.`,
    tag: "discover",
    link: "Discover Ideas",
    image: "./img/discover/discover.svg"

  },
  powerful: {
    tag: "powerful",
    title: "All the tools you can imagine",
    text: `Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. 
    Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.`,
    image: "./img/hero/background.svg"
  },
  customers: {
    title: `<span class="block-header__purple-light">Target</span> <span class="block-header__background"><span>customers</span></span> with our powerful AI kit`,
    text: `Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc.
            Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.`,
    tag: "customers",
    link: "How Targeting Customers Works",
    image: "./img/customers/shapes.svg"
  },
  speed: {
    tag: "speed",
    title: "Work fast, w/o interruptions",
    text: `Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. 
    Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.`,
    image: "./img/hero/background.svg"
  },
  testimonials: {
    tag: "Testimonials",
    title: `<span class="block-header__line block-header__line--bottom">Bigapp</span> got to the next level`,
    link: "View Case Study",
    image: "./img/testimonials/image.svg",
    quotes: {
      text: "“Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”",
      image: "./img/testimonials/user.svg",
      title: "Rwanda Melflor",
      subtitle: "Co-founder Bigapp"
    }
  },
  events: {
    title: "Design events near your",
    link: `<span class="block-header__purple">Explore Events</span>`,
    articles: [
      {
        category: "Design Thinking",
        image: './img/events/picture.jpg',
        title: 'Wild Horse Event',
        link: '<span>Buy Tickets</span>'
      },
      {
        category: "Festival",
        image: './img/events/picture2.jpg',
        title: 'Music & Colors',
        link: '<span>Buy Tickets</span>'
      },
      {
        category: "Bootcamp",
        image: './img/events/picture3.jpg',
        title: 'Happy Father’s Day',
        link: '<span>Buy Tickets</span>'
      }
    ]
  },
  footer: {
    logo: "weeb",
    navigations: [
      {
        title: "PRODUCT",
        list: [
          "Pricing",
          "Overview",
          "Browse",
          "Accessibility",
          "Five"
        ]
      },
      {
        title: "Solutions",
        list: [
          "Brainstorming",
          "Ideation",
          "Wireframing",
          "Research"
        ]
      },
      {
        title: "Resources",
        list: [
          "Help Center",
          "Blog",
          "Tutorials"
        ]
      },
      {
        title: "Company",
        list: [
          "About",
          "Press",
          "Events",
          "Careers"
        ]
      }
    ],
    copyright: "@ 2023 Weeb, Inc. All rights reserved.",
    social_media: [
      "./img/icons/sprite.svg#youtube",
      "./img/icons/sprite.svg#twitter",
      "./img/icons/sprite.svg#facebook",
      "./img/icons/sprite.svg#instagram",
      "./img/icons/sprite.svg#linkedln",
    ]
  }
};

ejs.clearCache()

ejs.renderFile("./views/index.ejs", data, (err, str) => {
  if (err) {
    console.error(err);
    return;
  }
  fs.writeFileSync("./public/index.html", str);
  console.log("Статический HTML сгенерирован в public/index.html");
});
