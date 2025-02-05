import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header/Header";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { HeroImage } from "./components/HeroImage/HeroImage";
import { ServicesBanner } from "./components/ServicesBanner/ServicesBanner";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <GlobalStyle />
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
            
          </section>
        </div>
      </div>
    </ThemeProvider>
  )
}


