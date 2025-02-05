import { CreditCard, PhoneCall, Truck } from "lucide-react";
import { ServiceBannerContainer, ServiceBannerContent, ServiceBannerTitle} from "./styles";

export function ServicesBanner() {
  return(
    <ServiceBannerContainer>
      <ServiceBannerContent>
        <div>
          <h3>
            <ServiceBannerTitle>
              <CreditCard size={28}  /> PARCELAMENTO
            </ServiceBannerTitle>          
            </h3>
          <p>
            A partir de R$ 120 você pode parcelar sua<br></br> comprinha em até 4x sem juros.
          </p>
        </div>
        <div>
          <h3>
            <ServiceBannerTitle>
              <Truck size={28} /> FRETE
            </ServiceBannerTitle>
          
          </h3>
          <p>
            Nas compras a partir de R$ 499<br></br> o frete é por nossa conta. ❤️
          </p>
        </div>
        <div>
          <h3>
            <ServiceBannerTitle>
              <PhoneCall size={28} /> WHATSAPP
            </ServiceBannerTitle>         
          </h3>
          <p>
            Dúvidas na hora da sua compra?<br></br> Entre em contato pelo nosso WhatsApp.
          </p>
        </div>  
      </ServiceBannerContent>
    </ServiceBannerContainer>      
  )
}