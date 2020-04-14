import React, { lazy, Suspense, useState } from "react";
import days from "dayjs";
import { ConfigProvider } from "antd";
import { Route, Router, Switch } from "react-router";
import { createBrowserHistory } from "history";
import zhCN from "antd/es/locale/zh_CN";
import Index from "@/view/index";
import Template from "@/view/template";
import LifeCycles from "@/view/lifeCycles/Index";
import ComponentProps from "@/view/ComponentProps/index";
import NameContext from "@/pageNameContext";

import "./App.css";
import "dayjs/locale/zh-cn";
days.locale("zh-cn");

function App() {
  const [name, setName] = useState("App Page");

  const value = {
    pageName: name,
    changeName: (name: string) => setName(name),
  };

  return (
    <div className="App">
      {/* {name} */}
      <ConfigProvider locale={zhCN}>
        <NameContext.Provider value={value}>
          <Router history={createBrowserHistory()}>
            <Suspense
              fallback={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* <Icon type="sync" spin style={{ fontSize: 28 }} /> */}
                  <p style={{ fontSize: 18, marginTop: 20 }}>loading...</p>
                </div>
              }
            >
              <Switch>
                <Route path="/" exact component={Index}></Route>
                <Route path="/template" component={Template}></Route>
                <Route path="/lifeCycles" component={LifeCycles}></Route>
                <Route
                  path="/componentProps"
                  component={ComponentProps}
                ></Route>
                <Route
                  path="/context"
                  component={lazy(() => import("@/view/customContext/index"))}
                ></Route>
              </Switch>
            </Suspense>
          </Router>
        </NameContext.Provider>
      </ConfigProvider>
    </div>
  );
}

export default App;
