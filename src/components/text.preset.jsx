import { colors } from "../CommonStyle/colors";
import { typography } from "../CommonStyle/typography";

const BASE = {
    fontFamily: typography.primary,
    fontSize: 16,
    color: colors.black
};
const BASE_BOLD = {
    fontFamily: typography.primaryBold,
    fontSize: 16,
    color: colors.black
};
const BOLD = {
    fontFamily: typography.bold,
    fontSize: 16,
};

export const presets = {
    default: BASE,
    bold: BOLD,
    h1: {
        ...BOLD,
        fontSize: 32,
        color: colors.white
    },
    h2: {
        ...BOLD,
        fontSize: 28,
        color: colors.white
    },
    h3: {
        ...BASE_BOLD,
        fontSize: 24,
    },
    h4: {
        ...BASE_BOLD,
        fontSize: 14,
    },
    small: {
        ...BASE,
        fontSize:12
    }
}