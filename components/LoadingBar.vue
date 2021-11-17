<template>
  <div v-if="watchLoading" class="loading-page">
    <div class="transitions_">
      <div class="tran1" />
      <div class="tran2" />
    </div>
    <h1 class="ghost">
      ZIMMO
    </h1>
    <h1>ZIMMO</h1>
    <span class="forcp1"><div class="progressbar" :style="{width:printL +'%'}" />Design & Dev</span>
    <div class="loadingProgress">
      {{ printL }}
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap/dist/gsap'

export default {
  data: () => {
    return { loading: true, loadingBar: 0 }
  },
  computed: {
    printL () {
      return (Math.ceil(parseFloat(this.loadingBar)))
    },
    watchLoading () {
      let loading = true
      if (Math.ceil(this.loadingBar) === 100) {
        loading = true
        this.finish()
      } else {
        loading = true
      }
      return loading
    }
  },
  mounted () {
    setTimeout(() => {
      const images_ = [...document.querySelectorAll('img')]
      const lenght = images_.length
      const order = 100 / lenght
      images_.map((img, i) => {
        if (img.complete === true) {
          setTimeout(() => {
            this.loadingBar += order
          }, i * 100)
        } else {
          setTimeout(() => {
            this.loadingBar += order
          }, i * 200)
        }
        return ''
      })
    }, 1000)
  },
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      setTimeout(() => {
        const tl = gsap.timeline()
        tl.to('.loading-page', {
          duration: 1, yPercent: -100, ease: 'power2.out'
        })
      }, 500)
    }
  }
}
</script>

<style lang="scss">

@keyframes moveRight {
  from {transform: translateX(-50%); opacity: 0;}
  to {transform: translateX(0%);}
}

@keyframes moLeft {
  0% {transform: translateX(50%); opacity: 0;}
  50% {transform: translateX(50%); opacity: 0;}
  100% {transform: translateX(0%); opacity: 1; }
}

  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    background: $accent;
    text-align: center;
    display: flex;
    justify-content: center;
    align-content: center;
    // flex-direction: column;
    align-items: center;
    font-size: 30px;
    font-family: sans-serif;
  }

  .loading-page h1 { font-size: 5rem;padding-right: .5rem; position: relative;   animation-name: moveRight; animation-timing-function: ease-in;
  animation-duration: 500ms;}

  .loading-page span {
    font-size: 1.5rem;
      position: relative;
      font-weight: 600;
      // opacity: 0;
      border-bottom: 3px solid $secondary;
      width: 200;
      animation-timing-function: ease-in;
        animation-name: moLeft;
      animation-duration: 1000ms;

      -o-animation-fill-mode: forwards;
  }

    .progressbar {
    height: 100%;
    // width: 100%;
    position: absolute;
    // background-color: $primary;
    z-index: 2;
    bottom: -3px;
          border-bottom: 3px solid $primary;
  }

  h1.ghost {
      color: transparent;
      position: absolute;
      font-size: 16rem;
      opacity: .2;
  -webkit-text-stroke-width: 8px;
  -webkit-text-stroke-color: white;
  }

  .loadingProgress {
    position: absolute;
    font-size: 1.5rem;
    bottom: 1rem;
    right: 1rem;
    padding: 1rem;
    background-color: $secondary;
    border-radius: 100%;
    color: $primary;
    transform: scale(.7);
    width: 5rem;
  }

    .forcp1 {
    display: block;
  }
  @media (max-width: 550px) {
      // .forcp1 {
      // //   display: none;
      // // }
      .loading-page {
        flex-direction: column;
      }

      .loading-page span {
        font-weight: 800;
        padding-bottom: 1rem;
        width: 80%;
        text-align: start;
      }
  }
</style>
