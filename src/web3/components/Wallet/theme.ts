import { Theme, lightTheme } from '@rainbow-me/rainbowkit';
import merge from 'lodash.merge';


export const walletTheme = merge(lightTheme(), {
  colors: {
    accentColor: '#1C009A',
    accentColorForeground: '#FFFFFF',
    connectButtonInnerBackground: '#F3E1A2',
    modalBackground:'linear-gradient(175.48deg, #E79F3B 20.95%, #E4851B 107.63%)',
    modalText: '#000000',
    profileAction: '#000000',
    downloadTopCardBackground: '#F3E1A2',
    downloadBottomCardBackground: '#F3E1A2'
  }
}) as Theme;