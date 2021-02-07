// Importing Components into SPA
import Navbar from "./components/navbar";
import Home from "./components/home";
import ReactPage from "./components/react";
import Footer from "./components/footer";

export default function App()
{
  return(
    <>
      <Navbar />
      <Home />
      <ReactPage />
      <Footer />
    </>
  );
}
