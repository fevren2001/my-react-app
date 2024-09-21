import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
function App() {
  const emptyList = [];
  const fruits = [
    {id: 1, name: 'apple', calories: "35 cal"}, // string instead of number so, it throws a warning because we set up default prop types
    {id: 2, name: 'banana', calories: 105},
    {id: 3, name: 'cherry', calories: 5},
    {id: 4, name: 'date', calories: 20},
    {id: 5, name: 'fig', calories: 30},
    {id: 6, name: 'grape', calories: 3},
  ];
  const vegetables = [
    {id: 7, name: 'carrot', calories: 25},
    {id: 8, name: 'broccoli', calories: 55},
    {id: 9, name: 'spinach', calories: 23},
    {id: 10, name: 'potato', calories: 77},
    {id: 11, name: 'tomato', calories: 18},
    {id: 12, name: 'cucumber', calories: 16},
  ];
  return(
    <>
    <Header></Header>
    <Food></Food>
    <Footer></Footer>
    <Card></Card>
    <Button></Button>
    <Student name="John" age={30} isStudent = {true}> </Student>
    <Student name="Jane" age={25} isStudent = {false}> </Student>
    <Student name="Doe" age={35} isStudent = {true}> </Student>
    <Student name="Smith" age={40} isStudent = {false}> </Student>
    <Student name ="Fatih"> </Student>
    <UserGreeting isLoggedIn = {true} username = "devFati"> </UserGreeting>
    <UserGreeting isLoggedIn = {false} username = "devMedi"> </UserGreeting>
    <UserGreeting isLoggedIn = {true}></UserGreeting>
    
    <List items = {fruits} category = "Fruits"></List>
    {vegetables.length >0 && <List items = {vegetables} category = "Veggies"></List>}
    {emptyList.length > 0 ? <List items = {emptyList} category = "Empty List"></List> : null}
    </>
  );
}

export default App
