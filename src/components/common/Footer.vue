<template>
    <div>
        <footer>
            <v-container class="footer-wrap">
                <h2>Vesterhavsgruppen</h2>
                <h3>De Blå Spejdere i Esbjerg</h3>
                <div>
                    <div>
                        <h3>Kontakt</h3>
                        <p>DDS Vesterhavsgruppen <br>
                            De blå spejdere i Esbjerg, <br>
                            Bakkevej 14, <br>
                            6700 Esbjerg 
                            <span>Tlf. 40 29 26 71</span> 
                            <span>kontakt@vesterhavsgruppen.dk</span>
                        </p>
                    </div>
                    <div>
                        <h3>Følg os på</h3>
                        <p>Hvis du gerne vil se flere nyheder eller billeder kan du følge os på Facebook for mere</p>
                    </div>
                </div>
            </v-container>
        </footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
* {
  font-family: Montserrat;
}

@media only screen and (max-width: 1904px) and (min-width: 600px) { 
    footer {
        background-color: #1E2430;
        color: white;
        text-align: center;
        display: flex;
        flex-direction: column;

        .footer-wrap {
            width: 45vw;

            h2 {
                font-size: 30px;
                padding: 10px 10px 0px 10px;
            }

            h3 {
                padding: 0px 10px 20px 10px;
                
            }

            div {
                display: flex;
                justify-content: center;
                align-items: flex-start;
                justify-content: space-around;
                
                div {
                    width: 40%;
                    flex-direction: column;
                    text-align: left;
                    justify-content: space-around;

                    h3 {
                        font-size: 22px;
                        width: 100%;
                    }

                    p {
                        width: 80%;
                        padding: 10px
                    }
                }
            }
        }

    }
}

@media only screen and (max-width: 600px) and (min-width: 0px) { 

footer {
        background-color: #1E2430;
        color: white;
        text-align: center;
        display: flex;
        flex-direction: column;

        .footer-wrap {
            width: 100vw;

            h2 {
                font-size: 30px;
                padding: 0px 0px 0px 0px;
            }

            h3 {
                padding: 0px 0px 0px 0px;
                
            }

            div {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-around;
                padding: 10px 0 10px 0;
                div {
                    width:75%;
                    flex-direction: column;
                    text-align: left;
                    justify-content: space-around;
                    align-self: center;

                    h3 {
                        font-size: 22px;
                        width: 100%;
                    }

                    p {
                        width: 80%;
                        line-height: 30px;
                    }
                }
            }
        }
    }
}

</style>