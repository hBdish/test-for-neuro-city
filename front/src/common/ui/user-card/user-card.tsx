import {HStack, Input} from "@/common";
import styles from './user-card.module.scss'

interface UserCard {
  email: string
  password: string
}

const UserCard = (props: UserCard) => {
  const {email, password} = props
  return (
    <article className={styles.userCard}>
      <h2> Email: {email}</h2>
      <HStack>
        <span>Пароль</span>
        <Input type={'password'} disabled value={password}/>
      </HStack>
    </article>
  );
};

export {UserCard};