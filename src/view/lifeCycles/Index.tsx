import React from "react";
import { Card, Button } from "antd";
interface StateType {
  num: number;
}

class LifeCycles extends React.Component<any, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      num: 1,
    };
  }

  // 组件每次被rerender的时候，包括在组件构建之后(虚拟dom之后，实际dom挂载之前)，
  // 每次获取新的props或state之后；;每次接收新的props之后都会返回⼀个对象作为新的state，
  // 返回null则说明不需要更新state
  static getDerivedStateFromProps(props: any, state: any) {
    return state;
  }

  componentDidMount() {
    console.log("component did mount");
  }
  componentDidCatch(error: Error, info: any) {}

  shouldComponentUpdate(nextProps: any, nextState: any) {
    console.log("component shouldComponentUpdate");
    // 组件Props或者state改变时触发，true：更新，false：不更新
    return true;
  }
  getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
    // 组件更新前触发
    return null;
  }
  componentDidUpdate() {
    console.log("component didUpdate");
  }
  componentWillUnmount() {
    console.log("component WillUnmount");
  }
  addNums = () => {
    const { num } = this.state;
    this.setState({
      num: num + 1,
    });
  };
  render() {
    const { num } = this.state;
    return (
      <div>
        <Card>
          <p>nums: {num}</p>
          <Button type="primary" onClick={this.addNums}>
            LifeCycles
          </Button>
        </Card>
      </div>
    );
  }
}

export default LifeCycles;
