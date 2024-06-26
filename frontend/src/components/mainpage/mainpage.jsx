import { Zakres } from "../features/features";
import { Hero } from "../hero/hero";
import { Onas } from "../onas/onas";

export const Mainpage = () => {
  return (
    <div>
      <Hero />
      <Onas />
      <Zakres />
    </div>
  );
};
