<template>
  <div class="section4 ct">
    <v-container style=" max-width: 1100px; height: 500px">
      <div class="pa-- s4">
        <div class="s4textContent">
          <div class="txt2">
            <h1>
              ZIMMO DESEMVOLVIMENTO DE APLICATIVOS WEB
            </h1>
            <p>
              Aplicativos Eccomerce, aplicativos de mensagens, streaming de vídeo, tudo o que você pode imaginar e desejar, nos tornamos uma realidade.
            </p>
          </div>
          <div class="yellowborder" />
        </div>
      </div>
      <div class="s4imgContainer">
        <div class="s4back">
          <img src="/phoneback.png">
        </div>
        <div class="s4phone">
          <img src="/burgerOfPhone1.png">
        </div>
      </div>
    </v-container>
    <div class="s4PhoneContent">
      <v-container style=" max-width: 1100px;">
        <div class="pa--">
          <h1>
            ZIMMO DEV DE APLICATIVOS WEB
          </h1>
          <p>
            Aplicativos Eccomerce, aplicativos de mensagens, streaming de vídeo, tudo o que você pode imaginar e desejar, nos tornamos uma realidade.
          </p>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
export default {
  mounted: () => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.defaults({ duration: 1 })
    const tl = gsap.timeline({
      scrollTrigger: {
        start: 'top center',
        trigger: '.s4phone',
        end: '50',
        // markers: true,
        scrub: 2,
        scroller: '.home-container',
        toggleActions: 'restart pause resume pause'
      }
    })
    tl.from('.s4phone', {
      xPercent: 26,
      ease: 'ease-in'

    }).from('.s4back', {
      xPercent: -10,
      ease: 'ease-in'
    }, '<').from('.txt2', {
      yPercent: 55,
      opacity: 0,
      ease: 'power2.out'
    }, '<')
  }
}
</script>

<style lang="scss">
.s4PhoneContent {
  display: none;
}
.section4 {
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
          z-index: 2;
    min-height: 550px;
    background-color: $secondary;
}

.s4 {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    top: 0;
    position: absolute;
    padding-top: 0 ;
}

.s4textContent {
    width: 80%;
}

.s4phone {
  height: 700px;
  width:700px;
  padding: 1rem;
  position:absolute;
  right: 0;
  top: 0;
  transform: translateX(-50px);
  margin-top: -5rem;
}

.s4back {
  height: 500px;
  width: 500px;
  padding: 1rem;
  position:absolute;
  right: 0;
  top: 0;
}

.s4back img, .s4phone img{
  width: 100%;
  height: 100%;
}

.s4 p, .s4 h1 {
    color: $primary;
    width: 25rem;
}

.yellowborder {
         border-bottom: solid $primary 4px;
     width: 100%;
    margin:1rem 0;
}

  @media (max-width: 1000px) {
    .s4textContent {
      display: none;
    }

    .s4imgContainer {
      display: flex;
      align-items: center;
      margin: 0 auto;
      position: relative;
      width: 400px;
      height: 400px;
      transform: translateX(50px);
    }

    .s4phone {
      top: 50px;
      width: 600px;
      height: 600px;
    }

    .s4PhoneContent {
      padding: 2rem 0;
      display: block;
      color: $primary;
    }

    .s4PhoneContent h1, .s4PhoneContent p {
        color: $primary;
        text-align: center;
    }

    .s4PhoneContent h1 {
      font-size: 2rem;
    }
  }
</style>
