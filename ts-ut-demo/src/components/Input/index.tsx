import * as React from "react";

export interface InputProps {
  value: string | number;
  placeholder?: string;
  onChange?: (value: string | number) => void;
  onEnter?: () => void;
}

export interface InputState {}

class Input extends React.Component<InputProps, InputState> {
  changeHandler: React.ChangeEventHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { onChange } = this.props;
    if (typeof onChange === "function") {
      onChange(event.target.value);
    }
  };
  keyUpHandler: React.KeyboardEventHandler = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const { onEnter } = this.props;
    if (event.code === "Enter" && typeof onEnter === "function") {
      onEnter();
    }
  };
  render() {
    const { value, placeholder } = this.props;
    return (
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={this.changeHandler}
        onKeyUp={this.keyUpHandler}
      />
    );
  }
}

export default Input;
