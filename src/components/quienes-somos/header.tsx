import BackgroundSlider from "../ui/CustomBackgroundSidebar";
import { slides } from "./data/slider";


export default function Header() {
  return <BackgroundSlider slides={slides} />;
}
