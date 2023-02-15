import { useEffect, useState } from "react";
import axios from "axios";
import styles from './users.module.scss';
import Users, { User } from "@/models/users";
import Form from "../Form/Form";
import Header from "../Header/Header";
import NewUser from "../NewUser/NewUser";
import Loader from "../Loader/Loader";

const Users = () => {
  const [data, setData] = useState<Users[]>([]);
  const [loader, setLoader] = useState(false)
  const [edit, setEdit] = useState(false);
  const [userId, setUserId] = useState(0);
  const [addUser, setAddUser] = useState(false);
  const [user, setUser] = useState<User>({
    name: '',
    age: 0,
    email: '',
    password: '',
  });

  const baseUrl = process.env.BASE_URL;

  const getUsers = async () => {
    setLoader(true);
    try {
      const users = await axios.get(`${baseUrl}/api/users`);
      setData(users.data);
    } catch (error) {
      console.log(error)
    } finally {
      setLoader(false)
    }
  }

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`${baseUrl}/api/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error)
    }
  }

  const handleEdit = async () => {
    try {
      await axios.put(`${baseUrl}/api/users/${userId}`, user);
      setEdit(false);
      getUsers();
    } catch (err) {
      console.log(err);
    }
  }

  const handleChange = (e: any) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log(data);

  return (
    <>
      {
        loader ? <Loader /> : null
      }
      <Header addBtn={() => setAddUser(true)} />
      <section className={styles.users}>
        <div className="container">
          <div className={styles.cards}>
            {
              data.map(({
                name, age, email, password, id,
              }) => (
                <div className={styles.card} key={id}>
                  <div className={styles.card__lines} />
                  <div className={styles.card__content}>
                    <h3 className={styles.card__text}>
                      <span>Name</span>
                      {name}
                    </h3>
                    <h3 className={styles.card__text}>
                      <span>Email</span>
                      {email}
                    </h3>
                    <h3 className={styles.card__text}>
                      <span>Age</span>
                      {age}
                    </h3>
                    <h3 className={styles.card__text}>
                      <span>Password</span>
                      {password}
                    </h3>
                    <div className={styles.card__btns}>
                      <button 
                        className={styles.card__btn} 
                        onClick={() => { 
                          setUserId(id); setUser({ ...user, name: name, age: age, email: email, password: password });
                          setEdit(true); 
                        }}>
                          Edit
                      </button>
                      <button className={`${styles.card__btn} ${styles.card__btn_delete}`} onClick={() => handleDelete(id)}>Delete</button>
                    </div>
                  </div>
                </div>
              ))
            }
            {
              edit ? (
                <Form
                  btnText="Edit"
                  title="Edit user"
                  handleClick={handleEdit}
                  handleChange={handleChange}
                  closeBtn={() => setEdit(false)}
                  name={user.name}
                  age={user.age}
                  email={user.email}
                  password={user.password}
                />
              ) : null
            }
            {
              addUser ? (
                <NewUser closeBtn={() => setAddUser(false)} addButton={() => { getUsers(); setAddUser(false) }} />
              ) : null
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Users;