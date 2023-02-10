import { FC } from 'react';
import styles from './form.module.scss';

type FormProps = {
  handleClick: (e: any) => void,
  handleChange: (e: any) => void,
  title: string,
  btnText: string,
  closeBtn: () => void
}

const Form: FC<FormProps> = ({
  handleClick, handleChange, title, btnText, closeBtn,
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
          <input type="text" onChange={handleChange} placeholder='name' name="name" autoComplete="off" required />
          <label htmlFor='name'>Name</label>
          <i />
        </div>
        <div className={styles.input_wrapper}>
          <input type="number" onChange={handleChange} name="age" placeholder='age' required />
          <label htmlFor='age'>Age</label>
          <i />
        </div>
        <div className={styles.input_wrapper}>
          <input type="email" onChange={handleChange} name="email" placeholder='email' autoComplete="off" required />
          <label htmlFor='email'>Email</label>
          <i />
        </div>
        <div className={styles.input_wrapper}>
          <input type="text" onChange={handleChange} name="password" placeholder='password' required />
          <label htmlFor='password'>Password</label>
          <i />
        </div>
        <button className={styles.form__btn} type="button" onClick={handleClick}>{btnText}</button>
      </form>
    </div>
  </div>
);

export default Form;
