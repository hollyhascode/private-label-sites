import theme from "./theme";
import BaseLayout from "@erig/common/components/BaseLayout";
const Layout = ({ children }) => {
  return <BaseLayout theme={theme}>{children}</BaseLayout>;
};

export default Layout;
