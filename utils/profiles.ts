import { profile } from "~/interface/profile";

export const Profiles: profile = {
  name: 'Rizki Khair',
  profession: 'Frontend Web Developer',
  works: [
    {
      id: 1,
      type_id: [3, 4],
      name: 'alien syndrome',
      url: 'https://github.com/rizuki4658/AlienStoreHTML',
      img: 'train-one.jpg'
    },
    {
      id: 2,
      type_id: [3, 4],
      name: 'michelin',
      url: 'https://github.com/rizuki4658/rizkikhairmichelin.github.io',
      img: 'train-two.jpg'
    },
    {
      id: 3,
      type_id: [2],
      name: 'example vue',
      url: 'https://github.com/rizuki4658/example-vue',
      img: 'train-three.jpg'
    },
    {
      id: 4,
      type_id: [2],
      name: 'nuxt-porto',
      url: 'https://github.com/rizuki4658/vue-porto',
      img: 'train-four.png'
    },
    {
      id: 5,
      type_id: [1],
      name: 'react-porto',
      url: 'https://github.com/rizuki4658/react-porto',
      img: 'train-five.jpg'
    }
  ],
  experiences: [
    {
      id: 1,
      name: 'Olsera',
      url: 'https://www.linkedin.com/company/olsera',
      time: '2019 Agt - 2021 Mar',
      img: 'olsera.png',
      jobdesk: 'As a front end developer, my job is to make the appearance of the website looks good and matches the design from the UI / UX team, ensuring the website looks neat when cross-browser. To handling my job and make it easier, I use nodes js as a programming language from the server-side, Vue Js framework to help make websites more interactive, and additional packages for appropriate to the design.'
    },
    {
      id: 2,
      name: 'Devixel',
      url: 'https://www.linkedin.com/company/devixel/about/',
      time: '2021 Agt - Present',
      img: 'devixel.png',
      jobdesk: 'Implement designs that have been done by the UI team, then create, test, and optimize UI/UX products, this includes product compatibility and functionality. Library using Vuejs v3.'
    },
    {
      id: 3,
      name: 'Popaket',
      url: 'https://www.linkedin.com/company/popaket/about/',
      time: '2021 Apr - 2021 Agt',
      img: 'popaket.png',
      jobdesk: 'My responsibility in this company is to implement designs that have been done by the UI team, then create, test, and optimize UI/UX products, this includes product compatibility and functionality. The important experience that I got from my current job desk is to know more about the git command line and how to optimize the use of git for work efficiency, then I know how to use Nuxt.js and last now I know what is meant of TypeScript.'
    }
  ],
  skills: [
    { icon: 'photoshop', name: 'adobe photoshop', value: 55 },
    { icon: 'xd', name: 'adobe xd', value: 45 },
    { icon: 'ai', name: 'adobe illustrator', value: 30 },
    { icon: 'html5', name: 'HTML', value: 90 },
    { icon: 'css3', name: 'CSS', value: 90 },
    { icon: 'js', name: 'JavaScript', value: 80 },
    { icon: 'nodejs', name: 'NodeJS', value: 50 },
    { icon: 'mysql', name: 'MySQL', value: 70 },
    { icon: 'php', name: 'PHP', value: 60 },
    { icon: 'vue', name: 'Vue', value: 80 },
    { icon: 'react', name: 'React', value: 70 },
    { icon: 'laravel', name: 'Laravel', value: 60 },
    { icon: 'github', name: 'Github', value: 50 },
    { icon: 'typescript', name: 'TypeScript', value: 50 }
  ]
}
