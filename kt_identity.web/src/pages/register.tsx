import { Button, Input, Link, Text } from "@nextui-org/react";
import { SyntheticEvent, useState } from "react";
import { PublicLayout } from "../components/_layout/Public";
import { AppNextPage, AppRoutes } from "../lib/types";
import { handleChange } from "../lib/utils";
import { registerRequest } from "../service/auth";
import { RegisterRequestModel } from "../service/types";
import { Form } from "../styles/shared.styles";

const RegisterPage: AppNextPage = () => {
  const [fields, setFields] = useState<RegisterRequestModel>({
    email: "",
    userName: "",
    age: "",
    password: "",
  });

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await registerRequest(fields);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="email"
        bordered
        labelPlaceholder="Primary"
        color="primary"
        label="Email"
        size="lg"
        value={fields.email}
        fullWidth
        onChange={(e) => handleChange(e, setFields)}
      />
      <Input
        name="userName"
        bordered
        labelPlaceholder="Primary"
        color="primary"
        label="UserName"
        size="lg"
        value={fields.userName}
        fullWidth
        onChange={(e) => handleChange(e, setFields)}
      />
      <Input
        name="age"
        bordered
        labelPlaceholder="Primary"
        color="primary"
        label="Age"
        size="lg"
        type={"number"}
        value={fields.age}
        fullWidth
        onChange={(e) => handleChange(e, setFields)}
      />
      <Input
        name="password"
        bordered
        labelPlaceholder="Primary"
        color="primary"
        label="Password"
        size="lg"
        type={"password"}
        value={fields.password}
        fullWidth
        onChange={(e) => handleChange(e, setFields)}
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
