import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="prose max-w-3xl mx-auto p-8 mt-[10vh]">
      <h1>
        Algemene Voorwaarden <span className="text-mainBlue">Zenno</span>
      </h1>
      <h2>1. Inleiding</h2>
      <p>
        Welkom bij Zenno. Deze Algemene Voorwaarden regelen uw gebruik van onze
        website en diensten. Door toegang te verkrijgen tot onze website of door
        gebruik te maken van onze diensten, gaat u akkoord met deze Algemene
        Voorwaarden.
      </p>

      <h2>2. Gebruiksvoorwaarden</h2>
      <p>
        a. <strong>Toegang</strong>: U garandeert dat u minstens 18 jaar oud
        bent of toestemming hebt van uw ouders of voogd om onze diensten te
        gebruiken.
      </p>
      <p>
        b. <strong>Gebruikslimieten</strong>: U mag geen deel van onze website
        of diensten gebruiken voor illegale doeleinden, noch mag u deze
        gebruiken om schade te berokkenen of te proberen berokkenen aan anderen
        of aan de functionaliteit van de dienst.
      </p>
      <p>
        c. <strong>Intellectuele eigendom</strong>: Alle inhoud op onze website,
        inclusief teksten, graphics, logo's en software, is eigendom van Zenno
        en wordt beschermd door toepasselijke auteursrechten en merkenrechten.
      </p>

      <h2>3. Producten en Diensten</h2>
      <p>
        a. <strong>Beschrijvingen</strong>: Zenno streeft ernaar om nauwkeurige
        en bijgewerkte informatie te verstrekken over onze producten en
        diensten. Echter, wij kunnen niet garanderen dat alle beschrijvingen
        volledig accuraat, compleet, betrouwbaar of foutloos zijn.
      </p>
      <p>
        b. <strong>Aankoopvoorwaarden</strong>: Bij het kopen van een product of
        dienst van Zenno, kunt u gevraagd worden om informatie te verstrekken
        relevant voor uw aankoop inclusief, zonder beperking, uw
        creditcardnummer, de vervaldatum van uw creditcard, uw factuuradres, en
        uw verzendinformatie.
      </p>
      <p>
        c. <strong>Prijzen</strong>: Alle prijzen zijn onderhevig aan
        verandering zonder kennisgeving.
      </p>

      <h2>4. Annulering en Terugbetaling</h2>
      <p>
        a. <strong>Terugbetalingen</strong>: Terugbetalingen worden beheerd op
        basis van de voorwaarden die specifiek voor elk product of dienst worden
        vermeld. Gelieve onze klantenservice te contacteren voor meer details.
      </p>
      <p>
        b. <strong>Annulering</strong>: Bestellingen kunnen binnen 24 uur na
        plaatsing zonder kosten worden geannuleerd, tenzij reeds met de
        uitvoering of levering is begonnen.
      </p>

      <h2>5. Privacybeleid</h2>
      <p>
        Uw privacy is van groot belang voor ons. Lees ons Privacybeleid
        zorgvuldig door om te begrijpen hoe we uw persoonsgegevens verzamelen,
        gebruiken en beschermen.
      </p>

      <h2>6. Aansprakelijkheid en Vrijwaring</h2>
      <p>
        a. <strong>Beperking van Aansprakelijkheid</strong>: Zenno is niet
        aansprakelijk voor enige directe, indirecte, incidentele, speciale of
        gevolgschade die voortvloeit uit het gebruik van of het onvermogen om de
        dienst te gebruiken.
      </p>
      <p>
        b. <strong>Vrijwaring</strong>: U gaat ermee akkoord om Zenno en zijn
        medewerkers te vrijwaren tegen alle claims, schadevergoedingen,
        verliezen, kosten of uitgaven die voortvloeien uit uw overtreding van
        deze Algemene Voorwaarden.
      </p>

      <h2>7. Wijzigingen in de Algemene Voorwaarden</h2>
      <p>
        Zenno behoudt zich het recht voor om deze Algemene Voorwaarden op elk
        moment te wijzigen. Wijzigingen worden effectief zodra ze op de website
        gepubliceerd zijn.
      </p>

      <h2>8. Contact</h2>
      <p>
        Heeft u vragen of opmerkingen over deze Algemene Voorwaarden, neem dan
        contact op via{" "}
        <Link className="text-mainBlue cursor-pointer " to={"/contact"}>
          hier
        </Link>
        .
      </p>
    </div>
  );
};

export default TermsAndConditions;
