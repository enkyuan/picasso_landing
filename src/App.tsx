import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { HeaderMegaMenu } from "./components/HeaderMegaMenu";

export default function App() {
  return (
    <MantineProvider>
      <HeaderMegaMenu />
    </MantineProvider>
  );
}
