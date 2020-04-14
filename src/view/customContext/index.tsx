import React from "react";
import { Card, Button } from "antd";
import NameContext from "@/pageNameContext";

class CustomContext extends React.Component {
  state = {
    num: 0,
  };
  componentDidMount() {
    this.randomVersion();
  }

  shouldComponentUpdate(nextProps: any) {
    return true;
  }

  randomVersion = () => {
    import("@/utils/util").then((util) =>
      this.setState({ num: util.randomNum() })
    );
  };
  render() {
    return (
      <Card>
        <div>{this.state.num}</div>
        <NameContext.Consumer>
          {({ pageName, changeName }) => (
            <>
              <div>{pageName}</div>

              <Button
                onClick={() => changeName(`Context Page~${Math.random()}`)}
                type="primary"
              >
                context
              </Button>
            </>
          )}
        </NameContext.Consumer>
      </Card>
    );
  }
}

export default CustomContext;
