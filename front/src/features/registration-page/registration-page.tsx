import {Button, Form, getRouteLogin, HStack, Input, VStack} from "@/common";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthService} from "@/common/services/auth-service.ts";

const RegistrationPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const onLoginClick = () => {
    navigate(getRouteLogin())
  }

  const onRegClick = () => {
    AuthService.registration({
      email,
      password
    })
      .then(console.log)
      .catch(error => console.log(error?.response?.data))
  }

  return (
    <HStack max align={"center"} justify={"center"}>
      <Form title={'Регистрация'}>
        <VStack max align={"center"} justify={"center"} gap={'16'}>
          <Input placeholder={'email'} value={email} onChange={setEmail}/>
          <Input placeholder={'password'} value={password} onChange={setPassword}/>
          <HStack gap={'16'}>
            <Button onClick={onRegClick}>Зарегистрироваться</Button>
            <Button variant={"outline"} onClick={onLoginClick}>Войти</Button>
          </HStack>
        </VStack>
      </Form>
    </HStack>
  );
};

export {RegistrationPage};