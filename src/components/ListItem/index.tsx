import { useState } from 'react'
import * as C from './styles'
import { Item } from '../../types/Item'

type Props = {
  item: Item;
  onChange: (id: number, done: boolean) => void;
};

export const ListItem = ({ item, onChange }: Props) => {

    const [checked, setChecked] = useState(item.done)

    return (
      <C.Container done={item.done}>
        <input
          type="checkbox"
          checked={item.done}
          onChange={(e) => onChange(item.id, e.target.checked)}
        />
            <label>{item.task}</label>
      </C.Container>
    );
};

