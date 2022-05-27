<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.BRtop.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Tecnologías de la Información y la Comunicación
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t4_01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Para compartir la información, en la actualidad se tiene acceso a diferentes formatos, fuentes y recursos que permiten que se lleve a cabo de manera efectiva y acorde con las necesidades de los clientes; de esta manera, las Tecnologías de la Información y las Comunicaciones (TIC) son el conjunto de recursos, herramientas, equipos, programas informáticos, aplicaciones, redes y medios que permiten la compilación, procesamiento, almacenamiento y transmisión de información como: voz, datos, texto, video e imágenes (Art. 6, Ley 1341 de 2009).

        p.mb-0 Las organizaciones del sector financiero centran sus esfuerzos en la digitalización de sus productos financieros, como la implementación de las sucursales virtuales y billeteras digitales, a través de las cuales se pueden realizar múltiples gestiones; y en las estrategias de marketing, por medio de las cuales se pretende atraer a los clientes activos y potenciales.
    
    .row.align-items-center.mb-4
      .col-lg-7.mb-4.mb-lg-0
        p La generación actual prefiere tener contacto con los dispositivos digitales, debido a su agilidad, comodidad, reducción en costos y tiempo; y a causa de la pandemia del Covid-19, la utilización de los medios y plataformas digitales va en aumento, lo que obliga a las entidades a estar en mayor contacto con sus clientes a través de los medios tecnológicos. 

        p La era de la digitalización también trae grandes retos para las entidades financieras en cuanto a la ciberseguridad; lo cual las obliga a proteger los datos e información de sus consumidores, disminuyendo el riesgo de vulnerabilidad de los mismos.

        p Otro de los retos que trae la implementación de los medios tecnológicos y de información son los nuevos protocolos de servicio al cliente que se deben gestionar a través de las entidades, debido a que se habla de un autoservicio por parte del cliente, por lo cual se debe asegurar que las plataformas digitales sean dinámicas, ágiles y con lenguaje claro.

        p.mb-0 En cuanto a otras utilidades de las tecnologías de la información y la comunicación, se encuentra que las empresas del sector financiero apoyan su gestión de datos y el análisis de cifras en el Big Data, el cual le permite a la entidad gestionar su información de forma masiva, todos los datos de los consumidores y los servicios que ofrece mediante los portafolios de servicios.
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/t4_02.jpg', alt='Contacto con los dispositivos digitales')
  
  .container.bg03.tarjeta--blanca.px-4.pt-5.px-md-5

    .row.align-items-center.my-4
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/t4_03.png', alt='Considere relevantes e importantes')
      .col-lg-7
        p Una de las grandes ventajas del Big Data para el sector financiero es la de analizar gran cantidad de información de todas sus operaciones, empleando también la minería de datos, la cual se utiliza para conocer al cliente.

        p El marketing digital y las redes sociales permiten a las entidades estar más cerca de los consumidores, con una mayor interacción, lo que facilita conocer mejor sus necesidades y, de esta forma, también atraer consumidores potenciales.

        p Las entidades financieras emplean plataformas tecnológicas para la comunicación con los consumidores, llegando a la banca digital, donde el consumidor, a un solo clic, puede gestionar diferentes transacciones desde cualquier lugar, sin la necesidad de trasladarse de forma presencial a la entidad.
 
        p Existen diferentes tipos de plataformas digitales en el sector financiero:

        ul.lista-ul--color
          li 
            i.fas.fa-donate
            | Aplicaciones de banca electrónica
          li 
            i.fas.fa-donate
            | Sucursales virtuales
          li 
            i.fas.fa-donate
            | Billeteras digitales
          li 
            i.fas.fa-donate
            | Compra de divisas
          li 
            i.fas.fa-donate
            | Plataformas para realizar operaciones de trading
          li 
            i.fas.fa-donate
            | Plataformas de franquicias para realizar pagos online

</template>

<script>
export default {
  name: 'Tema4',
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
