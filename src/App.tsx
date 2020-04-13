import React from "react";
import days from "dayjs";
import { ConfigProvider } from "antd";
import { Route, Router, Switch } from "react-router";
import { createBrowserHistory } from "history";
import zhCN from "antd/es/locale/zh_CN";
import Index from "@/view/index";
import Template from "@/view/template";
import LifeCycles from "@/view/lifeCycles/Index";
import ComponentProps from "@/view/ComponentProps/index";
import "./App.css";
import "dayjs/locale/zh-cn";
days.locale("zh-cn");

function App() {
  return (
    <div className="App">
      <ConfigProvider locale={zhCN}>
        <Router history={createBrowserHistory()}>
          <Switch>
            <Route path="/" exact component={Index}></Route>
            <Route path="/template" component={Template}></Route>
            <Route path="/lifeCycles" component={LifeCycles}></Route>
            <Route path="/componentProps" component={ComponentProps}></Route>
          </Switch>
        </Router>
      </ConfigProvider>
    </div>
  );
}

export default App;
