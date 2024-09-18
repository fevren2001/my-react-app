import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
function App() {
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
    </>
  );
}

export default App
