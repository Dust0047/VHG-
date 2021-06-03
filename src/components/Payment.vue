<template>
    <div class="my-green">
      <v-container class="my-green-wrap">
        <h3>Betaling</h3>
        <p>Gruppen har en valgt kasserer og kontingent o.l. betales via giro eller bank.</p>

        <div>
          <h4>Indmeldelsesgebyr</h4>
          <p>For tiden udgør indmeldelsesgebyret 200 kr.
              som bl.a. dækker bog, T-shirt og tørklæde.
              </p>
        </div>

        <div>
          <h4>Kontigent</h4>
          <p>Kontingent betales halv-årlig i januar og august, og er på 850 kr. årligt.</p>
        </div>

        <div>
          <h4>Betaling for ture</h4>
          <p>Betaling for ture, sker direkte til afdelingernes lederne.</p>
        </div>

      </v-container>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

$green: #276859;

.my-green {
    background-color: $green;
}

.my-green-wrap {
    width: 50vw;
    color: white;
    display: flex;
    flex-direction: column;
    

    h3 {
        text-align: center;
        font-size: 32px;
        text-transform: uppercase;
        padding: 10px;
    }

    p {
        text-align: center;
    }

    div {
        width: 60%;
        align-self: center;
        padding: 10px;
        
        h4 {
            
            font-size: 18px;
        }

        p {
            text-align: left;
            padding: 5px;
        }
    }
}
</style>