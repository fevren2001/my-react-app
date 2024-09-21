function pp(){
    const ppUrl = "./src/assets/pp.jpg";
    const handleClick = (e) => {
        e.target.style.display = 'none';
    } 

    return (
        <img onClick={(e) => {handleClick(e)}}  src={ppUrl}></img>
    )


}

export default pp;