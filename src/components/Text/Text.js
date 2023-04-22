import styles from './Text.css';

const Text = ({ content }) => {
    return <p className={styles.text}>{content}</p>
}

export default Text;