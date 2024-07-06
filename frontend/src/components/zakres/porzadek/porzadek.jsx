import s from "./porzadek.module.scss";
import { Zakres } from "../../features/features";
import { NavigationNew } from "../../nowemenu/nowemenu";

export const Porzadek = () => {
  return (
    <div>
      <NavigationNew />
      <div className={s.bg}>
        <div className={s.container}>
          {" "}
          <h2 className={s.title}>Utrzymanie porządku</h2>
          <p className={s.desc}>
            Zapewniamy kompleksowe usługi utrzymania porządku, które są kluczowe
            dla utrzymania czystości i estetyki w Twoim otoczeniu. Nasz
            doświadczony zespół specjalistów oferuje szeroki zakres usług
            porządkowych, aby zapewnić, że Twoje otoczenie będzie zawsze czyste,
            schludne i przyjemne dla mieszkańców czy użytkowników. Niezależnie
            od tego, czy potrzebujesz usług porządkowych dla swojego domu, firmy
            czy terenów publicznych, możesz polegać na naszej profesjonalnej
            obsłudze. Dzięki naszym usługom utrzymania porządku, możesz cieszyć
            się czystym i schludnym otoczeniem, bez konieczności poświęcania
            czasu i wysiłku na własnoręczne sprzątanie. Pozwól nam zadbać o
            porządek, a Ty skup się na innych ważnych sprawach.
          </p>
        </div>
      </div>

      <Zakres />
    </div>
  );
};
