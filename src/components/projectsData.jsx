import ParlorThumb from '../assets/parlor/ParlorThumb.png';
import RandomCodeGenerator from '../assets/RandomCodeGenerator.png';
import SLAB from '../assets/SLAB.svg';
import DopeSouls from '../assets/dopesouls.png';
import ECommerceBackend from '../assets/ECommerceBackend.png';
import TaskList from '../assets/TaskList.png';
import README from '../assets/README.png';
import bootmate from '../assets/bootmate.png';


const projectsData = {
    categories: ['parlor', 'ucf', 'caseStudy', 'inProgress', 'youtube'],
    projects: [
      {
        id: 1,
        title: 'Parlor Ski',
        category: 'parlor',
        image: ParlorThumb,
        link: '/custom-ski-designs',
        description: 'Custom Ski Graphics',
        status: '',
      },
      {
        id: 2,
        title: 'Random Code Generator',
        category: 'ucf',
        image: RandomCodeGenerator,
        link: 'https://crado7.github.io/Random-Password-Generator/',
        description: 'JavaScript Project',
        status: '',
      },
      {
        id: 3,
        title: 'SLAB',
        category: 'caseStudy',
        image: SLAB,
        link: 'images/projects/project-6.jpg',
        description: 'Surf Lifestyle & Healthy Living Blog',
        status: 'Case Study',
      },
      {
        id: 4,
        title: 'Dope Souls',
        category: 'caseStudy',
        image: DopeSouls,
        link: 'https://crado7.github.io/Dope-Souls/',
        description: 'E-Commerce Landing Page',
        status: 'Case Study',
      },
      {
        id: 5,
        title: 'E-Commerce Backend',
        category: 'ucf',
        image: ECommerceBackend,
        link: 'https://youtu.be/aoeAmIawO-g',
        description: 'Insomnia Backend Project',
        status: '',
      },
      {
        id: 6,
        title: 'Task List',
        category: 'ucf',
        image: TaskList,
        link: 'https://floating-reaches-02785-c3d3bbac3309.herokuapp.com',
        description: 'Express.js Project',
        status: '',
      },
      {
        id: 7,
        title: 'BootMate',
        category: 'inProgress',
        image: bootmate,
        description: 'MERN Stack Project',
        status: 'In Progress',
      },
      {
        id: 8,
        title: 'Command Line README Generator',
        category: 'ucf',
        image: README,
        link: 'https://www.youtube.com/watch?v=isLLp0w5kI0',
        description: 'Node.js Project',
        video: true,
        status: '',
      },
    ],
  };
  
  export default projectsData;