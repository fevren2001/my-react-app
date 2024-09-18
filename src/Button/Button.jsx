import styles from './Button.module.css';
function Button(){
    const constStyles = {
        color: 'white',
        backgroundColor: 'black',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1rem',
        fontWeight: 'bold',
        margin: '10px 0',
    }
    return(
        <button style={constStyles}>Click me</button>
    );
    // return(
    //     <button className={styles.button}>Click me</button>
    // );
}
export default Button;