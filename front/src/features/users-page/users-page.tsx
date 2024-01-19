import {useEffect, useState} from "react";

import {Snackbar, UserCard, UserInfoResponse, useUserContext, VStack} from "@/common";
import {UserService} from "@/common/services/user-service.ts";

const UsersPage = () => {
  const [users, setUsers] = useState<UserInfoResponse[]>([])
  const {changeAuth, authSuccessFirst, changeAuthSuccessFirst} = useUserContext()


  useEffect(() => {
    UserService.getAllUsers()
      .then(setUsers)
      .catch(() => {
        changeAuth(false)
      })

  }, []);

  const closeModal = () => {
    changeAuthSuccessFirst(false)
  }

  return (
    <VStack max align={"center"} gap={'8'}>
      {users?.map(user =>
        <UserCard key={user.id} password={user.password} email={user.email}/>
      )}
      <Snackbar isOpen={authSuccessFirst} onClose={closeModal} message={'Вход успешно осуществлён'}/>
    </VStack>
  );
};

export {UsersPage};