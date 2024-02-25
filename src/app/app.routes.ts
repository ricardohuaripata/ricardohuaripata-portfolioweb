import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { Project } from './interfaces/project';

const projects: Project[] = [
  {
    "id": "ogs-ecommerce",
    "title": "Og's E-commerce",
    "summary": "Este proyecto se trata de un ecommerce completo con backend y frontend que ofrece todas las funcionalidades que caracterizan a un ecommerce. Permite gestionar productos, pedidos, usuarios y autenticación, entre otras características.",
    "description": "Este proyecto está basado en la página <a href='https://www.ogsbrand.com/es/' target='_blank'>https://www.ogsbrand.com</a>, gran parte del diseño de su interfaz de usuario ha sido copiada con el propósito de omitir la fase de branding y diseño, pudiendo así centrarse en el desarrollo de la interfaz a nivel de comunicación entre cliente y servidor. <br><br>Como backend tenemos una API RESTful desarrollada con Spring Boot que ofrece funcionalidades para un ecommerce de ropa. Permite gestionar productos, pedidos, usuarios y autenticación, entre otras características. <br>En cuanto frontend se usó Angular y Bootstrap, junto con bibliotecas como ngx-translate para el multilenguaje y PrimeNG y SweetAlert2 para facilitar el desarrollo de la interfaz.",
    "tags": [
      "RESTful API",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "JWT",
      "Amazon S3",
      "Stripe",
      "Java Mail Sender",
      "Lombok",
      "PostgreSQL",
      "Angular",
      "Bootstrap"
    ],
    "githubRepoUrl": "https://github.com/ricardohuaripata/ecommerce-frontend",
    "thumbnail": "assets/images/projects/project2/project2-thumbnail.webp",
    "demoVideoUrl": "https://res.cloudinary.com/dmravgyts/video/upload/v1707159228/E-commerce-Demo_gusl7r.mp4",
    "startDate": "oct. 2023",
    "endDate": "ene. 2024",
    "features": "<ul><li>🛍 Catalogo de productos</li><li>🛒 Carrito de compras</li><li>💳 Pasarela de pago</li><li>🔒 Autenticación y registro de usuarios</li><li>📝 Gestión de la información del usuario</li><li>📋 Historial de pedidos</li><li>🔑 Recuperación de la contraseña</li><li>📫 Notificaciones por correo electrónico</li><li>📱 Responsive design</li><li>🌍 Multilenguaje</li></ul>"

  },
  {
    "id": "ashon-ecommerce",
    "title": "ASHON E-commerce",
    "summary": "Proyecto final de ciclo en el que se desarrolló aplicación web de arquitectura cliente-servidor que consiste en una tienda online para la venta de ropa para hombres y mujeres. La aplicación busca ofrecer una experiencia de usuario excepcional al proporcionar una interfaz atractiva y moderna, garantizando una navegación eficiente por los productos y una experiencia de compra intuitiva.",
    "description": "Proyecto final de ciclo en el que se desarrolló aplicación web de arquitectura cliente-servidor que consiste en una tienda online para la venta de ropa para hombres y mujeres. La aplicación busca ofrecer una experiencia de usuario excepcional al proporcionar una interfaz atractiva y moderna, garantizando una navegación eficiente por los productos y una experiencia de compra intuitiva. <br><br>En cuanto a las tecnologías utilizadas, se utilizó Angular junto con HTML, CSS y JavaScript para el desarrollo de la interfaz gráfica. Para el desarrollo del servidor y de la API, se utilizó Node.js con Express.js, se implementó una base de datos no relacional con MongoDB y se implementaron librerías como Cloudinary para el almacenamiento en la nube de imagenes de productos, OAuth2 para el inicio de sesión con Google, la librería Nodemailer junto con OAuth2 para el enviar correos electrónicos de verificación o de restablecimiento de contraseñas y la librería de Stripe para el procesamiento de pagos en línea. Además, <span class='shiny-text'>se estableció una metodología ágil para el desarrollo del proyecto</span>, lo que permitió la entrega incremental de las funcionalidades. Finalmente, se llevó a cabo el despliegue de la aplicación utilizando servicios de terceros como Heroku para el alojamiento del servidor y AWS Amplify para el alojamiento de la aplicación cliente.",
    "tags": [
      "RESTful API",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Stripe",
      "Cloudinary",
      "Nodemailer",
      "Angular",
      "Bootstrap"
    ],
    "githubRepoUrl": "https://github.com/ricardohuaripata/ASHON-Ecommerce-Client",
    "thumbnail": "assets/images/projects/project1/project1-thumbnail.webp",
    "demoVideoUrl": "https://res.cloudinary.com/dmravgyts/video/upload/v1708714309/ASHON-Demo-Add-to-cart_gr4zjr.mp4",
    "startDate": "mar. 2023 - jun. 2023",
    "endDate": "jun. 2023",
    "features": "<ul><li>🛍 Catalogo de productos</li><li>🛒 Carrito de compras</li><li>💳 Pasarela de pago</li><li>🔒 Autenticación y registro de usuarios</li><li>📝 Gestión de la información del usuario</li><li>📋 Historial de pedidos</li><li>🔑 Recuperación de la contraseña</li><li>📫 Notificaciones por correo electrónico</li><li>📱 Responsive design</li></ul>"

  }
]

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Ricardo Huaripata 👨‍💻 | Full Stack Developer',
    data: { projects: projects },
  },
  {
    path: 'projects/' + projects[0].id,
    component: ProjectPageComponent,
    title: 'Ricardo Huaripata 👨‍💻 | ' + projects[0].title,
    data: { project: projects[0] },
  },
  {
    path: 'projects/' + projects[1].id,
    component: ProjectPageComponent,
    title: 'Ricardo Huaripata 👨‍💻 | ' + projects[1].title,
    data: { project: projects[1] },
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
