import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { BackgroundContainer, FeaturedSection, ProductCard, ProductGrid, ProductImage, ProductInfo, ProductName, ProductPrice, ShowMoreButton, Title } from './styles';
import ProductModal from '../ProductModal/ProductModal'
import image2 from '../../assets/FeaturedPic/img2.jpg'
import image3 from '../../assets/FeaturedPic/img3.jpg'
import image4 from '../../assets/FeaturedPic/img4.jpg'
import image5 from '../../assets/FeaturedPic/img5.jpg'
import image6 from '../../assets/FeaturedPic/img6.jpg'
import image7 from '../../assets/FeaturedPic/img7.jpg'
import image8 from '../../assets/FeaturedPic/img8.jpg'
import image9 from '../../assets/FeaturedPic/img9.jpg'
import image10 from '../../assets/FeaturedPic/img10.jpg'
import image11 from '../../assets/FeaturedPic/img11.jpg'
import image12 from '../../assets/FeaturedPic/img12.jpg'
import image13 from '../../assets/FeaturedPic/img13.jpg'



export function Featured() {
  const [showMore, setShowMore] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedProduct, setSelectedProduct] = useState<null | any>(null);
  const products = [
    {
      id: 1,
      name: "Performance Sports Bra",
      price: "R$ 129,90",
      image: image2,
    },
    {
      id: 2,
      name: "High-Waist Leggings",
      price: "R$ 199,90",
      image: image3
    },
    {
      id: 3,
      name: "Dry-Fit Training Top",
      price: "R$ 149,90",
      image: image4
    },
    {
      id: 4,
      name: "Compression Shorts",
      price: "R$ 89,90",
      image: image5
    },
    {
      id: 5,
      name: "Seamless Tank Top",
      price: "R$ 79,90",
      image: image6
    },
    {
      id: 6,
      name: "Workout Jacket",
      price: "R$ 239,90",
      image: image7
    },
    {
      id: 7,
      name: "Performance Joggers",
      price: "R$ 179,90",
      image: image8
    },
    {
      id: 8,
      name: "Cross-Training Shoes",
      price: "R$ 299,90",
      image: image9
    },
    {
      id: 9,
      name: "Moisture-Wicking Tee",
      price: "R$ 89,90",
      image: image10
    },
    {
      id: 10,
      name: "Training Gloves",
      price: "R$ 69,90",
      image: image11
    },
    {
      id: 11,
      name: "Yoga Mat",
      price: "R$ 129,90",
      image: image12
    },
    {
      id: 12,
      name: "Resistance Bands Set",
      price: "R$ 99,90",
      image: image13
    }
  ];

  const displayedProducts = showMore ? products : products.slice(0, 8);

  return (
    <FeaturedSection>
      <BackgroundContainer>
        <Title>Destaque</Title>
        <ProductGrid>
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} onClick={() => setSelectedProduct(product)}>
              <ProductImage src={product.image} alt={product.name} />
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price}</ProductPrice>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductGrid>
        {!showMore && (
          <ShowMoreButton onClick={() => setShowMore(true)}>
            Mostrar Mais
            <ChevronDown size={20} />
          </ShowMoreButton>
        )}
      </BackgroundContainer>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </FeaturedSection>
  );
};

