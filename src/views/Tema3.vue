<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
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
          img.br01(src='@/assets/curso/temas/t3_01.jpg', alt='Centa de productos financieros')
    
    Separador

    #t3_1.titulo-segundo.color-acento-contenido
      h2 3.1. Recolección de información

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
