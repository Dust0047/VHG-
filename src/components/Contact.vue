<template>
  <div class="info-box my-green">
    <v-container class="contact">
      <h2>Kontakt</h2>
      <h4>Vesterhavsgruppens ledelse</h4>
      <p>Gruppens øvrige ledere kan kontaktes gennem gruppelederen.</p>
      <div class="wrap">
        <div>
          <h5>Kasserer:</h5>
          <p>
            Helén Buch Dubery tlf: 21 67 73 57
            <br />e-mail: kasserer@vesterhavsgruppen.dk
          </p>
        </div>
        <div>
          <h5>Formand:</h5>
          <p>
            Ricka Stenger tlf: 60 27 86 92
            <br />e-mail: formand@vesterhavsgruppen.dk
          </p>
        </div>
        <div>
          <h5>Gruppeleder:</h5>
          <p>
            Steffen Sørensen tlf: 40 29 26 71
            <br />e-mail: gruppeleder@vesterhavsgruppen.dk
          </p>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 1904px) and (min-width: 600px) {
  .contact {
        width: 55vw;
        padding: 2% 0% 0% 0%;
    h2 {
      padding: 10px 0 10px 0;
      text-transform: uppercase;
    }
    h4 {
    }
    h5 {
      font-size: 16px;
    }
    .wrap {
      display: flex;
      flex-flow: wrap;
      padding: 0% 0% 5% 0%;
      div {
        width: 50%;
        padding-top: 4%;
      }
    }
  }
}

@media only screen and (max-width: 600px) and (min-width: 0px) {
  .contact {
    width: 90%;
    h2 {
      text-transform: uppercase;
      text-align: center;
    }
    h5 {
      font-size: 16px;
    }
    .wrap {
      display: flex;
      flex-direction: column;
      padding: 10px;
      div {
        width: 45%;
      }
    }
  }
}
</style>
