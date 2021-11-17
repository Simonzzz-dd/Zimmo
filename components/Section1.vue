<template>
  <div class="section1">
    <div class="s1Desc">
      <div class="s1TxtContent">
        <h1>
          ZIMMO DESENHO GRAFICO &
          WEB DEV
        </h1>
        <p class="phoneBorder">
          Quer expandir seu público por meios digitais, conquistar o coração de mais empresas ou clientes?
          se desejar, entre em contato conosco com muito prazer o ajudaremos a alcancar o seu objectivo.
        </p>
        <p class="forPhone2">
          A baixo temos uma breve descricao dos nossos sevicos
        </p>
      </div>
    </div>
    <div class="img-">
      <nuxt-img
        sizes="sm:20vw md:10vw lg:20vw xl:20vw xxl:20vw '2xl':20vw"

        src="/social.svg"
      >
        />
      </nuxt-img>
    </div>
    <div class="forPhone2">
      <v-icon large>
        fas fa-caret-down
      </v-icon>
    </div>
  </div>
</template>

<script>

export default {
  mounted () {
  }
}
</script>

<style lang="scss">

  .forPhone, .forPhone2 {
    display: none;
  }
  .section1 {
  min-height: 34em;
  padding: 0;
  padding-bottom: 5rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  animation-name: move-in;
        animation-duration: 1000ms;
  }

  @keyframes move-in {
    from { opacity: 0;}
    to {transform: translateX(0%);}
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .s1Desc {

    align-self: center;
    max-width: 25rem;
  }

  .s1TxtContent {
    padding-bottom: 1rem;
  }

  .s1TxtContent h1 {
    align-self: center;
        font-size: 3rem;
    padding-bottom: 1rem;

  }

  .z-btn{
    width: 8rem;
    background: $primary;
    font-weight: 700;
    box-shadow: none;
  }
  .img- {
    // background-color: #efefef;
    height: 100%;
    display: flex;
    align-items: center;
    // background: radial-gradient(circle, #ffffffaf 20%, #ffffffd4  50%, $accent 67%);
    opacity: .8;
    width: 50%;
    transform: translateX(3rem);
  }
  .z-btn span {
    color: white;
  }

  .z-btn2 {
    background-color: $secondary;
    margin-left: 1rem;
  }

  @media (max-width: 1050px) {
    p {
      font-weight: 700;
    }

    .forPhone2 {
      display: block;
    }
    .section1 {
    display: block;
    }

    .section1 h1 {
          font-size: 4rem;
    }

    .s1Desc {
    max-width: 100%;
    text-align: start;
    padding-top: 3rem;
    margin: 0 auto;

    }
    .img- {
    transform: translateX(0);
    margin: 0 auto;
    display: none;
    }
  }

  @media (max-width: 500px) {

    .nav-btn {
      width: 2rem;
      padding-top: 1rem;
    }

    .forPhone {
      display: block;
    }

        .forPhone2 {
      display: block;
    }
    .section1 {
      display: block;
    }

    .s1Desc {
      max-width: 100%;
      text-align: justify;
      padding-top: 1rem;
      margin: 0 auto;

    }
    .s1Desc h1 {
      font-size: 3rem;
    }
    .img- {
      display: none;
          transform: translateX(0);
      margin: 0 auto;
    }

      .navbar {
          width: 100%;
          display: none;
          justify-content: space-between;
      }

      p {
        font-weight: 700;
      }

        .pa-- {
      width: 100%;

      padding: 0 1em;
    }

  }

</style>
