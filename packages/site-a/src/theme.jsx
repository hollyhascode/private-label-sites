import { getBaseTheme } from "@erig/common/base-theme";

export default getBaseTheme({
  typography: {
    useNextVariants: true,
    fontFamily: "'Poppins', sans-serif",
  },
  palette: {
    primary: {
      main: "#0c172b",
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
