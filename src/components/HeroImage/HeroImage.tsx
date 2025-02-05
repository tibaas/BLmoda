import { BackContent, BackFace, FlipCard, FrontFace, HeroSection, Image, ImageContainer, ImageGrid } from './styles'
import image1 from '../../assets/photo1.jpg'
import image2 from '../../assets/photo2.jpg'
import image3 from '../../assets/photo3.jpg'
import image4 from '../../assets/photo4.jpg'

export function HeroImage() {

  const images = [
    {
      src:image1,
      title: "Top & Calça",
      description: "Perfeito para um treino confortável e sem mostrar muito as pernas",
      price: "R$89,90"
    },
    {
      src: image2,
      title: "Top & Shorts",
      description: "Elegante e ousado, perfeito para realçar bem o bumbum",
      price: "R$89,90"
    },
    {
      src: image3,
      title: "Top & Long Shorts",
      description: "Acompanha naquele treino bem pesado livre de marcas de suor",
      price: "R$89,90"
    },
    {
      src: image4,
      title: "Top curto & Saia short",
      description: "Elegante e ousado para arrasar no treino de perna",
      price: "R$89,90"
    }
  ];
  return (
    <HeroSection>
      <ImageGrid>
        {images.map((image, index) => (
          <ImageContainer key={index}>
            <FlipCard>
              <FrontFace>
                <Image src={image.src} alt={image.title} />
              </FrontFace>
              <BackFace>
                <BackContent>
                  <h2>{image.title}</h2>
                  <p>{image.description}</p>
                  <h3>{image.price}</h3>
                </BackContent>
              </BackFace>
            </FlipCard>
          </ImageContainer>
        ))}
      </ImageGrid>
    </HeroSection>
  );
};
