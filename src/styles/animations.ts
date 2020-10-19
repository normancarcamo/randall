import { keyframes } from 'styled-components';

export const forwardOpacity = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const backwardOpacity = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

export const backgroundGradient = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
`;

export const boxGlitched = keyframes`
  0% { clip-path: inset(5% 10% 5% 10%); }
  10% { clip-path: inset(10% 5% 10% 5%); }
  20% { clip-path: inset(5% 10% 5% 10%); }
  30% { clip-path: inset(10% 5% 10% 5%); }
  40% { clip-path: inset(5% 10% 5% 10%); }
  50% { clip-path: inset(10% 5% 10% 5%); }
  60% { clip-path: inset(5% 10% 5% 10%); }
  70% { clip-path: inset(10% 5% 10% 5%); }
  80% { clip-path: inset(5% 10% 5% 10%); }
  90% { clip-path: inset(10% 5% 10% 5%); }
  100% { clip-path: inset(5% 10% 5% 10%); }
`;
