import { useRef, useState } from "react";
import "./SurveyorAnimation.css";

export default function SurveyorAnimation() {
  const [isWaving, setIsWaving] = useState(false);
  const timerRef = useRef(null);

  const startWaving = () => {
    if (isWaving) return;

    clearTimeout(timerRef.current);

    setIsWaving(true);

    timerRef.current = setTimeout(() => {
      setIsWaving(false);
    }, 2800);
  };

  return (
    <div
      className={`surveyor-animation ${isWaving ? "is-waving" : ""}`}
      onMouseEnter={startWaving}
      onClick={startWaving}
      role="button"
      tabIndex="0"
      aria-label="Geodeta"
      title="Pređite mišem preko geodete"
    >
      <svg
        viewBox="0 0 520 180"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* =========================================
            PRIZMA
        ========================================= */}

        <g className="prism">
          {/* glava prizme */}
          <rect x="32" y="48" width="24" height="24" rx="1" />

          {/* unutrašnji X kao na skici */}
          <line x1="35" y1="51" x2="53" y2="69" />
          <line x1="53" y1="51" x2="35" y2="69" />

          {/* nosač */}
          <line x1="44" y1="72" x2="44" y2="148" />

          {/* mala horizontalna oznaka */}
          <line x1="37" y1="76" x2="51" y2="76" />

          {/* baza */}
          <line x1="30" y1="148" x2="58" y2="148" />
        </g>

        {/* =========================================
            ZRACI MERENJA
        ========================================= */}

        {/* teodolit -> prizma */}
        <line
          className="beam beam-out"
          x1="382"
          y1="72"
          x2="58"
          y2="60"
        />

        {/* prizma -> teodolit */}
        <line
          className="beam beam-back"
          x1="58"
          y1="78"
          x2="382"
          y2="88"
        />

        {/* =========================================
            TEODOLIT
        ========================================= */}

        <g className="theodolite">
          {/* instrument */}
          <rect x="374" y="64" width="34" height="14" rx="2" />

          {/* objektiv ka prizmi */}
          <line x1="374" y1="71" x2="360" y2="71" />

          {/* okular ka geodeti */}
          <line x1="408" y1="71" x2="417" y2="71" />

          {/* kružni deo */}
          <circle cx="391" cy="86" r="6" />

          {/* vertikalni nosač */}
          <line x1="391" y1="78" x2="391" y2="96" />

          {/* stativ */}
          <line x1="391" y1="96" x2="365" y2="165" />
          <line x1="391" y1="96" x2="391" y2="168" />
          <line x1="391" y1="96" x2="418" y2="165" />

          {/* stopice */}
          <line x1="360" y1="165" x2="370" y2="165" />
          <line x1="386" y1="168" x2="396" y2="168" />
          <line x1="413" y1="165" x2="423" y2="165" />
        </g>

        {/* =========================================
            GEODETA - POLOŽAJ MERENJA
            SAGNUT KA OKULARU
        ========================================= */}

        <g className="surveyor-measuring">

          {/* noga pozadi */}
          <path d="M456 125 L462 157 L475 166" />

          {/* noga napred */}
          <path d="M443 121 L430 157 L420 166" />

          {/* cipele */}
          <path d="M420 166 L435 166" />
          <path d="M475 166 L488 166" />

          {/* telo - stvarno nagnuto */}
          <path d="M451 74 L445 92 L442 121" />

          {/* jakna / leđa */}
          <path d="M451 74 Q470 92 466 115" />

          {/* ruka koja ide na instrument */}
          <path d="M450 82 L430 84 L414 78" />

          {/* druga ruka */}
          <path d="M457 87 L443 100 L430 101" />

          {/* vrat */}
          <line x1="454" y1="72" x2="451" y2="82" />

          {/* glava nagnuta ka okularu */}
          <path d="M442 48
                   Q453 38 465 47
                   Q470 56 463 67
                   Q454 73 445 67
                   Q438 59 442 48" />

          {/* lice prema teodolitu */}
          <path d="M442 55 L434 58 L442 61" />

          {/* oko */}
          <line x1="440" y1="54" x2="435" y2="54" />

          {/* kapa */}
          <path d="M440 48 Q450 35 463 43" />
          <path d="M463 43 L473 47" />

          {/* mali deo kose / uha */}
          <path d="M463 56 L468 58" />

        </g>

        {/* =========================================
            GEODETA - USPRAVLJEN I MAŠE
        ========================================= */}

        <g className="surveyor-waving">

          {/* noge */}
          <path d="M458 113 L448 160 L438 166" />
          <path d="M458 113 L470 160 L483 166" />

          {/* cipele */}
          <path d="M438 166 L452 166" />
          <path d="M483 166 L496 166" />

          {/* telo */}
          <path d="M458 67 L458 113" />

          {/* jakna */}
          <path d="M458 68 Q478 82 473 108" />

          {/* vrat */}
          <line x1="458" y1="67" x2="458" y2="58" />

          {/* glava */}
          <path d="M447 36
                   Q458 26 470 36
                   Q475 48 468 58
                   Q458 64 449 57
                   Q442 48 447 36" />

          {/* kapa */}
          <path d="M445 37 Q457 22 470 33" />
          <path d="M470 33 L480 37" />

          {/* lice */}
          <path d="M448 45 L441 48 L448 51" />

          {/* oko */}
          <line x1="446" y1="43" x2="442" y2="43" />

          {/* leva ruka spuštena */}
          <path d="M456 77 L438 96 L430 120" />

          {/* desna ruka za mahanje */}
          <g className="wave-arm">
            <path d="M463 76 L484 58 L487 32" />

            {/* šaka */}
            <path d="M487 32 L484 24" />
            <path d="M487 32 L492 24" />
            <path d="M487 32 L497 27" />
          </g>

        </g>
      </svg>
    </div>
  );
}