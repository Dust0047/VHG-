<template>
  <div>
    <v-container class="nav hidden-xs-only">
      <div class="nav-btn" text>
        <router-link class="nav-link" to="/">Forside</router-link>
      </div>
      <div class="nav-btn" text>
        <router-link class="nav-link" to="/about">Hvem er vi?</router-link>
      </div>
      <div class="nav-btn" text>
        <router-link class="nav-link" to="/calender">Kalender</router-link>
      </div>
      <div class="nav-btn" text>
        <router-link class="nav-link" to="/gallery">Galleri</router-link>
      </div>
      <div class="nav-btn" text>
        <router-link class="nav-link" to="/scout">Bliv Spejder</router-link>
      </div>
    </v-container>

    <div class="hidden-sm-and-up my-mobile-nav">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <div class="mobile-nav-icon">
            <v-app-bar-nav-icon
              class="hamburger"
              v-on="on"
            ></v-app-bar-nav-icon>
          </div>
        </template>
        <v-list class="responsiveMenu">
          <v-list-item>
            <v-list-item-title
              ><router-link class="mobile-nav-link" to="/">Forside</router-link></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><router-link class="mobile-nav-link" to="/about"
                >Hvem er vi?</router-link
              ></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><router-link class="mobile-nav-link" to="/calender"
                >Kalender</router-link
              ></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><router-link class="mobile-nav-link" to="/gallery"
                >Galleri</router-link
              ></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><router-link class="mobile-nav-link" to="/scout"
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
export default {};
</script>

<style lang="scss" scoped></style>
