import styles from './Button.css';

const Button = ({ label, onclick }) => {
    return (
        <button className={styles.button} onClick={onclick}>
            {label}
        </button>
    )
}

export default Button;