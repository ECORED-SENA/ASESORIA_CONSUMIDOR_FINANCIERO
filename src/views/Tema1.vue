<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.BRtop.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade-up")
      .titulo-principal__numero
        span 1
      h1 Consumidor financiero
    
    .row.align-items-center(data-aos="fade")
      .col-lg-5.mb-4.mb-lg-0
        figure(data-aos="fade-left")
          img.br01(src='@/assets/curso/temas/t1_01.jpg', alt='Consumidor financiero')
      .col-lg-7
        p El sector financiero tiene como objeto la captación y colocación del dinero. En cuanto a la captación del dinero, son todas aquellas actividades que permiten que los consumidores financieros lleven su dinero a entidades financieras; como mecanismos, se encuentran las cuentas de ahorro, los CDT, entre otros

        p En cuanto a la colocación de dinero, son las actividades que permiten a las entidades financieras colocar el dinero a circular en el mercado; como mecanismo de colocación, se encuentran los préstamos. Todos estos mecanismos tienen la finalidad de satisfacer la necesidad de los consumidores financieros.

        p.mb-0 Por lo tanto, es necesario conceptualizar quién es el consumidor financiero, el cual también es conocido como cliente, comprador, usuario o consumidor, pero su denominación consumidor financiero se debe al sector en el cual se encuentra vinculado, el cual es el sector financiero, en el cual una persona natural o jurídica adquiere productos o servicios financieros.
  
  .container.bg00--01.tarjeta--blanca.px-4.pt-5.px-md-5

    .row.justify-content-center.mb-5(data-aos="slide-down")
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
                  a.boton.color-acento-botones(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=36841" target="_blank")
                    span Ley 1328 de 2009
                    i.fas.fa-file-alt
    
    p.mb-5(data-aos="fade") La entidad encargada de vigilar las entidades financieras es la Superintendencia Financiera de Colombia (SFC), dentro de estas entidades vigiladas se encuentran:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10
        figure
          img.br01(src='@/assets/curso/temas/t1_05.svg', alt='Entidades financieras')
    
    p(data-aos="fade") Las personas que solicitan, adquieren o celebran un contrato para obtener un producto o servicio financiero en una entidad vigilada por la SFC se denominan consumidores financieros.

    Separador

    #t1_1.titulo-segundo.color-acento-contenido(data-aos="fade-up")
      h2 1.1 Tipo de consumidor financiero

    .row.align-items-center.mb-4(data-aos="fade-up")
      .col-lg-7.mb-4.mb-lg-0
        p Los consumidores financieros buscan satisfacer sus necesidades adquiriendo productos o servicios ofrecidos en el sector financiero, por lo cual es indispensable, para los asesores, caracterizar los tipos de consumidores financieros.

        p Los consumidores financieros se pueden clasificar en dos (2) grandes grupos: la persona natural y la persona jurídica, cada una con una naturaleza jurídica, comportamientos, localización, gustos y necesidades distintas, los cuales deben ser claramente identificados, con la finalidad de crear unos canales de comercialización adecuados, efectivos y eficaces. 
      .col-lg-5(data-aos="flip-left")
        figure
          img.br01(src='@/assets/curso/temas/t1_06.png', alt='Tipo de consumidor financiero')
    
    p.mb-5(data-aos="fade") Para ello, observe en qué se diferencia la persona natural de la persona jurídica 

    .row.align-items-center.mb-4(data-aos="fade-up")
      .col-lg-4.mb-4.mb-lg-0(data-aos="flip-right")
        figure
          img.br01(src='@/assets/curso/temas/t1_07.png', alt='Tipo de consumidor financiero')
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta BGgris")
          .row.justify-content-end(titulo="La persona natural")
            .col-md-6.mb-4.mb-md-0
              p Se define como la persona que a nombre propio ejerce una actividad económica. En el caso de Colombia, se registra ante el Registro Único Tributario (RUT) como persona natural y se le asignan los códigos CIIU de acuerdo con la actividad económica que ejerce. La persona natural es la responsable de las obligaciones adquiridas con terceros.
          
            .col-md-5
              figure
                img(src='@/assets/curso/temas/t1_08.png', alt='La persona natural')
          
          .row.justify-content-end(titulo="La persona jurídica")
            .col-md-6.mb-4.mb-md-0
              p Forma jurídica que se le da a una o más personas que voluntariamente desean conformar una sociedad para ejercer una actividad económica; estas personas pueden ser persona natural o persona jurídica; en el caso de la persona jurídica, la sociedad es la responsable de las obligaciones adquiridas con terceros, y al no cumplir con estas obligaciones, los socios deben responder de acuerdo con el tipo de constitución de la sociedad y de conformidad con la Ley.
          
            .col-md-5
              figure
                img(src='@/assets/curso/temas/t1_09.png', alt='La persona jurídica')
      
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-md-10(data-aos="fade")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Persona natural vs. persona jurídica

        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th Persona natural
                th Persona jurídica
            tbody
              tr
                td Persona humana 
                td Persona ficticia
              tr
                td Una persona
                td Una o más personas
              tr
                td Actúa a nombre propio
                td Actúa a nombre de la sociedad por medio del representante legal
              tr
                td Patrimonio de la persona
                td Patrimonio diferente al de los socios
    
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t1_10.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 
              | A parte de su procedencia jurídica, el consumidor financiero se clasifica en dos (2) categorías, el consumidor actual, quien en la actualidad consume los productos y servicios en el sector financiero, y el consumidor potencial, como su nombre lo indica, es un cliente potencial, puede ser un posible comprador de productos y servicios financieros.
              br
              br
              | Las organizaciones deben propender a satisfacer las necesidades de estos consumidores, por lo cual deben establecer canales de comunicación y técnicas de ventas eficientes y eficaces, lo que permitirá la fidelidad de los consumidores actuales y atraer los consumidores potenciales.
      
    p.mb-5 En la siguiente ilustración, se clasifica cada uno de los consumidores financieros y lo que los caracteriza.

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-md-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Tipo de consumidor

        figure
          img.br01(src='@/assets/curso/temas/t1_11.svg', alt='Tipo de consumidor')
    
    p.mb-4(data-aos="fade") Dentro de los consumidores actuales, se encuentran  los consumidores activos, quienes en la actualidad adquieren productos o servicios ofrecidos por el sector financiero; los adquieren con frecuencia, se puede decir que cuentan mínimo con un producto permanente con la entidad, como, por ejemplo, una cuenta de ahorros o una tarjeta de crédito; en cuanto a entidades bancarias, en cuanto a bolsas de valores, se puede decir que son personas que cuentan con acciones o las personas que cotizan en un fondo de pensión y cesantías, por citar algunos ejemplos.

    p En cuanto a los consumidores potenciales, se encuentran: consumidor en la competencia y consumidor con decisión de compra, para los cuales las entidades financieras deben crear estrategias de marketing para atraerlos.

    Separador
    
    #t1_2.titulo-segundo.color-acento-contenido(data-aos="fade-up")
      h2 1.2 Características del consumidor financiero
    
    .row.my-6(data-aos="fade")
      .col-lg-5.Bf01
        figure.imgCenter.position-relative
          img.br01.mN01(src='@/assets/curso/temas/t1_12.png', alt='Características del consumidor financiero')
      .col-lg-7.BG20.p-5
        p El consumidor financiero, sea persona natural o persona jurídica, consumidor actual o potencial, posee unas características, que deben ser tomadas en cuenta antes, durante y después de la asesoría por parte del asesor financiero, de ello depende el éxito de la venta de los productos financieros.

        p.mb-0 Las características de los consumidores pueden ser cualitativas o cuantitativas, y se deben identificar de una forma correcta, para poder dirigir las estrategias de comunicación y ventas, lo que permitirá posicionar la marca de la entidad u organización, crear una fidelización del consumidor y atraer consumidores potenciales.
    
    p.mb-0 Reconozca los principales aspectos de cada una de estas características:    
  
  .container.BRbtn.bg00--02.tarjeta--blanca.px-4.pt-5.px-md-5.mb-5

    .row.justify-content-center.mb-5
      .col-md-10.col-lg-5.mb-4.mb-lg-0(data-aos="flip-left")
        .TFcontainer
          img.TFimage(src='@/assets/curso/temas/t1_13.jpg', alt='principales aspectos')
          .TFoverlay--02.px-5.py-3
            h4.mt-2.mb-3.text-center Características cuantitativas
            p.mb-0 Se identifican las características que pueden ser cuantificables, como edad, ingresos mensuales o anuales, activos, pasivos y patrimonio, las inversiones que realiza, entre otras, recordando que estas características deben ser medibles.
      
      .col-md-10.col-lg-5.mb-4.mb-lg-0(data-aos="flip-right")
        .TFcontainer
          img.TFimage(src='@/assets/curso/temas/t1_14.jpg', alt='principales aspectos')
          .TFoverlay--02.px-5.py-3
            h4.mt-2.mb-3.text-center Características cualitativas
            p.mb-0 Son aquellas que no pueden ser medibles, son más subjetivas, son características o cualidades que permiten identificar la orientación del cliente, hacen que el cliente tenga preferencias a la hora de decidir adquirir un producto o servicio.
    
    p.mb-4(data-aos="fade") En el proceso, se debe identificar el perfil del consumidor, esto permitirá construir y dirigir las estrategias de venta de una forma adecuada que permita tener acceso al cliente y lograr el fin último, que es crear fidelidad hacia la entidad, la organización o la marca; el conocimiento del perfil del consumidor se ha estudiado por la psicología y más propiamente por el #[i neuromarketing].

    p.mb-4 Los consumidores poseen unos caracteres definidos, que los impulsan a adquirir un producto o servicio, es posible clasificarlos en un amplio grupo de once (11) consumidores:

    ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-up")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/t1_15.svg', alt='Texto que describa la imagen')

      .tarjeta.tarjeta--verde.p-3(x="3%" y="2.4%" numero="+")
        p.mb-0 #[strong Consumidor conservador:] es el consumidor fiel a una empresa, organización o marca, es difícil influir en él.

      .tarjeta.tarjeta--verde.p-3(x="21%" y="2.4%" numero="+")
        p.mb-0 #[strong Consumidor emocional:] los productos o servicios que adquiere le deben generar un sentimiento de felicidad, los adquiere en razón de ese sentimiento.

      .tarjeta.tarjeta--verde.p-3(x="38%" y="2.4%" numero="+")
        p.mb-0 #[strong Consumidor impulsivo:] no necesita el producto o servicio, pero lo adquiere, por lo general, influenciado por el entorno o como técnica para reprimir algún sentimiento.
      
      .tarjeta.tarjeta--verde.p-3(x="59.5%" y="2.4%" numero="+")
        p.mb-0 #[strong Consumidor escéptico:] es el consumidor desconfiado, debe realizar investigaciones e indagar sobre el producto o servicio antes de adquirirlo, también se podría llamar consumidor racional.

      .tarjeta.tarjeta--verde.p-3(x="81%" y="2.4%" numero="+")
        p.mb-0 #[strong Consumidor indeciso:] no adquiere el producto o servicio al no estar seguro de necesitarlo.
      
      .tarjeta.tarjeta--verde.p-3(x="3%" y="94.4%" numero="+")
        p.mb-0 #[strong Consumidor optimista:] el adquirir un producto o servicio se basa en la calidad y lo que le aporta a su bienestar, sin importar el precio.

      .tarjeta.tarjeta--verde.p-3(x="19%" y="94.4%" numero="+")
        p.mb-0 #[strong Consumidor de descuentos:] Los descuentos son lo que lo motivan a adquirir los productos o servicios, son amantes de la oferta o lo gratis.

      .tarjeta.tarjeta--verde.p-3(x="37.5%" y="94.4%" numero="+")
        p.mb-0 #[strong Consumidor de experiencia:] el producto o servicio le debe ofrecer una experiencia, algo nuevo e innovador, entre más detalles, mejor para este consumidor.
      
      .tarjeta.tarjeta--verde.p-3(x="53.5%" y="94.4%" numero="+")
        p.mb-0 #[strong Consumidor #[i e-commerce]:] prefiere adquirir productos o servicios a través del #[i e-commerce], por facilidad y comodidad.

      .tarjeta.tarjeta--verde.p-3(x="69.5%" y="94.4%" numero="+")
        p.mb-0 #[strong Consumidor organizacional:] organizaciones públicas o privadas con necesidad de adquirir productos o servicios para su funcionamiento, consumo o proyectos.

      .tarjeta.tarjeta--verde.p-3(x="87%" y="94.4%" numero="+")
        p.mb-0 #[strong Consumidor interno:] Las personas que están dentro de la organización y tienen la necesidad de adquirir productos o servicios.
    
    p.mb-4(data-aos="fade") En cuanto al consumidor bancario, investigadores del Colegio de Estudios Superiores de Administración (CESA), junto con investigadores de la Universidad Javeriana y Universidad del Valle, identificaron cuatro (4) perfiles.

    p.mb-4 Los cuatro perfiles de clientes bancarios que dan valor a las marcas son los co-creadores de marca, los no co-creadores, los escépticos y los neutrales. ¿Qué los caracteriza?
   
    .row.justify-content-center(data-aos="fade")
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t1_16.svg' alt='Los no co-creadores')
          .tarjeta.BG10
            .p-4
              h3 Los no co-creadores
              p Manejan muy poca información sobre la entidad bancaria y escasamente confían en la capacidad de esta para desempeñar su trabajo.
      
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t1_17.svg' alt='Los escépticos')
          .tarjeta.BG10
            .p-4
              h3 Los escépticos
              p Tienen una mínima receptividad para co-crear valor, pese a autorreportar un alto nivel de conocimiento sobre su entidad.
      
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t1_18.svg' alt='Los neutrales')
          .tarjeta.BG10
            .p-4
              h3 Los neutrales
              p Están a mitad de camino: si tienen un alto conocimiento sobre la entidad que les brinda los servicios que esperan, pero necesitan una mayor y más gratificante experiencia para co-crear valor de marca.
      
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t1_19.svg' alt='Los co-creadores de marca')
          .tarjeta.BG10
            .p-4
              h3 Los co-creadores de marca
              p Tienen confianza en la marca, la conocen bastante, perciben del banco una gran capacidad para cumplir sus expectativas y experimentan sentimientos positivos hacia la marca. (CESA, 2020)
      
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
