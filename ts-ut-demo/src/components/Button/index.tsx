import * as React from "react";

export interface ButtonProps {
  onClick: () => void;
}

class Button extends React.Component<ButtonProps, {}> {
  clickHandler: React.EventHandler<React.SyntheticEvent> = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    this.props.onClick();
  };
  render() {
    const { children } = this.props;
    return <button onClick={this.clickHandler}>{children}</button>;
  }
}

export default Button;
