<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="fade-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4(data-aos="fade") Para dar inicio al componente formativo que corresponde al complementario de Asesoría y servicio al cliente en el mercado financiero, escuche y observe el siguiente video.

    .video.mb-4(data-aos="fade-down")
      iframe(width="560" height="315" src="https://www.youtube.com/embed/kuwMBM6jON8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-4 Para abordar las temáticas en este componente formativo, se hace necesario reconocer algunos elementos que son claves en su desarrollo; de esta manera, observe:

    .bg01.p-4(data-aos="fade")
      SlyderA(tipo="b")
        .row.justify-content-between.p-4
          .col-lg-4.mb-4.mb-lg-0
            p El aprendiz adquirirá conocimientos relacionados con el consumidor financiero, productos financieros, portafolio de productos financieros, canales de comunicación, y cómo llegar al consumidor financiero por medio de unas adecuadas técnicas de comunicación, ventas y canales de distribución.        
          .col-lg-7
            figure
              img.br01(src='@/assets/curso/temas/t0_02.jpg', alt='Texto que describa la imagen')
        
        .row.justify-content-between.p-4
          .col-lg-4.mb-4.mb-lg-0
            p En cuanto a los canales de distribución, se abordará la utilidad de las tecnologías de la información y la comunicación para estar en contacto con el consumidor e interactuar con él.   
          .col-lg-7
            figure
              img.br01(src='@/assets/curso/temas/t0_03.jpg', alt='Texto que describa la imagen')
        
        .row.justify-content-between.p-4
          .col-lg-4.mb-4.mb-lg-0
            p Estos conocimientos permitirán que el asesor de productos financieros adquiera habilidades de comunicación y ventas con las cuales podrá interactuar con el consumidor, abordar sus necesidades y estructurar un adecuado portafolio de servicios. 
          .col-lg-7
            figure
              img.br01(src='@/assets/curso/temas/t0_04.jpg', alt='Texto que describa la imagen')
        
        .row.justify-content-between.p-4
          .col-lg-4.mb-4.mb-lg-0
            p Que permita que el consumidor adquiera uno de los productos ofertados por el asesor. Se insiste en la importancia de realizar seguimiento a las ventas, con el objetivo de indagar si se logró la expectativa del consumidor y la fidelización del mismo con la entidad.
          .col-lg-7
            figure
              img.br01(src='@/assets/curso/temas/t0_05.jpg', alt='Texto que describa la imagen')
        
        .row.justify-content-between.p-4
          .col-lg-4.mb-4.mb-lg-0
            p Un adecuado conocimiento e implementación de las técnicas y procesos abordados durante la formación le permitirán adquirir habilidades de comunicación, venta de productos financieros y estructuración de productos financieros, por lo cual se debe abordar el componente formativo desde la óptica del autoaprendizaje.
          .col-lg-7
            figure
              img.br01(src='@/assets/curso/temas/t0_06.jpg', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
