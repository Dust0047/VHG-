<template>
  <v-container class="my-container hidden-sm-and-up">
    <div>
      <div class="mobile-info">
        <h2>Aktuelt</h2>
        <p>
          Da vi stadig er påvirket af Coronavirus vil vi gerne vide, hvor mange
          der deltager i møderne, så hvis du gerne vil prøve at være spejder,
          vil vi gerne have besked inden du kommer. Du kan enten skrive en mail
          til adressen overfor eller ringe til vores gruppeleder på tlf. 40 29
          26 71.
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
          ledelse, hytter, kontigent, uniformsvejledning samt Vesterhavsgruppens
          logo.
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
          Da vi stadig er påvirket af Coronavirus vil vi gerne vide, hvor mange
          der deltager i møderne, så hvis du gerne vil prøve at være spejder,
          vil vi gerne have besked inden du kommer. Du kan enten skrive en mail
          til adressen overfor eller ringe til vores gruppeleder på tlf. 40 29
          26 71.
        </p>
      </div>
      <div class="scroll-btn">
        <button class="scroll-down">Tryk</button>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
    methods: {
      goto(refName) {
          var element = this.$refs[refName];
          var top = element.offsetTop;
          window.scrollTo(0, top);
      }
  },
};
</script>

<style lang="scss" scoped>
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
