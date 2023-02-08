import Link from 'next/link';
import { FC } from 'react';
import styles from'./header.module.scss';

type HeaderProps = {
  addBtn: () => void
}

const Header: FC<HeaderProps> = ({ addBtn }) => {
  console.log();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.nav}>
          <Link href="/" className={styles.logo}> Logo</Link>
          <button onClick={addBtn} className={styles.header_btn}>
            <span />
            <span />
            <span />
            <span />
            Add Users
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
