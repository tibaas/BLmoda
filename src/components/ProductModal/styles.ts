import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  padding: 1rem;
  backdrop-filter: blur(4px);
`;

export const ModalContent = styled.div`
  background: white;
  max-width: 900px;
  width: 100%;
  border-radius: 12px;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
  /* clip-path: polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%); */
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: white;
  
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  z-index: 1;

  &:hover {
    background: #f3f4f6;
    transform: scale(1.1);
  }
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1.2fr 1fr;
  }
`;

export const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MainImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ThumbnailContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
`;

interface ThumbnailProps {
  $active: boolean;
}

export const Thumbnail = styled.img<ThumbnailProps>`
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  border: 2px solid ${props => props.$active ? '#F4A460' : 'transparent'};

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ProductTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
`;

export const ProductPrice = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #F4A460;
`;

export const ProductDescription = styled.p`
  color: #4b5563;
  line-height: 1.6;
`;

export const SizeSelector = styled.div`
  display: flex;
  gap: 0.5rem;
`;

interface SizeButtonProps {
  $selected: boolean;
}

export const SizeButton = styled.button<SizeButtonProps>`
  padding: 0.5rem 1rem;
  border: 2px solid ${props => props.$selected ? '#F4A460' : '#e5e7eb'};
  border-radius: 4px;
  background: ${props => props.$selected ? '#F4A460' : 'white'};
  color: ${props => props.$selected ? 'white' : '#1f2937'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #F4A460;
  }
`;

export const BuyButton = styled.button`
  background-color: #F4A460;
  color: white;
  padding: 1rem 2rem;
  border: none;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: all 0.3s;
  clip-path: polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%);
  width: 100%;
  margin-top: 1rem;

  gap: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #E48F4D;
    transform: translateY(-2px);
  }
`;