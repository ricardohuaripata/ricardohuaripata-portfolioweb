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
    thumbnail: 'https://res.cloudinary.com/dmravgyts/image/upload/v1728236435/projects/ogs-ecommerce/project2-thumbnail-min_jnhppq.png',
    gallery: [
      {
        src: 'https://res.cloudinary.com/dmravgyts/image/upload/v1728238996/projects/ogs-ecommerce/photos/828_1x_shots_so_afhqrq-min_fxpyrm.png',
        width: 1920,
        height: 1280,
      },
      {
        src: 'https://res.cloudinary.com/dmravgyts/image/upload/v1728238995/projects/ogs-ecommerce/photos/701shots_so_rmobsq-min_hzogzo.png',
        width: 1920,
        height: 1280,
      },
      {
        src: 'https://res.cloudinary.com/dmravgyts/image/upload/v1728238988/projects/ogs-ecommerce/photos/94shots_so_eyqgie-min_rrpnru.png',
        width: 1920,
        height: 1280,
      },
      {
        src: 'https://res.cloudinary.com/dmravgyts/image/upload/v1728238990/projects/ogs-ecommerce/photos/192_1x_shots_so_rkvnpx-min_user85.png',
        width: 1920,
        height: 1280,
      },
      {
        src: 'https://res.cloudinary.com/dmravgyts/image/upload/v1728238988/projects/ogs-ecommerce/photos/170_1x_shots_so_wfzuzo-min_tfdos6.png',
        width: 1920,
        height: 1280,
      },
      {
        src: 'https://res.cloudinary.com/dmravgyts/image/upload/v1728238993/projects/ogs-ecommerce/photos/324_1x_shots_so_dajw6r-min_wgjghj.png',
        width: 1920,
        height: 1280,
      },
    ],
    videos: [
      {
        title: 'Añadir al carrito',
        thumbnail:
          'https://res.cloudinary.com/dmravgyts/image/upload/v1728238361/projects/ogs-ecommerce/photos/260_1x_shots_so_min_d9coe0.png',
        link: 'https://res.cloudinary.com/dmravgyts/video/upload/v1724008937/projects/ogs-ecommerce/videos/E-commerce-Demo_a6fah7.mp4',
      },
      {
        title: 'Verificación de email',
        thumbnail:
          'https://res.cloudinary.com/dmravgyts/image/upload/v1728238358/projects/ogs-ecommerce/photos/626_2x_shots_so_min_qsq8z2.png',
        link: 'https://res.cloudinary.com/dmravgyts/video/upload/v1723991809/projects/ogs-ecommerce/videos/E-commerce_-_Email_verification_brjysd.mp4',
      },
      {
        title: 'Cuenta del usuario',
        thumbnail:
          'https://res.cloudinary.com/dmravgyts/image/upload/v1728238362/projects/ogs-ecommerce/photos/590_2x_shots_so_min_hhrieo.png',
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
        description: 'label.project.tech.angular.description',
      },
      {
        name: 'Bootstrap',
        description: 'label.project.tech.bootstrap.description',
      },
      {
        name: 'Spring Boot',
        description: 'label.project.tech.springboot.description',
      },
      {
        name: 'PostgreSQL',
        description: 'label.project.tech.postgresql.description',
      },
      {
        name: 'Stripe',
        description: 'label.project.tech.stripe.description',
      },
      {
        name: 'Amazon S3',
        description: 'label.project.tech.amazon-s3.description',
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
    thumbnail: 'https://res.cloudinary.com/dmravgyts/image/upload/v1728236749/projects/ashon-ecommerce/project1-thumbnail-min_xdmmaz.png',
    gallery: [
      {
        src: 'https://res.cloudinary.com/dmravgyts/image/upload/v1728240483/projects/ashon-ecommerce/photos/981_1x_shots_so_min_ubzrls.png',
        width: 1920,
        height: 1280,
      },
      {
        src: 'https://res.cloudinary.com/dmravgyts/image/upload/v1728240476/projects/ashon-ecommerce/photos/51_1x_shots_so_min_nfxbmu.png',
        width: 1920,
        height: 1280,
      },
      {
        src: 'https://res.cloudinary.com/dmravgyts/image/upload/v1728240475/projects/ashon-ecommerce/photos/6shots_so-min_exqgfo.png',
        width: 1920,
        height: 1280,
      },
      {
        src: 'https://res.cloudinary.com/dmravgyts/image/upload/v1728240482/projects/ashon-ecommerce/photos/773_1x_shots_so_min_uhtw18.png',
        width: 1920,
        height: 1280,
      },
      {
        src: 'https://res.cloudinary.com/dmravgyts/image/upload/v1728240480/projects/ashon-ecommerce/photos/654_1x_shots_so_min_it0qbg.png',
        width: 1920,
        height: 1280,
      },
      {
        src: 'https://res.cloudinary.com/dmravgyts/image/upload/v1728240478/projects/ashon-ecommerce/photos/224_1x_shots_so_min_yy7xuv.png',
        width: 1920,
        height: 1280,
      },
    ],
    videos: [
      {
        title: 'Añadir al carrito',
        thumbnail:
          'https://res.cloudinary.com/dmravgyts/image/upload/v1728239665/projects/ashon-ecommerce/photos/263_1x_shots_so_min_cs1wgh.png',
        link: 'https://res.cloudinary.com/dmravgyts/video/upload/v1708714309/projects/ashon-ecommerce/videos/ASHON-Demo-Add-to-cart_gr4zjr.mp4',
      },
      {
        title: 'Google login',
        thumbnail:
          'https://res.cloudinary.com/dmravgyts/image/upload/v1728239664/projects/ashon-ecommerce/photos/477_1x_shots_so_min_ry0xbs.png',
        link: 'https://res.cloudinary.com/dmravgyts/video/upload/v1723992581/projects/ashon-ecommerce/videos/ASHON_Store_-_Google_Login_Hecho_con_Clipchamp_tjier7.mp4',
      },
      {
        title: 'Verificación de email',
        thumbnail:
          'https://res.cloudinary.com/dmravgyts/image/upload/v1728239667/projects/ashon-ecommerce/photos/716_1x_shots_so_min_ly9ndd.png',
        link: 'https://res.cloudinary.com/dmravgyts/video/upload/v1723991572/projects/ashon-ecommerce/videos/ashon-email-verification_qefr5b.mp4',
      },
    ],
    startDate: '03/2023',
    endDate: '06/2023',
    features: 'label.project.ashon-ecommerce.features',
    link: 'projects/ashon-ecommerce',
    techStack: [
      {
        name: 'Angular',
        description: 'label.project.tech.angular.description',
      },
      {
        name: 'Bootstrap',
        description: 'label.project.tech.bootstrap.description',
      },
      {
        name: 'Node.js',
        description: 'label.project.tech.nodejs.description',
      },
      {
        name: 'Express.js',
        description: 'label.project.tech.expressjs.description',
      },
      {
        name: 'MongoDB',
        description: 'label.project.tech.mongodb.description',
      },
      {
        name: 'Stripe',
        description: 'label.project.tech.stripe.description',
      },
      {
        name: 'Cloudinary',
        description: 'label.project.tech.cloudinary.description',
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
    thumbnail: 'https://res.cloudinary.com/dmravgyts/image/upload/v1728237266/projects/4f1p/project3-thumbnail-min_gghzxx.png',
    link: 'https://github.com/ricardohuaripata/4-fotos-1-palabra',
  },
  {
    id: 'cinesa-web',
    title: 'Cinesa',
    summary: 'label.project.cinesa-web.summary',
    category: 'Frontend',
    tags: ['Angular', 'Tailwind CSS', 'Flowbite', 'Swiper'],
    githubRepoUrl: 'https://github.com/ricardohuaripata/cinesa-web',
    thumbnail: 'https://res.cloudinary.com/dmravgyts/image/upload/v1728236952/projects/cinesa/project4-thumbnail-min_u2sgza.png',
    link: 'https://cinesaweb.netlify.app/',
  },
  {
    id: 'vanquish-fitness',
    title: 'Vanquish Fitness',
    summary: 'label.project.vanquish-fitness.summary',
    category: 'Frontend',
    tags: ['Angular', 'Tailwind CSS', 'Flowbite'],
    githubRepoUrl: 'https://github.com/ricardohuaripata/vanquish-fitness',
    thumbnail: 'https://res.cloudinary.com/dmravgyts/image/upload/v1728237151/projects/vqfit/project5-thumbnail-min_ia5c6n.png',
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
