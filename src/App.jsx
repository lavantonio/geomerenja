import { useState } from "react";
import SurveyorAnimation from "./SurveyorAnimation";

const PHONE = "+381 60 123 4567";
const EMAIL = "ti@tvojmejl.com";

const services = [
  {
    icon: "▦",
    title: "Elaborat za upis posebnih delova",
    text: "Izrada elaborata za upis stanova, poslovnih prostora, garaža i drugih posebnih delova objekta u katastar nepokretnosti."
  },
  {
    icon: "⌂",
    title: "Upis stana u katastar",
    text: "Geodetska podrška za evidentiranje i upis posebnog dela objekta, uz pripremu potrebne dokumentacije."
  },
  {
    icon: "▤",
    title: "Geodetski elaborat",
    text: "Izrada geodetskih elaborata i stručne dokumentacije za potrebe katastarskih postupaka."
  },
  {
    icon: "⌖",
    title: "Razgraničenje parcela",
    text: "Geodetsko određivanje i obeležavanje granica parcela, premer i izrada odgovarajuće dokumentacije."
  },
  {
    icon: "⌗",
    title: "Snimanje objekata",
    text: "Geodetsko snimanje objekata i izrada situacionih planova i stručnih podloga."
  },
  {
    icon: "?",
    title: "Konsultacije za katastar",
    text: "Stručna pomoć kod upisa, promena podataka i drugih katastarskih postupaka."
  }
];

const faqs = [
  {
    q: "Kada je potreban elaborat za upis posebnog dela?",
    a: "Elaborat se izrađuje u postupcima u kojima je potrebno evidentirati ili upisati poseban deo objekta, kao što su stan, poslovni prostor ili garaža."
  },
  {
    q: "Da li radite upis stana u katastar u Beogradu?",
    a: "Da. Usluge su namenjene klijentima sa teritorije Beograda, uz prethodnu proveru dokumentacije i konkretnog slučaja."
  },
  {
    q: "Koliko traje izrada elaborata?",
    a: "Rok zavisi od vrste elaborata, stanja objekta, postojeće dokumentacije i potrebnih terenskih radova."
  },
  {
    q: "Koliko košta geodetski elaborat?",
    a: "Cena zavisi od vrste posla, objekta, lokacije i obima potrebnih radova. Za konkretnu procenu potrebno je pogledati osnovne podatke o predmetu."
  },
  {
    q: "Da li mogu prvo da pošaljem dokumentaciju?",
    a: "Da. Možete poslati osnovne podatke i opis problema, nakon čega se dogovaraju potrebni dokumenti i naredni koraci."
  }
];

