<template>
    <div class="my-green">
      <v-container class="my-green-wrap">
        <h3>Betaling</h3>
        <p class="pay-sub">Gruppen har en valgt kasserer og kontingent o.l. betales via giro eller bank.</p>
        <div>
          <h4>Indmeldelsesgebyr</h4>
          <p>For tiden udgør indmeldelsesgebyret 200 kr.
              som bl.a. dækker bog, T-shirt og tørklæde.</p>
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
    padding: 5vh 0 5vh 0;
}

@media only screen and (max-width: 1904px) and (min-width: 600px) {
    .my-green-wrap {
        width: 50vw;
        color: white;
        display: flex;
        flex-direction: column;
        h3 {
            width: 70%;
            text-align: left;
            font-size: 32px;
            text-transform: uppercase;
            padding: 10px 0 10px 0;
            align-self: center;
        }
        .pay-sub {
            text-align: left;
            width: 70%;
            align-self: center;
            padding-bottom: 2vh;
        }
        div {
            width: 70%;
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
}

@media only screen and (max-width: 600px) and (min-width: 0px) {
    .my-green-wrap {
        width: 100vw;
        color: white;
        display: flex;
        flex-direction: column;
        h3 {
            width: 70%;
            text-align: left;
            font-size: 32px;
            text-transform: uppercase;
            padding: 10px 0 10px 0;
            align-self: center;
        }
        .pay-sub {
            text-align: left;
            width: 70%;
            align-self: center;
        }
        div {
            width: 70%;
            align-self: center;
            h4 {
                font-size: 18px;
            }
            p {
                text-align: left;
            }
        }
    }
 }

</style>