import { ThemeName } from '../models/theme.model';

export const themeConfig: { defaultTheme: ThemeName; availableThemes: ThemeName[]; toggleEnabled: boolean } = {
  defaultTheme: 'dark',
  availableThemes: ['dark', 'light'],
  toggleEnabled: true,
};
