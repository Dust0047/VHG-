<template>
  <div>
    <v-card>
      <v-img src="../assets/images/banner1.jpg" height="25vh">
        <Navigation />
        <div class="head">
          <h1>Bliv Spejder</h1>
        </div>
      </v-img>
    </v-card>

    <v-container class="my-text-block">
      <h2 class="my-title">Bliv spejder i vesterhavsgruppen</h2>
      <p class="my-sub-title">
        Her kan du læse om hvordan du kan blive spejder i Vesterhavsgruppen
      </p>

      <h3>Hvis du vil være spejder i Vesterhavsgruppen kan du:</h3>
      <div>
        <h4>Kontakte gruppeledere</h4>
        <p>
          kontakte en af vores gruppeledere, Hélen eller Steffen på telefon: 21
          67 73 57 / 40 29 26 71 eller på mail: kontakt@vesterhavsgruppen.dk
        </p>
      </div>
      <div>
        <h4>Besøge os</h4>
        <p>
          Besøge os på Bakkevej 14 når den afdeling, der passer til din alder,
          holder møde.
        </p>
      </div>
    </v-container>

    <div class="info-box my-green ">
      <v-container class="wrap registration">
        <h2>
          Du kan finde en online tilmeldingeblanket ved at trykke på knappen her
        </h2>
        <a href="https://medlem.dds.dk/member/signup/5412"><button class="blue-btn">Tilmelding</button></a>
      </v-container>
    </div>

    <v-container class="cover-wrap my-text-block">
      <h2 class="my-title">flere oplysninger om tilmeldning</h2>

      <v-img class="cover-image" src="../assets/images/front.png"> </v-img>

      <div class="cover-lay">
        <h4>Prøvetid</h4>
        <p>
          Når nye spejdere starter i gruppen får de en lille prøvetid på optil 3
          uger, hvorefter spejderen skal indmeldes i gruppen,
          indmeldelses-blanketten skal afleveres til spejderlederen.
        </p>
      </div>
    </v-container>

    <v-container class="cover-wrap my-text-block">
      <v-img class="cover-image" src="../assets/images/front.png"> </v-img>
      <div class="cover-lay">
        <h4>Første mødedag</h4>
        <p>
          Spejderen får den første mødedag udleveret “Velkommen til DDS” pjecen
          samt et indmeldelseskort.
        </p>
      </div>
    </v-container>

    <v-container class="cover-wrap my-text-block">
      <v-img class="cover-image" src="../assets/images/front.png"> </v-img>

      <div class="cover-lay">
        <h4>Ved indmeldelse</h4>
        <p>
          Ved indmeldelse får den nye spejder udleveret en T-shirt med gruppens
          logo, Rabatkort til spejder sport, Tørklæde i gruppens farver og
          Arbejdsstof-bogen som er en praktisk bog om udstyr, uniformer, knob og
          besnørringer, grundregler og værdier, pakkeliste til diverse tur-typer
          m.m. Når de får deres 1. uniform udleveres Divisionsmærke,
          Vesterhavsgruppen mærke.
        </p>
      </div>
    </v-container>

    <Payment />

    <v-container class="my-text-block my-box">
      <h2 class="my-title">Er du interesseret i at læse mere</h2>
      <p class="my-text">
        Er du intresseret i at læse mere om Det Danske Spejderkorps så kig på
        korpsets hjemmeside, <b>www.dds.dk</b> <br />
        <br />
        Der er også flere oplysninger på de øvrige sider - vi glæder os til at
        se dig i Vesterhavsgruppen.
      </p>
      <a href="https://medlem.dds.dk/member/signup/5412"><button class="blue-btn">Tilmelding</button></a>
    </v-container>
  </div>
</template>

<script>
import Navigation from "../components/common/Navigation.vue";
import Payment from "../components/Payment.vue";

export default {
  name: "App",

  components: {
    Navigation,
    Payment,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
* {
  font-family: Montserrat;
}

$green: #276859;

p {
  line-height: 30px;
}

.my-box {
  display: flex;
  flex-direction: column;
}

.my-text {
  padding: 5%;
}

.my-title {
  font-size: 28px;
  text-align: center;
}

.blue-btn {
  background-color: rgb(50, 63, 90);
  color: white;
  align-self: center;
  padding: 10px;
}

.head {
  color: white;
  text-align: center;
  padding: 10px 0px 10px 0px;
  text-transform: uppercase;
}

.cover-wrap {
  width: 50vw;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 10vh;

  h2 {
    padding: 5% 0 % 0;
    text-transform: uppercase;
  }

  .cover-lay {
    background-color: rgba(30, 36, 48, 0.9);
    color: white;
    width: 80%;
    position: relative;
    margin-top: -25%;
    align-self: center;
    padding: 5% 10% 5% 10%;

    h4 {
      padding-bottom: 5%;
    }
  }
}

.info-box {
  color: white;

  .wrap {
    width: 50vw;
    display: flex;
    justify-content: space-around;

    div {
      width: 40%;

      h2 {
        text-align: center;
      }

      p {
      }
    }
  }
}


.my-blue {
  background-color: #1e2430;
}

.my-green {
  background-color: $green;
}

.my-text-block {
  width: 40vw;
  padding: 5vh 0vh 10vh 0vh;
  h2 {
    padding-top: 5vh;
    text-align: center;
    text-transform: uppercase;
  }

  .my-sub-title {
    text-align: center;
  }
}

@media only screen and (max-width: 1904px) and (min-width: 600px) {
    .my-text-block {

      h3 {
        padding-top: 2vw;
        padding: 5% 5% 2% 5%;
      }

      div {
        padding: 5%;
      }
    }
}

@media only screen and (max-width: 600px) and (min-width: 0px) {
  .my-text-block {
    width: 90vw;

    h2 {
      padding-bottom: 1vh;
    }

    h3 {
      text-align: center;
      padding-bottom: 5vh;
    }

    .my-sub-title {
      text-align: center;
      padding-bottom: 1vh;
    }

    div {
      padding-bottom: 3vh;
    }
  }

  .registration {
    padding: 5vh;
  }

  .info-box {
    color: white;

    .wrap {
      width: unset;
      display: flex;
      justify-content: space-around;
      flex-direction: column;

      h2 {
        padding-bottom: 5vw;
      }
    }
  }

  .blue-btn {
    background-color: rgb(50, 63, 90);
    color: white;
    align-self: center;
    padding: 10px;
  }
}
</style>
