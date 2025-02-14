import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header/Header";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { HeroImage } from "./components/HeroImage/HeroImage";
import { ServicesBanner } from "./components/ServicesBanner/ServicesBanner";
import { Featured } from "./components/Featured/Featured";


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
            <Featured />
          </section>
        </div>
      </div>
    </ThemeProvider>
  )
}


