import React from "react";
import { Link } from "react-router-dom";

class Index extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/context">context</Link>
        </div>
        <div>
          <Link to="/template">template</Link>
        </div>

        <Link to="/lifeCycles">lifeCycles</Link>
      </div>
    );
  }
}

export default Index;
