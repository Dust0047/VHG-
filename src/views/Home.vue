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
        src="../assets/images/front-main-lay.png"
        height="100vh"
      >
        <Navigation />

        <v-container class="landing-wrap">
          <h1>Vesterhavsgruppen</h1>
          <h2>De blå spejdere i Esbjerg</h2>
          <div>
            <button class="landing-btn my-white">
              <router-link class="link-black" to="/scout"
                >Prøv Spejder</router-link
              >
            </button>
            <button class="landing-btn my-green">
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
        <div class="mobile-info" @click="goto('actual')">
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
          <div class="icon">
            <i class="fas fa-chevron-circle-down info-icon"></i>
          </div>
        </div>
      </div>

      <div>
        <div class="mobile-info" @click="goto('practical')">
          <h2>Praktisk</h2>
          <p>
            Her kan du finde praktiske oplysninger bl.a. om Vesterhavsgruppens
            ledelse, hytter, kontigent, uniformsvejledning samt
            Vesterhavsgruppens logo.
          </p>
        </div>
        <div class="scroll-btn">
          <div class="icon">
            <i class="fas fa-chevron-circle-down info-icon"></i>
          </div>
        </div>
      </div>

      <div>
        <div class="mobile-info" @click="goto('contact')">
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
          <div class="icon">
            <i class="fas fa-chevron-circle-down info-icon"></i>
          </div>
        </div>
      </div>
    </v-container>
    <!-- <InfoMobile /> -->

    <div class="info-box my-blue hidden-xs-only">
      <v-container class="front-quote">
        <h3>
          Kammeratskab, ansvar, friluftsliv og sjov og udfordrende er de
          værdier, som Det Danske Spejderkorps og Vesterhavsgruppen i Esbjerg
          arbejder efter.
        </h3>
        <button class="green-btn">
          <router-link class="link" to="/about">Læs Mere</router-link>
        </button>
      </v-container>
    </div>

    <v-container ref="actual" class="actual my-res-small">
      <h2 class="my-title-center">Aktuelt</h2>
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
        <b>40 29 26 71</b>. <br />
        <br />
        <b
          >Læs mere om retningslinjer for spejdermøder under Covid-19
          <router-link to="/about">her</router-link>.</b
        >
      </p>
    </v-container>

    <v-img
      max-height="350"
      max-width="100vw"
      class="actual-img"
      src="../assets/images/sheltertrip.png"
    ></v-img>

    <div class="info-box my-green hidden-xs-only">
      <v-container class="front-quote">
        <h3>
          DDS Vesterhavsgruppen, Esbjerg er medlem af Det Danske Spejderkorps,
          også kaldet De Blå Spejdere i daglig tale.
        </h3>
      </v-container>
    </div>

    <v-container class="meeting-time">
      <h2>Mødetider for afdelinger</h2>
      <p>Vi mødes på bakkevej 14, 6700 Esbjerg</p>

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

    <div class="practical" ref="practical">
      <v-img class="img" src="../assets/images/front-practical-lay.png">
        <div class="head title-sep">
          <h2>Praktisk information</h2>
        </div>
      </v-img>
    </div>

    <v-container class="actual my-res-small cabin-block">
      <h3>Vesterhavsgruppens hytter</h3>
      <p>
        Gruppen har en mødehytte på Bakkevej 14, på en grund vi deler med Sct.
        Georgsgilderne, De Grønne Pigespejdere og FDF. <br />
        <br />
        I hytten er der et stort fælles møderum, 4 patruljelokaler, et lederrum
        og et moderne køkken. Der er god plads uden om hytten, så vi kan arbejde
        med pionerarbejde og båltænding. I hytten er der depot med udstyr så
        hele gruppen kan tage på teltlejr på en gang. <br />
        <br />
        <b> Vesterhavsgruppen har også en lille hytte i Marbæk Plantage.</b>
        <br />
        <br />
        Trekløverhytten ligger på Spejderøen og der er plads til at der kan
        overnatte 10 personer i hytten. Hytten indeholder fællesrum, lederrum,
        soverum, køkken og toilet og er derfor ideel til patruljeture,
        weekendture for en lille afdeling eller base for aktiviteter i
        <b> Marbæk Plantage </b>
      </p>
      <div class="cabin-images">
        <v-img class="cab-img" src="../assets/images/img2.jpg"></v-img>
        <v-img class="cab-img" src="../assets/images/img3.jpg"></v-img>
      </div>
    </v-container>

    <div class="info-box my-blue">
      <v-container class="fee mobile-fee">
        <div class="fee-text">
          <h3>Kontigent</h3>
          <p>
            For tiden udgør indmeldelsesgebyret 200 kr. som bl.a. dækker en
            T-skirt, et tørklæde og en arbejdsstofbog. <br />
            <br />
            Kontinget er på 850 kr. årligt, som opkræves i 2 halvårlige rater.
          </p>
        </div>
        <div class="fee-btn">
        <button class="green-btn"
          ><router-link class="link" to="/scout"
            >Tilmelding</router-link
          ></button
        ></div>
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
import Contact from "../components/Contact.vue";
import Partners from "../components/Partners.vue";
import Uniform from "../components/Uniform.vue";
import Navigation from "../components/common/Navigation.vue";

export default {
  name: "App",

  components: {
    Contact,
    Partners,
    Uniform,
    Navigation,
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

<style lang="scss" scoped></style>
