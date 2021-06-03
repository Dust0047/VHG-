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
    <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.0403699158423!2d8.446289515919961!3d55.47939418048115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13
              .1!3m3!1m2!1s0x464b20d8442ed02d%3A0x2a118d81eb2fdc8c!2sBakkevej%2014%2C%206700%20Esbjerg!5e0!3m2!1sda!2sdk!4v1621855267443!5m2!1sda!2sdk"
            width="100%"
            height="250px"
            allowfullscreen=""
            loading="lazy"
          >
          </iframe>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 1200px) {
  .contact {
        width: 50vw;
        padding: 2% 0% 0% 0%;
    h2 {
      padding: 10px 0 10px 0;
      text-transform: uppercase;
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

@media only screen and (max-width: 1200px) and (min-width: 600px) {
  .contact {
        width: 70vw;
        padding: 5vh 0 5vh 0;
    h2 {
      padding: 10px 0 10px 0;
      text-transform: uppercase;
    }
    h5 {
      font-size: 16px;
    }
    .wrap {
      display: flex;
      flex-flow: wrap;
      div {
        width: 100%;
        padding-top: 5%;
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
