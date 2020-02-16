import { getBaseTheme } from "@erig/common/base-theme";

export default getBaseTheme({
  typography: {
    useNextVariants: true,
    fontFamily: "'Poppins', sans-serif",
  },
  palette: {
    primary: {
      main: "#3E59D9",
    },
  },
  shape: {
    borderRadius: 0,
  },
  props: {
    MuiTypography: {
      variant: "body1",
    },
  },
});
