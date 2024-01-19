import {Input} from "@/common";
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
      <Input type={'password'} disabled value={password}/>
    </article>
  );
};

export {UserCard};