import {
  AuthService,
  Button,
  Form,
  getRouteRegistrations,
  getRouteUsers,
  HStack,
  Input,
  Snackbar,
  TOKEN,
  useUserContext,
  validate,
  VStack
} from "@/common";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showSnackbar, setShowSnackbar] = useState(false)
  const [snackBarErrorMessage, setSnackBarErrorMessage] = useState('')
  const navigate = useNavigate()
  const {changeAuth, changeAuthSuccessFirst} = useUserContext();


  const onLoginClick = () => {
    const validateRes = validate(email, password)
    if (typeof validateRes !== "boolean") {
      setSnackBarErrorMessage(validateRes)
      setShowSnackbar(true)
      return
    }

    AuthService.login({
      email,
      password
    })
      .then(user => {
        localStorage.setItem(TOKEN, user.accessToken)
        changeAuth(true)
        changeAuthSuccessFirst(true)
        navigate(getRouteUsers())
      })
      .catch(error => {
        setSnackBarErrorMessage(error?.response?.data?.message)
        setShowSnackbar(true)
      })
  }

  const onRegClick = () => {
    navigate(getRouteRegistrations())
  }

  const closeModal = () => {
    setShowSnackbar(false)
  }

  return (
    <HStack max align={"center"} justify={"center"}>
      <Form title={"Войти"}>
        <VStack max align={"center"} justify={"center"} gap={'16'}>
          <Input type={'email'} placeholder={'email'} value={email} onChange={setEmail}/>
          <Input type={'password'} placeholder={'password'} value={password} onChange={setPassword}/>
          <HStack gap={'16'}>
            <Button onClick={onLoginClick}>Войти</Button>
            <Button variant={"outline"} onClick={onRegClick}>Регистрация</Button>
          </HStack>
        </VStack>
      </Form>
      <Snackbar isOpen={showSnackbar} onClose={closeModal} message={snackBarErrorMessage}/>
    </HStack>
  );
};

export {LoginPage};