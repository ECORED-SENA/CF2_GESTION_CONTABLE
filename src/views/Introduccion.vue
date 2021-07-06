<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-2.mb-4.mb-lg-0.mx-auto
          img(src='@/assets/curso/if1.svg' alt='Personas y barras de análisis')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p En el marco de la globalización, donde se plantean nuevos objetivos empresariales, surge la necesidad de mantener un sistema contable comprensible, oportuno y confiable, que contribuya con la adecuada toma de decisiones por parte de la administración. Esto explica por qué la contabilidad toma mayor importancia en las empresas en la actualidad y se hace indispensable conocer su historia, cualidades, objetivos y criterios para el reconocimiento de los hechos económicos, conforme con las Normas Internacionales de Información Financiera (NIIF).
    .row.align-items-center.mb-5
      .col-lg-7
        p Dependiendo del tipo de empresa, se aplican las normas pertinentes en desarrollo de su objeto social y el grupo de presentación de información financiera. Por ello, es indispensable el diseño e implementación de políticas contables que garanticen la uniformidad de la información contable, de acuerdo con los estándares internacionales planteados en las NIIF.
        .cajon.color-primario.p-4
          p.mb-0 Este componente formativo lo orientará en el desarrollo de los procesos contables. Se demanda del aprendiz análisis y comprensión del contenido para lograr un aprendizaje significativo.
      .col-lg-5
        img(src='@/assets/curso/if2.svg' alt='Zona industrial')















</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
