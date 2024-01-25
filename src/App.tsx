import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item'
import { ListItem } from './components/ListItem'
import { AddArea } from './components/AddArea'

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, task: "Tarefa 1", done: false },
    { id: 2, task: "Tarefa 2", done: true },
    { id: 3, task: "Tarefa 3", done: false },
  ]);

  const handleAddTask = (task: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      task: task,
      done: false,
    });
    setList(newList);
  };

  // Função feita para tarefinha de casa.
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
    console.log(newList);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        <AddArea onEnter={handleAddTask} />
        {list.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            onChange={handleTaskChange} />
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;