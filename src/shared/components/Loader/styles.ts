import { getStyled, keyframes, theme } from '../../../../stitches.config';

const Container = getStyled('div', {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  $$backgroundColor: `${theme.colors.gray100.value}80`,
  background: '$$backgroundColor',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const load = keyframes({
  '0%': {
    boxShadow:
      '0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em',
  },
  '95%': {
    boxShadow:
      '0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em',
  },
  '59%': {
    boxShadow:
      '0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em',
  },
  '20%': {
    boxShadow:
      '0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em',
  },
  '38%': {
    boxShadow:
      '0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em',
  },
  '100%': {
    boxShadow:
      '0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em',
  },
});

const round = keyframes({
  '0%': {
    '-webkit-transform': 'rotate(0deg)',
    transform: 'rotate(0deg)',
  },
  '100%': {
    '-webkit-transform': 'rotate(360deg)',
    transform: 'rotate(360deg)',
  },
});

const LoaderKeyframes = getStyled('div', {
  color: '$primary200',
  fontSize: 90,
  textIndent: '-9999em',
  overflow: 'hidden',
  width: '1em',
  height: '1em',
  borderRadius: '50%',
  margin: '72px auto',
  position: 'relative',
  '-webkit-transform': 'translateZ(0)',
  '-ms-transform': 'translateZ(0)',
  transform: 'translateZ(0)',
  '-webkit-animation': `${load} 1.7s infinite ease, ${round} 1.7s infinite ease`,
  animation: `${load} 1.7s infinite ease, ${round} 1.7s infinite ease`,
});

export { Container, LoaderKeyframes };
