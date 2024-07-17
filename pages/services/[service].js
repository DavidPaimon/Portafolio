import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const serviceDetails = {
  'database-design': {
    title: <span className='text-accent'>Diseño y Desarrollo de Bases de Datos</span>,
    description: `
      Ofrezco servicios de creación, gestión y estructuración de bases de datos, asegurando un rendimiento óptimo y una organización eficiente de los datos.

      Tecnologías y Herramientas:
      - SQL (MySQL, PostgreSQL): Bases de datos relacionales para gestión estructurada de datos.
      - NoSQL (MongoDB): Bases de datos no relacionales para aplicaciones flexibles y escalables.

      Servicios Incluidos:
      1. Diseño de bases de datos: Estructuración de datos eficiente.
      2. Optimización de rendimiento: Mejoras en consultas y operaciones.
      3. Mantenimiento: Servicios continuos para asegurar el rendimiento óptimo.

      Beneficios:
      - Bases de datos seguras y escalables.
      - Soluciones personalizadas según las necesidades del cliente.
      - Mejora en la eficiencia de manejo de datos.
    `,
  },
  'api-development': {
    title: <span className='text-accent'>Desarrollo de API´s</span>,
    description: `
      Desarrollo APIs RESTful robustas para facilitar la comunicación entre el frontend y el servidor, garantizando seguridad.

      Tecnologías y Herramientas:
      - Node.js, Express: Desarrollo de servidores eficientes.
      - Python, Django: Frameworks para construir APIs robustas.
      - Swagger: Documentación de API interactiva.

      Servicios Incluidos:
      1. Desarrollo de API RESTful: Interacción eficiente entre sistemas.
      2. Seguridad: Implementación de autenticación y autorización.
      3. Documentación: Creación de documentación detallada y útil.

      Beneficios:
      - APIs seguras y fáciles de usar.
      - Integración sencilla con otros sistemas.
      - Documentación clara para desarrolladores.
    `,
  },
  'web-development': {
    title: <span className='text-accent'>Desarrollo Web</span>,
    description: `
      En el Desarrollo Web, me especializo en la creación de sitios web robustos y visualmente atractivos, utilizando tecnologías modernas y las mejores prácticas. Mi experiencia abarca tanto el desarrollo frontend como backend, lo que me permite ofrecer soluciones completas y personalizadas para cada una de tus ideas.

      Tecnologías y Herramientas:
      - Frontend: HTML, CSS, JavaScript, React, NextJs, Redux, Bootstrap, Tailwind CSS.
      - Backend: Node.js, Express, Python, Django.
      - Bases de Datos: SQL (MySQL, PostgreSQL), NoSQL (MongoDB).

      Servicios Incluidos:
      1. Desarrollo Frontend: Diseño y desarrollo de interfaces de usuario interactivas y responsivas.
      2. Desarrollo Backend: Creación de API RESTful, gestión de bases de datos, sistemas de autenticación.
      3. Mantenimiento y Soporte: Actualización y mantenimiento continuo del sitio web.
      4. Integración de Servicios Externos: Conexión con APIs y servicios externos.
      5. Despliegue y Hosting: Configuración y despliegue del sitio web en servidores de producción.
    `,
  },
  'authentication': {
    title: <span className='text-accent'>Servicios de autenticación</span>,
    description: `
      Implemento sistemas de autenticación y autorización para la gestión segura de usuarios y datos.

      Tecnologías y Herramientas:
      - JWT, Auth0: Protocolos de autenticación estándar.
      - LDAP, Active Directory: Integración con servicios de directorio.

      Servicios Incluidos:
      1. Autenticación de usuarios: Registro y login seguro.
      2. Autorización: Control de acceso basado en roles.
      3. Integración con terceros: Uso de proveedores de identidad externos.

      Beneficios:
      - Seguridad mejorada.
      - Gestión eficiente de usuarios.
      - Flexibilidad en la integración de proveedores de identidad.
    `,
  },
  'external-integration': {
    title: <span className='text-accent'>Integración con servicios externos</span>,
    description: `
      Conecto tu aplicación con servicios y APIs externas como pagos y mailing, asegurando una integración fluida y eficiente.

      Tecnologías y Herramientas:
      - APIs de terceros: Stripe, PayPal, SendGrid, entre otras.
      - Webhooks: Comunicación en tiempo real con servicios externos.

      Servicios Incluidos:
      1. Integración de pagos: Implementación de pasarelas de pago seguras.
      2. Servicios de mailing: Automatización de correos electrónicos.
      3. Webhooks: Configuración para recibir eventos en tiempo real.

      Beneficios:
      - Integraciones rápidas y seguras.
      - Automatización de procesos.
      - Mejora en la funcionalidad y alcance de la aplicación.
    `,
  },
  'maintenance-support': {
    title: <span className='text-accent'>Mantenimiento y soporte</span>,
    description: `
      Ofrezco servicios continuos de actualización y mantenimiento del backend para garantizar su rendimiento y seguridad.

      Servicios Incluidos:
      1. Mantenimiento preventivo: Actualizaciones periódicas y monitoreo.
      2. Resolución de incidencias: Soporte técnico 24/7.
      3. Optimización de rendimiento: Mejoras continuas en la eficiencia.

      Beneficios:
      - Operación sin interrupciones.
      - Soporte rápido y efectivo.
      - Mejoras continuas en seguridad y rendimiento.
    `,
  },
  'server-management': {
    title: <span className='text-accent'>Gestión y despliegue de servidores en producción</span>,
    description: `
      Proveo configuración y despliegue en producción de servidores, asegurando estabilidad y rendimiento óptimo.

      Tecnologías y Herramientas:
      - AWS, Azure, Google Cloud: Plataformas de nube líderes.
      - Docker, Kubernetes: Contenerización y orquestación.

      Servicios Incluidos:
      1. Configuración de servidores: Preparación de entornos de producción.
      2. Despliegue continuo: Implementación de CI/CD.
      3. Monitoreo y administración: Supervisión continua de servidores.

      Beneficios:
      - Escalabilidad.
      - Despliegue eficiente.
      - Alta disponibilidad y rendimiento.
    `,
  },
  'design': {
    title: <span className='text-accent'>Diseño UI/UX</span>,
    description: `
      Ofrezco servicios de diseño UI/UX para crear experiencias de usuario atractivas y funcionales que se alinean con los objetivos de tus apps y las expectativas de tus usuarios.

      Tecnologías y Herramientas:
      - Figma: Herramientas de diseño para crear interfaces visualmente atractivas.

      Servicios Incluidos:
      1. Prototipado: Creación de prototipos interactivos para probar conceptos de diseño.
      2. Diseño de Interfaces: Desarrollo de interfaces de usuario intuitivas y atractivas.
      3. Pruebas de Usabilidad: Evaluación y mejora de la experiencia del usuario a través de pruebas.

      Beneficios:
      - Experiencia de usuario mejorada.
      - Interfaces atractivas y funcionales.
      - Aumento de la satisfacción del usuario.
    `,
  },
};

const ServicePage = () => {
  const router = useRouter();
  const { service } = router.query;
  const serviceDetail = serviceDetails[service];

  useEffect(() => {
    const handleResize = () => {
      const container = document.getElementById('service-container');
      if (window.innerWidth <= 768) {
        container.style.overflowY = 'auto';
        container.style.overflowX = 'hidden';
        container.style.maxHeight = '100vh';
        container.style.paddingRight = '1rem';
        container.style.paddingLeft = '1rem';
      } else {
        container.style.overflowY = 'initial';
        container.style.overflowX = 'initial';
        container.style.maxHeight = 'initial';
        container.style.paddingRight = 'initial';
        container.style.paddingLeft = 'initial';
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!serviceDetail) {
    return <p>Loading...</p>;
  }

  return (
    <div id="service-container" className="bg-primary/30 h-full py-32">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4">{serviceDetail.title}</h1>
          <p className="text-lg whitespace-pre-line">{serviceDetail.description}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicePage;
