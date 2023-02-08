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
          <input type="text" onChange={handleChange} name="name" autoComplete="off" required />
          <span>Name</span>
          <i />
        </div>
        <div className={styles.input_wrapper}>
          <input type="number" onChange={handleChange} name="age" required />
          <span>Age</span>
          <i />
        </div>
        <div className={styles.input_wrapper}>
          <input type="email" onChange={handleChange} name="email" autoComplete="off" required />
          <span>Email</span>
          <i />
        </div>
        <div className={styles.input_wrapper}>
          <input type="text" onChange={handleChange} name="password" required />
          <span>Password</span>
          <i />
        </div>
        <button className={styles.form__btn} type="button" onClick={handleClick}>{btnText}</button>
      </form>
    </div>
  </div>
);

export default Form;
