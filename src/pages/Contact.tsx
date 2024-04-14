import { MantineProvider } from "@mantine/core";
import { ContactUs } from "../components/ContactUs";

export default function Contact() {
  return (
    <MantineProvider>
      <ContactUs />
    </MantineProvider>
  );
}
