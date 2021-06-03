<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <v-card>
      <v-img
        class="landing-img"
        src="../assets/images/front_overlay.jpg"
        height="100vh"
      >
        <Navigation />

        <v-container class="landing-wrap">
          <h1>Vesterhavsgruppen</h1>
          <h2>De blå spejdere i Esbjerg</h2>
          <div>
            <button class="btn my-white">
              <router-link class="link-black" to="/scout"
                >Prøv Spejder</router-link
              >
            </button>
            <button class="btn my-green">
              <router-link class="link-white" to="/about"
                >Afdelinger</router-link
              >
            </button>
          </div>
        </v-container>
        <v-container class="landing-info hidden-xs-only">
          <div class="info-wrap" @click="goto('actual')">
            <div class="text">
              <h2>Aktuelt</h2>
              <p>
                Læs om hvad der er aktuelt lige nu i Vesterhavsgruppen, og de
                mest relevante nyheder
              </p>
            </div>
            <div class="icon">
              <i class="fas fa-chevron-circle-down info-icon"></i>
            </div>
          </div>
          <div class="info-wrap" @click="goto('practical')">
            <div class="text">
              <h2>Praktisk</h2>
              <p>
                Her kan du finde praktiske oplysninger bl.a. om
                Vesterhavsgruppens ledelse, hytter, kontigent.
              </p>
            </div>
            <div class="icon">
              <i class="fas fa-chevron-circle-down info-icon"></i>
            </div>
          </div>
          <div class="info-wrap" @click="goto('contact')">
            <div class="text">
              <h2>Kontakt</h2>
              <p>Gruppens øvrige ledere kan kontaktes gennem gruppelederen…</p>
            </div>
            <div class="icon">
              <i class="fas fa-chevron-circle-down info-icon"></i>
            </div>
          </div>
        </v-container>
      </v-img>
    </v-card>
    <!-- <Landing /> -->

    <v-container class="my-container hidden-sm-and-up">
      <div>
        <div class="mobile-info">
          <h2>Aktuelt</h2>
          <p>
            Da vi stadig er påvirket af Coronavirus vil vi gerne vide, hvor
            mange der deltager i møderne, så hvis du gerne vil prøve at være
            spejder, vil vi gerne have besked inden du kommer. Du kan enten
            skrive en mail til adressen overfor eller ringe til vores
            gruppeleder på tlf. 40 29 26 71.
          </p>
        </div>
        <div class="scroll-btn">
          <button class="scroll-down">Tryk</button>
        </div>
      </div>

      <div>
        <div class="mobile-info" @click="goto('art1')">
          <h2>Praktisk</h2>
          <p>
            Her kan du finde praktiske oplysninger bl.a. om Vesterhavsgruppens
            ledelse, hytter, kontigent, uniformsvejledning samt
            Vesterhavsgruppens logo.
          </p>
        </div>
        <div class="scroll-btn">
          <button class="scroll-down">Tryk</button>
        </div>
      </div>

      <div>
        <div class="mobile-info">
          <h2>Kontakt</h2>
          <p>
            Da vi stadig er påvirket af Coronavirus vil vi gerne vide, hvor
            mange der deltager i møderne, så hvis du gerne vil prøve at være
            spejder, vil vi gerne have besked inden du kommer. Du kan enten
            skrive en mail til adressen overfor eller ringe til vores
            gruppeleder på tlf. 40 29 26 71.
          </p>
        </div>
        <div class="scroll-btn">
          <button class="scroll-down">Tryk</button>
        </div>
      </div>
    </v-container>
    <!-- <InfoMobile /> -->

    <div class="info-box my-blue hidden-xs-only">
      <v-container class="wrap">
        <h2>
          Kammeratskab, ansvar, friluftsliv og sjov og udfordrende er de værdier, som Det Danske Spejderkorps og Vesterhavsgruppen i Esbjerg arbejder efter.
        </h2>
        <v-btn class="btn"><router-link class="nav-link" to="/about">Læs Mere</router-link></v-btn>
      </v-container>
    </div>

    <v-container ref="actual" class="actual my-res-small">
      <h2 class="my-center">Aktuelt</h2>
      <h4>Velkommen til 2021.</h4>
      <p>
        2020 har været et mærkeligt år, hvor vi har måttet ændre planer for
        rigtig mange af vores aktiviteter. På nær et par måneder i foråret har
        vi kunnet holde vores ugentlige spejdermøder, men det er ikke blevet til
        ret mange ture og lejre. <br />
        <br />
        Vi håber at 2021 bliver bedre, i hvert fald når vi kommer over vintren,
        hvor vi stadig må regne med at leve med rimelig skrappe restriktioner.
        <br />
        <br />
        Da vi stadig er påvirket af Coronavirus vil vi gerne vide, hvor mange
        der deltager i møderne, så hvis du gerne vil prøve at være spejder, vil
        vi gerne have besked inden du kommer. Du kan enten skrive en mail til
        adressen overfor eller ringe til vores gruppeleder på tlf.
        <b>40 29 26 71</b>.
        <br> <br>
        <b>Læs mere om retningslinjer for spejdermøder under Covid-19 her.</b>
      </p>
      <v-img src="../assets/images/img1.jpg"></v-img>
    </v-container>

    <div class="info-box my-green hidden-xs-only">
      <v-container class="wrap">
        <h2>
          DDS Vesterhavsgruppen, Esbjerg er medlem af Det Danske Spejderkorps,
          også kaldet De Blå Spejdere i daglig tale.
        </h2>
      </v-container>
    </div>

    <v-container class="my-text-block meeting-time my-res-small">
      <h2>Mødetider for afdelinger</h2>
      <h4>Vi mødes på bakkevej 14, 6700 Esbjerg</h4>

      <div>
        <h3>Mikro (0.-1. Klasse</h3>
        <h4>Tirsdag kl 16:30- 18:00</h4>
      </div>

      <div>
        <h3>Mini ( 2. - 3. Klasse)</h3>
        <h4>Tirsdag kl 16:30- 18:00</h4>
      </div>

      <div>
        <h3>Junior ( 4. - 6. Klasse)</h3>
        <h4>Tirsdag kl. 19:00 - 20:30</h4>
      </div>

      <div>
        <h3>Trop ( 7. - 9. Klasse)</h3>
        <h4>Onsdag kl. 19:30 - 21:00</h4>
      </div>

      <div>
        <h3>Klan ( efter 9. Klasse)</h3>
        <h4>Torsdag kl. 19:00 - 21:00</h4>
      </div>
    </v-container>

    <div ref="practical">
      <v-img src="../assets/images/front.png" height="120">
        <div class="head title-sep">
          <h2>Praktisk information</h2>
        </div>
      </v-img>
    </div>

    <v-container class="my-text-block actual my-res-small">
      <h2>Vesterhavsgruppens hytter</h2>
      <p>
        Gruppen har en mødehytte på Bakkevej 14, på en grund vi deler med Sct.
        Georgsgilderne, De Grønne Pigespejdere og FDF. <br />
        <br />
        I hytten er der et stort fælles møderum, 4 patruljelokaler, et lederrum
        og et moderne køkken. Der er god plads uden om hytten, så vi kan arbejde
        med pionerarbejde og båltænding. I hytten er der depot med udstyr så
        hele gruppen kan tage på teltlejr på en gang. <br />
        <br />
        <b> Vesterhavsgruppen har også en lille hytte i Marbæk</b>
        Plantage. <br />
        <br />
        Trekløverhytten ligger på Spejderøen og der er plads til at der kan
        overnatte 10 personer i hytten. Hytten indeholder fællesrum, lederrum,
        soverum, køkken og toilet og er derfor ideel til patruljeture,
        weekendture for en lille afdeling eller base for aktiviteter i
        <b> Marbæk Plantage </b>
      </p>
      <div>
        <v-img src="../assets/images/img2.jpg"></v-img>
        <v-img src="../assets/images/img3.jpg"></v-img>
      </div>
    </v-container>

    <div class="info-box my-blue">
      <v-container class="wrap fee mobile-fee">
        <div>
          <h3>Kontigent</h3>
          <p>
            For tiden udgør indmeldelsesgebyret 200 kr. som bl.a. dækker en
            T-skirt, et tørklæde og en arbejdsstofbog. Kontinget er på 850 kr.
            årligt, som opkræves i 2 halvårlige rater.
          </p>
        </div>
        <div class="btn-wrap">
          <v-btn class="btn"><router-link to="/scout">Tilmelding</router-link></v-btn>
        </div>
      </v-container>
    </div>

    <Uniform />

    <div ref="contact">
      <Contact />
    </div>

    <Partners />
  </div>
</template>

<script>
// import Landing from "../components/Landing.vue";
import Contact from "../components/Contact.vue";
import Partners from "../components/Partners.vue";
import Uniform from "../components/Uniform.vue";
import Navigation from "../components/common/Navigation.vue";
// import InfoMobile from "../components/InfoMobile.vue";

export default {
  name: "App",

  components: {
    // Landing,
    Contact,
    Partners,
    Uniform,
    Navigation,
    // InfoMobile,
  },
  methods: {
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
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

.title-sep {
  h2 {
    padding: 2%;
  }
}

.meeting-time {
  padding-bottom: 5vh;
  h2 {
    text-align: center;
    padding-top: 30px;
  }

  h4 {
    text-align: center;
    padding-bottom: 30px;
  }

  div {
    padding-bottom: 10px;
    h3 {
      font-size: 20px;
      color: $green;
      text-transform: uppercase;
      text-align: center;
      padding-bottom: 5px;
    }

    h4 {
      text-align: center;
      padding-bottom: 5px;
    }
  }
}
.my-blue {
  background-color: #1e2430;
}
.my-green {
  background-color: $green;
}
.info-box {
  color: white;

  .wrap {
    width: 50vw;
    text-align: left;
    padding: 40px 10px 40px 50px;
    h2 {
      text-align: center;
      line-height: 42px;
      font-size: 25px;
      padding: 20px 0 40px 0;
    }
    .btn {
      background-color: $green;
      color: white;
    }
  }
}

.head {
  color: white;
  text-align: center;
  padding: 10px 0px 10px 0px;
  text-transform: uppercase;
}

.my-text-block {
  width: 40vw;
  h2 {
    text-align: center;
    text-transform: uppercase;
  }
}

.actual {
  width: 40vw;
  margin-bottom: 5vh;
  line-height: 30px;
  h2 {
    text-transform: uppercase;
    padding: 20px 0 20px 0;
  }
  h4 {
    padding: 5px;
  }
  p {
    padding: 5px;
  }
}
.my-center {
  text-align: center;
}

@media only screen and (max-width: 1904px) and (min-width: 600px) {
  .fee {
    width: 50vw;
    text-align: center;
    padding: 40px 10px 40px 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .btn-wrap {
      display: flex;
      justify-content: center;
      .btn {
        background-color: $green;
        color: white;
      }
    }
    div {
      width: 50%;
      h2 {
        text-align: left;
        line-height: 42px;
        font-size: 30px;
        padding: 20px 10px 40px 10px;
      }
      h3 {
        font-size: 24px;
        padding-bottom: 2vh;
      }
      p {
        text-align: left;
        font-weight: 500;
        line-height: 30px;
      }
    }
  }
}

@media only screen and (max-width: 600px) and (min-width: 0px) {
  .my-res-small {
    width: 90vw;
    padding: 0 0 0 0;
  }
  .info-box {
    color: white;
    .mobile-fee {
      display: flex;
      flex-direction: column;
      div {
        width: 80vw;
        padding: 0px 0px 0px 0px;
        p {
          padding: 0;
          width: 70vw;
        }
      }
    }
    .wrap {
      width: 90vw;
      text-align: left;
      padding: 40px 10px 40px 50px;
      h2 {
        text-align: center;
        line-height: 42px;
        font-size: 25px;
        padding: 20px 0 40px 0;
      }
      .btn {
        background-color: $green;
        color: white;
      }
    }
  }
}

//LANDING
$green: #276859;
.my-green {
  background-color: $green;
}
.my-white {
  background-color: #ffffff;
}
.landing-info,
.landing-wrap {
  color: white;
  text-align: center;
}
.landing-wrap {
  h1 {
    margin-top: 15vh;
    font-size: 50px;
  }
  h2 {
    padding-bottom: 30px;
    text-transform: uppercase;
  }
  div {
    padding-bottom: 4vw;
    
    .btn {
      padding: 15px 30px 15px 30px;
      margin-right: 1%;
      text-transform: uppercase;
      font-weight: 700;
      .link-white,
      .link-black {
        text-decoration: none;
      }
      .link-white {
        color: white;
      }
      .link-black {
        color: black;
      }
    }
  }
}

.landing-info {
  display: flex;
  width: 60vw;
  justify-content: space-between;
  height: auto;
  .info-wrap {
    width: 50vw;
    text-align: left;
    display: flex;
    flex-direction: column;
    height: 240px;
    padding: 10px;
    .text {
      flex-direction: column;
      display: flex;
      height: 160px;
      h2 {
        padding-bottom: 3%;
         font-size: 20px;
      }
      p {
        font-size: 14px;
        height: 110px;
      }
    }
    .icon {
      display: flex;
      justify-content: center; 
      .info-icon {
        font-size: 34px;
      }
    }
  }
}

//Mobile-Landing
$green: #276859;
.my-container {
  background-color: #1e2430;
  div {
    color: white;
    display: flex;
    padding: 2%;
    .mobile-info {
      background-color: $green;
      width: 80%;
      flex-direction: column;
      h2 {
        text-transform: uppercase;
      }
    }
    .scroll-btn {
      justify-content: center;
      width: 20%;
      background-color: $green;
    }
  }
}
</style>
