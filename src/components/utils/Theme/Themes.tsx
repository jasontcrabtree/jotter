type Themes = {
  lightMode: {
    value: unknown;
    text: string;
    background: string;
  };
  darkMode: {
    value: unknown;
    text: string;
    background: string;
  };
};

export const themes: Themes = {
  lightMode: {
    value: 'lightMode',
    text: 'red',
    background: 'white',
  },
  darkMode: {
    value: 'darkMode',
    text: 'white',
    background: 'red',
  },
};
