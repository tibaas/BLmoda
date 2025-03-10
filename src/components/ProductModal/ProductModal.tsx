import { useState } from "react";
import { BuyButton, CloseButton, ImageSection, MainImage, ModalContent, ModalOverlay, ProductContainer, ProductDescription, ProductInfo, ProductPrice, ProductTitle, SizeButton, SizeSelector, Thumbnail, ThumbnailContainer } from "./styles";
import { X } from "lucide-react";


interface ProductModalProps {
  product: {
    id: number;
    name: string;
    price: string;
    image: string;
    description?: string;
    additionalImages?: string[];
  };
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('M');

  // Additional images for the product (including main image)
  const allImages = [
    product.image,
    ...(product.additionalImages || [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80'
    ])
  ];

  const sizes = ['P', 'M', 'G', 'GG'];

  const handleBuy = () => {
    // Implement buy functionality
    console.log('Buy clicked:', { product, selectedSize });
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <X size={24} />
        </CloseButton>
        
        <ProductContainer>
          <ImageSection>
            <MainImage src={allImages[selectedImage]} alt={product.name} />
            <ThumbnailContainer>
              {allImages.map((img, index) => (
                <Thumbnail
                  key={index}
                  src={img}
                  alt={`${product.name} view ${index + 1}`}
                  onClick={() => setSelectedImage(index)}
                  $active={selectedImage === index}
                />
              ))}
            </ThumbnailContainer>
          </ImageSection>

          <ProductInfo>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductPrice>{product.price}</ProductPrice>
            <ProductDescription>
              {product.description || 
                'Peça versátil e confortável, perfeita para suas atividades físicas. ' +
                'Fabricada com tecido de alta performance que oferece excelente respirabilidade ' +
                'e controle de umidade. Design moderno e ajuste anatômico para máximo desempenho.'}
            </ProductDescription>

            <div>
              <h3 className="font-semibold mb-2">Tamanho</h3>
              <SizeSelector>
                {sizes.map(size => (
                  <SizeButton
                    key={size}
                    $selected={selectedSize === size}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </SizeButton>
                ))}
              </SizeSelector>
            </div>

            <BuyButton onClick={handleBuy}>
              Comprar Agora
            </BuyButton>
          </ProductInfo>
        </ProductContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ProductModal;