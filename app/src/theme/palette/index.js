const text = {
    primary: "#202124",
    secondary: "#0f0f0f",
    light : "#f0f0f0"
};

const border = {
    main: "#9C9C9C",
    light: "#ACACAC",
    dark: "#757575"
}

const palette = {
    action: {
        active: border.main,
        disabled: border.dark,
        disabledBackground: border.light,
        focus: border.light,
        hover: border.light,
        selected: border.light,
    },
    common: {
        black: "#0F0F0F",
        white: text.primary,
    },
    divider: border.main,
    primary: {
        main: "#3385FF",
        light: "#4796FF",
        dark: "#1360C0",
        contrastText: text.light,
    },
    secondary: {
        main: "#8997AC",
        light: "#9AA8BC",
        dark: "#647185",
        contrastText: text.light,
    },
    success: {
        main: "#34a853",
        light: "#54B86F",
        dark: "#25803D",
        contrastText: text.primary,
    },
    warning: {
        main: "#FFAA00",
        light: "#FFBE2A",
        dark: "#C08800",
        contrastText: text.primary,
    },
    info: {
        main: "#4285f4",
        light: "#5F99F8",
        dark: "#2E63BA",
        contrastText: text.primary,
    },
    error: {
        main: "#ea4336",
        light: "#F06055",
        dark: "#c5221f",
        contrastText: text.primary,
    },
    background: {
        default: "#f6f8fc",
        paper: "#fff",
    },
    border: {
        main: border.main,
        light: border.light,
        dark: border.dark,
    },
    text: {
        primary: text.primary,
        secondary: text.secondary,
        light : text.light,
        disabled: border.dark,
    },
};

export default palette;