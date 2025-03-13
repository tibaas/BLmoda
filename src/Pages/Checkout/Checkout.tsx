import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, CartItem, CartItems, CheckoutContainer, EmptyCart, Grid, Input, ItemImage, ItemInfo, ItemName, ItemPrice, ItemSize, ProductInfo, ProductPrice,  ProductGrid, QuantityButton, QuantityControl, SimilarProducts, Summary, SummaryRow, Title, ProductCard, ProductImage, ProductName } from './styles';
import ProductModal from '../../components/ProductModal/ProductModal';



const Checkout = () => {
  const { items, removeItem, updateQuantity, total } = useCart();
  const [zipCode, setZipCode] = useState('');
  const [shippingCost, setShippingCost] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedProduct, setSelectedProduct] = useState<null | any>(null)

  const similarProducts = [
    {
      id: 17,
      name: "Sport Tank Top",
      price: "R$ 89,90",
      image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&q=80",
      description: "Lightweight and breathable tank top perfect for any workout."
    },
    {
      id: 18,
      name: "Training Shorts",
      price: "R$ 119,90",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80",
      description: "High-performance training shorts with moisture-wicking technology."
    },
    {
      id: 19,
      name: "Compression Leggings",
      price: "R$ 159,90",
      image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80",
      description: "Full-length compression leggings for maximum support during workouts."
    },
    {
      id: 20,
      name: "Sports Bra",
      price: "R$ 99,90",
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80",
      description: "High-impact sports bra with maximum support and comfort."
    }
  ];

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 8) {
      setZipCode(value);
      if (value.length === 8) {
        // Simulate shipping cost calculation
        setShippingCost(Math.random() * 20 + 10);
      }
    }
  };

  if (items.length === 0) {
    return (
      <CheckoutContainer>
        <EmptyCart>
          <h2>Seu carrinho está vazio</h2>
          <p>Volte para a loja e adicione alguns produtos!</p>
          <Link to="/">Continuar Comprando</Link>
        </EmptyCart>
      </CheckoutContainer>
    );
  }

return (
  <CheckoutContainer>
  <Title>Carrinho de Compras</Title>
  <Grid>
    <CartItems>
      {items.map(item => (
        <CartItem key={`${item.id}-${item.size}`}>
          <ItemImage src={item.image} alt={item.name} />
          <ItemInfo>
            <ItemName>{item.name}</ItemName>
            <ItemSize>Tamanho: {item.size}</ItemSize>
            <ItemPrice>{item.price}</ItemPrice>
          </ItemInfo>
          <div>
            <QuantityControl>
              <QuantityButton
                onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
              >
                <Minus size={16} />
              </QuantityButton>
              <span>{item.quantity}</span>
              <QuantityButton
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                <Plus size={16} />
              </QuantityButton>
              <QuantityButton onClick={() => removeItem(item.id)}>
                <Trash2 size={16} />
              </QuantityButton>
            </QuantityControl>
          </div>
        </CartItem>
      ))}
    </CartItems>

    <Summary>
      <h2>Resumo do Pedido</h2>
      <Input
        type="text"
        placeholder="CEP"
        value={zipCode}
        onChange={handleZipCodeChange}
        maxLength={8}
      />
      <SummaryRow>
        <span>Subtotal</span>
        <span>{total}</span>
      </SummaryRow>
      {shippingCost > 0 && (
        <SummaryRow>
          <span>Frete</span>
          <span>
            {shippingCost.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </span>
        </SummaryRow>
      )}
      <SummaryRow>
        <strong>Total</strong>
        <strong>
          {(
            parseFloat(total.replace('R$', '').replace(',', '.')) +
            shippingCost
          ).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </strong>
      </SummaryRow>
      <div>
        <Button>Finalizar Compra</Button>
        <Button style={{ background: '#4F46E5' }}>Criar Conta</Button>
      </div>
    </Summary>
  </Grid>

  <SimilarProducts>
    <h2>Produtos Similares</h2>
    <ProductGrid>
      {similarProducts.map((product) => (
        <ProductCard key={product.id} onClick={() => setSelectedProduct(product)}>
          <ProductImage src={product.image} alt={product.name} />
          <ProductInfo>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
          </ProductInfo>
        </ProductCard>
      ))}
    </ProductGrid>
  </SimilarProducts>

  {selectedProduct && (
    <ProductModal
      product={selectedProduct}
      onClose={() => setSelectedProduct(null)}
    />
  )}
</CheckoutContainer>
  );
};

export default Checkout