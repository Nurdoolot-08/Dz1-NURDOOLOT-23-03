import styles from './Header.css';

const Header = ({ navigationItems }) => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    {navigationItems.map((item, index) => (
                        <li key={index} className={styles.navItem}>
                            {item}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;