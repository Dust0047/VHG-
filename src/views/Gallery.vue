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

    <v-container>
      <h2>Vesterhavsgruppens billedegalleri</h2>

      <div>
        <router-link class="gallery-link" to="/gallery">Korpslejr 2009</router-link>

        <router-link class="gallery-link" to="/gallery">Gruppetur 2010</router-link>

        <router-link class="gallery-link" to="/gallery">Junioesommerlejr 2011</router-link>

        <router-link class="gallery-link" to="/gallery">Tropssommerlejr 2011</router-link>

        <router-link class="gallery-link" to="/gallery">Sommerlejr for Junior og Trop til Kulsø 2013</router-link>

        <router-link class="gallery-link" to="/gallery">Sommerlejr for Minier på Kulsø 2014</router-link>

        <router-link class="gallery-link" to="/gallery">Juniorsommerlejr på Houens Odde 2015</router-link>

        <router-link class="gallery-link" to="/gallery">Gruppesommerlejr til Tydal 2016</router-link>

        <router-link class="gallery-link" to="/gallery">Juniorsommerlejr på Forlev 2019</router-link>

        <router-link class="gallery-link" to="/gallery">Vis alle billeder</router-link>
      </div>
      
    </v-container>

    <v-main>
      <v-container>
        <h2></h2>
        <v-row>
          <v-col
            v-for="n in 24"
            :key="n"
            cols="4"
          >
            <v-card height="200"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import Navigation from "../components/common/Navigation.vue";

export default {
  name: "App",

  components: {
    Navigation,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
.head {
  color: white;
  text-align: center;
  padding: 10px 0px 10px 0px;
  text-transform: uppercase;
}</style>
