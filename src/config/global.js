export default {
  global: {
    componenteFormativo: 'Registro devengos contables',
    descripcionCurso:
      'En el marco de la globalización, donde se plantean nuevos objetivos empresariales, surge la necesidad de mantener un sistema contable comprensible, oportuno y confiable, que contribuya con la adecuada toma de decisiones por parte de la administración.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal-img.svg'),
    fondoBannerPrincipal: require('@/assets/curso/banner-principal-bg.jpg'),
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
        titulo: 'Información contable',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Historia, cualidades y objetivos de la información contable',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Marco conceptual bajo estándares internacionales',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Reconocimiento, medición, presentación, revelación y baja de cuentas de los elementos de los estados financieros',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Política contable',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Fundamentos contables',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Hechos económicos: concepto, clasificación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Cuenta: concepto y clasificación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Partida doble',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Ecuación contable',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      /*{
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
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
  referencias: [
    {
      referencia:
        'Angulo, U. (2018). Contabilidad financiera, correlacionado con NIIF. Ediciones de la U.',
    },
    {
      referencia:
        'Cuaspa, C. (2013). Normas internacionales de información financiera convergencia a Colombia y aplicación a empresas de salud. Ediciones UNAL.',
    },
    {
      referencia: 'Decreto 2420 de diciembre 14 de 2015 (2020, noviembre 05).',
      link:
        'https://www.nicniif.org/home/novedades/colombia-expide-decreto-unico-regalmentario-dur-de-las-normas-de-contabilidad-de-informacion-financiera-y-de-aseguramiento-de-la-informacion-financiera.html',
    },
    {
      referencia:
        'IFRS Foundation (2019). Taxonomía NIIF Ilustrada. IFRS Foundation Edition. Delaware: E.E.U.U.',
    },
    {
      referencia:
        'CTCP, (2020, noviembre 05), Marco conceptual para la Información Financiera.',
      link:
        'http://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/enmiendas-iasb-emitidas-en-2018/5-c-marco-conceptual-para-la',
    },
    {
      referencia: 'Norma Internacional de Contabilidad (NIC) 8, (2018):',
      link:
        'http://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/compilacion-marcos-tecnicos-de-informacion-financi/1534369239-2962',
    },
    {
      referencia:
        'Pérez, J. y Fol, R. (2019). Manual de casos prácticos de ISR. Tax Editores.',
    },
    {
      referencia:
        'Santos-Cid, C. (2018). Una mirada a la historia de la Contabilidad. Revista Cubana De Finanzas Y Precios, 2(1), 139-155.',
    },
    {
      referencia:
        'Tapia, C. y Jiménez, J. (2018) Cómo entender finanzas sin ser financiero. Instituto Mexicano de Contadores Públicos.',
    },
    {
      referencia:
        'Vilches, R. (2019). Apuntes de contabilidad básica. El Cid Editor.',
    },
    {
      referencia:
        'Warren, C., Reeves, J. & Duchac, J. (2016). Contabilidad financiera. Cengage Learning. México.',
    },
  ],
  glosario: [
    {
      termino: 'Capital',
      significado:
        'Es el aporte de los socios, puede darse en aporte financieros o industrial.',
    },
    {
      termino: 'Costo histórico',
      significado: 'Es el valor de la transacción de la operación.',
    },
    {
      termino: 'Cuenta',
      significado:
        'Es el término usado en información financiera para registrar los hechos económicos de la empresa.',
    },
    {
      termino: 'Cuentas reales',
      significado:
        'Son las cuentas que conforman el estado de situación financiera, estas son: activo, pasivo y patrimonio.',
    },
    {
      termino: 'Cuentas de resultado',
      significado:
        'Son aquellas cuentas que reflejan el resultado del ejercicio, el cual ´puede ser una utilidad o perdida. Las cuentas son ingresos y gastos.',
    },
    {
      termino: 'Debe',
      significado: 'Significa registrar el valor monetario al lado izquierdo.',
    },
    {
      termino: 'Efectivo',
      significado:
        'Es el dinero que se encuentra en las cuentas de caja, Bancos e inversiones a corto plazo (90 días).',
    },
    {
      termino: 'Estado de situación financiera',
      significado:
        'Es un estado integrado por los elementos de activo, pasivo y patrimonio.',
    },
    {
      termino: 'Estado de resultados',
      significado:
        'Es un estado financiero compuesto por las cuentas de ingresos, gastos y costos que reflejan el resultado del ejercicio.',
    },
    {
      termino: 'Haber',
      significado: 'Corresponde al registro del precio al lado derecho.',
    },
    {
      termino: 'Partida doble',
      significado:
        'Es la igualdad de los registros del debe y en haber en el asiento contable, presentando un equilibrio.',
    },
    {
      termino: 'Patrimonio',
      significado: 'Es la diferencia presentada entre activo y pasivo.',
    },
    {
      termino: 'Políticas contables',
      significado:
        'Son las bases, regla y procedimientos aplicables por una empresa para presentar los estados financieros.',
    },
  ],
  complementario: [
    {
      texto: 'Apuntes de Contabilidad básica.',
      tipo: 'Capítulo 1',
      descarga:
        'Vilches, R. (2019). Apuntes de contabilidad básica. Buenos Aires: El Cid Editor.',
    },
    {
      texto: 'Contabilidad financiera, correlacionado con NIIF.',
      descarga:
        'Angulo, U. (2018). Contabilidad financiera, correlacionado con NIIF. Ediciones de la U. Bogotá: Colombia.',
    },
    {
      texto: 'Prácticas de Contabilidad',
      tipo: 'Capítulo 1',
      descarga:
        'Aguilar, H. (2017). Prácticas de contabilidad. Grupo Editorial Patria. Ciudad de México: México.',
    },
    {
      texto: 'Contabilidad financiera. (14a. ed.) Cengage.',
      tipo: 'Capítulo 2',
      descarga:
        'Warren, C., Reeves, J. & Duchac, J. (2016). Contabilidad financiera. Cengage Learning. México: Ciudad de México.',
    },
    {
      texto:
        'Consejo Técnico de la Contaduría Pública (CTCP). Norma Internacional de Contabilidad (NIC) 8.',
      tipo: 'Norma',
      link:
        'http://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/compilacion-marcos-tecnicos-de-informacion-financi/1534369239-2962',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Patricia Mantilla Galvis',
        cargo: 'Instructora',
        centro: 'Centro de Servicios Financieros. Regional Distrito Capital',
      },
      {
        nombre: 'Maryuri Agudelo Franco',
        cargo: 'Diseño Instruccional',
        centro: 'Centro de diseño metrología. Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica. Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Jesús Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Walter Roa Serrano',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Maria Carolina Tamayo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carmen Martinez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ludwyn Corzo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
