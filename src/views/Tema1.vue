<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Consumidor financiero
    
    .row.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        figure
          img.br01(src='@/assets/curso/temas/t1_01.jpg', alt='Consumidor financiero')
      .col-lg-7
        p El sector financiero tiene como objeto la captación y colocación del dinero. En cuanto a la captación del dinero, son todas aquellas actividades que permiten que los consumidores financieros lleven su dinero a entidades financieras; como mecanismos, se encuentran las cuentas de ahorro, los CDT, entre otros

        p En cuanto a la colocación de dinero, son las actividades que permiten a las entidades financieras colocar el dinero a circular en el mercado; como mecanismo de colocación, se encuentran los préstamos. Todos estos mecanismos tienen la finalidad de satisfacer la necesidad de los consumidores financieros.

        p Por lo tanto, es necesario conceptualizar quién es el consumidor financiero, el cual también es conocido como cliente, comprador, usuario o consumidor, pero su denominación consumidor financiero se debe al sector en el cual se encuentra vinculado, el cual es el sector financiero, en el cual una persona natural o jurídica adquiere productos o servicios financieros.
    
    .row.justify-content-center.mb-5
      .col-md-10
        .tarjeta.color-primario.p-3.bg02
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t1_03.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Enlace web - La Ley 1328 de 2009
                  p.text-small.mb-0 Título I, Capítulo I, define al consumidor financiero como todo cliente, usuario o cliente potencial de las entidades vigiladas.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    
    p.mb-5 La entidad encargada de vigilar las entidades financieras es la Superintendencia Financiera de Colombia (SFC), dentro de estas entidades vigiladas se encuentran:

    .row.justify-content-center.mb-5
      .col-md-10
        figure
          img.br01(src='@/assets/curso/temas/t1_05.svg', alt='Entidades financieras ')
    
    p Las personas que solicitan, adquieren o celebran un contrato para obtener un producto o servicio financiero en una entidad vigilada por la SFC se denominan consumidores financieros.

    Separador

    .titulo-segundo.color-acento-contenido
      h2 1.1 Tipo de consumidor financiero

    .row.align-items-center.mb-4
      .col-lg-7.mb-4.mb-lg-0
        p Los consumidores financieros buscan satisfacer sus necesidades adquiriendo productos o servicios ofrecidos en el sector financiero, por lo cual es indispensable, para los asesores, caracterizar los tipos de consumidores financieros.

        p Los consumidores financieros se pueden clasificar en dos (2) grandes grupos: la persona natural y la persona jurídica, cada una con una naturaleza jurídica, comportamientos, localización, gustos y necesidades distintas, los cuales deben ser claramente identificados, con la finalidad de crear unos canales de comercialización adecuados, efectivos y eficaces. 
      .col-lg-5
        figure
          img.br01(src='@/assets/curso/temas/t1_06.jpg', alt='Tipo de consumidor financiero')
    
    p.mb-4 Para ello, observe en qué se diferencia la persona natural de la persona jurídica 

    .row.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        figure
          img.br01(src='@/assets/curso/temas/t1_07.jpg', alt='Tipo de consumidor financiero')
      .col-lg-8
        p El sector financiero tiene como objeto la captación y colocación del dinero. En cuanto a la captación del dinero, son t
        
      
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

<style lang="sass"></style>
