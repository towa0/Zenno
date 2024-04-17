import { Link } from "react-router-dom";

const AboutUsContent = () => {
  return (
    <section className="bg-background/50 backdrop-blur-lg p-10 rounded-xl border-2 border-gray-300 shadow-lg">
      <h1 className="font-bold text-mainBlue text-5xl">Over Ons.</h1>
      <p>
        Welkom bij Zenno, uw ultieme bestemming voor geavanceerde
        softwareoplossingen. Opgericht in 2021 door de visionaire ondernemer
        Maddox, heeft Zenno zich snel gevestigd als een leider in de e-commerce
        ruimte voor softwareproducten. Met een passie voor innovatie en een
        toewijding aan klanttevredenheid, streven wij bij Zenno ernaar om u het
        beste in softwaretechnologie te brengen.
      </p>

      <h2>Onze Reis</h2>
      <p>
        Zenno begon als een kleine startup in het hart van Silicon Valley,
        ontstaan uit Maddox's visie om de aanschaf van software voor zowel
        bedrijven als consumenten te vereenvoudigen. Maddox, een
        softwareontwikkelaar met meer dan een decennium ervaring in de
        technologie-industrie, merkte een gat in de markt op voor een
        gebruiksvriendelijk platform dat niet alleen software verkocht, maar ook
        op maat gemaakte aanbevelingen bood op basis van de behoeften van
        klanten.
      </p>
      <p>
        Met deze visie verzamelde Maddox een team van topontwikkelaars en
        marketeers om Zenno te creëren. Ons platform werd gelanceerd met een
        bescheiden selectie van belangrijke softwareproducten, met een focus op
        kwaliteit en relevantie. Dankzij onze toewijding aan deze principes
        hebben we snel een trouwe klantenbasis verworven.
      </p>

      <h2>Wat We Doen</h2>
      <p>
        Bij Zenno zijn we gespecialiseerd in het aanbieden van een breed scala
        aan softwareproducten, van bedrijfsmanagementtools tot educatieve
        software en alles daartussenin. Ons platform is ontworpen om intuïtief
        en gebruiksvriendelijk te zijn, zodat zelfs degenen die nieuw zijn in
        digitale handel gemakkelijk de software kunnen vinden en kopen die ze
        nodig hebben.
      </p>
      <p>
        We zijn meer dan alleen een verkoopplatform; we zijn een hub voor
        softwareliefhebbers en professionals. Zenno biedt gedetailleerde
        productbeschrijvingen, gebruikersrecensies en deskundige inzichten om
        onze klanten te helpen geïnformeerde beslissingen te nemen. Bovendien
        staat ons klantenserviceteam altijd klaar om te helpen met eventuele
        vragen, om een naadloze winkelervaring te garanderen.
      </p>

      <h2>Onze Waarden</h2>
      <ul>
        <li>
          <strong>Klantgerichtheid:</strong> Wij geloven dat het hart van ons
          bedrijf onze klanten zijn. We streven ernaar om bij elke interactie de
          verwachtingen van klanten te overtreffen en te voldoen.
        </li>
        <li>
          <strong>Innovatie:</strong> Wij zijn toegewijd aan continue
          verbetering en innovatie. We actualiseren regelmatig ons aanbod en
          functionaliteiten om gelijke tred te houden met technologische
          vooruitgang.
        </li>
        <li>
          <strong>Integriteit:</strong> Wij voeren onze bedrijfsvoering uit met
          de hoogste ethische normen. Vertrouwen en transparantie leiden elke
          beslissing die we nemen.
        </li>
      </ul>

      <h2>Kijkend naar de Toekomst</h2>
      <p>
        Terwijl we naar de toekomst kijken, is Zenno enthousiast om ons aanbod
        uit te breiden en onze klanten te blijven bedienen met dezelfde passie
        en kwaliteit die ons oprichten kenmerkten. Onze routekaart omvat de
        introductie van AI-gestuurde tools om nog meer gepersonaliseerde
        winkelervaringen en verbeterde ondersteuningsdiensten te bieden.
      </p>
      <p>
        We nodigen u uit om ons platform te verkennen en de software te
        ontdekken die uw persoonlijke en professionele groei zal bevorderen. Bij
        Zenno zijn we meer dan alleen een software e-commerce winkel - we zijn
        uw partner in het navigeren door de digitale wereld.
      </p>
      <p>Dank u voor het kiezen van Zenno.</p>
      <p>
        Vragen? Stel ze{" "}
        <Link to={"/contact"} className="text-mainBlue hover:underline">
          hier
        </Link>
      </p>
    </section>
  );
};

export default AboutUsContent;
