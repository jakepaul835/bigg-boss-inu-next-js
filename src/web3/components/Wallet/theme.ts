import { Theme, lightTheme } from '@rainbow-me/rainbowkit';
import merge from 'lodash.merge';


export const walletTheme = merge(lightTheme(), {
  colors: {
    accentColor: '#000000',
    accentColorForeground: '#FFFFFF',
    connectButtonInnerBackground: '#F3E1A2',
    modalBackground:'#D4AF37',
    modalText: '#FFFFFF',
    profileAction: '#000000',
    downloadTopCardBackground: '#F3E1A2',
    downloadBottomCardBackground: '#F3E1A2'
  }
}) as Theme;