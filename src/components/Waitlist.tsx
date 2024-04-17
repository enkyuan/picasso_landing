import {
    Text,
    Title,
    SimpleGrid,
    TextInput,
    Button,
    Group,
  } from "@mantine/core";
  import classes from "../styles/Waitlist.module.css";
  
  export function Waitlist() {
  
    return (
      <div className={classes.wrapper}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
          <div className={classes.centeredContent} >
            <Title className={classes.title}>Join the Waitlist</Title>
            <Text className={classes.description} mt="sm" mb={30}>
                Be one of the first to own a Picasso Card. Sign up to get early access.
            </Text>
          </div>
          <div className={classes.form}>
          <TextInput
              label="First Name"
              placeholder=" Enter your first name"
              mt="md"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Last Name"
              placeholder="Enter your last name"
              mt="md"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Email"
              placeholder="Enter your email address"
              mt="md"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Group justify="flex-end" mt="md">
              <Button className={classes.control}>Join</Button>
            </Group>
          </div>
        </SimpleGrid>
      </div>
    );
  }
  