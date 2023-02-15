import { FC } from 'react';
import styles from './form.module.scss';

type FormProps = {
  handleClick: (e: any) => void,
  handleChange: (e: any) => void,
  title: string,
  btnText: string,
  closeBtn: () => void,
  name?: string,
  age?: number,
  email?: string,
  password?: string,
  emailError?: string,
  nameError?: string,
  ageError?: string,
  passwordError?: string
}

const Form: FC<FormProps> = ({
  handleClick, handleChange, title, btnText, closeBtn, name, email, age, password, emailError, ageError, nameError, passwordError
}) => (
  <div className={styles.form_overlay}>
    <div className={styles.form_wrapper}>
      <form className={styles.form}>
        <button className={styles.form__close} type="button" onClick={closeBtn}>
          <span />
          <span />
        </button>
        <h2 className={styles.form__title}>{title}</h2>
        <div className={styles.input_wrapper}>
          <input type="text" onChange={handleChange} placeholder='name' name="name" value={name ? name : ''} autoComplete="off" required />
          <label style={{color: nameError ? 'red' : '#45f3ff'}} htmlFor='name'>{nameError ? nameError : 'Name'}</label>
          <i />
        </div>
        <div className={styles.input_wrapper}>
          <input type="number" onChange={handleChange} name="age" value={age ? age : ''} placeholder='age' required />
          <label style={{color: ageError ? 'red' : '#45f3ff'}} htmlFor='age'>{ageError ? ageError : 'Age'}</label>
          <i />
        </div>
        <div className={styles.input_wrapper}>
          <input type="email" onChange={handleChange} name="email" value={email ? email : ''} placeholder='email' autoComplete="off" required />
          <label style={{color: emailError ? 'red' : '#45f3ff'}} htmlFor='email'>{emailError ? emailError : 'Email'}</label>
          <i />
        </div>
        <div className={styles.input_wrapper}>
          <input type="text" onChange={handleChange} name="password" value={password ? password : ''} placeholder='password' required />
          <label style={{color: passwordError ? 'red' : '#45f3ff'}} htmlFor='password'>{passwordError ? passwordError : 'Password'}</label>
          <i />
        </div>
        <button className={styles.form__btn} type="button" onClick={handleClick}>{btnText}</button>
      </form>
    </div>
  </div>
);

export default Form;
