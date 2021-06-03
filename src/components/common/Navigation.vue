<template>
  <div>
    <v-container class="nav hidden-xs-only">
        <div class="nav-btn" text><router-link class="nav-link" to="/">Forside</router-link></div>
        <div class="nav-btn" text><router-link class="nav-link" to="/about">Hvem er vi?</router-link></div>
        <div class="nav-btn" text><router-link class="nav-link" to="/calender">Kalender</router-link></div>
        <div class="nav-btn" text><router-link class="nav-link" to="/gallery">Galleri</router-link></div>
        <div class="nav-btn" text><router-link class="nav-link" to="/scout">Bliv Spejder</router-link></div>
        <!-- <div class="nav-btn" text><router-link class="nav-link" to="/test">Test</router-link></div> -->
    </v-container>

    <div class="hidden-sm-and-up">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
        </template>
        <v-list class="responsiveMenu">
          <v-list-item>
            <v-list-item-title
              ><router-link to="/">Forside</router-link></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><router-link to="/about">Hvem er vi?</router-link></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><router-link to="/calender"
                >Kalender</router-link
              ></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><router-link to="/gallery"
                >Galleri</router-link
              ></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><router-link to="/scout"
                >Bliv Spejder</router-link
              ></v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data: () => ({
    icons: ["fa fa-download"],
  }),
};
</script>

<style lang="scss" scoped>


  .nav {
    // background-color: hotpink;
    display: flex;
    justify-content: center;
    width: 60vw;
    

    .nav-btn {
      //background-color: blue;  
      padding: 15px 0px 15px 0px;
      width: 10vw;
      text-decoration: none;
      text-align: center;
      border-bottom: 2px solid #c7c7c7;

      .nav-link {
        text-decoration: none;
        color: white;
        text-decoration: none;
        text-transform: uppercase;
      }
    }
  }
</style>
