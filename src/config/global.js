export default {
  global: {
    componenteFormativo:
      'Asesoría y servicio al cliente en el mercado financiero',
    descripcionCurso:
      'El componente formativo permitirá que el aprendiz apropie conocimientos de la asesoría y servicio al cliente, técnicas de comunicación y de ventas, utilidad de las tecnologías de la información y comunicación en el sector financiero, el conocimiento propio de los productos financieros y su estructuración de acuerdo con el perfil del cliente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Consumidor financiero',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipo de consumidor financiero',
            hash: 't1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Características del consumidor financiero ',
            hash: 't1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Asesoría y servicio al cliente ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Proceso de atención y servicio al cliente ',
            hash: 't2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Alternativas de productos y servicios',
            hash: 't2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Técnicas de comunicación',
            hash: 't2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Venta de productos financieros',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Recolección de información',
            hash: 't3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Técnica de ventas',
            hash: 't3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Tecnologías de la información y la comunicación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Producto financiero',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Asesoría y servicio al cliente',
      referencia: 'Palomo, M. (2014). Atención al cliente. Paraninfo.',
      tipo: 'Libro',
      link:
        'https://books.google.es/books?id=WWWgBwAAQBAJ&printsec=frontcover&hl=es&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false',
    },
    {
      tema: 'Proceso de atención y servicio al cliente',
      referencia:
        'Organización Internacional de Normalización [ISO]. (2015). Sistemas de gestión de la calidad — Requisitos (ISO 9001).',
      tipo: 'Norma internacional',
      link: 'https://www.iso.org/obp/ui#iso:std:iso:9001:ed-5:v1:es',
    },
    {
      tema: 'Proceso de atención y servicio al cliente',
      referencia:
        'Ley 1328 de 2009. Por la cual se dictan normas en materia financiera, de seguros, del mercado de valores y otras disposiciones. Julio 15 de 2009. DO. No. 47.411.',
      tipo: 'Ley',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1328_2009.html',
    },
  ],
  glosario: [
    {
      termino: 'Código CIIU',
      significado:
        'Los códigos CIIU describen las actividades económicas de las personas naturales o jurídicas.',
    },
    {
      termino: '<em>E-commerce</em>',
      significado: 'Es el comercio electrónico o comercio por Internet.',
    },
    {
      termino: '<em>Marketing</em>',
      significado:
        'Creación de estrategias dirigidas al consumidor, por medio de las cuales se quiere estimular la compra de un bien o servicio.',
    },
    {
      termino: '<em>Neuromarketing</em>',
      significado:
        'Estrategia del <em>marketing</em> basada en la ciencia y la psicología.',
    },
    {
      termino: 'Nicho de mercado',
      significado:
        'Porción o segmentación del mercado que posee características similares.',
    },
  ],
  referencias: [
    {
      referencia:
        'CESA. (2020). Los 4 clientes bancarios que dan valor a la marca.',
      link:
        'https://www.cesa.edu.co/news/los-4-clientes-bancarios-que-dan-valor-a-la-marca/',
    },
    {
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2020). CF1 Introducción - Técnico Laboral en Servicios y Operaciones Microfinancieras [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=07DAKQU7SG4',
    },
    {
      referencia:
        'Organización Internacional de Normalización [ISO]. (2015). Sistemas de gestión de la calidad — Requisitos (ISO 9001).',
      link: 'https://www.iso.org/obp/ui#iso:std:iso:9001:ed-5:v1:es',
    },
    {
      referencia:
        'Ley 1328 de 2009. Por la cual se dictan normas en materia financiera, de seguros, del mercado de valores y otras disposiciones. Julio 15 de 2009. DO. No. 47.411.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1328_2009.html',
    },
    {
      referencia: 'Palomo, M. (2014). Atención al cliente. Paraninfo.',
      link:
        'https://books.google.es/books?id=WWWgBwAAQBAJ&printsec=frontcover&hl=es&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false',
    },
    {
      referencia: 'Sánchez, J. (2016). Servicio. Economipedia.',
      link: 'https://economipedia.com/definiciones/servicio.html',
    },
    {
      referencia: 'Sánchez, J. (2018). Asesoría. Economipedia.',
      link: 'https://economipedia.com/definiciones/asesoria.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Maria Alejandra Tovar',
        cargo: 'Experto temático',
        centro: 'Centro de industria y la construcción - Regional Tolima',
      },
      {
        nombre: 'Leydy Jhuliana Jaramillo Mejía',
        cargo: 'Diseñador instruccional ',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Asesora Metodológica',
        centro: 'Centro de diseño y metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Anllelo Andres Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabala',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Gabriel Urueta Alvarez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
