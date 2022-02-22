import { Button, Checkbox, Input, Link, Text } from "@nextui-org/react";
import { SyntheticEvent } from "react";
import { PublicLayout } from "../components/_layout/Public";
import { AppNextPage, AppRoutes } from "../lib/types";
import { Form } from "../styles/shared.styles";

const HomePage: AppNextPage = () => {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        bordered
        labelPlaceholder="Primary"
        color="primary"
        label="Email"
        size="lg"
        fullWidth
      />
      <Input
        bordered
        labelPlaceholder="Primary"
        color="primary"
        label="Password"
        size="lg"
        fullWidth
      />
      <Checkbox checked={false} size="sm">
        <Text>Remember me</Text>
      </Checkbox>
      <Button auto>SignIn</Button>
      <Text>
        Don't have an account? <Link href={AppRoutes.register}>Register</Link>
      </Text>
    </Form>
  );
};

HomePage.Layout = PublicLayout;

export default HomePage;
