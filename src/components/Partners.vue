<template>
  <v-container class="my-res-small partners">
    <h2>VORES SAMARBEJDS PARTNER</h2>
    <p>
      Vesterhavsgruppen har en sponsoraftale med OK som indebærer, at OK støtter
      os økonomiskhver gang nogen bestiller et OK-kort gennem os og hver gang
      man tanker benzin eller diesel på et kort, der er tilknyttet vores aftale.
      <br /><br />
      Hvis du er interesseret i at støtte os på denne måde, kan du skrive til
      <b>inge.thisgaard@mail.dk</b> eller tale med en leder til vores
      spejdermøder
    </p>
    <v-img class="part-image" src="../assets/images/ok-amba.jpg"></v-img>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 1904px) and (min-width: 600px) {

  .partners {
    width: 70vw;
    h2 {
      text-align: center;
      padding: 2vw 0 2vw 0;
    }
    p {
      padding-bottom: 2vw;
      line-height: 36px;
    }
    .part-image {
      margin: auto auto;
      width: 10vw;
    }
  }
}

@media only screen and (max-width: 600px) and (min-width: 0px) {


  .my-res-small {
    width: 90vw;
  }
  .mobile-sub-header {
    font-size: 14px;
  }
    h2 {
      text-align: center;
      text-transform: uppercase;
      padding: 5vh 0 0 0;
    }
    p {
      width: 90vw;
      padding: 5%;
      line-height: 30px;
    }
    .part-image {
      margin: auto auto;
      width: 25vw;
    }
  
  .partners {
    padding-bottom: 10vw;
  }
}
</style>
