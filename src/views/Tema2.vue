<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.BRtop.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Asesoría y servicio al cliente 
    
    .row.align-items-center.mb-4
      .col-lg-7.mb-4.mb-lg-0
        p Las entidades financieras existen debido a que los consumidores tienen unas necesidades a satisfacer, por lo cual se deben crear procesos, protocolos, canales y medios pertinentes, que permitan a la entidad llegar a sus consumidores y satisfacer esas necesidades, sin ellos, las entidades no existirían.

        p La asesoría y el servicio al cliente son de suma importancia dentro de las organizaciones, son el trato adecuado y la relación más cercana que debe existir con el cliente, son ellos el espíritu de las organizaciones, sin ellos no existirían. Con la asesoría, se busca informar y orientar al cliente, y desde el servicio, se crean estrategias para que adquiera un producto o servicio.
      .col-lg-5
        figure
          img.br01(src='@/assets/curso/temas/t2_01.jpg', alt='Asesoría y servicio al cliente')
    
  .container.bg00--01.tarjeta--blanca.px-4.pt-5.px-md-5

    SlyderA.mb-5(tipo="b")
      .row.align-items-end
        .col-lg-10.mb-4.mb-lg-0
          .bloque-texto-d.color-primario.p-4
            .bloque-texto-d__texto.mb-2
              i.fas.fa-quote-left
              h3.text-regular 
                | #[strong La asesoría]
                br
                br
                | Se entiende como la labor de un profesional o una empresa destinada a la realización de distintas funciones de asesoramien, control y supervisión de la actividad económica de una persona física o jurídica que contrata sus servicios en el ámbito económico y jurídico.

              i.fas.fa-quote-right
            .bloque-texto-d__autor 
              .h5.mb-0 (Sánchez, 2018)
        .col-lg-2
          figure
            img.br01(src='@/assets/curso/temas/t2_02.svg', alt='La asesoría')
      
      .row
        .col-lg-10.mb-4.mb-lg-0
          .bloque-texto-d.color-primario.p-4
            .bloque-texto-d__texto.mb-2
              i.fas.fa-quote-left
              h3.text-regular 
                | #[strong El servicio]
                br
                br
                | Se entiende, en el ámbito económico, como la acción o conjunto de actividades destinadas a satisfacer una determinada necesidad de los clientes, brindando un producto inmaterial y personalizado.

              i.fas.fa-quote-right
            .bloque-texto-d__autor 
              .h5.mb-0 (Sánchez, 2018)
        .col-lg-2
          figure
            img.br01(src='@/assets/curso/temas/t2_02.svg', alt='La asesoría')
      
    .row.align-items-center
      .col-lg-4.mb-4.mb-lg-0
        figure
          img.br01(src='@/assets/curso/temas/t2_03.png', alt='Asesor comercial de productos financieros')
      .col-lg-8
        p De acuerdo con los conceptos anteriores, no se debe confundir la asesoría con el servicio, aunque deben ir acoplados. Como bien lo define el autor, la asesoría es una labor profesional, que puede ser realizada por una persona en particular o por una empresa, el asesor se encuentra en la capacidad de emitir conceptos o realizar actividades de las cuales tiene un amplio conocimiento, por ello, el cliente adquiere sus servicios, en los cuales recibe apoyo por parte del asesor de acuerdo con los conocimientos que este posee.

        p El asesor comercial de productos financieros se encuentra en la capacidad de recolectar informaciones relevantes, indagar las necesidades de los consumidores y, a partir de ello, crear un portafolio de productos y servicios acorde con las necesidades de los consumidores, logrando la fidelización. 

        p El servicio es definido por el autor como las actividades destinadas a satisfacer la necesidad del consumidor, todas aquellas estrategias mediante las cuales se interactúa con el cliente con la finalidad de que adquiera un producto o servicio y, de esta forma, dar solución a un problema o una necesidad.

        p Por lo general las entidades financieras ofrecen productos y servicios intangibles, debido a esto, el servicio debe ser una política de calidad dentro de estas entidades, brindando seguridad y confianza al consumidor, lo que minimiza los niveles de incertidumbre o temor al creer que algo no les pertenece debido a que no es tangible.


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

<style lang="sass"></style>
