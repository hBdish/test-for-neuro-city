import {Button, Form, getRouteRegistrations, HStack, Input, Snackbar, VStack} from "@/common";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const onLoginClick = () => {
    // AuthService.login({
    //   email,
    //   password
    // }).catch(error => console.log(error?.response?.data))
  }

  const onRegClick = () => {
    navigate(getRouteRegistrations())
  }

  return (
    <HStack max align={"center"} justify={"center"}>
      <Form title={"Войти"}>
        <VStack max align={"center"} justify={"center"} gap={'16'}>
          <Input placeholder={'email'} value={email} onChange={setEmail}/>
          <Input placeholder={'password'} value={password} onChange={setPassword}/>
          <HStack gap={'16'}>
            <Button onClick={onLoginClick}>Войти</Button>
            <Button variant={"outline"} onClick={onRegClick}>Регистрация</Button>
          </HStack>
        </VStack>
      </Form>
      <Snackbar message={"Hello"}/>
    </HStack>
  );
};

export {LoginPage};