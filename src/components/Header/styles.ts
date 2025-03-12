import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #f8fafc;
  /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); */
  box-shadow: 3px 1px 10px black;
`;

export const HeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

export const HeaderInner = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const LogoContainer = styled.div`
  font-family: "Handlee", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.1rem;

  cursor: pointer;
`

export const PhoneContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const PhoneText = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: #1f2937;
`;

export const SearchContainer = styled.div`
  flex: 1;
  max-width: 32rem;
  margin: 0 2rem;
`;

export const SearchWrapper = styled.div`
  position: relative;
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  padding-left: 0.75rem;
  display: flex;
  align-items: center;
  pointer-events: none;
`;

export const SearchInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem 0.5rem 2.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  line-height: 1.25;
  background-color: white;
  font-size: 0.875rem;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 0 2px #1f2937;
  }
`;

export const CartButton = styled.button`
  position: relative;
  padding: 0.5rem;
  border-radius: 9999px;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #f3f4f6;
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: bold;
  color: white;
  background-color: #1f2937;
  border-radius: 9999px;
  transform: translate(50%, -50%);
`;