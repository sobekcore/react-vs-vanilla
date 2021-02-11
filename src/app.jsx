// Importing Components into SPA
import Navbar from "./components/navbar";
import Home from "./components/home";
import ReactPage from "./components/react";
import VanillaPage from "./components/vanilla";
import WhichPage from "./components/which";
import FinalPage from "./components/final";
import Footer from "./components/footer";

export default function App()
{
  return(
    <>
      <Navbar />
      <Home />
      <ReactPage />
      <VanillaPage />
      <WhichPage />
      <FinalPage />
      <Footer />
    </>
  );
}
