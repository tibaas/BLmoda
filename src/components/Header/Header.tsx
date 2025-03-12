import { Phone, Search, ShoppingCart } from "lucide-react";
import { CartBadge, CartButton, HeaderContainer, HeaderContent, HeaderInner, LogoContainer, PhoneContainer, PhoneText, SearchContainer, SearchIconWrapper, SearchInput, SearchWrapper } from "./styles";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export function Header() {
    const { items } = useCart()
    const navigate = useNavigate()
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
    return (
      <HeaderContainer>
        <HeaderContent>
          <HeaderInner>
            <PhoneContainer>
              <Phone size={18} color="#1f2937" />
              <PhoneText>+55 (87) 9999-4567</PhoneText>
            </PhoneContainer>
            <LogoContainer>
              <h1>
                 BL m o d a f i t 
              </h1>
            </LogoContainer>
  
            <SearchContainer>
              <SearchWrapper>
                <SearchIconWrapper>
                  <Search size={20} color="#9ca3af" />
                </SearchIconWrapper>
                <SearchInput
                  type="text"
                  placeholder="Buscar"
                />
              </SearchWrapper>
            </SearchContainer>
  
            <CartButton onClick={() => navigate('/checkout')}>
              <ShoppingCart size={24} color="#1f2937" />
              {itemCount > 0 && <CartBadge>{itemCount}</CartBadge>}
            </CartButton>
          </HeaderInner>
        </HeaderContent>
      </HeaderContainer>
    );
  };
  
