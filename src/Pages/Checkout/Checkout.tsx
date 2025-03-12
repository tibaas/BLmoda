import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, CartItem, CartItems, CheckoutContainer, EmptyCart, Grid, Input, ItemImage, ItemInfo, ItemName, ItemPrice, ItemSize, ProductGrid, QuantityButton, QuantityControl, SimilarProducts, Summary, SummaryRow, Title } from './styles';



const Checkout = () => {
  const { items, removeItem, updateQuantity, total } = useCart();
  const [zipCode, setZipCode] = useState('');
  const [shippingCost, setShippingCost] = useState(0);

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
          <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>
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
          <div className="mt-4 space-y-2">
            <Button>Finalizar Compra</Button>
            <Button style={{ background: '#4F46E5' }}>Criar Conta</Button>
          </div>
        </Summary>
      </Grid>

      <SimilarProducts>
        <h2 className="text-2xl font-semibold mb-4">Produtos Similares</h2>
        <ProductGrid>
          {/* Similar products will be rendered here */}
        </ProductGrid>
      </SimilarProducts>
    </CheckoutContainer>
  );
};

export default Checkout;


// import React, { useState } from 'react';
// import { useCart } from '../../context/CartContext';
// import { Grid, Minus, Plus, Trash2 } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { Button, CartItem, CartItems, CheckoutContainer, EmptyCart, Input, ItemImage, ItemInfo, ItemName, ItemPrice, ItemSize, ProductGrid, QuantityButton, QuantityControl, SimilarProducts, Summary, SummaryRow, Title } from './styles';






// const Checkout = () => {
//   const { items, removeItem, updateQuantity, total } = useCart();
//   const [zipCode, setZipCode] = useState('');
//   const [shippingCost, setShippingCost] = useState(0);

//   const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value.replace(/\D/g, '');
//     if (value.length <= 8) {
//       setZipCode(value);
//       if (value.length === 8) {
//         // Simulate shipping cost calculation
//         setShippingCost(Math.random() * 20 + 10);
//       }
//     }
//   };

//   if (items.length === 0) {
//     return (
//       <CheckoutContainer>
//         <EmptyCart>
//           <h2>Seu carrinho está vazio</h2>
//           <p>Volte para a loja e adicione alguns produtos!</p>
//           <Link to="/">Continuar Comprando</Link>
//         </EmptyCart>
//       </CheckoutContainer>
//     );
//   }

//   return (
//     <CheckoutContainer>
//       <Title>Carrinho de Compras</Title>
//       <Grid>
//         <CartItems>
//           {items.map(item => (
//             <CartItem key={`${item.id}-${item.size}`}>
//               <ItemImage src={item.image} alt={item.name} />
//               <ItemInfo>
//                 <ItemName>{item.name}</ItemName>
//                 <ItemSize>Tamanho: {item.size}</ItemSize>
//                 <ItemPrice>{item.price}</ItemPrice>
//               </ItemInfo>
//               <div>
//                 <QuantityControl>
//                   <QuantityButton
//                     onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
//                   >
//                     <Minus size={16} />
//                   </QuantityButton>
//                   <span>{item.quantity}</span>
//                   <QuantityButton
//                     onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                   >
//                     <Plus size={16} />
//                   </QuantityButton>
//                   <QuantityButton onClick={() => removeItem(item.id)}>
//                     <Trash2 size={16} />
//                   </QuantityButton>
//                 </QuantityControl>
//               </div>
//             </CartItem>
//           ))}
//         </CartItems>

//         <Summary>
//           <h2>Resumo do Pedido</h2>
//           <Input
//             type="text"
//             placeholder="CEP"
//             value={zipCode}
//             onChange={handleZipCodeChange}
//             maxLength={8}
//           />
//           <SummaryRow>
//             <span>Subtotal</span>
//             <span>{total}</span>
//           </SummaryRow>
//           {shippingCost > 0 && (
//             <SummaryRow>
//               <span>Frete</span>
//               <span>
//                 {shippingCost.toLocaleString('pt-BR', {
//                   style: 'currency',
//                   currency: 'BRL'
//                 })}
//               </span>
//             </SummaryRow>
//           )}
//           <SummaryRow>
//             <strong>Total</strong>
//             <strong>
//               {(
//                 parseFloat(total.replace('R$', '').replace(',', '.')) +
//                 shippingCost
//               ).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
//             </strong>
//           </SummaryRow>
//           <div>
//             <Button>Finalizar Compra</Button>
//             <Button style={{ background: '#4F46E5' }}>Criar Conta</Button>
//           </div>
//         </Summary>
//       </Grid>

//       <SimilarProducts>
//         <h2>Produtos Similares</h2>
//         <ProductGrid>
//           {/* Similar products will be rendered here */}
//         </ProductGrid>
//       </SimilarProducts>
//     </CheckoutContainer>
//   );
// };

// export default Checkout;