
<template>
  <div>
    <v-container class="ct" style=" max-width: 1100px;">
      <div class="pa--">
        <Section1 />
      </div>
    </v-container>
    <Section2 />
    <Section3 />
    <Section4 />
    <Footer />
  </div>
</template>
<script>
export default {
  head () {
    return {
      title: 'Sobre-nos'
    }
  }
}
</script>
<style lang="scss">
  .overflow-y {
    overflow: hidden;
    overflow-y: scroll;
    height: 100vh;
    position: relative;
    scroll-snap-type: y mandatory;

    scroll-behavior: smooth;
  }

  .ct{
    scroll-snap-align: center;
  }

</style>
