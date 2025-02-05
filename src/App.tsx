import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header/Header";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { HeroImage } from "./components/HeroImage/HeroImage";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <GlobalStyle />
      <div>        
          <Header />

        <div>
          <HeroImage />
        </div>
        
        <div>
          <section>
            
          </section>
        </div>
      </div>
    </ThemeProvider>
  )
}


