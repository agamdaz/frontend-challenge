import { cssRaw, cssRule } from 'typestyle';
import { normalize, setupPage } from 'csstips';

export const layoutCssSetup = () => {
  cssRaw(`
    @import url('https://fonts.googleapis.com/css?family=Courier+Prime');
  `);

  normalize();
  setupPage('#root');

  cssRule('body', {
    backgroundImage: 'url("background.svg")',
  });
}

export const commonCss = {
  secondaryColor: '#ececec',
  backgroundColor: '#fff',
  baseSpacing: '8px',
  doubleSpacing: '16px',
  defaultBorder: '2px solid #000',
  fontFamily: 'Courier Prime, monospace',
}
