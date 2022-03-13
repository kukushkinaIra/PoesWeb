import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/auth.service";
import { Input } from "../../components/input";
import { AuthForm } from "./auth.types";
import { AppRoutes } from "../../constants/app-routes.constants";
import { Button } from "../../components/button";

export const Auth = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { login, password } = event.target as AuthForm;
    authService.auth(login.value, password.value).then((data) => {
      if (data.resp === "ok") {
        navigate(AppRoutes.MeasurementsByDate);
      }
    });
  };

  return (
    <main>
      <h1>Authorization</h1>
      <form onSubmit={handleSubmit}>
        <Input name="login" label="Name" required />
        <Input name="password" type="password" label="Password" required />
        <Button type="submit">Login</Button>
      </form>
    </main>
  );
};
