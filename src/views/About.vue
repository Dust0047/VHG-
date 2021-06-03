<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <v-card>
      <v-img src="../assets/images/coverbillede-cover.jpg" height="25vh">
        <Navigation />
        <div class="head">
          <h3>Om gruppen</h3>
          <h1>Hvem er vi?</h1>
        </div>
      </v-img>
    </v-card>
    <v-container class="actual my-res-small">
      <h2 class="my-title-center">Om Vesterhavsgruppen</h2>
      <p>
        <b>
          Vesterhavsgruppen er en gammel gruppe i Esbjerg, vi dækker hele
          Esbjerg by samt Skads/Andrup, Tjæreborg, Tarp/Bryndum områderne. </b
        ><br /><br />
        Vi er en del af DDS - Det Danske Spejderkorps og Horns Rev Division. I
        DDS arbejder vi ud fra spejder ideen, der blev grundlagt af Lord
        BADEN-POWELL i England for over 100 år siden! Lyder det kedeligt? - Det
        er det ikke!!! <br /><br />
        Vi bruger ikke kun kort og kompas til at finde vej. Det er nemmere med
        GPS. Det andet har vi nemlig lært. Vi følger ikke altid gamle damer over
        vejen, vi vil hellere gå lange ture, lave bål, riste skumfiduser, bygge
        med rafter, synge, danse, lege, få skøre ideer og afprøve dem, hygge i
        soveposen, grine, fnise, spejderdrille. Der er også noget man ikke må:
        nemlig at mobbe, være lede, ikke hjælpe hinanden. <br /><br />
        Og vi tør og vil stille krav til vores spejdere. <br /><br />
        <b
          >DDS er ikke tilknyttet nogen religion, vi rummer alle
          trosretninger.</b
        >
      </p>
    </v-container>
    <div class="goal-box info-box my-green">
      <v-container class="wrap">
        <div>
          <h2>Mål</h2>
          <p>
            Vi vil være fremadrettede og beslutsomme. Vi tør udvikle børn og
            unge til at tage del i og ansvar for sig selv og samfundet. Vi tør
            at vise overskud og risikovilje.
          </p>
        </div>
        <div>
          <h2>Vi gør</h2>
          <p>
            Udvikling, træning og uddannelse, som spejderne kan bruge i deres
            daglige spejderarbejde. Og senere i deres arbejdsliv.
          </p>
        </div>
      </v-container>
    </div>
    <v-container class="focus-wrap">
      <v-img class="focus-image" src="../assets/images/about1.jpg"></v-img>
      <div class="focus-box">
        <h2>Fokusområder</h2>
        <p>Vi handler og udvikler spejdere via fokusområderne</p>
        <div>
          <i class="fas fa-chevron-circle-down icon"></i>
        </div>
      </div>
    </v-container>
    <v-container class="my-list">
      <div>
        <h3>Mobning</h3>
        <p>Spejdere mod mobning</p>
      </div>
      <div>
        <h3>Natur og Miljø</h3>
        <p>Spejder for opmærksomhed på natur og miljø</p>
      </div>
      <div>
        <h3>Sundhed</h3>
        <p>Spejdere for en sund krop og god mad.</p>
      </div>
      <div>
        <h3>Øget integration</h3>
        <p>Spejdere for en øget integration i samfundet</p>
      </div>
      <div>
        <p class="my-green-text">
          <b>Læs mere på <a href="https://www.dds.dk">www.dds.dk</a></b>
        </p>
      </div>
    </v-container>
    <div class="practical">
      <v-img class="img" src="../assets/images/about2-units-lay.jpg">
        <div class="head title-sep">
          <h2>Afdelinger</h2>
        </div>
      </v-img>
    </div>
    <v-container class="units">
      <h2>Afdelinger i Vesterhavsgruppen</h2>
      <p>
        Her kan du læse om de forskellige afdelinger der er i Vesterhavsgruppen.
      </p>
      <ul>
        <a href="#micro"><li>Mikro - 0.- 1. Klasse</li></a>
        <a href="#mini"><li>Mini - 2.- 3. klasse</li></a>
        <a href="#junior"><li>Junior - 4.- 6. klasse</li></a>
        <a href="#trop"><li>Trop - 7.- 9. klasse</li></a>
        <a href="#klan"><li>Klan - efter 9. klasse</li></a>
      </ul>
    </v-container>

    <v-container id="micro" class="cover-wrap mobile-cover-wrap">
      <h2>Mikro (0. - 1. klasse)</h2>
      <v-img class="cover-image" src="../assets/images/about3.jpg"> </v-img>

      <div class="cover-lay">
        <h4>Tirsdag kl. 16:30 - 18:00</h4>
        <p>
          <b
            >Mange drenge og piger starter som mikrospejder for her grundlægges
            fundamentet for mange år med kammeratskab, friluftsliv og sjove og
            udfordrende aktiviteter.</b
          >
          <br />
          <br />
          Mikrospejd er at være sammen, lære, sanse og lege. Vi bygger huler,
          snitter, laver bål og mange andre ting. Vi har spejderhytten som vores
          faste tilholdssted, her findes udstyr og de ting spejderne har samlet
          og som vi alle sammen bruger. I spejderhytten bruger vi den del tid på
          at synge, lege og fortælle historier. På mikromøderne er der altid
          mindst en eller flere voksne til stede. Hos mikroerne er det vigtigt
          at skabe et godt kammeratskab i gruppen. For der er plads til alle.
          <br />
          <br />
          Leder: Pernille Ravn, mail: <br />
          <b>mikro@vesterhavsgruppen.dk</b>
        </p>
        <v-btn class="btn"
          ><router-link class="btn-link" to="/scout"
            >Tilmelding</router-link
          ></v-btn
        >
      </div>
    </v-container>
    <v-container id="mini" class="cover-wrap">
      <h2>Mini (2. - 3. klasse)</h2>
      <v-img class="cover-image" src="../assets/images/about4.jpg"> </v-img>
      <div class="cover-lay">
        <h4>Tirsdag kl. 16:30 - 18:00</h4>
        <p>
          <b>
            Minispejderne har naturen som legeplads. Vi tilbringer meget tid i
            naturen, mens vi træner vores spejderfærdigheder.
          </b>
          <br />
          <br />
          Naturen er i brug HELE året, hvor der er forskellige udfordringer og
          muligheder, der skal udforskes. Som mini tager man på små hytte- eller
          teltture, laver opgave-løb i skoven, kigger på dyrespor, arbejder med
          kort og kompas og øver sig i at binde knob og bruge kniv. Minierne
          løser sjove og spændende opgaver sammen i gruppen. Hos minierne er det
          vigtigt at skabe et godt kammeratskab i gruppen. For der er plads til
          alle. Minispejderne arbejder i patruljer. Patruljen begynder at klare
          sig selv på de ugentlige møder, hvor vi planlægger vores aktiviteter.
          Patruljen er vigtig for spejdere. I patruljen løser vi vores opgaver i
          fællesskab, med hjælp og instruktion fra erfarne spejdere og
          ledere.<br />
          <br />
          Leder: Casper Balle, <br />
          <b>mail: mini@vesterhavsgruppen.dk</b>
        </p>
        <v-btn class="btn"
          ><router-link class="btn-link" to="/scout"
            >Tilmelding</router-link
          ></v-btn
        >
      </div>
    </v-container>
    <v-container id="junior" class="cover-wrap">
      <h2>Junior (4.-6. klasse)</h2>
      <v-img class="cover-image" src="../assets/images/about5.jpg"> </v-img>
      <div class="cover-lay">
        <h4>Tirsdag kl. 19:00 - 20:30</h4>
        <p>
          <b>
            Juniorspejdere er meget aktive. Vi tager på turer og prøver nye
            aktiviteter, hvor vi lærer at værne om naturen og klare os selv.
          </b>
          <br />
          <br />
          Juniorerne mødes i spejderhytten, arrangerer orienteringsløb og tager
          på ture, sover i telt, og laver mad over bål. Juniorer træner de
          grundlæggende spejderfærdigheder og lærer bl.a. at håndtere en økse og
          rejse et telt alene. Som junior får man mere ansvar. Patruljen
          begynder at klare sig selv på de ugentlige møder, hvor vi planlægger
          vores aktiviteter. Patruljen er vigtig for juniorspejdere. I patruljen
          løser vi vores opgaver i fællesskab, med hjælp og instruktion fra
          erfarne spejdere og ledere. <br />
          <br />
          En juniorspejder er større end “de små”, men mindre end de store.
          Derfor kan juniorer en masse som spejdere, men vi har mange
          spejderoplevelser til gode. <br />
          <br />
          Leder: Steffen Sørensen, mail: <br />
          <b>junior@vessterhavsgruppen.dk</b>
        </p>
        <v-btn class="btn"
          ><router-link class="btn-link" to="/scout"
            >Tilmelding</router-link
          ></v-btn
        >
      </div>
    </v-container>
    <v-container id="trop" class="cover-wrap">
      <h2>Trop (7.-9. klasse)</h2>
      <v-img class="cover-image" src="../assets/images/about6.jpg"> </v-img>
      <div class="cover-lay">
        <h4>Onsdag kl. 19:30 - 21:00</h4>
        <p>
          <b>
            Tropsspejdere laver aktiviteter, der kræver mere af os end før. Her
            dyrkes kammeratskabet, de sjove og udfordrende aktiviteter. Samtidig
            får vi mere ansvar for os selv og hinanden.
          </b>
          <br />
          <br />
          Aktiviteterne hos tropsspejdere er f.eks. teltlejre, vandreture med
          oppakning, orienteringsløb, projekter der skal bygges. Det er typiske
          spejderaktiviteter, hvor tropsspejderne bruger deres grundlæggende
          spejderfærdigheder i praksis. <br />
          <br />
          I troppen står spejderne selv for deres patruljemøde sammen med en
          jævnaldrende patruljeleder. <br />
          <br />
          Spejderne træffer selv de fleste beslutninger, om hvad de vil, og
          hvordan møder og aktiviteter skal foregå. De kan altid få hjælp fra
          ældre ledere. Som tropsspejder kan man tage på kurser og lære, hvordan
          man leder en patrulje. I troppen lærer man en masse om sig selv og
          hinanden, og man får muligheder for at mødes med spejdere fra andre
          steder i verden. <br />
          <br />
          Tropsspejdere er opdelt i patruljer, typisk af 5-6 spejdere i hver.
          Patruljerne er sammensat at lederne, og med spejdere som har
          forskellige kvalifikationer. Hver patruljerne har en patruljeleder og
          assistent, som selv planlægger de spejderaktiviteter som deres
          patrulje ønsker at arbejde med, ud fra bl.a. materiale fra korpset.
          <br />
          <br />
          Leder: Anne Nygård mail: <br />
          <b>trop@vessterhavsgruppen.dk</b>
        </p>
        <v-btn class="btn"
          ><router-link class="btn-link" to="/scout"
            >Tilmelding</router-link
          ></v-btn
        >
      </div>
    </v-container>
    <v-container id="klan" class="cover-wrap">
      <h2>Klan (efter 9. klasse)</h2>
      <v-img class="cover-image" src="../assets/images/about7.jpg"> </v-img>
      <div class="cover-lay">
        <h4>Torsdag kl. 19:00 - 21:00</h4>
        <p>
          <b>
            Klanen er den næste gren i rækken. Efter 3 år som tropsspejder
            bliver man seniorspejder. Klanen er for drenge, piger, mænd,
            kvinder, herre og damer og hvad der nu ellers findes af sjove typer
            i alderen 16-25 år.
          </b>
          <br />
          <br />
          Gennem hele spejderlivet fra mikro og frem til trop lærer man en masse
          færdigheder. Disse færdigheder kommer til nytte i klanarbejdet, da vi
          bl.a. planlægger og udfører løb for de mindre spejdere i gruppen,
          division, eller hvem der ellers har lysten til at deltage. Vi bruger
          ikke kun spejdermøderne på at lave løb, men også på at lave projekter.
          Projekterne kan være alt lige fra knobtavler til store byggeprojekter
          til tekniske finurligheder – kun fantasien sætter grænser. I klanen er
          der derfor masser af mulighed for at være kreativ og udvikle
          projekterne, men der er også plads til dem, som er mere
          tilbageholdende, og som bare godt kan lide sammenholdet og resten af
          godteposen, som følger med.
        </p>
        <v-btn class="btn"
          ><router-link class="btn-link" to="/scout"
            >Tilmelding</router-link
          ></v-btn
        >
      </div>
    </v-container>
    <v-container class="cover-wrap">
      <h2></h2>
      <v-img class="cover-image" src="../assets/images/about8.jpg"> </v-img>
      <div class="cover-lay">
        <h4></h4>
        <p>
          Da mange af seniorspejderne også fungerer som ledere i gruppen eller
          centerspejdere rundt omkring i Danmark, skal der også være plads til
          hygge og snak. De ugentlige møder kan derfor den ene gang bestå af
          hygge med kaffe, the og kage og andre gange i den helt anden retning
          med larm, gøgl og vilde projekter. <br />
          <br />
          Selvom man er blevet senior og nu er de store, gamle og rutinerede
          spejdere, så holder man ikke op med at tage på lejre. Mulighederne
          bliver kun større og større. Der er både lejre internt i klanen, i
          gruppen, i divisionerne, landet over osv. Der er også mulighed for at
          planlægge lejre, hvis der er gemt en lille eventkoordinator i dig.
          Hvis eventyrlysten bobler i dig, er det bare at komme af sted, men
          hvis ikke eventyrlysten allerede bobler som en gal, så skal den nok
          blive trænet, til den slet ikke kan få nok.
        </p>
      </div>
    </v-container>
    <v-container class="cover-wrap">
      <h2></h2>
      <v-img class="cover-image" src="../assets/images/about9.jpg"> </v-img>
      <div class="cover-lay">
        <h4></h4>
        <p>
          Som seniorspejder vil der stadig være mulighed for at udvikle sine
          lederevner og spejderfærdigheder gennem kurser. Det vil også være
          mulighed for at få tilfredsstillet rejselysten gennem internationalt
          spejderarbejde og på disse måder knytte nye venskaber i byen, landet
          og verden over. Kurser i Danmark indenfor rammerne af Esbjerg Kommunes
          tilskudsregel er gratis at deltage på. Kurser er ikke kun gældende
          inden for spejderkorpset, men også ude i erhvervslivet. Grib chancen
          nu hvor den er her! <br />
          <br />
          Leder: Mona Poulsen, Mail:<br />
          <b>klan@vessterhavsgruppen.dk</b>
        </p>
        <v-btn class="btn"
          ><router-link class="btn-link" to="/scout"
            >Tilmelding</router-link
          ></v-btn
        >
      </div>
    </v-container>
  </div>
</template>

<script>
import Navigation from "../components/common/Navigation.vue";
// import Division from "../components/Division.vue";

export default {
  name: "App",

  components: {
    Navigation,
    // Division,
  },
  methods: {
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>

</style>
