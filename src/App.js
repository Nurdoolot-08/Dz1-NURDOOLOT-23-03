import './App.css';
import Header  from './components/Header'
import Button from './components/Button';

function App() {
  
  const a  = 12;
  const b = 11;
  const c = a+b



  const user  = {
    name: 'Syimyk',
    position: 'Front-end'
  }


  // const { name, position } = user;

  
  const listHeader = ['Main', 'About', 'Profile',]

  const logText = (text) => console.log(text);

  return (
    <div>
      <Header
      list={listHeader}
      />
      <Button 
        handleClick={logText}
        color={"red"}
        text={'Click'} 
        user={user}
        />
      <Button 
        color={"green"} 
        text={'Submit'} 
      />
     {a}
    <button onClick={() => logText('Hello World!')}>Click</button>
    </div>
  );
}

export default App;