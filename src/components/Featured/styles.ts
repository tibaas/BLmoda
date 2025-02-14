
import styled from 'styled-components';

export const FeaturedSection = styled.section`
  position: relative;
  padding: 4rem 1rem;
  margin: 4rem auto;
  max-width: 1280px;
  
  @media (min-width: 640px) {
    padding: 4rem 1.5rem;
  }
  
  @media (min-width: 1024px) {
    padding: 4rem 2rem;
  }
`;

export const BackgroundContainer = styled.div`
  position: relative;
  padding: 3rem 2rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow: hidden;
  /* box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2); */
  box-shadow: 3px 1px 10px 5px black;
  

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(244, 164, 96, 0.2) 0%,
      rgba(0, 0, 0, 0.4) 100%
    );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #F4A460;
  margin-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); */
  text-shadow: 2px 3px 1px black;
  

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: #F4A460;
    margin: 1rem auto 0;
    border-radius: 2px;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ProductCard = styled.div`
  cursor: pointer;
  position: relative;
  background: white;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  
  /* box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); */
  

  &:hover {
    transform: translateY(-4px) scale(1.02);
    /* box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04); */
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(244, 164, 96, 0.2) 0%, transparent 50%);
    pointer-events: none;
  }
`;

export const ProductCardContainer = styled.div`
border: 2px solid black;

background: white;

`

export const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  padding: 10px;
`;

export const ProductInfo = styled.div`
  padding: 1.5rem;
  background: white;
`;

export const ProductName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

export const ProductPrice = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: #F4A460;
`;

export const ShowMoreButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
  padding: 1rem 3rem;
  background-color: #F4A460;
  color: white;
  border:0;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  clip-path: polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%);
  position: relative;
  z-index: 1;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background-color: #E48F4D;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  svg {
    transition: transform 0.3s;
  }

  &:hover svg {
    transform: translateY(2px);
  }
`;