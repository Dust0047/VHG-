<template>
  <div>
    <v-card>
      <v-img src="../assets/images/banner1.jpg" height="25vh">
        <Navigation />
        <div class="head">
          <h2>Om gruppen</h2>
          <h1>Hvem er vi?</h1>
        </div>
      </v-img>
    </v-card>

    <v-container class="my-text-block my-res-small">
      <h2 class="my-title">Om Vesterhavsgruppen</h2>
      <p>
        <b>
          Vesterhavsgruppen er en gammel gruppe i Esbjerg, vi dækker hele
          Esbjerg by samt Skads/Andrup, Tjæreborg, Tarp/Bryndum områderne. </b
        ><br /><br />
        Vi er en del af DDS - Det Danske Spejderkorps og Horns Rev Division. I
        DDS arbejder vi ud fra spejder ideen, der blev grundlagt af Lord
        BADEN-POWELL i England for over 100 år siden! Lyder det kedeligt? - Det
        er det ikke!!! <br /><br />
        Vi bruger ikke kun kort og kompas til at finde vej. Det er nemmere med
        GPS. Det andet har vi nemlig lært. Vi følger ikke altid gamle damer over
        vejen, vi vil hellere gå lange ture, lave bål, riste skumfiduser, bygge
        med rafter, synge, danse, lege, få skøre ideer og afprøve dem, hygge i
        soveposen, grine, fnise, spejderdrille. Der er også noget man ikke må:
        nemlig at mobbe, være lede, ikke hjælpe hinanden. <br /><br />
        Og vi tør og vil stille krav til vores spejdere. <br /><br />
        <b
          >DDS er ikke tilknyttet nogen religion, vi rummer alle
          trosretninger.</b
        >
      </p>
    </v-container>

    <div class="goal-box info-box my-green">
      <v-container class="wrap">
        <div>
          <h2>Mål</h2>
          <p>
            Vi vil være fremadrettede og beslutsomme. Vi tør udvikle børn og
            unge til at tage del i og ansvar for sig selv og samfundet. Vi tør
            at vise overskud og risikovilje.
          </p>
        </div>
        <div>
          <h2>Vi gør</h2>
          <p>
            Udvikling, træning og uddannelse, som spejderne kan bruge i deres
            daglige spejderarbejde. Og senere i deres arbejdsliv.
          </p>
        </div>
      </v-container>
    </div>

    <v-container class="focus-wrap">
      <v-img class="focus-image" src="../assets/images/front.png"></v-img>

      <div class="focus-box">
        <h2>Fokusområder</h2>
        <p>Vi handler og udvikler spejdere via fokusområderne</p>
      </div>
    </v-container>

    <v-container class="my-list">
      <div>
        <h3>Mobning</h3>
        <p>Spejdere mod mobning</p>
      </div>

      <div>
        <h3>Natur og Miljø</h3>
        <p>Spejder for opmærksomhed på natur og miljø</p>
      </div>

      <div>
        <h3>Sundhed</h3>
        <p>Spejdere for en sund krop og god mad.</p>
      </div>

      <div>
        <h3>Øget integration</h3>
        <p>Spejdere for en øget integration i samfundet</p>
      </div>

      <div>
        <p class="my-green-text"><b>Læs mere på www.dds.dk</b></p>
      </div>
    </v-container>

    <v-img src="../assets/images/front.png" height="120">
      <div class="head title-sep">
        <h2>Afdelinger</h2>
      </div>
    </v-img>

    <v-container class="units">
      <h2>Afdelinger i Vesterhavsgruppen</h2>
      <h4>
        Her kan du læse om de forskellige afdelinger der er i Vesterhavsgruppen.
      </h4>

      <div>
        <p>Mikro - 0.- 1. Klasse</p>
        <p>Mini - 2.- 3. klasse</p>
        <p>Junior - 4.- 6. klasse</p>
        <p>Trop - 7.- 9. klasse</p>
        <p>Klan - efter 9. klasse</p>
      </div>
    </v-container>

    <Division />
  </div>
</template>

<script>
import Navigation from "../components/common/Navigation.vue";
import Division from "../components/Division.vue";

export default {
  name: "App",

  components: {
    Navigation,
    Division,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
$green: #276859;

* {
  font-family: Montserrat;
}

$my-title-size: 34px;

.my-list {
  padding: 5vh 5vh 5vh 5vh;
  width: 50vw;
  h3 {
    color: $green;
    padding-top: 30px;
    text-transform: uppercase;
    font-size: 24px;
    padding: 20px 0px 20px 0px;
  }

  p {
    padding-bottom: 30px;
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

.goal-box {
  h2 {
    text-transform: uppercase;
  }
}

.head {
  color: white;
  text-align: center;
  padding: 10px 0px 10px 0px;
  text-transform: uppercase;
}

.my-blue {
  background-color: #1e2430;
}

.my-green {
  background-color: $green;
}

.my-green-text {
  color: $green;
}

.my-text-block {
  width: 40vw;

  h2 {
    text-align: center;
    text-transform: uppercase;
    padding: 5% 5% 0% 5%;
  }

  h4 {
    text-align: center;
  }

  p {
    padding: 5%;
    line-height: 30px;
  }
}

.focus-wrap {
  width: 50vw;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;

  .focus-box {
    background-color: $green;
    color: white;
    width: 80%;
    position: relative;
    margin-top: -10%;
    align-self: center;
    text-align: center;
    padding: 10%;
    text-align: left;
  }
}

  .units {
    h2 {
      text-align: center;
      padding-bottom: 2vh;
    }
    h4 {
      text-align: center;
      padding-bottom: 5vh;
    }
    
    div {
      display: flex;
      flex-direction: column;
      p {
        align-self: center;
        color: $green;
        font-weight: 700;
        font-size: 22px;
        padding-bottom: 1vh;
      }
    }
  }

@media only screen and (max-width: 600px) and (min-width: 0px) {
  .my-res-small {
    width: 90vw;
    padding: 0 0 0 0;
  }

  .my-list {
    width: 100vw;
  }

  .focus-wrap {
    width: 100vw;
  }

  .units {
    h2 {
      text-align: center;
      padding-bottom: 2vh;
    }
    h4 {
      text-align: center;
      padding-bottom: 5vh;
    }

    div {
      display: flex;
      flex-direction: column;
      p {
        align-self: center;
        color: $green;
        font-weight: 700;
        font-size: 22px;
        padding-bottom: 1vh;
      }
    }
  }

  .info-box {
    color: white;
    .wrap {
      width: 100vw;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      div {
        width: 90%;
        p {
          line-height: 30px;
          padding: 5%;
        }
      }
    }
  }

  .goal-box {
    h2 {
      text-transform: uppercase;
    }
  }
}
</style>
