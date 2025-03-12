import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header/Header";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { HeroImage } from "./components/HeroImage/HeroImage";
import { ServicesBanner } from "./components/ServicesBanner/ServicesBanner";
import { Featured } from "./components/Featured/Featured";
import  Checkout   from './Pages/Checkout/Checkout'
import { CartProvider } from './context/CartContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <Router>
      <CartProvider>
        <ThemeProvider theme={defaultTheme} >
          <GlobalStyle />
          <Routes>
            <Route path="/" element={
              <div> 
                <div>
                  <Header />
                </div>       
                <div>
                  <HeroImage />
                </div> 
                  <ServicesBanner />
                <div>
                  <section>
                    <Featured />
                  </section>
                </div>
              </div>
            } />
            <Route path="/checkout" element={ <Checkout /> } />
          </Routes>
        </ThemeProvider> 
      </CartProvider>
    </Router>
    
  )
}


