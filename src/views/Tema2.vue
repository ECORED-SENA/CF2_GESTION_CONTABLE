<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Fundamentos contables
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    #t_2_1.titulo-segundo
      h2 2.1 Hecho contable: concepto, clasificación
    img(src="@/assets/curso/t2/i1.jpg" alt="Documentos sobre un escritorio").mb-5
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Concepto").p-4
        .col-lg-8
          .cajon.color-acento-contenido.p-4.mb-4
            p.mb-0 El hecho contable hace referencia a la transacción u operación realizada por la empresa que debe ser registrada de acuerdo con los criterios de reconocimiento y medición. Además, se deben tener en cuenta las políticas diseñadas por la entidad.
          p Esta parte es fundamental, aquí se tiene en cuenta si la transacción que se generó hace parte de un activo, pasivo, patrimonio, ingresos o gastos; de allí, la importancia de conocer la definición y características establecidas para su reconocimiento. De igual forma, se tienen en cuenta las bases de medición, las cuales se encuentran registradas en las políticas contables que fueron diseñadas conforme las directrices señaladas en la NIC 8 (CTCP, 2010).
        .col-lg-4
          img(src="@/assets/curso/t2/f1.svg" alt="Mujer viendo extractos bancarios").p-4
        .row.align-items-center
          .col-lg-4
            img(src="@/assets/curso/t2/f2.svg" alt="Mujer consultando documentos").p-4
          .col-lg-8
            p Se presenta con frecuencia la confusión entre una cuenta del activo con una cuenta del patrimonio o un pasivo con un gasto. Por lo anterior, es muy importante analizar los conceptos y, de esta manera, determinar su clasificación de acuerdo con los elementos de los estados financieros, seguidamente, registrarlos en la contabilidad. Cabe resaltar, que un error en la contabilización de estos hechos contables genera información no confiable para la toma de decisiones y se infringen las cualidades de la información contable. Por tanto, cualquier error u omisión debe generar un ajuste contable, con el fin de emitir información confiable y oportuna. Debe recordarse que el registro se hace de forma cronológica, en el idioma castellano, utilizando la moneda funcional.
            .cajon.color-primario.p-4
              p.mb-0 De acuerdo con lo anterior, se requiere de personal con suficiente experticia para llevar a cabo los procesos contables de forma óptima, garantizando, de esta manera, la representación fiel de las transacciones generadas. En consecuencia, se emitirán los estados financieros y respectivos análisis que permitan evaluar el desempeño de la entidad y, así mismo, se tomarán acciones para alcanzar los objetivos deseados.
      .row(titulo="Clasificación").p-4
        p Una vez se ha realizado la clasificación de los elementos que intervienen en las transacciones generadas en la empresa, se realiza la contabilización a través de un asiento contable, los cuales se clasifican de la siguiente manera (Warren, Reeves y Duchac, 2016; Santos-Cid, 2018; Vilches, 2019; Angulo, 2018):
        .crd_01.mb-4
          .crd_01__icon
            img(src="@/assets/curso/icon-libros.svg", alt="icono libros").class          
          .crd_01__txt
            h4 Asiento simple
            p Es cuando intervienen dos cuentas, una que se registra en el <b>debe</b> y la otra en el <b>haber</b>, dependiendo del tipo de operación y el elemento de los estados financieros que se haya clasificado.
            .cajon.color-primario.p-4.mb-4
              h5 Ejemplo:
              p.mb-0 Cuando se realiza una consignación bancaria, se utilizan dos cuentas del activo. Se debita la cuenta de banco, registrando el aumento y la cuenta de efectivo (caja), se acredita registrando la disminución, como se relaciona a continuación:
            .col-lg-8.mx-auto.mb-5
              .tabla-b.color-acento-contenido.mb-5.fblanco
                table
                  thead.text-center.fac
                    tr
                      th Cuenta
                      th Debe
                      th Haber
                  tbody
                    tr
                      th Bancos
                      td.text-right $ 1.000.000
                      td 
                    tr
                      th Caja
                      td.text-right 
                      td.text-right $ 1.000.000 
                    tr
                      th Total
                      td.text-right $ 1.000.000
                      td.text-right $ 1.000.000
            p De acuerdo con lo anterior, se observa que en el débito y crédito se registra el mismo valor, presentan un equilibrio en la transacción; es decir, se igualan débitos y créditos, lo que es denominado principio de partida doble.
        .crd_01.mb-4
          .crd_01__icon
            img(src="@/assets/curso/icon-libros.svg", alt="icono libros").class          
          .crd_01__txt
            h4 Asiento compuesto
            p Es la operación donde intervienen más de dos cuentas. Generalmente, sucede cuando se registran compras y ventas de productos, donde se relacionan cuentas como el impuesto sobre las ventas por pagar (IVA) y retenciones en la fuente por renta, retenciones del Impuesto de Industria y Comercio (ICA) o Retenciones de IVA.
            .cajon.color-primario.p-4.mb-4
              h5 Ejemplo:
              p.mb-0 Se realiza una venta por $10.000.000 a crédito, calcular IVA del 19 %.  En esta transacción intervienen tres cuentas: ingresos por actividad ordinarias (crédito) correspondiente a los ingresos, IVA generado (débito) de los pasivos y, finalmente, la cuenta de clientes (crédito) perteneciente al activo. De acuerdo con la naturaleza de las cuentas y si se presenta un aumento o disminución, se registra la transacción mediante el asiento contable como se observa a continuación:
            .col-lg-8.mx-auto.mb-5
              .tabla-b.color-acento-contenido.mb-5.fblanco
                table
                  thead.text-center.fac
                    tr
                      th Cuenta
                      th Debe
                      th Haber
                  tbody
                    tr
                      th Clientes
                      td.text-right $ 11.900.000
                      td 
                    tr
                      th IVA generado
                      td.text-right 
                      td.text-right $ 1.900.000 
                    tr
                      th Ingresos por actividades ordinarias
                      td.text-right 
                      td.text-right $ 10.000.000        
                    tr
                      th Total
                      td.text-right $ 11.900.000
                      td.text-right $ 11.900.000
                figcaption Fuente: elaboración propia.    
            p Es importante resaltar que en el registro anterior se aplica nuevamente el principio de partida doble, donde se registra el ingreso por el valor monetario de la transacción ($10.000.000), posteriormente se calcula el valor del IVA correspondiente a la tarifa vigente del año 2020 del 19 %, el cual da como resultado $1.900.000. Finalmente, se determina el valor de clientes, donde se suma el valor del ingreso y el IVA, teniendo en cuenta que este último aumenta el valor del producto y, por ende, incrementa la cuenta por cobrar (clientes), donde se registra un valor total de $11.900.000.
    Separador
    #t_2_2.titulo-segundo
      h2 2.2 Cuenta: concepto y clasificación
    .bloque-texto-a.color-primario.p-4.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0.mx-auto
          img(src="@/assets/curso/t2/f3.svg" alt="Mujer y documentos")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 En el numeral anterior se habló de hechos económicos y la forma de registrar una transacción de acuerdo con la clasificación de este. Por ende, se continúan fortaleciendo estos conceptos mediante la orientación de la definición de cuenta y su clasificación.
    h3 Cuenta
    p A través de las cuentas se clasifican y registran las transacciones. Es el nombre con el cual se registran de forma ordenada las diferentes operaciones comerciales generadas en una empresa. Es esencial que estas operaciones se elaboren en el momento que suceden; contribuyendo así a la obtención de información contable comprensible y oportuna (Warren, Reeves y Duchac, 2016; Santos-Cid, 2018; Vilches, 2019; Angulo, 2018).
    p.mb-5 La cuenta se encuentra integrada por los siguientes elementos:
    .row.justify-content-between.mx-auto.text-center.mb-5
      .col-lg-1
      .col-lg-3.p-5.tartbg
        img(src="@/assets/curso/t2/f4.svg" alt="Nombre").mb-4._64px.mx-auto
        h4 Nombre
        p.mb-0 Debe registrarse de forma completa de acuerdo con la asignación establecida.
      .col-lg-3.p-5.tartbg
        img(src="@/assets/curso/t2/f5.svg" alt="Debe").mb-4._64px.mx-auto
        h4 El debe
        p Se registra en el lado izquierdo para indicar los débitos de la transacción.
      .col-lg-3.p-5.tartbg
        img(src="@/assets/curso/t2/f6.svg" alt="Haber").mb-4._64px.mx-auto
        h4 El haber
        p Se relaciona en la parte derecha para registrar los créditos de la operación comercial.
      .col-lg-1
    p Cuando se registran las operaciones comerciales en el comprobante diario se procede a determinar el saldo de las cuentas. En caso de manejar software contable, se posibilita extraer los auxiliares de cada cuenta según la necesidad que surja para su análisis o consulta (Warren, Reeves y Duchac, 2016; Santos-Cid, 2018; Vilches, 2019; Angulo, 2018). 
    .cajon.color-acento-contenido.p-4.mb-5
      p.mb-0 Determinar el saldo significa restar los valores monetarios que se encuentran registrados en el debe y en el haber. Esta acción se realiza con la misma cuenta. Por ejemplo, se desea conocer el saldo de la cuenta de caja, entonces se revisan todos los movimientos débitos y los créditos; seguidamente, se determina la diferencia y el resultado de esta operación es el saldo de la cuenta caja; este saldo refleja el dinero con que se cuenta en efectivo y, por ser del activo, su naturaleza es débito.
    .row.align-items-center
      .col-lg-7
        h3 Clasificación de las cuentas
        p En la primera unidad temática se analizó el concepto de los elementos de los estados financieros, conforme a lo estipulado en el Marco Conceptual de Información Financiera (CTCP, 2010). A partir de ello, se profundizó en el concepto y se analizó su naturaleza con el fin de registrar la transacción de forma correcta y, de esta manera generar reportes útiles para la administración.  
        .cajon.color-primario.p-4.mb-5
          p.mb-0 Las cuentas de acuerdo con su naturaleza se encuentran clasificadas en reales o de balance, y nominales o de resultado (Warren, Reeves y Duchac, 2016; Santos-Cid, 2018; Vilches, 2019; Angulo, 2018; CTCP, 2010):
      .col-lg-4.mx-auto
        img(src="@/assets/curso/t2/f7.svg" alt="Persona trabajando en computador")
    h3 Cuentas reales o del balance (situación financiera):
    p.mb-5 Son aquellas que intervienen en la elaboración del Estado de situación Financiera. Entre ellas, se encuentran: activo, pasivo y patrimonio.
    .row.align-items-center.mb-5
      .col-lg-4.mx-auto
        img(src="@/assets/curso/t2/f8.svg" alt="Mujer llevando documentos")
      .col-lg-7
        LineaTiempoD.color-acento-contenido.mb-5
          .row(numero="1" titulo="Activo")
            ul.lista-ul.ms-5.cac__ul
              li
                i.fas.fa-angle-right
                | Recurso controlado por la entidad.
              li
                i.fas.fa-angle-right
                | Surge de eventos pasados. 
              li
                i.fas.fa-angle-right
                | En un futuro se espera recibir beneficios económicos.
              li
                i.fas.fa-angle-right
                | Es fiable su valor.
            h5 Movimiento de las cuentas del activo:
            ul.lista-ul.ms-5.cac__ul
              li
                i.fas.fa-angle-right
                | Inician y aumentan en el débito.
              li
                i.fas.fa-angle-right
                | Disminuyen y se cancelan en el crédito.
              li
                i.fas.fa-angle-right
                | Su saldo es débito.
          .row(numero="2" titulo="Pasivo")
            ul.lista-ul.ms-5.cac__ul
              li
                i.fas.fa-angle-right
                | Obligación presente de la entidad.
              li
                i.fas.fa-angle-right
                | Surge de eventos pasados. 
              li
                i.fas.fa-angle-right
                | Se espera desprender de beneficios económicos cuando se cancele parcial o totalmente la deuda.
              li
                i.fas.fa-angle-right
                | Su valor sea fiable.
            h5 Movimiento de las cuentas del pasivo:
            ul.lista-ul.ms-5.cac__ul
              li
                i.fas.fa-angle-right
                | Inician y aumentan en el crédito.
              li
                i.fas.fa-angle-right
                | Disminuyen y se cancelan en el débito.
              li
                i.fas.fa-angle-right
                | Su saldo es crédito.
          .row(numero="3" titulo="Patrimonio")
            ul.lista-ul.ms-5.cac__ul
              li
                i.fas.fa-angle-right
                | Es la diferencia entre el activo y pasivo.
            h5 Movimiento de las cuentas del patrimonio:
            ul.lista-ul.ms-5.cac__ul
              li
                i.fas.fa-angle-right
                | Inician y aumentan en el crédito.
              li
                i.fas.fa-angle-right
                | Disminuyen y se cancelan en el débito.
              li
                i.fas.fa-angle-right
                | Su saldo es crédito.
    h3 Cuentas nominales o de resultado:
    p.mb-5 Denominadas de esta forma porque pertenecen al estado de resultados. Son aquellas cuentas que determinan la utilidad o pérdida del ejercicio al finalizar el periodo contable. Se componen de las cuentas de ingresos, gastos y costos de venta o producción, de acuerdo con el tipo de empresa y la norma local (Colombia), que se relaciona en el Decreto 2649 de 1993. Considérese que bajo normas internacionales no se relaciona la figura de costos, pues estos hacen parte de los gastos, los cuales disminuyen los beneficios económicos. Sin embargo, se relaciona su concepto para dar claridad al contenido.
    .row.align-items-center.mb-5
      .col-lg-7
        LineaTiempoD.color-acento-contenido.mb-5
          .row(numero="1" titulo="Ingresos")
            ul.lista-ul.ms-5.cac__ul
              li
                i.fas.fa-angle-right
                | Hace referencia a los incrementos de los beneficios económicos.
              li
                i.fas.fa-angle-right
                | Su incremento aumenta el patrimonio neto. 
            h5 Movimiento de las cuentas  de ingresos:
            ul.lista-ul.ms-5.cac__ul
              li
                i.fas.fa-angle-right
                | Inician y aumentan en el crédito.

              li
                i.fas.fa-angle-right
                | Disminuyen y se cancelan en el débito.
              li
                i.fas.fa-angle-right
                | Su saldo es crédito.
          .row(numero="2" titulo="Gastos")
            ul.lista-ul.ms-5.cac__ul
              li
                i.fas.fa-angle-right
                | Relaciona las disminuciones de los beneficios económicos.
              li
                i.fas.fa-angle-right
                | Dan como resultado disminuciones en el patrimonio neto.
            h5 Movimiento de las cuentas  de gastos:
            ul.lista-ul.ms-5.cac__ul
              li
                i.fas.fa-angle-right
                | Inician y aumentan en el débito.
              li
                i.fas.fa-angle-right
                | Disminuyen y se cancelan en el crédito.
              li
                i.fas.fa-angle-right
                | Su saldo es débito.
          .row(numero="3" titulo="Costos")
            p Hace referencia a la inversión que se realiza para adquirir el producto que se desea ofertar o se pretender fabricar, depende del objeto social de la empresa. Se clasifican en costos de ventas y costos de producción:
            ul.lista-ul.ms-5.cac__ul
              li
                i.fas.fa-angle-right
                | Costos de ventas: son aplicados por las empresas comerciales, que se dedican a la compra y venta de bienes. El costo de estas empresas es el valor de adquisición del bien.
              li
                i.fas.fa-angle-right
                | Costos de producción: son calculados por las empresas industriales que se encargan de transformar materia prima en producto terminado. Allí intervienen los elementos del costo: Materia Prima Directa (MPD), Mano de Obra Directa (MOD), Costos Indirectos de Fabricación (CIF).
            h5 Movimiento de las cuentas  de costos:
            ul.lista-ul.ms-5.cac__ul
              li
                i.fas.fa-angle-right
                | Inician y aumentan en el débito.
              li
                i.fas.fa-angle-right
                | Disminuyen y se cancelan en el crédito.
              li
                i.fas.fa-angle-right
                | Su saldo es débito.
      .col-lg-4.mx-auto
        img(src="@/assets/curso/t2/f9.svg" alt="Mujer consultando documentos")
    p.mb-5 Finalmente, para resumir el movimiento y naturaleza de las cuentas, lo invitamos a revisar el siguiente gráfico:
    .col-lg-7.mx-auto.mb-5
      .tabla-b.color-acento-contenido.mb-5.fblanco
        table.text-center
          thead.fac
            tr
              th Clases de cuentas
              th Aumento
              th Disminuye
          tbody
            tr
              td  Activo
              td  Débito
              td  Crédito
            tr
              td  Pasivo
              td  Crédito
              td Débito
            tr
              td  Patrimonio
              td  Crédito
              td Débito
            tr
              td  Ingresos
              td  Crédito
              td Débito
            tr
              td  Gastos
              td  Débito
              td  Crédito
            tr
              td  Costos
              td  Débito
              td  Crédito
    p Para lograr uniformidad en el momento de registrar las transacciones realizadas por las empresas y, dar claridad y confiabilidad en dichos registros se crea el Plan Único de Cuentas -PUC-. Por este motivo, en Colombia existen 19 PUC, entre ellos se encuentran el decreto 2650 de 1993, que es utilizado para comerciantes.
    .row.align-items-center.mb-5
      .col-lg-3.mx-auto
        img(src="@/assets/curso/t2/f10.svg" alt="Dos personas con una tablet")
      .col-lg-8
        p El PUC se encuentra integrado por el catálogo de cuentas, descripciones y dinámicas que orientan y facilitan el registro de las transacciones generadas.
        .cajon.color-primario.p-4
          p.mb-0 En coherencia con las normas internacionales no se utiliza el Plan Único de Cuentas. Sin embargo, en Colombia las empresas siguen utilizándolo. Los PUC han sido modificados conforme a las necesidades de las empresas a través del tiempo. En algunos casos se incorporan o eliminan cuentas. También, se cambian nombres y códigos con el fin de generar estados financieros que cumplan con la taxonomía XBRL.
    p.mb-5 La taxonomía XBRL (eXtensible Business Reporting Language) es una norma que se usa para comunicar información financiera entre preparadores y usuarios de la información financiera. La Fundación IFRS es responsable del desarrollo de la representación XBRL de las NIIF - incluyendo las Normas NIC, las Interpretaciones CINIIF y la Norma NIIF para las PYMES - emitida por el Consejo de Normas Internacionales de Contabilidad (2018), conocida como la Taxonomía NIIF, la cual establece (IFRS Foundation, 2019): 
    .row.justify-content-between.mx-auto.text-center.mb-5
      .col-lg-1
      .col-lg-3.p-5.tartbg
        img(src="@/assets/curso/t2/f11.svg" alt="Nombre").mb-4._80px.mx-auto
        p La jerarquía de la taxonomía y los elementos que la componen. 
      .col-lg-3.p-5.tartbg
        img(src="@/assets/curso/t2/f12.svg" alt="Debe").mb-4._80px.mx-auto
        p El formato requerido de estos elementos, tales como texto, valores monetarios, etc. 
      .col-lg-3.p-5.tartbg
        img(src="@/assets/curso/t2/f13.svg" alt="Haber").mb-4._80px.mx-auto
        p La referencia a las Normas NIIF con las que se relacionan estos elementos. 
      .col-lg-1
    h3 Catálogo de cuentas
    p.mb-5 Allí se encuentran registradas las cuentas con sus respectivos niveles, los cuales se revisan a continuación con un ejemplo:
    .col-lg-7.mx-auto.mb-5
      .tabla-b.color-acento-contenido.mb-5.fblanco
        table.text-center
          thead.fac
            tr
              td Clase
              td El primer dígito
              td 1 ACTIVO
          tbody
            tr
              th Grupo
              td Los dos primeros dígitos.
              td 11 Disponible.
            tr
              th Cuenta
              td Los cuatro primeros dígitos.
              td 1110 Bancos.
            tr
              th subcuenta
              td Los seis primeros dígitos.
              td 111005 Bancos nacionales.
            tr
              th Auxiliares
              td Con siete o más dígitos.
              td 11100501 Banco BBVA.
        figcaption Fuente: Decreto 2650 de 1993
    p.mb-5 Las clases que expresan cada dígito son:
    .col-lg-7.mx-auto.mb-5
      .tabla-b.color-acento-contenido.mb-5.fblanco
        table.text-center
          thead.fac
            tr
              th Clase
              th
          tbody
            tr
              td Clase 1
              td Activo.
            tr
              td Clase 2
              td Pasivo.
            tr
              td Clase 3
              td Patrimonio.
            tr
              td Clase 4
              td Ingresos.
            tr
              td Clase 5
              td Gastos.
            tr
              td Clase 6
              td Costos de ventas.
            tr
              td Clase 7
              td Costos de producción.
        figcaption Fuente: Decreto 2650 de 1993
    Separador
    #t_2_3.titulo-segundo
      h2 2.3 Partida doble
    .row.align-items-center.mb-5
      .col-lg-7
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 Como se mencionó en el tema sobre hechos contables, es importante que, al momento de registrar la transacción, se afecten por lo menos dos cuentas, donde una se debita y la otra se acredita. Estas deben relacionar el mismo valor, con el fin de que se aplique el principio de partida doble. Este principio consiste en la igualdad o equilibrio que deben presentar las operaciones, donde existe un deudor y un acreedor con el fin de reflejar la realidad económica de la empresa.
        p En el caso de que se presenten más de dos cuentas, como sucede en el asiento compuesto, de igual forma los débitos y créditos se deben igualar. Por ende, se clasifican y registran los elementos de acuerdo con la operación comercial y naturaleza de las cuentas.
      .col-lg-4.mx-auto
        img(src='@/assets/curso/t2/f16.svg' alt="Personas realizando una transacción")
    .cajon.color-primario.p-4.mb-5
      p.mb-0 <b>Ejemplo 1.</b> Se adquiere mercancía por valor de $2.000.000 a crédito, se aplica IVA a la tarifa del 19 %.
    .col-lg-7.mx-auto.mb-5
      .tabla-b.color-acento-contenido.mb-5.fblanco
        table.text-center
          thead.fac
            tr
              th Cuenta
              th Debe
              th Haber
          tbody
            tr
              td Inventarios
              td $ 2.000.000
              td 
            tr
              td IVA descontable
              td $ 380.000
              td 
            tr
              td Proveedores Nacionales
              td
              td $ 2.380.000
            tr
              td Total
              td $ 2.380.000
              td $  2.380.000
        figcaption Fuente: elaboración propia
    p En el ejemplo anterior, se tiene el valor del inventario por $2.000.000, se calcula el IVA del 19 % sobre este valor, dando el resultado de $380.000. Finalmente, se determina el total de la cuenta por pagar (proveedores nacionales); donde se suma el valor del inventario y el IVA. Esto, teniendo en cuenta que el IVA incrementa el valor del producto que, como su nombre lo indica, es un valor agregado. Así mismo, se observa que se cumple con el principio de partida doble, reflejando igualdad entre el debe y haber por valor de $2.380.000.
    .cajon.color-acento-contenido.p-4.mb-5
      p.mb-0 <b>Ejemplo 2.</b> El 15 de septiembre de 2020, se adquiere un computador por valor de $3.800.000, para uso en la empresa, se cancela a 30 días.
    .row.mb-5
      .col-lg-7.mx-auto.mb-5
        .tabla-b.color-acento-contenido.fblanco
          table.text-center
            thead.fac
              tr
                th Cuenta
                th Debe
                th Haber
            tbody
              tr
                td Equipo computación
                td $3.800.000	
                td 
              tr 
                td Acreedores varios
                td 
                td $3.800.000
              tr 
                td Total
                td $3.800.000
                td $3.800.000
          figcaption Fuente: elaboración propia
    p Se registra el activo - equipo de computación, presentando aumento (débito) y acreedores varios en el pasivo (crédito) incrementando el valor de la deuda.
    .cajon.color-primario.p-4.mb-5
      p.mb-0 <b>Ejemplo 3.</b> Se adquiere mercancía por valor de $2.000.000 a crédito, se aplica IVA a la tarifa del 19 %.
    .col-lg-7.mx-auto.mb-5
      .tabla-b.color-acento-contenido.mb-5.fblanco
        table.text-center
          thead.fac
            tr
              th Cuenta
              th Debe
              th Haber
          tbody
            tr
              td Acreedores varios
              td $ 3.800.000
              td 
            tr
              td Bancos
              td
              td $ 3.800.000
            tr
              td Total
              td $ 3.800.000
              td $ 3.800.000
        figcaption Fuente: elaboración propia
    p Teniendo en cuenta que se cancela la deuda, disminuye el pasivo- acreedores varios (débito) y a su vez la cuenta de banco (crédito), considerando que se presenta una salida de dinero. Cabe resaltar, que esta clase de cuentas tienen naturaleza diferente.
    .cajon.color-acento-contenido.p-4.mb-5
      p.mb-0 <b>Ejemplo 4.</b> Se constituye la empresa Sandles SAS, un socio aporta $10.000.000 en efectivo y el segundo socio aporta maquinaria y equipo por $10.000.000.
    .col-lg-7.mx-auto.mb-5
      .tabla-b.color-acento-contenido.mb-5.fblanco
        table.text-center
          thead.fac
            tr
              th Cuenta
              th Debe
              th Haber
          tbody
            tr
              td Efectivo
              td $ 10.000.000	
              td 
            tr
              td Maquinaria y equipo
              td $ 10.000.000
              td
            tr 
              td Aportes sociales
              td 
              td $ 20.000.000
            tr
              td Total
              td $ 20.000.000
              td $ 20.000.000
        figcaption Fuente: elaboración propia
    p Se registra el aumento (débito) del activo en las cuentas de efectivo y maquinaria de equipo, a su vez, el aumento (crédito) en la cuenta de patrimonio-aportes sociales.
    .cajon.color-primario.p-4.mb-5
      p.mb-0 <b>Ejemplo 5:</b> La empresa cancela arriendo del mes de octubre por valor de $800.000 en efectivo.
    .col-lg-7.mx-auto.mb-5
      .tabla-b.color-acento-contenido.mb-5.fblanco
        table.text-center
          thead.fac
            tr
              th Cuenta
              th Debe
              th Haber
          tbody
            tr
              td Gastos de arrendamiento
              td $800.000
              td 
            tr
              td Efectivo
              td 
              td $800.000
            tr
              td Total
              td $800.000
              td $800.000
        figcaption Fuente: elaboración propia
    p Recuerde que, para realizar el registro de las operaciones en los comprobantes y libros contables, es indispensable tener en cuenta:
    .row.align-items-center.mb-5
      .col-lg-3.mx-auto
        img(src="@/assets/curso/t2/f17.svg" alt="Mujer en registradora")
      .col-lg-7
        .row.align-items-start
          .col-auto
            img(src='@/assets/curso/t1/1.svg', alt='1')._64px
          .col-lg-10
            .tarjeta.tarjeta--gris.p-4.mb-4
              p Identificar la transacción y clasificar las cuentas que se utilizarán, realizando el debido reconocimiento conforme el concepto y características establecidas en las normas internacionales.
        .row.align-items-start
          .col-auto
            img(src='@/assets/curso/t1/2.svg', alt='1')._64px
          .col-lg-10
            .tarjeta.tarjeta--gris.p-4.mb-4
              p De acuerdo con la transacción y naturaleza de las cuentas establecer cuál se debita y cuál se acredita.
        .row.align-items-start
          .col-auto
            img(src='@/assets/curso/t1/3.svg', alt='1')._64px
          .col-lg-10
            .tarjeta.tarjeta--gris.p-4.mb-4
              p Verificar la aplicación del principio de partida doble, donde el valor de los débitos sea igual al de los créditos.
    Separador
    #t_2_4.titulo-segundo
      h2 2.4 Ecuación contable
    .row.mb-5
      .col-lg-6
        img(src="@/assets/curso/t2/f14.svg" alt="Persona en escriorio viendo tablero")
      .col-lg-6
        p El principio de partida doble contribuye al cumplimiento de la ecuación contable o patrimonial, teniendo en cuenta que al presentarse la igualdad entre los débitos y los créditos se reflejará el equilibrio de las cuentas de activo, pasivo y patrimonio, denominadas comúnmente como cuentas reales o de balance. Estas son utilizadas para elaborar el estado de situación financiera (Tapia y Jiménez, 2018; Cuaspa, 2013; Vilches; 2019; Angulo, 2018).
        img.mb-4(src="@/assets/curso/t2/f15.svg" alt="Activo, pasivo, patrimonio")
        p La ecuación contable se encuentra representada de la siguiente forma:
        img(src="@/assets/curso/t2/activo.svg" alt="Activo").px-5
    .row.mb-5
      .col-lg-6
        p El principio de partida doble contribuye al cumplimiento de la ecuación contable o patrimonial, teniendo en cuenta que al presentarse la igualdad entre los débitos y los créditos se reflejará el equilibrio de las cuentas de activo, pasivo y patrimonio, denominadas comúnmente como cuentas reales o de balance. Estas son utilizadas para elaborar el estado de situación financiera (Tapia y Jiménez, 2018; Cuaspa, 2013; Vilches; 2019; Angulo, 2018).
        img.mb-4(src="@/assets/curso/t2/pasivo.svg" alt="Pasivo").px-5
        img(src="@/assets/curso/t2/patrimonio.svg" alt="Patrimonio").px-5
      .col-lg-5.mx-auto
        img(src="@/assets/curso/t2/f19.svg" alt="Persona en escriorio viendo documentacion")
    .cajon.color-primario.p-4.mb-5
      p.mb-0 <b>Ejemplo 1.</b> La empresa Surtimodas SAS, posee la siguiente información a corte de 31 de diciembre de 2020. Se solicita determinar la ecuación contable:
    .col-lg-7.mx-auto.mb-5
      .tabla-b.color-acento-contenido.mb-5.fblanco
        table.text-center
          thead.fac
            tr
              th Cuenta
              th Valor
          tbody
            tr
              td Efectivo	 
              td $2.500.000 
            tr
              td Deudores	 
              td $2.000.000 
            tr
              td Inventarios	 
              td $2.800.000 
            tr
              td Propiedad, planta y equipo	 
              td $6.500.000 
            tr
              td Proveedores nacionales	 
              td $8.800.000 
            tr
              td Capital	 
              td $5.000.000 
            tr
              td Ingresos actividades ordinarias	 
              td $10.000.000 
            tr
              td Gastos
              td $4.000.000
        figcaption Fuente: elaboración propia
    p La ecuación que debe verificarse es la siguiente:
    .col-lg-5.mx-auto.mb-5
      img(src="@/assets/curso/t2/activo.svg" alt="Activo")
    .tabla-b.color-acento-contenido.mb-5.fblanco
      table
        tbody
          tr
            th <img src="@/assets/curso/t2/tabla1.svg" alt="Tabla 1"/>
    p Para determinar la ecuación contable, se clasifican los elementos de los estados financieros correspondientes a las cuentas de activo, pasivo y patrimonio. Se omiten las cuentas relacionadas de ingresos y gastos en la información suministrada, teniendo en cuenta que estas se incorporan en el estado de resultados integral. Así mismo, se observa que el valor de activos correspondiente a $13.800.000, es igual a la sumatoria de pasivo y patrimonio, cumpliendo con lo estipulado en la ecuación.
    .cajon.color-acento-contenido.p-4.mb-5
      p.mb-0 <b>Ejemplo 2.</b> La empresa Carvajal SAS, suministra la siguiente información del periodo contable 2020. Determine el patrimonio de la empresa:
    .col-lg-7.mx-auto.mb-5
      .tabla-b.color-acento-contenido.mb-5.fblanco
        table.text-center
          thead.fac
            tr
              th Cuenta
              th Valor
          tbody
            tr
              td Efectivo	 
              td $ 5.000.000 
            tr
              td Deudores	 
              td $ 3.500.000 
            tr
              td Inventarios	 
              td $ 2.000.000 
            tr
              td Propiedad, planta y equipo	 
              td $ 9.000.000 
            tr
              td obligaciones financieras	 
              td $ 15.000.000 
            tr
              td Capital
              td ? 
        figcaption Fuente: elaboración propia
    p La ecuación aplicable en este caso es la siguiente:
    .col-lg-5.mx-auto.mb-5
      img(src="@/assets/curso/t2/patrimonio.svg" alt="Patrimonio")
    .tabla-b.color-acento-contenido.mb-5.fblanco
      table
        tbody
          tr
            th <img src="@/assets/curso/t2/tabla1.svg" alt="Tabla 1"/>
    p Podemos observar que se refleja la ecuación contable, donde se tiene:
    .row.mb-5.text-center.texto-blanco
      .col-lg-4.fg
        h5 Patrimonio = Activo – Pasivo
      .col-lg-4.fg
        h5 Patrimonio = $19.500.000 - $15.000.000
      .col-lg-4.fg
        h5 Patrimonio = $4.500.000
    .cajon.color-acento-contenido.p-4
      p Con el fin de ampliar sus conocimientos sobre la temática, por favor revise las referencias bibliográficas propuestas de la biblioteca SENA, entre ellas se encuentra:
      p.mb-0 <b>Angulo, U. (2018). Contabilidad financiera, correlacionado con NIIF. Ediciones de la U. Bogotá: Colombia. </b>
</template>

<script>
export default {
  name: 'Tema2',
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
