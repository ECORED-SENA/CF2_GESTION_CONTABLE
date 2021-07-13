<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Información contable
    .row.align-items-center.mb-5
      .col-lg-7
        p Para empezar, es importante recordar que existen diferentes tipos de empresas que ofrecen productos y servicios con el fin de satisfacer necesidades de los usuarios; por tanto, deben implementar un sistema contable que permita la evaluación y análisis de la información para la toma de decisiones sobre inversión, rentabilidad y endeudamiento. En consecuencia, existen procesos contables y criterios que deben aplicarse para dar cumplimiento a las NIIF, satisfaciendo, de esta manera, las necesidades de los usuarios en cuanto a la generación de información confiable, comparable, compresible, verificable y oportuna (Cuaspa, 2013).
        h3 Usuarios de la información contable y financiera
        p Los usuarios son las personas interesadas en conocer la situación financiera de la empresa, entre ellos, encontramos los siguientes (Vilches, 2019):
        ul.lista-ul.ms-5.cac__ul
          li
            i.fas.fa-angle-right
            | Inversores, accionistas o propietarios.
          li
            i.fas.fa-angle-right
            | Administradores.
          li
            i.fas.fa-angle-right
            | Proveedores.
          li
            i.fas.fa-angle-right
            | Clientes.
          li
            i.fas.fa-angle-right
            | Colaboradores.
          li
            i.fas.fa-angle-right
            | Entes de control.
      .col-lg-5.p-4
        img(src='@/assets/curso/t1/f1.svg' alt='Mujer haciendo cuentas')
    h3 Campo de acción de la contabilidad o información contable
    p.mb-5 De acuerdo con el tipo de empresa y/o campo de acción, la contabilidad se clasifica de la siguiente manera (Vilches, 2019):
    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Contabilidad pública")
        .row.align-items-center
          .col-md-5.mx-auto.p-4
            figure
              img(src='@/assets/curso/t1/f2.svg', alt='Imagen relacionada')
          .col-md-6.mb-4.mb-md-0
            h4 Contabilidad pública
            p Se ocupa de las transacciones realizadas por entidades del Estado y, por ende, se rigen por las normas que expida la Contaduría General de la Nación.
      .py-3.py-md-4(titulo="Contabilidad de servicios")
        .row.align-items-center
          .col-md-5.mx-auto.p-4
            figure
              img(src='@/assets/curso/t1/f3.svg', alt='Imagen relacionada')
          .col-md-6.mb-4.mb-md-0
            h4 Contabilidad de servicios
            p Se ocupa de las actividades realizadas por empresas que prestan servicios, con el fin de satisfacer necesidades.
      .py-3.py-md-4(titulo="Contabilidad comercial")
        .row.align-items-center
          .col-md-5.mx-auto.p-4
            figure
              img(src='@/assets/curso/t1/f4.svg', alt='Imagen relacionada')
          .col-md-6.mb-4.mb-md-0
            h4 Contabilidad comercial
            p Se ocupa de las actividades realizadas por empresas que se dedican a la compra y venta de productos
      .py-3.py-md-4(titulo="Contabilidad de costos")
        .row.align-items-center
          .col-md-5.mx-auto.p-4
            figure
              img(src='@/assets/curso/t1/f5.svg', alt='Imagen relacionada')
          .col-md-6.mb-4.mb-md-0
            h4 Contabilidad de costos
            p Se ocupa de las actividades realizadas por empresas industriales, que se encargan de transformar materia prima en producto terminado.
      .py-3.py-md-4(titulo="Contabilidad gerencial")
        .row.align-items-center
          .col-md-5.mx-auto.p-4
            figure
              img(src='@/assets/curso/t1/f6.svg', alt='Imagen relacionada')
          .col-md-6.mb-4.mb-md-0
            h4 Contabilidad gerencial
            p Sirve como apoyo o herramienta para el área administrativa de una empresa, con el fin de aportar a la adecuada toma de decisiones y generación de acciones que permitan la evaluación de desempeño y cumplimiento de objetivos.
    #t_1_1.titulo-segundo
      h2 1.1 Historia, cualidades y objetivos de la información contable
      p En el año 6000 a.n.e., con el surgimiento de la agricultura, la ganadería y el comercio surgió la necesidad de contabilizar las transacciones de estas actividades. Se tiene evidencia de trueque en el templo rojo de Babilonia hacia el año 5.200 años a.n.e. Las primeras civilizaciones conocían operaciones aritméticas rudimentarias, llegando a crear elementos auxiliares para contar, sumar y restar, utilizando medios muy elementales inicialmente. Luego, desarrollarían medios y prácticas más avanzadas como la creación de monedas como único instrumento de intercambio. También, hay evidencia de que en Babilonia se realizaron registros de ingresos y gastos 3.600 años a.n.e. En la época del imperio egipcio, 2.550 años a.n.e., se sabe de anotaciones contables de operaciones mercantiles del imperio.
    .tarjeta.tarjeta--gris.p-4.mb-5
      LineaTiempoC.color-acento-contenido
        .row.align-items-center(titulo="Edad Media")
          .col-md-7.mb-4.mb-md-0
            h3 Edad media
            p En la edad media, con el inicio del imperio Romano se aprobaron asientos realizados en libros de contabilidad. Fueron los banqueros romanos quienes perfeccionaron las técnicas contables, con el fin de controlar los valores que otorgaban al ejército para sus conquistas territoriales.
          .col-md-4.mx-auto
            figure
              img(src='@/assets/curso/t1/f7.svg', alt='Edad media') 
        .row.align-items-center(titulo="Siglos VII y VIII")
          .col-md-7.mb-4.mb-md-0
            h3 Siglos VII y VIII
            p En Italia durante los siglos VII y VIII, principalmente en Venecia, la actividad contable se convirtió en una actividad de mucho prestigio, puesto que, por mandato de los señores feudales, los libros eran llevados por escribanos. Las ciudades de Venecia, Génova y Florencia fueron el epicentro del comercio, la industria y la banca, lo que les permitió desarrollar técnicas de contabilidad.
          .col-md-4.mx-auto
            figure
              img(src='@/assets/curso/t1/f8.svg', alt='Siglos VII y VIII') 
        .row.align-items-center(titulo="1494")
          .col-md-7.mb-4.mb-md-0
            h3 1494
            p En 1494 el monje franciscano de Italia, Luca Pacioli, a quien se le llama el “padre” de la contabilidad, propuso el concepto de la partida doble para llevar cuentas de gastos, ingresos, activos, y pasivos, registrando las transacciones cronológicamente y detalladas.
          .col-md-2.mx-auto
            figure
              img(src='@/assets/curso/t1/f9.svg', alt='1494') 
        .row.align-items-center(titulo="1988")
          .col-md-7.mb-4.mb-md-0
            h3 1988
            p En 1988, en Estados Unidos, William Burroughs patentó la primera sumadora de teclas, y en 1920 el gobierno, la banca y las bolsas de valores comenzaron a exigir estados financieros certificados por contadores públicos independientes.
          .col-md-3.mx-auto
            figure
              img(src='@/assets/curso/t1/f10.svg', alt='1988') 
        .row.align-items-center(titulo="1993")
          .col-md-7.mb-4.mb-md-0
            h3 1993
            p En Latinoamérica, después de las independencias de los Estados, se continuó usando por mucho tiempo las técnicas contables traídas desde España. En Colombia, en 1993 se reglamentó la contabilidad en general y se expidió a partir del decreto 2649 el compendio de principios o normas de contabilidad generalmente aceptadas (PCGA). Este nombre surge de la traducción del inglés de las NIC (Normas Internacionales de Contabilidad). Con la ley 2420 del 2015 se adoptaron en Colombia, al igual que en el resto de los países, las Normas Internacionales de Información Financiera (NIIF) para dar uniformidad a la presentación de la información financiera de las entidades que cotizan en bolsa; para ser entendida sin importar la nacionalidad de quien utiliza dicha información o la interpreta.
          .col-md-3.mx-auto
            figure
              img(src='@/assets/curso/t1/f11.svg', alt='1993') 
    .cajon.color-primario.p-4.mb-5
      p.mx-0 De tal suerte que, la contabilidad ha existido desde la antigüedad, cuando se desarrollaban diversas actividades comerciales y financieras. Es un área que ha ido evolucionando notoriamente, convirtiéndose en una herramienta administrativa y de control de suma importancia en el contexto empresarial. Cabe resaltar que hoy en día se utilizan softwares que facilitan y agilizan las actividades contables derivadas de esta profesión. Estos sistemas se parametrizan conforme con los objetivos y requerimientos de cada empresa; aplicando, de esta manera, las normas contables, financieras, tributarias y laborales vigentes.
    h3 Objetivos de la información contable
    p.mb-5 Según el Consejo de Normas Internacionales de Contabilidad (2018), el objetivo de la información financiera es:
    .row.align-items-center.mb-5
      .col-lg-4(data-aos="fade-right")
        img(src='@/assets/curso/t1/f12.svg', alt='Mujer viendo archivos contables')
      .col-lg-8(data-aos="fade-left")
        .bloque-texto-d.color-primario.p-4.mb-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left.cac
            h3.text-regular Proporcionar información financiera sobre la entidad que informa que sea útil a los inversores, prestamistas y otros acreedores existentes y potenciales para tomar decisiones sobre el suministro de recursos a la entidad. Esas decisiones conllevan, comprar, vender o mantener patrimonio e instrumentos de deuda, y proporcionar o liquidar préstamos y otras formas de crédito.
            i.fas.fa-quote-right.cac
        .cajon.color-acento-contenido.p-4
          p Con el fin de ampliar sus conocimientos sobre la temática, por favor revise el Marco Conceptual para la Información Financiera (Consejo de Normas Internacionales de Contabilidad, 2018), a través del siguiente enlace:
        .row.mt_5.px-4
          .col-lg-4
          .col-lg-8  
            a.anexo.mb-4.mb-lg-0(:href="obtenerLink=('/downloads/MCIF.pdf')", target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg" alt="icono enlace")
              .anexo__texto
                p <b>Enlace web.</b> Marco Conceptual para la Información Financiera
    .row.align-items-center.mb-5
      .col-lg-8
        h3 Cualidades de la información contable
        p Las cualidades de la información contable hacen referencia a las características que debe tener la contabilidad, con el fin de ser útil para los usuarios; entre ellos, los inversores, pues su objetivo radica en obtener información comparable, verificable y oportuna para la toma de decisiones.
        .cajon.color-primario.p-4
          p.mb-0 Según el Consejo de Normas Internacionales de Contabilidad (2018), las características cualitativas fundamentales y de mejora son:
      .col-lg-4
        img(src='@/assets/curso/t1/f13.svg', alt='Hombre viendo documentos contables')
    h3 Características cualitativas fundamentales
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-5
                figure
                  img(src='@/assets/curso/t1/f14.svg', alt='Documentos')
        h3.text-center Relevancias
        p.text-center También denominado materialidad o importancia relativa, hace referencia al reconocimiento o no de un hecho económico, el cual puede afectar significativamente la toma de decisiones.
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-5
                figure
                  img(src='@/assets/curso/t1/f15.svg', alt='Documentos')
        h3.text-center Representación fiel
        p.text-center La información debe estar completa de acuerdo con los hechos económicos presentados. Así mismo, debe ser neutral y objetiva, evitando los sesgos en la información presentada y garantizando que esté libre de error.
    h3.mb-5 Características de mejora
    TabsA.color-acento-contenido.mb-5(data-aos="fade-left")
      .tarjeta.color-acento-contenido--borde.p-5(titulo="Comparabilidad")
        .row.align-items-center
          .col-lg-6
            h4 Comparabilidad
            p Se refiere a la comparación que se realiza con otras entidades con información similar o con la misma entidad en diferentes periodos.
          .col-lg-3.mx-auto
            img(src='@/assets/curso/t1/f16.svg', alt='Balanza')
      .tarjeta.color-acento-contenido--borde.p-5(titulo="Verificabilidad")
        .row.align-items-center
          .col-lg-6
            h4 Verificabilidad
            p Es la representación fiel de los hechos económicos, a partir de la revisión del registro de las operaciones y los procesos mediante la observación directa.
          .col-lg-3.mx-auto
            img(src='@/assets/curso/t1/f17.svg', alt='Balanza')
      .tarjeta.color-acento-contenido--borde.p-5(titulo="Oportunidad")
        .row.align-items-center
          .col-lg-6
            h4 Oportunidad
            p Consiste en obtener la información en el momento adecuado para la toma de decisiones, por ende, debe estar actualizada.
          .col-lg-3.mx-auto
            img(src='@/assets/curso/t1/f18.svg', alt='Balanza')
      .tarjeta.color-acento-contenido--borde.p-5(titulo="Comprensibilidad")
        .row.align-items-center
          .col-lg-6
            h4 Comprensibilidad
            p La información debe ser clara y concisa, garantizando ser comprensible para los diferentes usuarios.
          .col-lg-3.mx-auto
            img(src='@/assets/curso/t1/f19.svg', alt='Balanza')
    .cajon.color-acento-contenido.p-4
      p.mb-0 Para que la información sea útil es importante dar aplicabilidad a las características fundamentales y de mejora simultáneamente, esto garantiza que la información cumpla con los estándares exigidos y contribuya con la toma decisiones.
    Separador
    #t_1_2.titulo-segundo
      h2 1.2 Marco conceptual bajo estándares internacionales
    .row.align-items-center.mb-5
      .col-lg-5.mx-auto
        img(src='@/assets/curso/t1/f20.svg', alt='Balanza')
      .col-lg-7
        p El Consejo de Normas Internacionales de Contabilidad (2018), establece los criterios que se tienen en cuenta para el registro de los hechos económicos y plantea los propósitos del Marco Conceptual para la Información Financiera:
        .row.align-items-start
          .col-auto
            img(src='@/assets/curso/t1/1.svg', alt='1')._64px
          .col-lg-10
            .tarjeta.tarjeta--gris.p-4.mb-4
              p Ayudar al Consejo de Normas Internacionales de Contabilidad (Consejo) a desarrollar Normas NIIF (Normas) que estén basadas en conceptos congruentes (p. 8).
        .row.align-items-start
          .col-auto
            img(src='@/assets/curso/t1/2.svg', alt='2')._64px
          .col-lg-10
            .tarjeta.tarjeta--gris.p-4.mb-4
              p Asistir a los preparadores para desarrollar políticas contables congruentes cuando no es aplicable ninguna Norma a una transacción específica u otro suceso, o cuando una Norma permite una opción de política contable (p. 8).
        .row.align-items-start
          .col-auto
            img(src='@/assets/curso/t1/3.svg', alt='3')._64px
          .col-lg-10
            .tarjeta.tarjeta--gris.p-4.mb-4
              p Ayudar a todas las partes a comprender e interpretar las Normas (p.8).
    p.mb-5 El Marco Conceptual para la Información Financiera fue expedido inicialmente en 1989 por el Comité de Normas Internacionales de Contabilidad (IASC). Posteriormente, fue ampliado por la junta internacional de normas de contabilidad (IASB) y publicado en septiembre de 2010, donde permanece el documento inicial y se registran otras novedades. Fue revisado, modificado y emitido una vez más el 29 de marzo de 2018, con el fin de realizar mejoras al documento en cuanto a conceptos de reconocimiento, medición, presentación y revelación en la aplicación contable. Estas últimas disposiciones comenzaron a implementarse a partir del 1 de enero de 2020.
    .row.mb-5
      .col-lg-7
        .cajon.color-primario.p-4.mb-4
          p.mb-0 La relación entre objetivos, características y elementos de los estados financieros de propósito general es importante para la generación de información comparativa que contribuya con la toma de decisiones (Consejo de Normas Internacionales de Contabilidad, 2018).
        p Entre los estados financieros se encuentran:
        ul.lista-ul.ms-5.cac__ul
          li
            i.fas.fa-angle-right
            | Estado de situación financiera.
          li
            i.fas.fa-angle-right
            | Estado de resultados integral.
          li
            i.fas.fa-angle-right
            | Estado de cambio en el patrimonio.
          li
            i.fas.fa-angle-right
            | Estado de flujos de efectivo.
          li
            i.fas.fa-angle-right
            | Notas a los estados financieros.
      .col-lg-4.mx-auto
        img(src="@/assets/curso/t1/f21.svg" alt="Mujer observando una factura")
    h3 Elementos de los estados financieros
    p.mb-5 El Estado de situación financiera refleja la información de los elementos de activo, pasivo y patrimonio, los cuales se detallan en el Marco Conceptual de Información Financiera y en la Norma Internacional de Contabilidad (NIC), de la siguiente manera:
    .row.justify-content-between.mx-auto.text-center.mb-5
      .col-lg-1
      .col-lg-3.p-5.tartbg
        img(src="@/assets/curso/t1/f22.svg" alt="moneda y flecha ascendente").mb-4._64px.mx-auto
        h4 Definición de activo
        p.mb-0 Es un recurso económico presente controlado por la entidad como resultado de sucesos pasados, que tiene el potencial de producir beneficios económicos.
      .col-lg-3.p-5.tartbg
        img(src="@/assets/curso/t1/f23.svg" alt="moneda y flecha descendente").mb-4._64px.mx-auto
        h4 Definición de pasivo
        p Es una obligación presente de la entidad de transferir un recurso económico como resultado de sucesos pasados.
      .col-lg-3.p-5.tartbg
        img(src="@/assets/curso/t1/f24.svg" alt="moneda y flecha derecha").mb-4._64px.mx-auto
        h4 Definición de patrimonio
        p Es la parte residual de los activos de la entidad, una vez deducidos todos sus pasivos.
      .col-lg-1
    p.mb-5 En el estado de resultados integral, se encuentran los elementos de ingresos y gastos (Consejo de Normas Internacionales de Contabilidad, 2018):
    .row.align-items-center.px-5.mb-5
      .col-lg-4  
        img(src="@/assets/curso/t1/f25.svg" alt="Mujer y lista de chequeo")
      .col-lg-8
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Definición de ingresos")
            p.mb-4.mb-md-0 Son incrementos en los activos o disminuciones en los pasivos que dan lugar a incrementos en el patrimonio, distintos de los relacionados con aportaciones de los tenedores de derechos sobre el patrimonio.
          .row(numero="2" titulo="Definición de gastos")
            p.mb-4.mb-md-0 Disminuciones en los activos o incrementos en los pasivos que dan lugar a disminuciones en el patrimonio, distintos de los relacionados con distribuciones de los tenedores de derechos sobre el patrimonio. 
    .cajon.color-acento-contenido.p-4.mb-0        
      p Con el fin de ampliar sus conocimientos sobre la temática, por favor revise el Marco Conceptual para la Información Financiera (Consejo de Normas Internacionales de Contabilidad, 2018) a través del siguiente enlace:
    .row.mt_5.px-4
      .col-lg-4
      .col-lg-8  
        a.anexo.mb-4.mb-lg-0(:href="obtenerLink=('/downloads/MCIF.pdf')", target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg" alt="icono enlace")
          .anexo__texto
            p <b>Enlace web.</b> Marco Conceptual para la Información Financiera
    Separador
    #t_1_3.titulo-segundo(data-aos="fade-left")
      h2 1.3 Reconocimiento, medición, presentación, revelación y baja de cuentas de los elementos de los estados financieros
    .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Se relacionan los criterios de reconocimiento de los elementos de los estados financieros, teniendo en cuenta, para su registro, las cualidades fundamentales de materialidad relativa y representación fiel; aunado a ello, expresa la baja de cuentas cuando los elementos de los estados financieros no cumplen con la definición establecida; por lo tanto, se realiza una eliminación parcial o total de dichas cuentas (Consejo de Normas Internacionales de Contabilidad, 2018).
        .col-lg-3.mb-4.mb-lg-0.mx-auto
          img(src="@/assets/curso/t1/f26.svg" alt="Mujer viendo diagrama de barras")
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Reconocimiento").p-4
        .col-md-4
          figure
            img(src='@/assets/curso/t1/f27.svg', alt='Imagen relacionada')
        .col-md-8.mb-4.mb-md-0.p-4
          .cajon.color-primario.p-4.mb-4
            p.mb-0 Se refiera al proceso de registrar los hechos económicos generados en el transcurso normal de las operaciones de la empresa, los cuales se verán reflejados en los estados financieros una vez se verifica que cumplan con el concepto de sus elementos.
          p Cabe resaltar que un activo, pasivo o patrimonio, para ser reconocido en el estado de situación financiera, debe cumplir con su respectiva definición, atendiendo a las características que se establecen. De igual forma, los ingresos y gastos se reconocerán en el estado de resultados integral solamente si cumplen con la definición respectiva. En consecuencia, el reconocimiento de un activo y un pasivo genera simultáneamente el reconocimiento de un ingreso y un gasto, teniendo en cuenta la transacción realizada. Esto es denominado ocasionalmente correlacional de costos e ingresos; por ejemplo, suele presentarse en la venta de bienes y/o servicios donde se reconoce el ingreso por actividades ordinarias y a su vez el activo (efectivo).
      .row(titulo="Baja en cuentas").p-4
        .col-md-3.mx-auto
          figure
            img(src='@/assets/curso/t1/f28.svg', alt='Imagen relacionada')
        .col-md-8.mb-4.mb-md-0
          p Cuando se habla de baja, en cuentas de un activo o un pasivo, se hace referencia a la eliminación total o parcial de este elemento a partir de dos situaciones posibles:
          ul.lista-ul.ms-5.cac__ul
            li
              i.fas.fa-angle-right
              | Que la empresa pierda el control del activo reconocido.
            li
              i.fas.fa-angle-right
              | Que la empresa deja de tener una obligación presente.
          .cajon.color-primario.p-4.mb-4
            p.mb-0 El principal objetivo de dar de baja las cuentas es reflejar la realidad económica de la empresa, donde se registran los elementos que cumplan los criterios de reconocimiento y medición, con el fin de que sean reflejados en los estados financieros y, en consecuencia, se genere información útil, relevante y oportuna.
      .row(titulo="Medición").p-4
        p A continuación, se describen las bases, características, factores y técnicas para tener en cuenta al momento de realizar la medición de un elemento de los estados financieros (Consejo de Normas Internacionales de Contabilidad, 2018).
        div.p-4
          h4.mb-4 Bases de medición
          p.mb-5 La base de medición es la cuantificación en términos monetarios de los elementos de los estados financieros. De acuerdo con las políticas y lineamientos normativos se presentan diferentes bases, por ello, es importante seleccionar la base de medición más adecuada para presentar la información financiera atendiendo a los estándares internacionales (Consejo de Normas Internacionales de Contabilidad, 2018):
          .crd_01.mb-4(data-aos="fade-left")
            .crd_01__icon
              img(src="@/assets/curso/icon-libros.svg", alt="icono libros").class          
            .crd_01__txt
              h5 Costo histórico
              p.mb-0 Es el precio de transacción, el valor de adquisición, de compra o creación de un activo. Es el valor de la contraprestación recibida al obtener el pasivo.
          .crd_01.mb-4(data-aos="fade-right")
            .crd_01__icon
              img(src="@/assets/curso/icon-libros.svg", alt="icono libros").class          
            .crd_01__txt
              h5 Valor corriente
              .bloque-texto-d.color-primario.p-4
                .bloque-texto-d__texto.mb-2
                  i.fas.fa-quote-left
                  h3.text-regular Las mediciones del valor corriente proporcionan información monetaria sobre activos, pasivos, e ingresos y gastos relacionados, usando información actualizada para reflejar las condiciones en la fecha de medición. Debido a la continua actualización, los valores corrientes de activos y pasivos reflejan los cambios, desde la fecha de medición anterior, en las estimaciones de flujos de efectivo y otros factores reflejados en los valores.
                  .h5.mb-0.text-right (Consejo de Normas Internacionales de Contabilidad, 2018. p. 44).
                  i.fas.fa-quote-right.fr
          .crd_01.mb-4(data-aos="fade-left")
            .crd_01__icon
              img(src="@/assets/curso/icon-libros.svg", alt="icono libros").class          
            .crd_01__txt
              h5 Valor razonable
              .bloque-texto-d.color-primario.p-4
                .bloque-texto-d__texto.mb-2
                  i.fas.fa-quote-left
                  h3.text-regular Valor razonable es el precio que se recibiría por vender un activo o que se pagaría por transferir un pasivo en una transacción ordenada entre participantes de mercado, en la fecha de la medición.
                  .h5.mb-0.text-right (Consejo de Normas Internacionales de Contabilidad, 2018. p. 44).
                  i.fas.fa-quote-right.fr
          .crd_01.mb-4(data-aos="fade-left")
            .crd_01__icon
              img(src="@/assets/curso/icon-libros.svg", alt="icono libros").class          
            .crd_01__txt
              h5 Valor en uso y valor de cumplimiento
              .bloque-texto-d.color-primario.p-4
                .bloque-texto-d__texto.mb-2
                  i.fas.fa-quote-left
                  h3.text-regular El valor en uso es el valor presente de los flujos de efectivo, o de otros beneficios económicos, que una entidad espera obtener del uso de un activo y de su disposición final. El valor de cumplimiento es el valor presente de los flujos de efectivo o de otros beneficios económicos, que una entidad espera verse obligada a transferir a medida que satisface un pasivo.
                  .h5.mb-0.text-right (Consejo de Normas Internacionales de Contabilidad, 2018. p. 45).
                  i.fas.fa-quote-right.fr
          .crd_01.mb-4
            .crd_01__icon
              img(src="@/assets/curso/icon-libros.svg", alt="icono libros").class          
            .crd_01__txt
              h5 Costo corriente
              .bloque-texto-d.color-primario.p-4
                .bloque-texto-d__texto.mb-2
                  i.fas.fa-quote-left
                  h3.text-regular El costo corriente de un activo es el costo de un activo equivalente en la fecha de medición, que comprende la contraprestación que se pagaría en la fecha de medición más los costos de transacción en los que se incurriría en esa fecha.
                  .h5.mb-0.text-right (Consejo de Normas Internacionales de Contabilidad, 2018. p. 45).
                  i.fas.fa-quote-right.fr
    .cajon.color-acento-contenido.p-4
      p Con el fin de ampliar sus conocimientos sobre la temática, por favor revise el Marco Conceptual para la Información Financiera (Consejo de Normas Internacionales de Contabilidad, 2018), a través del siguiente enlace:
    .row.mt_5.px-4.mb-5
      .col-lg-4
      .col-lg-8  
        a.anexo.mb-4.mb-lg-0(:href="obtenerLink=('/downloads/MCIF.pdf')", target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg" alt="icono enlace")
          .anexo__texto
            p <b>Enlace web.</b> Marco Conceptual para la Información Financiera
    p Para seleccionar las bases de medición, que se relacionarán en el Manual de políticas contables, es fundamental analizar el tipo de empresa y su entorno, tendiendo en cuenta las circunstancias y eventos que se generen para determinar lo más adecuado para la organización. Aunado a ello, se tiene en cuenta el concepto y características de los elementos de los estados financieros, las cualidades fundamentales y de mejora.
    p.mb-5 Es de suma importancia presentar información financiera confiable, oportuna, comprensible y comparable, con el fin de facilitar la toma de decisiones a la gerencia:
    .col-lg-10.mx-auto
      .bloque-texto-d.color-primario.p-4
        .bloque-texto-d__texto.mb-2
          i.fas.fa-quote-left
          h3.text-regular La comunicación efectiva de la información de los estados financieros requiere: (a) centrarse en los objetivos y principios de presentación e información a revelar en lugar de centrarse en reglas; (b) clasificar la información de forma que agrupe las partidas similares juntas y las diferentes de forma separada; y (c) agregar información de forma que no se ensombrezca con detalles innecesarios o agregación excesiva.
          .h5.mb-0.text-right (Consejo de Normas Internacionales de Contabilidad, 2018.).
          i.fas.fa-quote-right.fr
    Separador
    #t_1_4.titulo-segundo
      h2 1.4 Política contable
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/NhsdLCBUev4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      //figcaption Video: Política contable
    p.mb-5 Para diseñar las políticas contables es importante identificar el grupo de presentación de información financiera: Grupo 1-NIIF plenas, Grupo 2-NIIF Pymes, Grupo 3– NIF Microempresas. Según los lineamientos del Decreto Único Reglamentario -DUR- 2420 de 2015, el grupo 1, posee las siguientes características:
    .row.align-items-center.mb-5
      .col-lg-4
        figure
            img(src='@/assets/curso/t1/f29.svg', alt='Imagen relacionada')
      .col-lg-8
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span a
            | Emisores de valores. Entidades y negocios fiduciarios que tengan valores inscritos en el Registro Nacional de Valores y Emisores – RNVE en los términos del artículo 1.1. 1. 1. 1. del Decreto 2555 de 2010.
          li 
            .lista-ol--cuadro__vineta
              span b
            | Entidades y negocios de interés público.
          li 
            .lista-ol--cuadro__vineta
              span c
            p Entidades que no estén en los literales anteriores, que cuenten con una planta de personal mayor a 200 trabajadores o con activos totales superiores a 30.000 salarios mínimos mensuales legales vigentes (SMMLV) y que, adicionalmente, cumplan con cualquiera de los siguientes parámetros:
              br
              br
              ul.lista-ul.ms-5.cac__ul
                li
                  i.fas.fa-angle-right
                  | Ser subordinada o sucursal de una compañía extranjera que aplique NIIF plenas.
                li
                  i.fas.fa-angle-right
                  | Ser subordinada o matriz de una compañía nacional que deba aplicar NIIF plenas.
                li
                  i.fas.fa-angle-right
                  | Ser matriz, asociada o negocio conjunto de una o más entidades extranjeras que apliquen NIIF plenas.
                li
                  i.fas.fa-angle-right
                  | Realizar importaciones o exportaciones que representen más del 50% de las compras o de las ventas respectivamente. 
    p.mb-5 Para elaborar las políticas del grupo 1 de empresas se tienen en cuenta los lineamientos estipulados en la Norma Internacional de Contabilidad (NIC 8), la cual expresa:
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-5
                figure
                  img(src='@/assets/curso/t1/f14.svg', alt='Documentos')
        h3.text-center Objetivo
        ul.lista-ul.cac__ul.text-center
          li
            i.fas.fa-angle-right
            | El objetivo de esta norma es prescribir los criterios para seleccionar y modificar las políticas contables, así como el tratamiento contable y la información a revelar acerca de los cambios en las políticas contables, de los cambios en las estimaciones contables y de la corrección de errores. La Norma trata de realzar la relevancia y fiabilidad de los estados financieros de una entidad, así como la comparabilidad con los estados financieros emitidos por ésta en periodos anteriores, y con los elaborados por otras entidades. 
          li
            i.fas.fa-angle-right
            | Los requerimientos de información a revelar relativos a políticas contables, excepto los referentes a cambios en las políticas contables han sido establecidos en la Norma Internacional de Contabilidad (NIC 1).  
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-5
                figure
                  img(src='@/assets/curso/t1/f15.svg', alt='Documentos')
        h3.text-center Alcance
        ul.lista-ul.cac__ul.text-center
          li
            i.fas.fa-angle-right
            | Esta norma se aplicará en la selección y aplicación de políticas contables, así como en la contabilización de los cambios en estas, los cambios en las estimaciones contables y en la corrección de errores de periodos anteriores. 
          li
            i.fas.fa-angle-right
            | El efecto impositivo de la corrección de los errores de periodos anteriores, así como de los ajustes retroactivos efectuados al realizar cambios en las políticas contables se contabilizará de acuerdo con la Norma Internacional de Contabilidad (NIC 12), y se revelará la información requerida por esta norma. 
    .cajon.color-acento-contenido.p-4
      p Con el fin de ampliar sus conocimientos sobre la temática, por favor revise el Marco Conceptual para la Información Financiera (Consejo de Normas Internacionales de Contabilidad, 2018), a través del siguiente enlace:
    .row.mt_5.px-4.mb-5
      .col-lg-4
      .col-lg-8  
        a.anexo.mb-4.mb-lg-0(:href="obtenerLink=('/downloads/MCIF.pdf')", target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg" alt="icono enlace")
          .anexo__texto
            p <b>Enlace web.</b> Marco Conceptual para la Información Financiera
    h3 Elementos
    p.mb-5 Para elaborar las políticas de la empresa es importante tener en cuenta:
    .row.mb-5
      .col-lg-6
        .row.align-items-start
          .col-auto
            img(src='@/assets/curso/t1/1.svg', alt='1')._64px
          .col-lg-10
            .tarjeta.tarjeta--gris.p-4.mb-4
              p Identificar el direccionamiento estratégico de la empresa: misión, visión, políticas, objetivos, principios, etc.
        .row.align-items-start
          .col-auto
            img(src='@/assets/curso/t1/2.svg', alt='1')._64px
          .col-lg-10
            .tarjeta.tarjeta--gris.p-4.mb-4
              p Analizar el entorno en el cual se desenvuelve y, de esta manera, determinar el tipo de transacciones y la importancia relativa.
        .row.align-items-start
          .col-auto
            img(src='@/assets/curso/t1/3.svg', alt='1')._64px
          .col-lg-10
            .tarjeta.tarjeta--gris.p-4.mb-4
              p Conocer e interpretar las Normas Internacionales de Información Financiera. De acuerdo con el grupo se aplicarán NIIF plenas, NIIF PYMES y microempresas.
        .row.align-items-start
          .col-auto
            img(src='@/assets/curso/t1/4.svg', alt='1')._64px
          .col-lg-10
            .tarjeta.tarjeta--gris.p-4.mb-4
              p Establecer las bases de reconocimiento, medición, presentación y revelación de los estados financieros, teniendo en cuenta los estándares internacionales y la dinámica del negocio.
        .row.align-items-start
          .col-auto
            img(src='@/assets/curso/t1/5.svg', alt='1')._64px
          .col-lg-10
            .tarjeta.tarjeta--gris.p-4.mb-4
              p Poseer el compendio de los estados financieros de propósito general.
      .col-lg-6
        figure
            img(src='@/assets/curso/t1/f32.svg', alt='Imagen relacionada')
    .cajon.color-primario.p-4.mb-5
      p.mb-0 Una vez se tiene claridad de la información, es importante iniciar con el diseño del manual de políticas contables. Para ello, se relacionan los siguientes elementos (Warren, Reeves y Duchac, 2016; Santos-Cid, 2018; Vilches, 2019; Angulo, 2018):
    .row.mb-5
      .col-lg-4.mx-auto
        figure
            img(src='@/assets/curso/t1/f33.svg', alt='Imagen relacionada')
      .col-lg-7
        ul.lista-ul.cac__ul
          li
            i.fas.fa-angle-right
            | Información de la empresa: se presenta la reseña histórica, direccionamiento estratégico, objeto social, proveedores, clientes, recursos.
          li
            i.fas.fa-angle-right
            | Marco normativo aplicable.

          li
            i.fas.fa-angle-right
            | Identificación y análisis de los requisitos del grupo de presentación de información financiera.

          li
            i.fas.fa-angle-right
            | Importancia del diseño e implementación.

          li
            i.fas.fa-angle-right
            | Responsabilidades del cargo, de quien prepara el manual de políticas contables.

          li
            i.fas.fa-angle-right
            | Definiciones.

          li
            i.fas.fa-angle-right
            | Objetivo del manual.

          li
            i.fas.fa-angle-right
            | Alcance.

          li
            i.fas.fa-angle-right
            | Análisis de las características fundamentales y de mejora.

          li
            i.fas.fa-angle-right
            | Definición de los elementos y cuentas de los elementos de los estados financieros.

          li
            i.fas.fa-angle-right
            | Reconocimiento de las cuentas de activo, pasivo, patrimonio, ingresos y gastos. Es importante desarrollarlo detalladamente, siendo descriptivo en las bases que se establecen de acuerdo con lo estipulado en la norma internacional, desagregando cada una de las cuentas.

          li
            i.fas.fa-angle-right
            | Medición inicial y posterior de cada una de las cuentas pertenecientes a los elementos de los estados financieros.
          li
            i.fas.fa-angle-right
            | Presentación y revelación de los estados financieros.
    .cajon.color-acento-contenido.p-4
      p.mb-0 <b>¡Importante!</b> Las políticas se crean teniendo en cuenta cada uno de los elementos que hacen parte de los estados financieros y la norma internacional aplicable en cada caso. Para cada elemento se deben establecer los criterios de reconocimiento, medición, presentación y revelación. Por ejemplo: en el caso del activo, se tienen en cuenta los criterios para el efectivo, deudores, inventarios, propiedad, planta y equipo, y los intangibles.











          
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
