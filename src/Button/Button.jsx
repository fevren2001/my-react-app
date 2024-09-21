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
    const handleClick = () => {console.log('Button clicked')};
    const handleClick2 = (name) => { console.log(`${name} stop clicking me`); };

    let count = 0;
    const handleClick3 = (name) => {
        count++;
        count < 3 ? console.log(`${name} you clicked me ${count} times`) : console.log(`${name} stop clicking me`);
    };

    const ouchClick = (e) => {e.target.textContent = 'That hurts!'};

    return( 
        <button onDoubleClick={(e) => ouchClick(e)} style={constStyles}>Double click me</button>
    );


    // return(
    //     <button className={styles.button}>Click me</button>
    // );
}
export default Button;