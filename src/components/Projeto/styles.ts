import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid ${props => props.theme.corDaBorda};
  padding: 16px;
  position: relative;
`;

export const LinkBotao = styled.a`
  color: ${props => props.theme.corDeFundo};
  font-size: 14px;
  background-color: ${props => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
  cursor: pointer;
  position: relative;

  &:hover .card-modal {
    opacity: 1;
    visibility: visible;
  }
`;

export const CardModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 25%;
  padding: 0;
  width: 50vw;
  max-width: 90vw;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;

  .image-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
    border-radius: 12px;
  }
`;
