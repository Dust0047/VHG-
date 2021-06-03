<template>
  <div>
    <v-card>
      <v-img src="../assets/images/scout-head-lay.jpg" height="25vh">
        <Navigation />
        <div class="head">
          <h1>Bliv Spejder</h1>
        </div>
      </v-img>
    </v-card>

    <v-container class="actual scout-text">
      <h2>Bliv spejder i vesterhavsgruppen</h2>
      <p>Her kan du læse om hvordan du kan blive spejder i Vesterhavsgruppen</p>
      <h3>Hvis du vil være spejder i Vesterhavsgruppen kan du:</h3>
      <div>
        <h3>Kontakte gruppeledere</h3>
        <p>
          kontakte en af vores gruppeledere, Hélen eller Steffen <br> på telefon: 
         <b>21 67 73 57 / 40 29 26 71</b> <br> eller på mail: <b>kontakt@vesterhavsgruppen.dk</b>
        </p>
      </div>
      <div>
        <h3>Besøge os</h3>
        <p>
          Besøge os på Bakkevej 14 når den afdeling, der passer til din alder,
          holder møde.
        </p>
      </div>
    </v-container>

    <div class="info-box my-green ">
      <v-container class="front-quote">
        <h3>
          Du kan finde en online tilmeldingeblanket ved at trykke på knappen her
        </h3>
        <button onclick="location.href='https://medlem.dds.dk/member/signup/5412'" class="blue-btn">Tilmelding</button>
      </v-container>
    </div>

    <v-container class="cover-wrap my-text-block">
      <h2 class="my-title">flere oplysninger om tilmeldning</h2>
      <v-img class="cover-image" src="../assets/images/scout1.jpg"> </v-img>
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
      <v-img class="cover-image" src="../assets/images/scout2.jpg"> </v-img>
      <div class="cover-lay">
        <h4>Første mødedag</h4>
        <p>
          Spejderen får den første mødedag udleveret “Velkommen til DDS” pjecen
          samt et indmeldelseskort.
        </p>
      </div>
    </v-container>

    <v-container class="cover-wrap my-text-block">
      <v-img class="cover-image" src="../assets/images/scout3.jpg"> </v-img>

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

    <div id="payment">
      <Payment />
    </div>

    <v-container class="my-text-block">
      <h2>Er du interesseret i at læse mere</h2>
      <p>
        Er du intresseret i at læse mere om Det Danske Spejderkorps så kig på
        korpsets hjemmeside <a href="www.dds.dk"><b>www.dds.dk</b></a> <br />
        <br />
        Der er også flere oplysninger på de øvrige sider - vi glæder os til at
        se dig i Vesterhavsgruppen.
      </p>
      <button onclick="location.href='https://medlem.dds.dk/member/signup/5412'" class="blue-btn">Tilmelding</button>
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

</style>
