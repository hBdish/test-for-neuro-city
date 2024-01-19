import {Button, Form, getRouteLogin, HStack, Input, Snackbar, validate, VStack} from "@/common";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthService} from "@/common/services/auth-service.ts";

const RegistrationPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showSnackbar, setShowSnackbar] = useState(false)
  const [snackBarErrorMessage, setSnackBarErrorMessage] = useState('')
  const navigate = useNavigate()

  const onLoginClick = () => {
    navigate(getRouteLogin())
  }

  const onRegClick = () => {
    const validateRes = validate(email, password)
    
    if (typeof validateRes !== "boolean") {
      setSnackBarErrorMessage(validateRes)
      setShowSnackbar(true)
      return
    }

    AuthService.registration({
      email,
      password
    })
      .then(() => {
        setSnackBarErrorMessage('Вы успешно зарегистрировались')
        setShowSnackbar(true)
        setEmail('')
        setPassword('')
      })
      .catch(error => {
        setSnackBarErrorMessage(error?.response?.data?.message)
        setShowSnackbar(true)
      })
  }

  const closeModal = () => {
    setShowSnackbar(false)
  }

  return (
    <HStack max align={"center"} justify={"center"}>
      <Form title={'Регистрация'}>
        <VStack max align={"center"} justify={"center"} gap={'16'}>
          <Input type={'email'} placeholder={'email'} value={email} onChange={setEmail}/>
          <Input type={'password'} placeholder={'password'} value={password} onChange={setPassword}/>
          <HStack gap={'16'}>
            <Button onClick={onRegClick}>Зарегистрироваться</Button>
            <Button variant={"outline"} onClick={onLoginClick}>Войти</Button>
          </HStack>
        </VStack>
      </Form>
      <Snackbar isOpen={showSnackbar} onClose={closeModal} message={snackBarErrorMessage}/>
    </HStack>
  );
};

export {RegistrationPage};