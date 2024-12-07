// Card.tsx
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div<{ theme?: any }>`
  background-color: ${({ theme }) => theme?.components?.card?.background || 'transparent'};
  color: ${({ theme }) => theme?.components?.card?.color || 'white'};
  max-width: 350px;
  max-height: 400px;
  padding: 20px;
  border: 2px solid #27272A;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme?.components?.card?.hoverBackground || '#27272A'};
  }
`;

const CardTitle = styled.h2`
  margin: 0 0 10px;
  font-size: 24px;
  font-weight: semibold;
`;

const CardContent = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: medium;
`;
interface cardProps {
    theme?: any,
    cardTitle?: string,
    cardText?: string,
    children: React.ReactNode,
}
const Card: React.FC<cardProps> = ({theme, cardText, cardTitle, children}) => {
  return (
    <CardContainer theme={theme}>
      {children}
    </CardContainer>
  );
};

export default Card;
