import { hexToRGBA } from "@/utils/hex-to-rgba";
import { Tooltip, styled, tooltipClasses } from "@mui/material";

const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    zIndex: 999999,
    [`& .${tooltipClasses.arrow}`]: {
        "&::before": {
            backgroundColor: theme.palette.text.primary,
            borderBottomRightRadius: "3px",
        },
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: hexToRGBA(theme.palette.secondary.dark, 1),
        color: theme.palette.background.default,
        fontSize: theme.typography.pxToRem(12),
        padding: "0.5rem 0.75rem",
        fontFamily: "inherit",
        borderRadius: "10px",
    },
}));

export default CustomTooltip;
