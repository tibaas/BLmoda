import styled from "styled-components";

export const CheckoutContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 2rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
 
  
  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const CartItems = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const CartItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ItemName = styled.h3`
  font-weight: 600;
  color: #1f2937;
`;

export const ItemSize = styled.span`
  color: #6b7280;
  font-size: 0.875rem;
`;

export const ItemPrice = styled.span`
  font-weight: 600;
  color: #F4A460;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const QuantityButton = styled.button`
  padding: 0.25rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  
  &:hover {
    background: #f3f4f6;
  }
`;

export const Summary = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  height: fit-content;
  
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: #F4A460;
    box-shadow: 0 0 0 2px rgba(244, 164, 96, 0.2);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background: #F4A460;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #E48F4D;
  }
`;

export const EmptyCart = styled.div`
  text-align: center;
  padding: 3rem;
  color: #6b7280;
`;

export const SimilarProducts = styled.div`
  margin-top: 4rem;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
  
`;

export const ProductCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  padding: 1rem;
`;

export const ProductName = styled.h3`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

export const ProductPrice = styled.span`
  color: #F4A460;
  font-weight: 600;
`;