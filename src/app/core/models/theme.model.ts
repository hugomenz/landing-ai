export type ThemeName = 'dark' | 'light';

export interface ThemeConfig {
  defaultTheme: ThemeName;
  availableThemes: ThemeName[];
  themeToggleEnabled: boolean;
}
