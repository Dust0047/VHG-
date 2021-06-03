<template>
  <div>
    <v-container class="mobile-text-block my-text-block my-res-small">
      <h2>Uniformsvejledning</h2>
      <p class="my-res-small">
        <b class="mobile-sub-header">Grundlæggende består uniformen af:</b>
        <br />
        selve uniformen, som findes i anorak- eller skjortefacon samt tørklæde i
        gruppens farver. Når det er varmt kan man anvende en mørkeblå T-shirt i
        stedet for spejderuniformen. <br />
        <br />

        Mikrospejdere behøver ikke at anskaffe en spejderuniform. Øvrige
        uniformsgenstande og udstyr kan købes i Spejdersport. <br />
      </p>
      <v-img class="my-img" src="../assets/images/uniformerpar.jpeg"></v-img>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 1904px) and (min-width: 600px) {
  .my-text-block {
    width: 50vw;
    padding-bottom: 10vh;

    h2 {
      text-align: center;
      text-transform: uppercase;
      padding: 5vh;
    }

    p {
      line-height: 36px;
    }
  }
}

@media only screen and (max-width: 1200px) and (min-width: 600px) { 
  .my-text-block {
    width: 70vw;
    padding-bottom: 10vh;

    h2 {
      text-align: center;
      text-transform: uppercase;
      padding: 5vh;
    }

    p {
      line-height: 36px;
    }
  }

}

@media only screen and (max-width: 600px) and (min-width: 0px) {
  .my-res-small {
    width: 90vw;
    padding: 0 0 0 0;
  }

  .mobile-sub-header {
    font-size: 14px;
  }

  .mobile-text-block {
    width: 80vw;
    padding-bottom: 10vh;

    h2 {
      text-align: center;
      text-transform: uppercase;
      padding: 5vh 0vh 2vh 0vh;
    }

    p {
      width: 80vw;
    }

    .my-img {
      width: 100vw;
      background-color: green;
    }
  }
}
</style>
