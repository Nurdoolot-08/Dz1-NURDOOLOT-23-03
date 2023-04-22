import styles from './CenterComponent.css';

const CenterComponent = ({ content }) => {
    return <div className={styles.center}>{content}</div>;
};

export default CenterComponent;