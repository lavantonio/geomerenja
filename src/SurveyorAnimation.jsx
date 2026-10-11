import { useRef, useState, useEffect } from "react";
import "./SurveyorAnimation.css";

export default function SurveyorAnimation() {
  const [isWaving, setIsWaving] = useState(true); // Početno mahanje pri ulasku na sajt
  const timerRef = useRef(null);

  // Funkcija koja pokreće mahanje i automatski ga gasi nakon određenog vremena
  const startWavingWithTimeout = () => {
    clearTimeout(timerRef.current);
    setIsWaving(true);

    const isMobileOrTablet = window.innerWidth <= 900;
    const waveDuration = isMobileOrTablet ? 3000 : 3500;

    timerRef.current = setTimeout(() => {
      setIsWaving(false);
    }, waveDuration);
  };

  // Automatsko mahanje pri prvom učitavanju stranice
  useEffect(() => {
    startWavingWithTimeout();
    return () => clearTimeout(timerRef.current);
  }, []);

  // Kad miš uđe preko geodete (samo za desktop)
  const handleMouseEnter = () => {
    if (window.innerWidth > 900) {
      clearTimeout(timerRef.current);
      setIsWaving(true);
    }
  };

  // Kad miš ode sa geodete - odmah prestaje da maše (samo za desktop)
  const handleMouseLeave = () => {
    if (window.innerWidth > 900) {
      setIsWaving(false);
    }
  };

  // Klik / Tap na element (uključuje i mobilne/tablete)
  const handleClick = () => {
    startWavingWithTimeout();
  };

  return (
    <div
      className={`surveyor-animation ${isWaving ? "is-waving" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      role="button"
      tabIndex="0"
      aria-label="Geodeta"
      title="Dodirnite ili pređite mišem preko geodete"
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
          <rect x="32" y="48" width="24" height="24" rx="1" />
          <line x1="35" y1="51" x2="53" y2="69" />
          <line x1="53" y1="51" x2="35" y2="69" />
          <line x1="44" y1="72" x2="44" y2="148" />
          <line x1="37" y1="76" x2="51" y2="76" />
          <line x1="30" y1="148" x2="58" y2="148" />
        </g>

        {/* =========================================
            ZRACI MERENJA
        ========================================= */}
        <g className="laser-beams">
          <line
            className="beam beam-out"
            x1="382"
            y1="72"
            x2="58"
            y2="60"
          />
          <line
            className="beam beam-back"
            x1="58"
            y1="78"
            x2="382"
            y2="88"
          />
        </g>

        {/* =========================================
            TEODOLIT
        ========================================= */}
        <g className="theodolite">
          <rect x="374" y="64" width="34" height="14" rx="2" />
          <line x1="374" y1="71" x2="360" y2="71" />
          <line x1="408" y1="71" x2="417" y2="71" />
          <circle cx="391" cy="86" r="6" />
          <line x1="391" y1="78" x2="391" y2="96" />
          <line x1="391" y1="96" x2="365" y2="165" />
          <line x1="391" y1="96" x2="391" y2="168" />
          <line x1="391" y1="96" x2="418" y2="165" />
          <line x1="360" y1="165" x2="370" y2="165" />
          <line x1="386" y1="168" x2="396" y2="168" />
          <line x1="413" y1="165" x2="423" y2="165" />
        </g>

        {/* =========================================
            GEODETA - POLOŽAJ MERENJA
        ========================================= */}
        <g className="surveyor-measuring">
          <path d="M455 120 L466 146 L478 166" />
          <path d="M444 120 L432 146 L422 166" />
          <path d="M418 166 L430 166" />
          <path d="M472 166 L485 166" />
          <path d="M448 68 Q436 94 444 120" />
          <path d="M452 68 Q464 94 455 120" />
          <path d="M448 68 L442 56" />
          
          {/* Glava - profil */}
          <path d="M432 44 
                   C422 44, 418 52, 424 58 
                   C430 64, 442 60, 444 52 
                   C446 44, 438 44, 432 44 Z" />
          <path d="M432 44 Q424 42 418 46" />
          <path d="M432 44 Q438 38 446 42" />

          {/* Lice: Definisan nos i oko u profilu */}
          <path d="M421 53 L413 56 L421 59" />
          <circle cx="427" cy="49" r="1.5" />

          <path d="M448 72 L432 76 L417 71" />
          <path d="M452 72 Q464 90 454 112" />
        </g>

        {/* =========================================
            GEODETA - USPRAVLJEN I MAŠE
        ========================================= */}
        <g className="surveyor-waving">
          <path d="M458 113 L448 160 L438 166" />
          <path d="M458 113 L470 160 L483 166" />
          <path d="M438 166 L452 166" />
          <path d="M483 166 L496 166" />
          <path d="M458 67 L458 113" />
          <path d="M458 68 Q478 82 473 108" />
          <line x1="458" y1="67" x2="458" y2="58" />
          <path d="M447 36 Q458 26 470 36 Q475 48 468 58 Q458 64 449 57 Q442 48 447 36" />
          <path d="M445 37 Q457 22 470 33" />
          <path d="M470 33 L480 37" />

          {/* Lice: Jasne dve oči i izražen nos za čeoni/poluprofil */}
          <circle cx="453" cy="45" r="1.3" />
          <circle cx="462" cy="45" r="1.3" />
          <path d="M457 47 L454 53 L459 54" />

          <path d="M456 77 L438 96 L430 120" />

          <g className="wave-arm-group">
            <path d="M463 76 L484 58 L487 32" />
            <path d="M487 32 L484 24" />
            <path d="M487 32 L492 24" />
            <path d="M487 32 L497 27" />
          </g>
        </g>
      </svg>
    </div>
  );
}