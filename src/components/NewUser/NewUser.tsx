import axios from 'axios';
import { FC, useState } from 'react';
import Form from '../Form/Form';

type NewUserProps = {
  addButton: () => void,
  closeBtn: () => void
}

const NewUser: FC<NewUserProps> = ({ addButton, closeBtn }) => {
  const [user, setUser] = useState({
    name: '',
    age: null,
    email: '',
    password: '',
  });

  const baseUrl = process.env.BASE_URL;

  const handleChange = (e: any) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async () => {
    try {
      await axios.post(`${baseUrl}/api/users`, user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form
      title="Add new user"
      btnText="Add user"
      handleClick={() => { handleClick(); addButton(); }}
      handleChange={handleChange}
      closeBtn={closeBtn}
    />
  );
};

export default NewUser;
