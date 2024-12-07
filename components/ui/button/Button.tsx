'use client';
import styled from 'styled-components';

// Styled button using props
const StyledButton = styled.button<{ theme?: any }>`
  background-color: ${({ theme }) => theme?.components?.button?.background || 'tansparent'};
  color: ${({ theme }) => theme?.components?.button?.color || 'white'};
  border: ${({ theme }) => theme?.components?.button?.border ? theme?.components?.button?.border : '2px solid #27272A'};
  padding: ${({ theme }) => (theme?.spacing?.sm && theme?.spacing?.lg) ? `${theme.spacing.sm} ${theme.spacing.lg}` : '8px 20px'};
  border-radius: ${({ theme }) => theme?.components?.button?.radius ? theme?.components?.button?.radius : '5px'};

  &:hover {
    background-color: ${({ theme }) => theme?.components?.button?.hoverBackground || '#27272A'};
    color: ${({ theme }) => theme?.components?.button?.hoverColor || ''};
  }
`;

// Define the props interface
interface ButtonProps {
  theme?: any; // Theme prop
  onClick?: () => void; // Optional onClick prop
  children?: React.ReactNode; // Children prop
}

// Functional Button component
const Button: React.FC<ButtonProps> = ({ theme, onClick, children }) => {
  return (
    <StyledButton theme={theme} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
