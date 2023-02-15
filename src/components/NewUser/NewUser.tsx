import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import Form from '../Form/Form';

type NewUserProps = {
  addButton: () => void,
  closeBtn: () => void
}

const NewUser: FC<NewUserProps> = ({ addButton, closeBtn }) => {
  const [error, setError] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
  });
  const [user, setUser] = useState({
    name: '',
    age: 0,
    email: '',
    password: '',
  });

  const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  const baseUrl = process.env.BASE_URL;

  const handleChange = (e: any) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async () => {
    try {
      await axios.post(`${baseUrl}/api/users`, user);
    } catch (err) {
      console.log(err);
    } finally {
      addButton();
    }
  };

  // const validate = () => {
  //   if (!user.name) {
  //     return true
  //   } else if (!user.age) {
  //     return true
  //   } else if (!user.password) {
  //     return true
  //   } else if (!emailReg.test(user.email)) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  console.log(error)

  const validate = () => {
    if (!user.name) {
      setError({ ...error, name: 'Name is required' })
    } else if (!user.age) {
      setError({ ...error, age: 'Age is required' })
    } else if (!user.password) {
      setError({ ...error, password: 'Password is required' })
    } else if (!emailReg.test(user.email)) {
      setError({ ...error, email: 'Email is not correct' })
    } else {
      handleClick();
    }
  }

  return (
    <Form
      title="Add new user"
      btnText="Add user"
      handleClick={() => validate()}
      handleChange={handleChange}
      closeBtn={closeBtn}
      name={user.name}
      age={user.age}
      email={user.email}
      password={user.password}
      nameError={error.name}
      ageError={error.age}
      emailError={error.email}
      passwordError={error.password}
    />
  );
};

export default NewUser;
