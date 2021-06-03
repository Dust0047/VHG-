<template>
  <v-content>
              <v-card>
      <v-img src="../assets/images/coverbillede-cover.jpg" height="25vh">
        <Navigation />
        <div class="head">
          <h3></h3>
          <h1></h1>
        </div>
      </v-img>
    </v-card>
    <v-container>
      <div class="block text-center notFound">
        <h2>Page not found</h2>
        <i class="fas fa-exclamation-triangle red--text"></i>
        <p>We're sorry, the page you requested could not be found. Please go back to the homepage or contact us at admin@bibekshakya.com</p>
      </div>
    </v-container>
  </v-content>
</template>

<script>
import Navigation from "../components/common/Navigation.vue";

export default {
  name: "NotFound",

  components: {
    Navigation,

  },
  data() {
    return {
      items: []
    };
  }
};
</script>