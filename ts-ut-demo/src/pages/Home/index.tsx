import * as React from "react";
import { Link } from "react-router-dom";
import { List, Card } from "antd";

export interface HomeState {
  data: Array<{ title: string; path: string; text: string }>;
}
class Home extends React.Component<{}, HomeState> {
  state = {
    data: [
      {
        title: "Title 1",
        path: "/todoList",
        text: "TodoList",
      },
      {
        title: "Title 2",
        path: "/calendar",
        text: "Calendar",
      },
    ],
  };
  render() {
    return (
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={this.state.data}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title}>
              <Link to={item.path}>{item.text}</Link>
            </Card>
          </List.Item>
        )}
      />
    );
  }
}

export default Home;
