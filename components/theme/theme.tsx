// theme.tsx
import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    background: '#F7F7F7', // Light background from Style One
    surface: '#EEEEEE', // Slightly darker background for cards or surfaces
    textPrimary: '#393E46', // Dark text color for high contrast on light backgrounds
    textSecondary: '#929AAB', // Muted gray for secondary text
    accent: '#393E46', // Accent color for buttons, icons, etc.
  },
  components: {
    button: {
      background: '#393E46',
      color: '#FFFFFF',
      hoverBackground: '#000',
      border: 'none',
    },
    card: {
      background: '#EEEEEE',
      borderColor: '#D1D1D1', // Light border color for cards
    },
    input: {
      background: '#F7F7F7',
      borderColor: '#929AAB',
      textColor: '#393E46',
      placeholderColor: '#929AAB',
    },
  },
  spacing: {
    xs: '4px',    // Minimal spacing
    sm: '8px',    // Small spacing
    md: '16px',   // Medium/default spacing
    lg: '24px',   // Large spacing for major sections
    xl: '32px',   // Extra-large spacing for section gaps
    xxl: '48px',  // Extra-extra-large spacing
    xxxl: '64px', // Maximum spacing
  },
};

export const darkTheme: DefaultTheme = {
    colors: {
      background: '#393E46', // Dark background from Style Four
      surface: '#929AAB', // Muted gray surface for cards or panels
      textPrimary: '#FFFFFF', // White text color for high contrast on dark backgrounds
      textSecondary: '#EEEEEE', // Light gray for secondary text
      accent: '#F7F7F7', // Light accent color for high contrast
    },
    components: {
      button: {
        background: '#F7F7F7',
        color: '#393E46',
        hoverBackground: '#EEEEEE',
        border: 'none',
        hoverColor: '#000',
      },
      card: {
        background: '#929AAB',
        borderColor: '#EEEEEE', // Border color for cards on dark background
      },
      input: {
        background: '#393E46',
        borderColor: '#EEEEEE',
        textColor: '#FFFFFF',
        placeholderColor: '#929AAB',
      },
    },
    spacing: {
      xs: '4px',    // Minimal spacing
      sm: '8px',    // Small spacing
      md: '16px',   // Medium/default spacing
      lg: '24px',   // Large spacing for major sections
      xl: '32px',   // Extra-large spacing for section gaps
      xxl: '48px',  // Extra-extra-large spacing
      xxxl: '64px', // Maximum spacing
    },
  };

// theme.tsx
export const blueTheme: DefaultTheme = {
    colors: {
      background: '#E3F2FD', // Light blue background
      surface: '#BBDEFB', // Blue surface for cards
      textPrimary: '#0D47A1', // Dark blue text for contrast
      textSecondary: '#1976D2', // Medium blue for secondary text
      accent: '#0D47A1', // Dark blue for accents
    },
    components: {
      button: {
        background: '#1976D2', // Dark blue button background
        color: '#FFFFFF', // White text on button
        hoverBackground: '#0D47A1', // Medium blue on hover
        border: 'none',
      },
      card: {
        background: '#1976D2',
        borderColor: '#90CAF9', // Light blue border for cards
        hoverBackground: '#0D47A1',
      },
      input: {
        background: '#E3F2FD',
        borderColor: '#90CAF9',
        textColor: '#0D47A1',
        placeholderColor: '#1976D2',
      },
    },
    spacing: {
        xs: '4px',    // Minimal spacing
        sm: '8px',    // Small spacing
        md: '16px',   // Medium/default spacing
        lg: '24px',   // Large spacing for major sections
        xl: '32px',   // Extra-large spacing for section gaps
        xxl: '48px',  // Extra-extra-large spacing
        xxxl: '64px', // Maximum spacing
      },
  };

// Extend styled-components' DefaultTheme with our theme interface
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      surface: string;
      textPrimary: string;
      textSecondary: string;
      accent: string;
    };
    components: {
      button: {
          color: string;
          background: string;
          border: string;
          hoverBackground: string;
          hoverColor?: string;
      };
      card: {
        background: string;
        borderColor: string;
        hoverBackground?: string;
      };
      input: {
        background: string;
        borderColor: string;
        textColor: string;
        placeholderColor: string;
      };
    };
    spacing?: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
        xxxl: string;
    }
  }
}
export const themes = [lightTheme, darkTheme, blueTheme]
