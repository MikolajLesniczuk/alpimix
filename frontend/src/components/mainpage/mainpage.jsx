import { Zakres } from "../features/features";
import { Hero } from "../hero/hero";
import { Navigation } from "../navigation/navigation";
// import { Onas } from "../onas/onas";

export const Mainpage = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      {/* <Onas /> */}
      <Zakres />
    </div>
  );
};
