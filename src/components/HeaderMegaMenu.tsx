import { Group, Button, Box } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "../styles/HeaderMegaMenu.module.css";

export function HeaderMegaMenu() {
  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <MantineLogo size={30} />

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="/" className={classes.link}>
              Home
            </a>
            <a href="/contact" className={classes.link}>
              Contact
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default">Join the waitlist</Button>
          </Group>
        </Group>
      </header>
    </Box>
  );
}
