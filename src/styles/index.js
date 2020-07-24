// VARIABLES
// Colors
export const color_light = '#ffffff';
export const color_dark = '#1C1B20';
export const color_orange = '#ffc371';
export const color_pink = '#ff5f6d';
export const color_subtle = '#F8F8F8';
export const color_dark_fade = 'rgba(28,27,32,0.9)';
export const color_subtle_fade = 'rgba(248,248,248, 0.6)';

//Media Queries
export const mobile = '(max-device-width : 480px)';
export const tablet = '(max-device-width : 1024px)';

// FUNCTIONS
// Flexbox
export const FlexFunc = (direction, justifyC, alignI) => {
	return `
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justifyC};
  align-items: ${alignI};
  `;
};


// Components
