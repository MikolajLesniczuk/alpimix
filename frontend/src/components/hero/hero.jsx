import s from "./hero.module.scss";

import dosw from "../../assets/alpfoto/bezp.png";
import prof from "../../assets/alpfoto/prof.png";
import bezp from "../../assets/alpfoto/bezpie.png";
import cert from "../../assets/alpfoto/cert.png";

export const Hero = () => {
  return (
    <>
      <main className={s.bg}>
        <div className={s.container}>
          <section>
            <h1 className={s.dlaczego}>Dlaczego my?</h1>
            <p className={s.desc}>
              Oferujemy wysokiej jakości usługi alpinistyczne oraz prace na
              wysokościach, znane jako prace alpinistyczne. Nasza firma działa
              głównie na terenie Warszawy i okolic, ale jesteśmy gotowi podjąć
              się zleceń w dowolnym miejscu w Polsce. Nasza reputacja opiera się
              na trzech kluczowych wartościach: dbałości o detale, terminowym
              wykonaniu zadań oraz transparentności w kwestiach finansowych. Nie
              ma dla nas rzeczy niemożliwych - każde zadanie traktujemy z pełnym
              zaangażowaniem i profesjonalizmem. Jako eksperci w dziedzinie
              usług alpinistycznych, posiadamy bogate doświadczenie i
              umiejętności niezbędne do wykonywania nawet najbardziej
              wymagających zadań. Nasz zespół składa się z wyszkolonych i
              doświadczonych alpinistów, którzy gwarantują nie tylko
              bezpieczeństwo, ale również najwyższą jakość świadczonych usług.
              Nasze usługi obejmują szeroki zakres działań, począwszy od prac
              konserwacyjnych, przez montaż i demontaż konstrukcji, aż po
              czyszczenie i malowanie powierzchni na wysokościach. Współpraca z
              nami to gwarancja profesjonalizmu, skuteczności oraz pełnego
              zadowolenia z wykonanej pracy. Jesteśmy otwarci na nowe projekty i
              wyzwania, dlatego też zachęcamy do kontaktu z naszą firmą, abyśmy
              mogli zrealizować Państwa potrzeby zgodnie z najwyższymi
              standardami branżowymi.
            </p>
          </section>
          <section className={s.boxflex}>
            <div className={s.center}>
              <img
                className={s.img}
                src={dosw}
                alt="Prace alpinistyczne - doświadczenie"
              ></img>
              <h2>DOŚWIADCZENIE</h2>
              <p className={s.opis}>
                Bez wątpienia, żadne zadania na wysokościach nie stanowią dla
                nas wyzwania. Nasze doświadczenie obejmuje szeroki zakres prac,
                w tym malowanie/naprawy elewacji, zabezpieczenie przeciwko
                ptakom, montaż banerów reklamowych, mycie powierzchni szklanych
                i wiele innych. Specjalizujemy się w wykonywaniu prac na
                najwyższych budynkach i wieżowcach, gdzie precyzja i
                skrupulatność są kluczowe.
              </p>
            </div>
            <div className={s.center}>
              <img
                className={s.img}
                src={prof}
                alt="Prace alpinistyczne - profesjonalizm"
              ></img>
              <h2>PROFESJONALIZM</h2>
              <p className={s.opis}>
                W branży, w której działamy, profesjonalizm jest nieodłącznym
                elementem. W naszej firmie stawiamy na zespół składający się
                wyłącznie z kompetentnych i doskonale wyszkolonych specjalistów.
                Nie istnieją dla nas zadania niewykonalne; po prostu na niektóre
                potrzebujemy więcej czasu, aby wykonać je perfekcyjnie.
              </p>
            </div>
            <div className={s.center}>
              <img
                className={s.img}
                src={bezp}
                alt="Prace alpinistyczne - bezpieczeństwo"
              ></img>
              <h2>BEZPIECZEŃSTWO</h2>
              <p className={s.opis}>
                W naszej pracy priorytetem jest bezpieczeństwo. Dysponujemy
                kompletnym wyposażeniem ochronnym, obejmującym odzież
                zabezpieczającą do prac remontowych oraz wysokiej jakości liny i
                uprzęże do prac na wysokościach.
              </p>
            </div>
            <div className={s.center}>
              <img
                className={s.img}
                src={cert}
                alt="Prace alpinistyczne - kompetencje"
              ></img>
              <h2>KOMPETENCJE</h2>
              <p className={s.opis}>
                Nasze zaangażowanie w ciągłe doskonalenie sprawia, że stale
                podnosimy swoje kompetencje i rozszerzamy zakres umiejętności.
                Dzięki temu jesteśmy w stanie skutecznie minimalizować ryzyko i
                zapewnić naszym klientom bezpieczne oraz profesjonalne wykonanie
                usług. Wierzymy, że kompetentny, rzetelny i bezpieczny wykonawca
                to klucz do zadowolenia klienta.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
