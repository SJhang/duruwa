import { createMuiTheme } from '@material-ui/core';

import mixins from './mixins';
import palette from './palette';
import shadows from './shadows';

const baseSize = 14;
const htmlFontSize = 16;
const coef = baseSize / 14;
const pxToRem = (px) => `${(px / htmlFontSize) * coef}rem`;

const bodyMarginTop = 72;

const theme = createMuiTheme({
  custom: {
    bodyMaxWidth: 1200,
    bodyMargin: `${bodyMarginTop}px auto 0`,
    topOffset: bodyMarginTop,
    palette,
    shadows,
    networks: {
      Company: '#6FBE44',
      twitter: '#1DA1F2',
      linkedin: '#037EBB',
      facebook: '#4560A1',
    },
  },
  mixins,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1920,
    },
  },
  overrides: {
    // @ts-ignore-next-line
    MuiAutocomplete: {
      inputRoot: {
        '&[class*="MuiOutlinedInput-root"]': {
          '& $input': {
            padding: '7px 4px',
          },
        },
        '&[class*="MuiInput-root"]': {
          paddingBottom: 0,
          '& $input': {
            padding: 16,
          },
          '& $input:first-child': {
            padding: '16px 0 16px 16px',
          },
        },
      },
    },
    MuiAppBar: {
      root: {
        borderBottom: `1px solid ${palette.grey3}`,
        boxShadow: 'none',
      },
      colorDefault: {
        backgroundColor: palette.white,
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
      text: {
        color: palette.grey1,
        textTransform: 'none',
        '&:hover': {
          background: 'transparent',
          color: palette.black1,
        },
      },
      contained: {
        boxShadow: 'none',
        color: palette.grey1,
        backgroundColor: palette.grey6,
        border: `1px solid ${palette.grey3}`,
        borderRadius: 16,
        '&:hover, &:active': {
          boxShadow: 'none',
          backgroundColor: palette.grey5,
          borderColor: palette.grey2,
        },
      },
      containedPrimary: {
        boxShadow: 'none',
        color: palette.white,
        border: '1px solid transparent',
        '&:hover': {
          boxShadow: 'none',
          border: '1px solid transparent',
          color: palette.white,
        },
        '&$disabled': {
          color: palette.white,
          backgroundColor: palette.blueLight,
        },
      },
      containedSecondary: {
        boxShadow: 'none',
        color: palette.white,
        border: '1px solid transparent',
        '&:hover': {
          boxShadow: 'none',
          border: '1px solid transparent',
          color: palette.white,
        },
        '&$disabled': {
          color: palette.white,
          backgroundColor: palette.greenLight,
        },
      },
      containedSizeLarge: {
        padding: '8px 32px',
      },
      outlined: {
        borderRadius: 16,
      },
      outlinedSizeLarge: {
        padding: '7px 32px',
      },
      sizeLarge: {
        fontSize: pxToRem(16),
        lineHeight: pxToRem(20),
        fontWeight: 600,
      },
    },
    MuiCardContent: {
      root: {
        paddingTop: 0,
        paddingBottom: 12,
        '&:last-child': {
          paddingBottom: 12,
        },
      },
    },
    MuiCardHeader: {
      root: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 12,
      },
      action: {
        marginTop: 0,
        '@media (min-width: 600px)': {
          marginRight: -8,
        },
      },
      avatar: {
        marginRight: 12,
      },
    },
    MuiCheckbox: {
      root: {
        color: palette.grey2,
      },
    },
    MuiDialogActions: {
      root: {
        margin: 16,
      },
    },
    MuiDialogContent: {
      root: {
        padding: 24,
      },
    },
    MuiCssBaseline: {
      '@global': {
        'strong, b': {
          fontWeight: 600,
        },
        'video, button': {
          '&:focus': {
            outline: 'none',
          },
        },
        '@keyframes animation-shimmering': {
          '0%': {
            backgroundPosition: '-300px 0',
          },
          '100%': {
            backgroundPosition: '800px 0',
          },
        },
        body: {
          fontWeight: 500,
        },
      },
    },
    MuiDialogTitle: {
      root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 16px 8px',
        margin: '0 0 16px',
        borderBottom: `1px solid ${palette.grey3}`,
      },
    },
    MuiExpansionPanelDetails: {
      root: {
        display: 'block',
        padding: 0,
      },
    },
    MuiExpansionPanelSummary: {
      root: {
        padding: '0 12px 0 16px',
      },
      expandIcon: {
        right: 0,
      },
    },
    MuiFormControl: {
      marginNormal: {
        marginTop: 12,
      },
    },
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: 'rgba(0, 0, 0, 0.87)',
        },
      },
    },
    MuiIconButton: {
      root: {
        color: palette.grey2,
        padding: 8,
        '&:hover': {
          backgroundColor: 'transparent',
          color: palette.black1,
        },
      },
      colorSecondary: {
        '&:hover': {
          backgroundColor: 'transparent',
          color: palette.greenDark,
        },
      },
    },
    MuiInput: {
      root: {
        backgroundColor: palette.grey4,
        borderRadius: 4,
      },
    },
    MuiInputBase: {
      multiline: {
        padding: 16,
        '&$marginDense': {
          padding: 16,
          paddingTop: 16,
        },
      },
      input: {
        padding: 16,
        'label[data-shrink=false] + $formControl &': {
          '&::-webkit-input-placeholder': 0.42,
          '&::-moz-placeholder': 0.42, // Firefox 19+
          '&:-ms-input-placeholder': 0.42, // IE 11
          '&::-ms-input-placeholder': 0.42, // Edge
        },
      },
    },
    MuiInputLabel: {
      formControl: {
        transform: 'translate(16px, 32px) scale(1)',
      },
      shrink: {
        transform: 'translate(0, 0) scale(0.75)',
      },
      animated: {
        transition: 'transform 100ms cubic-bezier(0.0, 0, 0.1, 1) 0ms',
      },
    },
    MuiList: {
      root: {
        '& div:focus': {
          outline: 'none',
        },
      },
      subheader: {
        '@media (max-width: 1279.95px)': {
          paddingTop: 12,
        },
        '@media (min-width: 1280px)': {
          paddingTop: 24,
        },
      },
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    MuiListSubheader: {
      root: {
        textTransform: 'uppercase',
        fontSize: pxToRem(12),
        lineHeight: '24px',
        color: palette.grey2,
      },
      gutters: {
        paddingRight: 0,
        '@media (max-width: 1279.95px)': {
          paddingLeft: 14,
        },
        '@media (min-width: 1280px)': {
          paddingLeft: 18,
        },
      },
    },
    MuiListItem: {
      root: {
        paddingTop: 6,
        paddingBottom: 6,
        '&$disabled': {
          backgroundColor: 'transparent',
        },
        '&$selected, &$selected:hover, &$selected:focus': {
          backgroundColor: palette.grey5,
        },
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 'auto',
        marginRight: 16,
      },
    },
    MuiListItemText: {
      root: {
        marginTop: 0,
        marginBottom: 0,
      },
      multiline: {
        marginTop: 0,
        marginBottom: 0,
      },
    },
    MuiMenuItem: {
      root: {
        paddingTop: 8,
        paddingBottom: 8,
        fontSize: pxToRem(13),
        transition: 'none',
        color: palette.grey1,

        '&:hover': {
          backgroundColor: palette.grey3,
          color: palette.black2,
        },

        '&$selected': {
          opacity: 1,
          backgroundColor: 'transparent',
          color: palette.green,
          fontWeight: 600,

          '&:focus': {
            backgroundColor: 'transparent',
          },

          '&:hover': {
            color: palette.green,
            fontWeight: 600,
          },
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        '&:hover $notchedOutline': {
          borderColor: '#BDBDBD',
        },
        '&$focused $notchedOutline': {
          borderColor: '#BDBDBD',
          borderWidth: 1,
        },
      },
      input: {
        padding: 16,
      },
    },
    MuiPaper: {
      elevation1: {
        boxShadow: 'none',
        border: `1px solid ${palette.grey3}`,
      },
    },
    MuiSnackbar: {
      anchorOriginTopRight: {
        '@media (min-width: 960px)': {
          top: 58,
        },
      },
      anchorOriginTopCenter: {
        '@media (min-width: 960px)': {
          top: 58,
        },
      },
    },
    MuiSnackbarContent: {
      root: {
        color: palette.black2,
      },
    },
    MuiSwitch: {
      switchBase: {
        '&:hover': {
          color: '#FAFAFA',
        },
      },
      colorPrimary: {
        '&$checked': {
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
      colorSecondary: {
        '&$checked': {
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiTableCell: {
      head: {
        color: palette.black1,
        fontSize: pxToRem(13),
        borderBottom: 0,
        lineHeight: 'initial',

        '&:first-child': {
          borderTopLeftRadius: 4,
          borderBottomLeftRadius: 4,
        },

        '&:last-child': {
          borderTopRightRadius: 4,
          borderBottomRightRadius: 4,
        },

        '&:not(:first-child)': {
          color: palette.grey1,
        },
      },
      body: {
        borderBottom: 0,
        color: palette.black1,
        '&:not(:first-child)': {
          color: palette.grey1,
        },
      },
    },
    MuiTableRow: {
      root: {
        height: 48,
        '&:nth-child(even)': {
          background: palette.grey4,
        },
      },
      head: {
        height: 40,
        backgroundColor: palette.white,
        borderBottom: `1px solid ${palette.grey3}`,
      },
    },
    MuiTabs: {
      indicator: {
        height: 5,
      },
    },
    MuiTab: {
      root: {
        fontWeight: 600,
        textTransform: 'none',
        '@media (min-width: 960px)': {
          fontSize: pxToRem(16),
        },
        '&$selected': {
          color: palette.black1,
        },
      },
      textColorInherit: {
        color: palette.grey1,
        opacity: 1,

        '&:hover': {
          color: 'inherit',
        },
      },
    },
    MuiToolbar: {
      gutters: {
        paddingLeft: 16,
        paddingRight: 8,
      },
    },
    MuiTooltip: {
      popper: {
        opacity: 1,
      },
      tooltip: {
        padding: 8,
        lineHeight: pxToRem(15),
        fontSize: pxToRem(11),
        backgroundColor: palette.grey1,
        fontWeight: 600,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgba(0,0,0,0.5)',
      },
    },
    MuiTypography: {
      paragraph: {
        marginBottom: 12,
      },
    },
  },
  palette: {
    background: {
      default: palette.grey4,
    },
    primary: {
      main: palette.blue,
      dark: palette.blueDark,
      light: palette.blueLight,
    },
    secondary: {
      main: palette.green,
      dark: palette.greenDark,
      light: palette.greenLight,
    },
    error: {
      main: palette.red,
      dark: palette.crimson,
      light: palette.redLight,
    },
  },
  props: {
    MuiPaper: {
      elevation: 1,
    },
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiInput: {
      disableUnderline: true,
    },
    MuiLink: {
      color: 'textPrimary',
    },
    MuiMenu: {
      disableAutoFocusItem: true,
    },
  },
  typography: {
    fontFamily: 'Proxima Nova, sans-serif',
    fontSize: baseSize,
    fontWeightRegular: 400,
    fontWeightBold: 600,
    h1: {
      fontWeight: 500,
      fontSize: pxToRem(52),
      lineHeight: 1.31,
      letterSpacing: '-0.43px',
    },
    h2: {
      fontWeight: 500,
      fontSize: pxToRem(32),
      lineHeight: 1.2,
      letterSpacing: '-0.33px',
    },
    h3: {
      fontWeight: 400,
      fontSize: pxToRem(32),
      lineHeight: 1.235,
      letterSpacing: '-0.33px',
    },
    h4: {
      fontWeight: 500,
      fontSize: pxToRem(24),
      lineHeight: 1.33,
      letterSpacing: '-0.20px',
    },
    h5: {
      fontWeight: 400,
      fontSize: pxToRem(24),
      lineHeight: 1.33,
      letterSpacing: '-0.20px',
    },
    h6: {
      fontWeight: 500,
      fontSize: pxToRem(20),
      lineHeight: 1.3,
      letterSpacing: '-0.17px',
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: pxToRem(16),
      lineHeight: 1.79,
      letterSpacing: '-0.12px',
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: pxToRem(16),
      lineHeight: 1.442,
      letterSpacing: '-0.13px',
    },
    body1: {
      fontWeight: 400,
      fontSize: pxToRem(14),
      lineHeight: 1.4,
      letterSpacing: '-0.12px',
    },
    body2: {
      fontWeight: 500,
      fontSize: pxToRem(14),
      lineHeight: 1.4,
      letterSpacing: '-0.12px',
    },
    caption: {
      fontWeight: 600,
      fontSize: pxToRem(12),
      lineHeight: 1.5,
      letterSpacing: '-0.10px',
    },
    overline: {
      textTransform: 'none',
      fontWeight: 500,
      fontSize: pxToRem(12),
      lineHeight: 1.5,
      letterSpacing: '-0.10px',
    },
  },
});

export default theme;
