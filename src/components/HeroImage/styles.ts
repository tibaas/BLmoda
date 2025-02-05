import styled from "styled-components";

export const HeroSection = styled.section`
  padding: 2rem 0;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1rem;
  
  @media (min-width: 640px) {
    padding: 2rem 1.5rem;
  }
  
  @media (min-width: 1024px) {
    padding: 2rem;
  }
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  perspective: 1000px;
  aspect-ratio: 2/3;
  cursor: pointer;
  padding: 0.5rem;

  &:hover > div {
    transform: rotateY(180deg);
  }
`;

export const FlipCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  clip-path: polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%);
`;

export const FrontFace = styled(CardFace)`
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

export const BackFace = styled(CardFace)`
  transform: rotateY(180deg);
  background: #F4A460;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BackContent = styled.div`
  color: white;
  font-weight: 600;
  
  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.875rem;
    opacity: 0.9;
  }
`;