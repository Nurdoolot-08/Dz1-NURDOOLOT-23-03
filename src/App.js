import Modal from './components/Modal/Modal';
import { useState } from 'react';
import classes from './App.module.css'
import Container from './components/Container/Container';
import Button from './components/Button/Button';
import List from './components/List/List'
import Input from "./components/Input/Input";
function App() {


    const [ isShow, setIsShow ]  = useState(false)

    const handleShow = () => {
        setIsShow(!isShow)
        console.log(isShow, 'isSHow');
    }

    const tasks = [
        { id: 1, task: 'coding'},
        { id: 2, task: 'eat'},
        { id: 3, task: 'sleep'}
    ]

    return (
        <>
            <Container>
                <Input name="" placeholder="Найти" onChange={(event) => console.log(event.target.value, 'event')} />
                <div className={classes.wrapper}>
                    { isShow && <Modal handleShow={handleShow}  /> }
                    <Button handleClick={handleShow}><p>Добавить</p></Button>
                </div>
                <h2>Список задач</h2>
                <List tasks={tasks} />
            </Container>
        </>
    );
}

export default App;