import * as React from "react";

import { Todo } from "./types";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export interface TodoListState {
  incrementId: number;
  list: Array<Todo>;
}

class TodoList extends React.Component<{}, TodoListState> {
  state = {
    incrementId: 1,
    list: [],
  };

  updateList = (todo: { text: string; id?: number }) => {
    const { list, incrementId } = this.state;
    if (todo.id) {
      this.setState({ list: list.filter((i: Todo) => i.id !== todo.id) });
    } else {
      this.setState({
        list: [...list, { text: todo.text, id: incrementId }],
        incrementId: incrementId + 1,
      });
    }
  };

  clearAll = () => {
    this.setState({ list: [] });
  };

  render() {
    const { list } = this.state;
    return (
      <>
        <Header updateList={this.updateList} />
        <Body list={list} updateList={this.updateList} />
        <Footer count={list.length} clearAll={this.clearAll} />
      </>
    );
  }
}

export default TodoList;
