import { useEffect, useState } from "react";
import { Todo_List } from "../../../../app/models/Todolist_List";

interface Props {
  list: Todo_List[];
}

export default function TodoMenuEvent({ list }: Props) {
  const [listHeight, setListHeight] = useState(false);

  const listHeightChecker = () => {
    list.length > 8 ? setListHeight(true) : setListHeight(false);
  };

  useEffect(() => {
    listHeightChecker();
  }, [list]);

  return { listHeight };
}
