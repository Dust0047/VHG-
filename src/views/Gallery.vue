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

    <v-container class="gallery-wrap-nav">
      <h2>Vesterhavsgruppens billedegalleri</h2>

      <div class="gallery-nav">
        <router-link class="gallery-link" to="/gallery"
          >Korpslejr 2009</router-link
        >

        <router-link class="gallery-link" to="/gallery"
          >Gruppetur 2010</router-link
        >

        <router-link class="gallery-link" to="/gallery"
          >Junioesommerlejr 2011</router-link
        >

        <router-link class="gallery-link" to="/gallery"
          >Tropssommerlejr 2011</router-link
        >

        <router-link class="gallery-link" to="/gallery"
          >Sommerlejr for Junior og Trop til Kulsø 2013</router-link
        >

        <router-link class="gallery-link" to="/gallery"
          >Sommerlejr for Minier på Kulsø 2014</router-link
        >

        <router-link class="gallery-link" to="/gallery"
          >Juniorsommerlejr på Houens Odde 2015</router-link
        >

        <router-link class="gallery-link" to="/gallery"
          >Gruppesommerlejr til Tydal 2016</router-link
        >

        <router-link class="gallery-link" to="/gallery"
          >Juniorsommerlejr på Forlev 2019</router-link
        >

        <router-link class="gallery-link" to="/gallery"
          >Vis alle billeder</router-link
        >
      </div>
    </v-container>

    <v-container class="gallery">
      <div class="gallery-wrap-image">
        <v-img
          class="gallery-image"
          src="../assets/images/gallery/gal1.jpg"
        ></v-img>
      </div>
      <div class="gallery-wrap-image">
        <v-img
          class="gallery-image"
          src="../assets/images/gallery/gal2.jpg"
        ></v-img>
      </div>
      <div class="gallery-wrap-image">
        <v-img
          class="gallery-image"
          src="../assets/images/front-main-lay.png"
        ></v-img>
      </div>
      <div class="gallery-wrap-image">
        <v-img
          class="gallery-image"
          src="../assets/images/front-main-lay.png"
        ></v-img>
      </div>
      <div class="gallery-wrap-image">
        <v-img
          class="gallery-image"
          src="../assets/images/front-main-lay.png"
        ></v-img>
      </div>
      <div class="gallery-wrap-image">
        <v-img
          class="gallery-image"
          src="../assets/images/front-main-lay.png"
        ></v-img>
      </div>
      <div class="gallery-wrap-image">
        <v-img
          class="gallery-image"
          src="../assets/images/front-main-lay.png"
        ></v-img>
      </div>
      <div class="gallery-wrap-image">
        <v-img
          class="gallery-image"
          src="../assets/images/front-main-lay.png"
        ></v-img>
      </div>
      <div class="gallery-wrap-image">
        <v-img
          class="gallery-image"
          src="../assets/images/front-main-lay.png"
        ></v-img>
      </div>
      <div class="gallery-wrap-image">
        <v-img
          class="gallery-image"
          src="../assets/images/front-main-lay.png"
        ></v-img>
      </div>
      <div class="gallery-wrap-image">
        <v-img
          class="gallery-image"
          src="../assets/images/front-main-lay.png"
        ></v-img>
      </div>
      <div class="gallery-wrap-image">
        <v-img
          class="gallery-image"
          src="../assets/images/front-main-lay.png"
        ></v-img>
      </div>
      <div class="gallery-wrap-image">
        <v-img
          class="gallery-image"
          src="../assets/images/front-main-lay.png"
        ></v-img>
      </div>
      <div class="gallery-wrap-image">
        <v-img
          class="gallery-image"
          src="../assets/images/front-main-lay.png"
        ></v-img>
      </div>
      <div class="gallery-wrap-image">
        <v-img
          class="gallery-image"
          src="../assets/images/front-main-lay.png"
        ></v-img>
      </div>
      <div class="gallery-wrap-image">
        <v-img
          class="gallery-image"
          src="../assets/images/front-main-lay.png"
        ></v-img>
      </div>
    </v-container>
  </div>
</template>

<script>
import Navigation from "../components/common/Navigation.vue";

export default {
  name: "App",

  components: {
    Navigation,
  },
};
</script>

<style lang="scss" scoped></style>
