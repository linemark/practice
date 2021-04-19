import * as React from "react";
import Button from "../../components/Button";
import { Todo } from "./types";
export interface BodyProps {
  list: Array<Todo>;
  updateList: (todo: Todo) => void;
}

export interface BodyState {}

class Body extends React.Component<BodyProps, BodyState> {
  render() {
    const { list, updateList } = this.props;
    return (
      <main>
        <ul data-testid="list-ul">
          {list.map((item) => {
            return (
              <li key={`todo-list-${item.id}`}>
                {item.text}
                <Button onClick={() => updateList(item)}>delete</Button>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}

export default Body;
