import * as React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

export interface HeaderProps {
  updateList: (todo: { text: string }) => void;
}

export interface HeaderState {
  value: string;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  state = { value: "" };
  changeHandler = (value: string | number): void => {
    this.setState({ value: String(value) });
  };
  addTodo = () => {
    const text = this.state.value.trim();
    if (text !== "") {
      this.props.updateList({ text });
      this.setState({ value: "" });
    }
  };
  render() {
    const { value } = this.state;
    return (
      <header>
        <Input
          onChange={this.changeHandler}
          onEnter={this.addTodo}
          value={value}
          placeholder="todo item"
        />
        <Button onClick={this.addTodo}>add</Button>
      </header>
    );
  }
}

export default Header;
