export default {
  hidden: {
    visibility: 'hidden',
    opacity: 0,
  },
  visible: {
    visibility: 'visible',
    opacity: 1,
  },
  visuallyHidden: {
    position: 'absolute',
    overflow: 'hidden',
    clip: 'rect(0 0 0 0)',
    height: 1,
    width: 1,
    margin: -1,
    padding: 0,
    border: 0,
  },
  breakWord: {
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
  },
  xAxisCenter: {
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  yAxisCenter: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  sticky: {
    position: 'sticky',
  },
  toolbar: {
    minHeight: 48,
    maxHeight: 48,
  },
  overflowText: (maxWidth) => ({
    maxWidth,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }),
  gutters: (styles = {}) => ({
    paddingLeft: 16,
    paddingRight: 16,
    ...styles,
  }),
  clamp: (lines) => ({
    display: '-webkit-box',
    overflow: 'hidden',
    '-webkit-line-clamp': lines,
    '-webkit-box-orient': 'vertical',
  }),
  checkeredBackground: {
    background:
      'linear-gradient(45deg, rgba(0, 0, 0, 0.0980392) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.0980392) 75%, rgba(0, 0, 0, 0.0980392) 0), linear-gradient(45deg, rgba(0, 0, 0, 0.0980392) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.0980392) 75%, rgba(0, 0, 0, 0.0980392) 0), white',
    backgroundRepeat: 'repeat, repeat',
    backgroundPosition: '0px 0, 5px 5px',
    backgroundSize: '10px 10px, 10px 10px',
  },
};
