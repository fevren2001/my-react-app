import PropTypes from 'prop-types';
function List(props){
    const category = props.category;
    const itemList = props.items;
    
    itemList.sort((a,b) => b.calories - a.calories); // DESCENDING ORDER

    const listFruits = itemList.map(item => <li key={item.id}>{item.name} : <b>{item.calories}</b></li>);

    // fruits.sort();

    // fruits.sort((a,b) => a.name.localeCompare(b.name)); // ALPHABETICAL ORDER
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL ORDER 
    // fruits.sort((a,b) => a.calories - b.calories); // ASCENDING ORDER   

    const lowCalFruits = itemList.filter(fruit => fruit.calories < 50);
    const listLowCalFruits = lowCalFruits.map(fruit => <li key={fruit.id}>{fruit.name} : <b>{fruit.calories}</b></li>);

    const highCalFruits = itemList.filter(fruit => fruit.calories > 70);
    const listHighCalFruits = highCalFruits.map(fruit  => <li key = {fruit.id}>{fruit.name} : <b>{fruit.calories}</b></li>)

    return (
        <>
        <h2 className="list-category">{category}</h2>
        <ul className="list-items">{listFruits}</ul>
        {/* <ol>
            {listFruits}    
        </ol> */}
        {/* <ul>
            {listLowCalFruits}
        </ul>
        <ul >
            {listHighCalFruits}
        </ul> */}
        </>
        
    );
}
List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({  id: PropTypes.number,
                                                name: PropTypes.string, calories: PropTypes.number})),
                                                category: PropTypes.string,}
List.defaultProps = {
    items: [],
    category: "Default Category",
}

export default List;