<template>
  <footer class="ct">
    <div class="mainF">
      <v-container style=" max-width: 1100px; height: 100%">
        <div class="pa-- fooContent">
          <div class="fooBlock">
            <p class="moreobout">
              <b>
                PORQUE PRECISA DE NOS?
              </b>
            </p>
            <p class="fooText">
              Fazemos cartazes comerciais e gestão ou assistencia na gestão de redes sociais. Tudo isso para maximizar o efeito de cada sua campanha publicitária.
            </p>
          </div>
          <div class="fooBlock">
            <p class="moreobout">
              <b>
                CONTINUE CONECTADOS
              </b>
            </p>
          </div>
          <div class="fooBlock">
            <p class="moreobout">
              <b>
                CONTACTE-NOS
              </b>
            </p>
          </div>
        </div>
      </v-container>
    </div>
    <div class="smf">
      <v-container style=" max-width: 1100px; height: 100%">
        <div class="pa-- centerF">
          <span>&copy; 2021 Zimmo design & Webdev</span>
          <span class="forcp">Maputo/Mocambique</span>
        </div>
      </v-container>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .forcp {
    display: block;
  }
  .fooBlock b {
    font-weight: 800;
  }

.mainF {
    min-height: 20rem;
    height: 20rem;
}

.centerF {
  color: white;
  display: flex;
  justify-content: space-between;
}

.centerF span {
  color: white;
  font-weight: 700;
}

.smf {

  padding: .5rem 0;
  background-color: $secondary;
}

.fooContent {
  height: 100%;
  display: flex;
  justify-content: space-between;
align-items: center;
}

.fooText {

}

.fooBlock {
  height: 9rem;
  max-width: 300px;

}

.moreobout {
  // font-size: 1rem;
  font-weight: 700;
}

@media (max-width: 850px) {
  .fooContent {
    display: block;

  }

  .fooBlock {
        padding-top: 1rem;
  padding-bottom: 2rem;
  height: auto;
  max-width: 100%;
  }

  .fooBlock p {
    font-weight: 700;
    padding: 0;
  }

  .mainF {
    min-height: 14rem;
    height: auto;
}

  .forcp {
    display: none;
  }
}
</style>
