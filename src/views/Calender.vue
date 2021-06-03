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

        <Calender />
    </div>
</template>

<script>
import Calender from '../components/Calender.vue';
import Navigation from '../components/common/Navigation.vue';

export default {
  name: 'App',

  components: {
    Calender,
    Navigation,
  },
}
</script>

<style lang="scss" scoped>
.head {
  color: white;
  text-align: center;
  padding: 10px 0px 10px 0px;
  text-transform: uppercase;
}
</style>