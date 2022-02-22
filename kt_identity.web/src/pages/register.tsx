import { Button, Input, Link, Text } from "@nextui-org/react";
import { PublicLayout } from "../components/_layout/Public";
import { AppNextPage, AppRoutes } from "../lib/types";
import { Form } from "../styles/shared.styles";

const RegisterPage: AppNextPage = () => {
  return (
    <Form>
      <Input
        bordered
        labelPlaceholder="Primary"
        color="primary"
        label="Email"
        size="lg"
        fullWidth
        helperColor="error"
      />
      <Input
        bordered
        labelPlaceholder="Primary"
        color="primary"
        label="UserName"
        size="lg"
        fullWidth
      />
      <Input
        bordered
        labelPlaceholder="Primary"
        color="primary"
        label="Age"
        size="lg"
        fullWidth
      />
      <Input
        bordered
        labelPlaceholder="Primary"
        color="primary"
        label="Password"
        size="lg"
        type={"password"}
        fullWidth
      />
      <Button>SignIn</Button>
      <Text>
        Already got an account? <Link href={AppRoutes.login}>Login</Link>
      </Text>
    </Form>
  );
};

RegisterPage.Layout = PublicLayout;

export default RegisterPage;
