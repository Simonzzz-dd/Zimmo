<template>
  <div class="section3 ct">
    <div class="triangle">
      <img src="/triangle.svg" alt="">
    </div>
    <div class="box-" />
    <v-container style=" max-width: 1100px; height: 600px">
      <div class="pa--" style="height: 100%">
        <div class="s3container">
          <div class="s3textcontent">
            <h1>ZIMMO PORTFOLIO</h1>
            <p>
              Para melhor promover sua carreira, criamos Portfólios exclusivos.
              Um portfólio bem elaborado pode ser o diferencial para a promoção de qualquer carreira. É uma exposição virtual de trabalho, habilidades, qualificações, treinamento e experiência de trabalho.
            </p>
          </div>
          <div class="image3cont">
            <div class="s3Image">
              <div class="s3imgContainer">
                <img height="700" width="700" src="/z_back.png">
              </div>
              <div class="s3imgContainer birds">
                <img height="700" width="700" src="/z_birds.png">
              </div>
              <div class="s3imgContainer">
                <img height="700" width="700" src="/z_woman_layer2.png">
              </div>
              <div class="s3imgContainer cloud1">
                <img height="700" width="700" src="/z_cloud1.png">

                <div class="s3imgContainer cloud2">
                  <img height="700" width="700" src="/z_cloud2.png">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-container>
    <div class="s3phoneTxt">
      <v-container style=" max-width: 1100px;">
        <div class="pa--">
          <h1>ZIMMO PORTFOLIO</h1>
          <p>
            Para melhor promover sua carreira, criamos Portfólios exclusivos.
            Um portfólio bem elaborado pode ser o diferencial para a promoção de qualquer carreira. É uma exposição virtual de trabalho, habilidades, qualificações, treinamento e experiência de trabalho.
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
        trigger: '.s3imgContainer',
        start: 'top center',
        end: '+=250',
        scroller: '.home-container',
        toggleActions: 'restart pause resume pause',
        scrub: 2

      }
    })
    tl.from('.birds', {
      xPercent: -10,
      scale: 1.2
    }).from('.cloud1', {
      xPercent: -10
    }, '<').from('.cloud2', {
      yPercent: 15
    }, '<').from('.s3textcontent', {
      ease: 'power2.out',
      yPercent: 35,
      opacity: 0
    }, '<')
  }
}
</script>

<style lang="scss">
.s3phoneTxt {
  display: none;
}
.box- {
  background-color:#403F3E;
  position: absolute;
  right: -30%;
  width:70%;
  height: 10%;
  transform: rotateZ(150deg);

  top: 0;
}

    .section3 {
        min-height: 600px;
        position: relative;
    }
    .s3container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }

    .section3 h1, .section3 p {
          /* padding: rem 0; */
            max-width: 25rem;
    }

    .s3Image {
      position: relative;
        transform: translateX(60px);
        display: flex;
        align-items: center;
        height: 700px;
        width: 700px;
    }

    .s3Image img {
      height: 100%;
      width: 100%;
    }

    .s3imgContainer {
      position: absolute;
      top: 0;
      left: 0;
              display: flex;
        align-items: center;
      width: 100%;
      height: 100%;
    }

  .triangle {
    background-color: transparent;
    position: absolute;
    bottom: -1rem;
    width: 20vw;
    opacity: .8;

  }

  .triangle img {
    width: 100%;
    height: 100%;
    opacity: .8;
  }

    @media (max-width: 1050px) {
      .s3textcontent {
        display: none;
      }
      .box- {
        display: none;
      }

      .s3imgContainer {
        left: auto;
        align-self: center;

      }

          .s3container {
            left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        width: 100%;
        height: 100%;
    }

    .image3cont {
      position: relative;
      height: 600px;
      min-width: 600px;
      width: 600px;
    }

      .s3Image {
        width: 100%;
        height: 100%;
        transform: translateX(0);
      }

      .s3phoneTxt {
        position: relative;
        z-index: 2000000000;
        // padding: 1.5rem;
        margin: 0 auto;
        text-align: center;
        margin-top: -8rem;
        padding-bottom: 4rem;
        display: block;
      }

      .s3phoneTxt h1,.s3phoneTxt p {
        margin: 0 auto;
        max-width: 100%;
      }
    }
</style>
