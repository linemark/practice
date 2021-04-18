import * as React from "react";

import Button from "../../components/Button";

export interface FooterProps {
  count: number;
  clearAll: () => void;
}

class Footer extends React.Component<FooterProps, {}> {
  render() {
    const { count, clearAll } = this.props;
    return (
      <footer>
        <span data-testid="total">total: {count}</span>
        <Button onClick={clearAll}>clear all</Button>
      </footer>
    );
  }
}

export default Footer;
