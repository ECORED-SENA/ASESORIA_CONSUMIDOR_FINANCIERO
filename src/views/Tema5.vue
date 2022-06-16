<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.BRtop.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade-up")
      .titulo-principal__numero
        span 5
      h1 Producto financiero
    
    .row.align-items-center.mb-4(data-aos="fade")
      .col-lg-7.mb-4.mb-lg-0
        p Los productos financieros están creados como instrumentos que permiten a las personas naturales o jurídicas realizar diferentes operaciones, como ahorrar e invertir; estos productos son intangibles y se encuentran respaldados por un contrato.

        .cajon.color-acento-contenido.p-4
          p.mb-0 La #[strong Ley 1328 de 2009, Título I, Capítulo I], define productos y servicios como las operaciones legalmente autorizadas que se instrumentan en un contrato celebrado con el cliente o que tienen origen en la ley. Se entiende por servicios aquellas actividades conexas al desarrollo de las correspondientes operaciones y que se suministran a los consumidores financieros; y por consumidor financiero, todo cliente, usuario o cliente potencial de las entidades vigiladas.
      .col-lg-5(data-aos="flip-right")
        figure
          img(src='@/assets/curso/temas/t5_01.jpg', alt='Recopilación de información')
    
  .container.bg03.tarjeta--blanca.px-4.pt-5.px-md-5.BRbtn.mb-5
    
    .row.align-items-center.mb-4(data-aos="fade-up")
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/t5_02.svg', alt='Recolección de información')
      .col-lg-7
        p Dentro de los productos financieros ofrecidos por los bancos, se encuentran:
        ul.lista-ul--color
          li(data-aos="fade-left")
            i.fas.fa-donate
            | Cuentas de ahorro
          li(data-aos="fade-left")
            i.fas.fa-donate
            | Cuentas corrientes
          li(data-aos="fade-left")
            i.fas.fa-donate
            | Certificados de Depósito a Término (CDT)
          li(data-aos="fade-left")
            i.fas.fa-donate
            | Seguros
          li(data-aos="fade-left")
            i.fas.fa-donate
            | Créditos (consumo, hipotecario, automotriz, estudiantil, leasing)
          li(data-aos="fade-left")
            i.fas.fa-donate
            | Tarjetas de crédito 
          li(data-aos="fade-left")
            i.fas.fa-donate
            | Inversiones
          li(data-aos="fade-left")
            i.fas.fa-donate
            | Pensiones
          li(data-aos="fade-left")
            i.fas.fa-donate
            | Cesantías   
  
    .row.align-items-center.mb-4(data-aos="fade-down")
      .col-lg-7.mb-4.mb-lg-0
        p Existen otros productos que pueden ser ofrecidos por otras entidades financieras, como corredores de bolsa, los cuales ofrecen servicios de investigación de mercados en los cuales se pueden realizar inversiones en acciones y valores. Otras entidades que ofrecen servicios financieros son proveedores de seguros, entidades del Estado a través del Banco de la República, como la emisión de bonos del tesoro, y franquicias de tarjetas de crédito.

        p.mb-0 Las entidades financieras también ofrecen servicios de pagos y retiros, para los cuales emplean medios como oficinas principales o bancas digitales, y nuevas estrategias para estar más cerca del consumidor, como los conocidos Puntos de Atención Cercanos (PAC), los cuales se encuentran en tiendas, droguerías, panaderías, supermercados, papelerías, entre otros establecimientos. 
      .col-lg-5(data-aos="flip-left")
        figure
          img(src='@/assets/curso/temas/t5_03.png', alt='servicios de pagos y retiros')
    
    .row.align-items-center.mb-4(data-aos="fade-up")
      .col-lg-5.mb-4.mb-lg-0(data-aos="flip-right")
        figure
          img(src='@/assets/curso/temas/t5_04.png', alt='portafolio de productos')
      .col-lg-7
        p Por otra parte, el portafolio de productos es un medio (documento, presentación, página web) donde se da a conocer la entidad y se detallan las características de la oferta comercial, lo cual va dirigido a consumidores activos y consumidores potenciales. El portafolio se encuentra diseñado de acuerdo con las políticas de cada organización.

        p De acuerdo con las necesidades del consumidor, se diseñan y ofrecen los servicios del portafolio de productos, el cual inicia su estructuración en el momento en que se realiza la atención y se identifica el interés del consumidor, que puede ser de ahorro o inversión.

        p Esta estructuración depende de cada organización, la cual estará encargada de analizar el nivel del riesgo tanto para la entidad como para el consumidor; si la necesidad del cliente es inversión, la construcción de este portafolio puede estar centrada en créditos hipotecarios o fondos de inversión, todo depende de la necesidad del cliente, de lo que él ha comunicado a la entidad.
    
    p(data-aos="fade") Con la estructuración del portafolio, se debe tener en cuenta también el riesgo a asumir, el cual se verá reflejado en las tasas, el plazo y los costos asociados al servicio.

    p(data-aos="fade-up") Una vez presentado el portafolio de acuerdo con el requerimiento del consumidor, se debe persuadir para que adquiera uno de los productos ofrecidos dentro del portafolio, y con esto dar cierre o finalización a la venta del producto.

    p.mb-5(data-aos="fade") Finalmente, para reflexionar acerca de los productos financieros, de cómo nace la idea de estos en el contexto y cómo evolucionaron a través de las generaciones, observe:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-md-10
        .tarjeta.color-primario.p-3.bg02
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/ico01.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Vídeo - Ecosistema de Recursos Educativos Digitales SENA. (2020).
                  p.text-small.mb-0 CF1 Introducción - Técnico Laboral en Servicios y Operaciones Microfinancieras [Video]. YouTube.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=07DAKQU7SG4" target="_blank")
                    span Reproducir
                    i.fas.fa-play-circle

</template>

<script>
export default {
  name: 'Tema5',
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

<style lang="sass"></style>
