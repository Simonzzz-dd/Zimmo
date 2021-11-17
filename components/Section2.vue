<template>
  <div class="section2 ct">
    <v-container class="fl" style=" max-width: 1100px; height: 100%;">
      <div class="s2container">
        <div class="pa--">
          <div class="s1content ">
            <h1 class="txt">
              VEJA UMA BREVE DESCRIÇÃO DOS NOSSOS SERVIÇOS ABAIXO
            </h1>
            <div class="border" />
            <div class="txt">
              <h1>
                ZIMMO DESENHO GRAFICO
              </h1>
              <p>
                Fazemos cartazes comerciais e gestão ou assistencia na gestão de redes sociais.
                Tudo isso para maximizar o efeito de cada sua campanha publicitária.
              </p>
            </div>
          </div>
        </div>
        <div class="alldrink">
          <div class="s2back">
            <nuxt-img
              width="600"
              height="600"

              src="/phoneback.png"
            >
              />
            </nuxt-img>
          </div>
          <div class="s2drink cookies">
            <img

              src="/cookies.png"
            >
          </div>
          <div class="s2drink">
            <img
              src="/chok_no_cookies.png"
            >
          </div>
        </div>
      </div>
      <div class="phoneContent">
        <div class="s2PhContent">
          <h1>
            ZIMMO DESENHO GRAFICO
          </h1>
          <p>
            Fazemos cartazes comerciais e gestão ou assistencia na gestão de redes sociais.
            Tudo isso para maximizar o efeito de cada sua campanha publicitária.
          </p>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default {
  data () {
    return { Width: 600, name: 1 }
  },

  mounted () {
    gsap.registerPlugin(ScrollTrigger)
    gsap.defaults({ duration: 1 })
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.s2drink',
        start: 'top center',
        end: '+=350',
        scroller: '.home-container',
        toggleActions: 'restart pause resume pause',
        scrub: 2

      }
    })
    tl.from('.cookies', {
      yPercent: -27,
      rotate: 5,
      scale: 0.65
    }).from(
      '.txt', { opacity: 0, yPercent: 35, ease: 'power2.out' }, '<'
    )

    return ''
  }
}

</script>

<style lang="scss">
  .phoneContent {
    display: none;
  }

 .section2 {
     height: 600px;
     background-color: $primary;
    position: relative;
      z-index: 2;
      max-width: 100vw;
 }

 .fl {
     display: flex;
     align-items: center;
     justify-content: space-between;
 }

 .s1content h1,.s1content p {

    max-width: 30rem;
    padding-left: 1rem;
 }

  .s1content {
      position: absolute;
      width: 80%;
      top: 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
  }

 .border {
     border-bottom: solid white 4px;
     width: 100%;
    margin:1rem 0;
 }

 .container {

     position: relative;

 }

 .s2back {

    position:absolute;
    right: 0;
    top: 0;
 }

 .s2container {
     display: flex;
     position: absolute;
     width: 100%;
     max-width: 100vw;
     height: 100%;
     top: 0;
     left: 0;
    //  background-color: brown;
 }

 .s2drink {
      width: 600px;
   height: 600px;
     transform: translateX(50px);
    position:absolute;
    opacity: .9;
    right: 0;
    top: 0;
 }

 .s2drink img {
   height: 100%;
   width: 100%;
 }

  @media (max-width: 1050px) {
    .alldrink {
      position: absolute;
      width: 600px;
      height: 100%;

      left: 50%;
      transform: translateX(-50%);
    }

    .s1content {
      display: none;
    }

    .phoneContent {
      display: flex;
      position: absolute;
      z-index: 100;
      width: 100%;
      height: 100%;
      background-color: #80590a45;
      left: 0;
      justify-content: center;
    }

    .s2drink {

        right: auto;
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(-10px);
    }

    .s2back {
      right: auto;
      top: 0;
      left: 0;
    }

    .s2PhContent {
      padding: 1rem;
      // background-color: #efefefaf;
      // border: solid $accent 2px ;
      margin: 2rem;
      margin-top: auto;
    }
    .s2PhContent h1, .s2PhContent p {
      color: #efefef;
          text-shadow: .5px .5px 5px #0b080265;
          text-align: center;

    }
    .s2PhContent p {

      // font-weight: 400;
    }
  }

    @media (max-width: 500px) {
    .s2back {
      // display: none;
    }
        .s2PhContent h1, .s2PhContent p {
          border: solid 4px #efefef;
          padding: 1rem;
      color: #efefef;
          text-shadow: .5px .5px 5px #0b080265;
          text-align: justify;

    }
    .s2PhContent p {
      display: none;
    }
    .s2PhContent {

      padding: 1.5rem;
      // background-color: #efefefaf;
      // border: solid $accent 2px ;
      margin: -.5rem;
      margin-top: auto;
    }
  }
</style>
