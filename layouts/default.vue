<template>
  <v-app id="scrolling-techniques-4" class=" home-container overflow-y ">
    <div class="forPhone">
      <v-container class="pa-- ">
        <v-icon class="nav-btn " @click.stop="drawer = !drawer">
          fas fa-bars
        </v-icon>
      </v-container>
    </div>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      bottom
      temporary
      height="9rem"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <NuxtLink to="/">
            <v-list-item>
              <v-list-item-title><b>Sobre Nos</b></v-list-item-title>
            </v-list-item>
          </NuxtLink>
          <NuxtLink to="/contacte">
            <v-list-item>
              <v-list-item-title><b>Contacte-nos</b></v-list-item-title>
            </v-list-item>
          </NuxtLink>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <LoadingBar />
    <v-container style="max-width: 1100px;" class="ct">
      <Navbar />
    </v-container>
    <v-main class="accent-bk ">
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null
  }),

  watch: {
    group () {
      this.drawer = false
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  span, p, div, button {
    font-size: .9rem;
    font-family: 'Raleway', sans-serif;
    text-transform: none;
    color: $secondary;
    font-weight: 500;
  }

  h1,h2,h3,h4,h5,h6 {
font-family: 'Fugaz One', cursive;
        color: $secondary;
  }

  h1 {
    font-size: 2.5rem;
    letter-spacing: 0;
  }
  .accent-bk {

    background-color: $accent;
  }

  .container {

    margin: 0 auto;
  }

  .fixed {
    position: absolute;

  }
  body {
        background-color: $accent;
    overflow: hidden;
  }

  :root {

        background-color: $accent;
    overflow: hidden;
  }

  .v-application--wrap {
        background-color: $accent;

  }

  .pa-- {
    width: 100%;

    padding: 0 3em;
  }

  .pt {
    padding-top: 2em
  }

// @media (max-width: 1000px) {
//   :root {
//     font-size: .8rem;
//   }
// }

// @media (max-width: 700px) {
//   :root {
//     font-size: .6rem;
//   }
// }

</style>
