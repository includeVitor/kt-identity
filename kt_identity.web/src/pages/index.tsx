import { Button, Checkbox, Input, Link, Text } from "@nextui-org/react";
import { SyntheticEvent, useState } from "react";
import { PublicLayout } from "../components/_layout/Public";
import { AppNextPage, AppRoutes } from "../lib/types";
import { handleChange } from "../lib/utils";
import { loginRequest } from "../service/auth";
import { LoginRequestModel } from "../service/types";
import { Form } from "../styles/shared.styles";

const HomePage: AppNextPage = () => {
  const [fields, setFields] = useState<LoginRequestModel>({
    login: "",
    password: "",
    rememberme: false,
  });

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await loginRequest(fields);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="login"
        bordered
        labelPlaceholder="Primary"
        color="primary"
        label="Login"
        size="lg"
        value={fields.login}
        onChange={(e) => handleChange(e, setFields)}
        fullWidth
      />
      <Input
        name="password"
        bordered
        labelPlaceholder="Primary"
        color="primary"
        label="Password"
        size="lg"
        value={fields.password}
        type="password"
        onChange={(e) => handleChange(e, setFields)}
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
