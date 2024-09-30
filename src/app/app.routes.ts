import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { Project } from './interfaces/project';

const projects: Project[] = [
  {
    id: 'ogs-ecommerce',
    title: "Og's E-commerce",
    summary: 'label.project.ogs-ecommerce.summary',
    description: 'label.project.ogs-ecommerce.description',
    category: 'Fullstack',
    tags: [
      'RESTful API',
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'JWT',
      'Amazon S3',
      'Stripe',
      'Java Mail Sender',
      'Lombok',
      'PostgreSQL',
      'Angular',
      'Bootstrap',
    ],
    githubRepoUrl: 'https://github.com/ricardohuaripata/ecommerce-frontend',
    thumbnail: 'assets/images/projects/project2/project2-thumbnail.webp',
    videos: [
      {
        title: 'Añadir al carrito',
        thumbnail:
          'https://res.cloudinary.com/dmravgyts/image/upload/v1724016032/projects/ogs-ecommerce/photos/ogs-ecommerce-add-to-cart_f6v3ga.png',
        link: 'https://res.cloudinary.com/dmravgyts/video/upload/v1724008937/projects/ogs-ecommerce/videos/E-commerce-Demo_a6fah7.mp4',
      },
      {
        title: 'Verificación de email',
        thumbnail:
          'https://res.cloudinary.com/dmravgyts/image/upload/v1724002845/projects/ogs-ecommerce/photos/ogs-ecommerce-verify-email_nq8qen.png',
        link: 'https://res.cloudinary.com/dmravgyts/video/upload/v1723991809/projects/ogs-ecommerce/videos/E-commerce_-_Email_verification_brjysd.mp4',
      },
      {
        title: 'Cuenta del usuario',
        thumbnail:
          'https://res.cloudinary.com/dmravgyts/image/upload/v1724002742/projects/ogs-ecommerce/photos/ogs-ecommerce-profile_qgbbhn.png',
        link: 'https://res.cloudinary.com/dmravgyts/video/upload/v1724001903/projects/ogs-ecommerce/videos/E-commerce_-_Account_ultppi.mp4',
      },
    ],
    startDate: '10/2023',
    endDate: '01/2024',
    features: 'label.project.ogs-ecommerce.features',
    link: 'projects/ogs-ecommerce',
    techStack: [
      {
        name: 'Angular',
        description: 'Angular es un framework de desarrollo front-end desarrollado y mantenido por Google. Se ha utilizado en este proyecto para construir la interfaz de usuario dinámica y interactiva.',
      },
      {
        name: 'Bootstrap',
        description: 'Bootstrap es un marco de diseño front-end que facilita el diseño y desarrollo de interfaces web responsivas y atractivas. Se ha integrado en el proyecto para mejorar la apariencia y la experiencia del usuario en diferentes dispositivos.',
      },
      {
        name: 'Spring Boot',
        description: 'Spring es un framework de desarrollo de aplicaciones Java que proporciona una amplia gama de funcionalidades para el desarrollo de aplicaciones empresariales. En este proyecto, se ha utilizado la plataforma Spring, específicamente Spring Boot, para la creación eficiente de servicios RESTful y la gestión del backend.',
      },
      {
        name: 'PostgreSQL',
        description: 'PostgreSQL es un sistema de gestión de bases de datos relacional de código abierto y altamente extensible. Ha sido empleado como el sistema de gestión de base de datos principal para almacenar y recuperar datos de manera eficiente en el proyecto.'
      },
      {
        name: 'Stripe',
        description: 'Stripe es una plataforma de procesamiento de pagos en línea que permite a los comercios recibir pagos de forma segura y eficiente. Se ha utilizado en este proyecto para implementar la pasarela de pago y gestionar los pagos de los usuarios.',
      },
      {
        name: 'Amazon S3',
        description: 'Amazon S3 es un servicio de almacenamiento de objetos que permite almacenar y recuperar datos de manera eficiente en el proyecto.',
      },
    ],
  },
  {
    id: 'ashon-ecommerce',
    title: 'ASHON E-commerce',
    summary: 'label.project.ashon-ecommerce.summary',
    description: 'label.project.ashon-ecommerce.description',
    category: 'Fullstack',
    tags: [
      'RESTful API',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Stripe',
      'Cloudinary',
      'Nodemailer',
      'Angular',
      'Bootstrap',
    ],
    githubRepoUrl: 'https://github.com/ricardohuaripata/ASHON-Ecommerce-Client',
    thumbnail: 'assets/images/projects/project1/project1-thumbnail.webp',
    videos: [
      {
        title: 'Añadir al carrito',
        thumbnail:
          'https://res.cloudinary.com/dmravgyts/image/upload/v1724000678/projects/ashon-ecommerce/photos/ashon-ecommerce-add-to-cart_dhvfx7.png',
        link: 'https://res.cloudinary.com/dmravgyts/video/upload/v1708714309/projects/ashon-ecommerce/videos/ASHON-Demo-Add-to-cart_gr4zjr.mp4',
      },
      {
        title: 'Verificación de email',
        thumbnail:
          'https://res.cloudinary.com/dmravgyts/image/upload/v1724000976/projects/ashon-ecommerce/photos/ashon-ecommerce-mobile-home_gqn6zl.png',
        link: 'https://res.cloudinary.com/dmravgyts/video/upload/v1723991572/projects/ashon-ecommerce/videos/ashon-email-verification_qefr5b.mp4',
      },
      {
        title: 'Google login',
        thumbnail:
          'https://res.cloudinary.com/dmravgyts/image/upload/v1724001431/projects/ashon-ecommerce/photos/ashon-ecommerce-google-login_vypsoz.png',
        link: 'https://res.cloudinary.com/dmravgyts/video/upload/v1723992581/projects/ashon-ecommerce/videos/ASHON_Store_-_Google_Login_Hecho_con_Clipchamp_tjier7.mp4',
      },
    ],
    startDate: '03/2023',
    endDate: '06/2023',
    features: 'label.project.ashon-ecommerce.features',
    link: 'projects/ashon-ecommerce',
    techStack: [
      {
        name: 'Angular',
        description: 'Angular es un framework de desarrollo front-end desarrollado y mantenido por Google. Se ha utilizado en este proyecto para construir la interfaz de usuario dinámica y interactiva.',
      },
      {
        name: 'Bootstrap',
        description: 'Bootstrap es un marco de diseño front-end que facilita el diseño y desarrollo de interfaces web responsivas y atractivas. Se ha integrado en el proyecto para mejorar la apariencia y la experiencia del usuario en diferentes dispositivos.',
      },
      {
        name: 'Node.js',
        description: 'Node.js es un entorno de ejecución de JavaScript que permite ejecutar código JavaScript en el servidor. Se ha utilizado en este proyecto para construir la API RESTful y gestionar el backend.',
      },
      {
        name: 'Express.js',
        description: 'Express.js es un framework de Node.js que facilita el desarrollo de aplicaciones web y APIs RESTful. Se ha utilizado en este proyecto para construir la API RESTful y gestionar el backend.',
      },
      {
        name: 'MongoDB',
        description: 'MongoDB es una base de datos NoSQL que utiliza un modelo de datos orientado a documentos. Se ha utilizado en este proyecto para almacenar y recuperar datos de manera eficiente en el backend.',
      },
      {
        name: 'Stripe',
        description: 'Stripe es una plataforma de procesamiento de pagos en línea que permite a los comercios recibir pagos de forma segura y eficiente. Se ha utilizado en este proyecto para implementar la pasarela de pago y gestionar los pagos de los usuarios.',
      },
      {
        name: 'Cloudinary',
        description: 'Cloudinary es una plataforma de gestión de imágenes que permite a los desarrolladores almacenar, optimizar y servir imágenes de manera eficiente. Se ha utilizado en este proyecto para almacenar y servir las imágenes de los productos.',
      },
      
    ],
  },
  {
    id: '4-pics-1-word',
    title: '4 Fotos 1 Palabra',
    summary: 'label.project.4-pics-1-word.summary',
    category: 'Fullstack',
    tags: ['Angular', 'Bootstrap', 'Supabase'],
    githubRepoUrl: 'https://github.com/ricardohuaripata/4-fotos-1-palabra',
    thumbnail: 'assets/images/projects/project3/project3-thumbnail.webp',
    link: 'https://4-fotos-1-palabra.vercel.app/',
  },
  {
    id: 'cinesa-web',
    title: 'Cinesa',
    summary: 'label.project.cinesa-web.summary',
    category: 'Frontend',
    tags: ['Angular', 'Tailwind CSS', 'Flowbite', 'Swiper'],
    githubRepoUrl: 'https://github.com/ricardohuaripata/cinesa-web',
    thumbnail: 'assets/images/projects/project4/project4-thumbnail.png',
    link: 'https://cinesa-web.vercel.app/',
  },
  {
    id: 'vanquish-fitness',
    title: 'Vanquish Fitness',
    summary: 'label.project.vanquish-fitness.summary',
    category: 'Frontend',
    tags: ['Angular', 'Tailwind CSS', 'Flowbite'],
    githubRepoUrl: 'https://github.com/ricardohuaripata/vanquish-fitness',
    thumbnail: 'assets/images/projects/project5/project5-thumbnail.png',
    link: 'https://vqfit.netlify.app/',
  },
];

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: { projects: projects },
  },
  {
    path: 'projects/ogs-ecommerce',
    component: ProjectPageComponent,
    data: { project: projects[0] },
  },
  {
    path: 'projects/ashon-ecommerce',
    component: ProjectPageComponent,
    data: { project: projects[1] },
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
