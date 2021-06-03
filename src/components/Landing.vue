<template>
  <div>
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
                >Bliv Spejder</router-link
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
          <div>
            <h2>Aktuelt</h2>
            <p>
              Læs om hvad der er aktuelt lige nu i Vesterhavsgruppen, og de mest
              relevante nyheder
            </p>
          </div>
          <div>
            <h2>Praktisk</h2>
            <p>
              Her kan du finde praktiske oplysninger bl.a. om Vesterhavsgruppens
              ledelse, hytter, kontigent, uniformsvejledning.
            </p>
          </div>
          <div>
            <h2>Kontakt</h2>
            <p>Gruppens øvrige ledere kan kontaktes gennem gruppelederen…</p>
          </div>
        </v-container>
      </v-img>
    </v-card>
  </div>
</template>

<script>
import Navigation from "../components/common/Navigation.vue";

export default {
  name: "App",

  components: {
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

<style lang="scss" scoped>
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
    padding-bottom: 5vw;
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

  div {
    width: 15vw;
  }
}
</style>