function App() {
  const [openFaq, setOpenFaq] = useState(null);

  const sendForm = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const ime = form.get("ime");
    const telefon = form.get("telefon");
    const poruka = form.get("poruka");

    const subject = encodeURIComponent(
      `Upit za geodetske usluge - ${ime}`
    );

    const body = encodeURIComponent(
      `Ime: ${ime}\nTelefon: ${telefon}\n\nPoruka:\n${poruka || "Nema dodatne poruke"}`
    );

    window.location.href =
      `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {/* HEADER */}

<header className="header">
  <div className="container nav">

    <a
      href="#"
      className="logo"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      Geo<span>Merenje</span>
    </a>

    <nav>
      <a href="#usluge">Usluge</a>
      <a href="#upis">Upis posebnih delova</a>
      <a href="#pitanja">Česta pitanja</a>
      <a href="#kontakt">Kontakt</a>
    </nav>

    <div className="header-right">
      <SurveyorAnimation />

      <a
        href={`tel:${PHONE.replace(/\s/g, "")}`}
        className="header-phone"
      >
        ☎ {PHONE}
      </a>
    </div>

  </div>
</header>

      {/* HERO */}

      <main id="pocetna">

        <section className="hero">

          <div className="container hero-grid">

            <div className="hero-content">

              <div className="eyebrow">
                GEODETSKE USLUGE • BEOGRAD
              </div>

              <h1>
                Geodeta Beograd – geodetske usluge i elaborat za upis posebnih delova
              </h1>

              <p className="hero-text">
                Izrada elaborata za upis stanova, poslovnih prostora i
                garaža, upis posebnih delova u katastar, geodetsko
                snimanje i drugi geodetski poslovi.
              </p>

<div className="buttons">
  <a
    href={`tel:${PHONE.replace(/\s/g, "")}`}
    className="btn btn-primary"
  >
    ☎ Pozovite odmah
  </a>

  <a
    href={`tel:${PHONE.replace(/\s/g, "")}`}
    className="phone-button"
  >
    {PHONE}
  </a>

  <a href="#kontakt" className="btn btn-secondary">
    ✉ Pošaljite upit
  </a>
</div>

              <div className="trust">

                <span>✓ Beograd</span>
                <span>✓ Stručna geodetska podrška</span>
                <span>✓ Brz odgovor</span>

              </div>

            </div>


            <div className="hero-card">

              <div className="hero-icon">
                ⌖
              </div>

              <h2>
                Potreban vam je geodeta?
              </h2>

              <p>
                Opišite ukratko šta želite da upišete ili rešite
                u katastru.
              </p>

              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="hero-phone"
              >
                {PHONE}
              </a>

              <small>
                Radnim danima 08–20h
              </small>

            </div>

          </div>

        </section>


        {/* USLUGE */}

        <section className="section" id="usluge">

          <div className="container">

            <div className="section-heading">

              <div className="eyebrow">
                NAŠE USLUGE
              </div>

              <h2>
                Geodetske usluge u Beogradu
              </h2>

              <p>
                Geodetska podrška za građane, vlasnike nepokretnosti
                i druge klijente.
              </p>

            </div>


            <div className="services">

              {services.map((service) => (

                <article
                  className="service-card"
                  key={service.title}
                >

                  <div className="service-icon">
                    {service.icon}
                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.text}
                  </p>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* ELABORAT */}

        <section className="section section-gray" id="upis">

          <div className="container two-column">

            <div>

              <div className="eyebrow">
                NAJČEŠĆA USLUGA
              </div>

              <h2>
                Elaborat za upis posebnih delova
              </h2>

              <p>
                Ako stan, poslovni prostor ili garaža nisu pravilno
                evidentirani u katastru, potrebno je utvrditi postojeće
                stanje i pregledati raspoloživu dokumentaciju.
              </p>

              <p>
                Nakon toga se određuju potrebni geodetski radovi i
                izrađuje odgovarajuća dokumentacija za konkretan
                katastarski postupak.
              </p>

              <p>
                Svaki predmet može biti drugačiji, zato je najbolje
                da pre početka pošaljete osnovne podatke o
                nepokretnosti i kratak opis problema.
              </p>

            </div>


            <div className="checklist">

              <h3>
                Za šta se najčešće radi elaborat?
              </h3>

              <div>✓ Upis stana</div>
              <div>✓ Upis poslovnog prostora</div>
              <div>✓ Upis garaže</div>
              <div>✓ Evidentiranje posebnih delova objekta</div>
              <div>✓ Geodetska dokumentacija za katastar</div>

            </div>

          </div>

        </section>


        {/* LOKACIJE */}

        <section className="section">

          <div className="container">

            <div className="section-heading">

              <div className="eyebrow">
                BEOGRAD
              </div>

              <h2>
                Geodeta za teritoriju Beograda
              </h2>

              <p>
                Usluge su namenjene klijentima sa teritorije
                Beograda. Pre dolaska možemo proveriti osnovne
                podatke o predmetu i dogovoriti potrebne korake.
              </p>

            </div>


            <div className="locations">

              {[
                "Novi Beograd",
                "Zemun",
                "Voždovac",
                "Vračar",
                "Zvezdara",
                "Palilula",
                "Čukarica",
                "Rakovica",
                "Stari grad",
                "Savski venac",
                "Surčin",
                "Obrenovac"
              ].map((location) => (

                <span key={location}>
                  {location}
                </span>

              ))}

            </div>

          </div>

        </section>


        {/* CTA */}

        <section className="cta">

          <div className="container cta-content">

            <div>

              <div className="eyebrow light">
                IMATE PITANJE?
              </div>

              <h2>
                Proverite šta je potrebno za vaš slučaj
              </h2>

              <p>
                Pozovite ili pošaljite kratak opis nepokretnosti
                i problema.
              </p>

            </div>

            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="btn btn-yellow"
            >
              ☎ {PHONE}
            </a>

          </div>

        </section>


        {/* FAQ */}

        <section className="section faq" id="pitanja">

          <div className="container narrow">

            <div className="section-heading">

              <div className="eyebrow">
                FAQ
              </div>

              <h2>
                Česta pitanja o geodetskim uslugama
              </h2>

            </div>


            {faqs.map((faq, index) => (

              <div className="faq-item" key={faq.q}>

                <button
                  onClick={() =>
                    setOpenFaq(
                      openFaq === index ? null : index
                    )
                  }
                  aria-expanded={openFaq === index}
                >

                  <span>
                    {faq.q}
                  </span>

                  <strong>
                    {openFaq === index ? "−" : "+"}
                  </strong>

                </button>


                {openFaq === index && (

                  <p>
                    {faq.a}
                  </p>

                )}

              </div>

            ))}

          </div>

        </section>


        {/* KONTAKT */}

        <section className="section contact" id="kontakt">

          <div className="container contact-grid">

            <div>

              <div className="eyebrow">
                KONTAKT
              </div>

              <h2>
                Pošaljite upit
              </h2>

              <p>
                Napišite ime, telefon i ukratko opišite šta vam
                je potrebno.
              </p>

              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="contact-phone"
              >
                {PHONE}
              </a>

              <p className="working-hours">
                Radnim danima 08–20h
              </p>

            </div>


            <form onSubmit={sendForm}>

              <label>
                Ime

                <input
                  name="ime"
                  required
                  placeholder="Vaše ime"
                />

              </label>


              <label>
                Telefon

                <input
                  name="telefon"
                  type="tel"
                  required
                  placeholder="Broj telefona"
                />

              </label>


              <label>
                Poruka

                <textarea
                  name="poruka"
                  placeholder="Npr. potreban mi je elaborat za upis stana..."
                />

              </label>


              <button
                type="submit"
                className="btn btn-primary"
              >
                ✉ Pošalji upit
              </button>

            </form>

          </div>

        </section>

      </main>


      {/* FOOTER */}

      <footer>

        <div className="container footer">

          <div>
            <strong>
              GeoMerenje
            </strong>

            <br />

            Geodetske usluge Beograd
          </div>


          <div>

            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
            >
              {PHONE}
            </a>

            <br />

            Radnim danima 08–20h

          </div>

        </div>


        <div className="copyright">

          © 2026 GeoMerenje. Sva prava zadržana.

        </div>

      </footer>

    </>
  );
}

export default App;