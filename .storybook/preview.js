import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import ThemeProvider from '../src/components/ThemeProvider';
import '../src/app/reset.css';
import '../src/app/index.css';
import './preview.css';

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme;

    useEffect(() => {
      document.body.setAttribute('class', theme);
    }, [theme]);

    return (
      <HelmetProvider>
        <ThemeProvider themeId={theme}>
          <div id="story-root" className="story-root" key={theme}>
            <Story />
          </div>
        </ThemeProvider>
      </HelmetProvider>
    );
  },
];

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'dark',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
    },
  },
};

export const parameters = {
  layout: 'fullscreen',
  controls: { hideNoControlsWarning: true },
};
