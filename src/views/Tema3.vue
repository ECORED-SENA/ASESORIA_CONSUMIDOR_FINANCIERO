<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.BRtop.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Venta de productos financieros
    
    .row.align-items-center.mb-4
      .col-lg-7.mb-4.mb-lg-0
        p La venta de productos financieros se deriva principalmente de las entidades financieras vigiladas, las cuales ofrecen productos a partir de la necesidad del consumidor, como es ahorrar o invertir; estos productos son intangibles y se encuentran respaldados por un contrato. 

        p Cada producto financiero depende del tipo de política de la entidad, si es de captación o de colocación, y por cada una de estas políticas, los productos y servicios a ofrecer varían. Existirán periodos en los que el asesor comercial deberá ofrecer más unos productos que otros, esto depende de la tasa que maneje la entidad en su momento, a causa de las políticas monetarias y tasas de referencia del mercado.

        p Dentro de las entidades financieras que ofrecen productos financieros, se encuentran los bancos, las bolsas de valores, proveedores de seguros, el Estado a través del Banco de la República, franquicias de tarjetas de crédito, fondos de pensiones y cesantías, entre otras entidades vigiladas por la Superintendencia Financiera de Colombia (SFC).
      .col-lg-5
        figure
          img.br01(src='@/assets/curso/temas/t3_01.jpg', alt='Venta de productos financieros')
    
    Separador

    #t3_1.titulo-segundo.color-acento-contenido
      h2 3.1. Recolección de información

    .row.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        figure
          img.br01(src='@/assets/curso/temas/t3_02.jpg', alt='Recolección de información')
      .col-lg-7
        p En las entidades financieras, es muy usual que el consumidor contacte o busque satisfacer una necesidad, o que la entidad financiera contacte al consumidor; esto se da gracias a las bases de datos y la información previa que tiene la entidad de sus consumidores o de los consumidores potenciales; cada uno de los casos se da de acuerdo con una necesidad.
        .BG20.p-3.mb-4
          p.mb-0 De acuerdo con las bases de datos y los estudios de mercado realizados por las entidades financieras, se tiene un conocimiento previo del consumidor, quién es, dónde está ubicado, edad, género, ingresos promedios, dónde labora, gustos y necesidades; en esta primera etapa, se realiza una primera recolección de información.
        p.mb-0 La información financiera de los consumidores se obtiene empleando diferentes técnicas e instrumentos de recolección de información, dentro de los cuales se encuentran las fuentes primarias y las fuentes secundarias.
  
  .container.bg03.tarjeta--blanca.px-4.pt-5.px-md-5

    .row.align-items-center.mb-4
      .col-lg-7.mb-4.mb-lg-0
        p En cuanto a la recolección de datos primarios, se encuentra la encuesta, los sondeos, los focus groups, la técnica Delphi, entre otros métodos que al interior de las entidades consideren pertinentes en el momento de recolectar datos e información.

        p En cuanto a los datos de fuentes secundarias, deben tomarse de fuentes confiables y verificables, esta información es analizada y recolectada por otros actores, y posteriormente es publicada. Dentro de las fuentes secundarias, se encuentran:

        ul.lista-ul--color
          li 
            i.fas.fa-donate
            | Datos históricos
          li 
            i.fas.fa-donate
            | Informes del sector
          li 
            i.fas.fa-donate
            | Datos recolectados por otros
          li 
            i.fas.fa-donate
            | Informes del gobierno
          li 
            i.fas.fa-donate
            | Revistas especializadas
          li 
            i.fas.fa-donate
            | Investigaciones

      .col-lg-5
        figure
          img.br01(src='@/assets/curso/temas/t3_03.png', alt='recolección de datos primarios')
    
    p Estas fuentes son de gran valor, brindan un panorama del entorno en el cual están inmersos la organización, los clientes, los proveedores y otros actores que contribuyen para dar valor a las entidades.

    p.mb-5 Otro momento en el cual se da la recolección de información primaria es cuando el asesor de la entidad y el consumidor entran en contacto, lo cual se puede dar en dos escenarios diferentes, como se comparte en las siguientes imágenes.

    .row.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t3_04.svg' alt='Los no co-creadores')
          .tarjeta.BG10.Edit01
            .p-4
              p.mb-0 El consumidor se pone en contacto con la entidad financiera para satisfacer una necesidad.
      
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t3_05.svg' alt='Los escépticos')
          .tarjeta.BG10.Edit01
            .p-4
              p.mb-0 La entidad financiera se pone en contacto con el consumidor de acuerdo con el estudio que ha realizado.

    

        

</template>

<script>
export default {
  name: 'Tema3',
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
