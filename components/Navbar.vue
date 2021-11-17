<template>
  <div class="pa-- pt">
    <div class="navbar">
      <div class="zimmologo">
        <nuxt-img
          width="20"
          height="20"

          src="/mylogo.png"
        />
      </div>

      <div class="routes-">
        <v-btn
          class="about"
          text
          @click="home"
        >
          Sobre-nos
        </v-btn>

        <v-btn
          class="contact-us"
          text
          @click="contact"
        >
          Contacte-nos
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    home () {
      setTimeout(() => {
        this.$router.push({ path: '/', name: 'index' })
        setTimeout(() => {
          document.querySelector('.section2').scrollIntoView()
        }, 300)
      }, 100)
    },
    contact () {
      setTimeout(() => {
        this.$router.push({ path: '/contacte' })
      }, 100)
    }
  }
}
</script>

<style lang="scss">

    .navbar {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .zimmologo {
        padding: .9em 0;
        opacity: .7;
        transform: translateX(-6px);
    }

    .routes- {
        transform: translateX(1rem);
        min-width: 13rem;
        display: flex;
        justify-content: space-between;
        transition: 200ms all ease-in;
    }

    .routes- span {
        font-weight: 700;

    }

    a {
      text-decoration: none;
    }

</style>
