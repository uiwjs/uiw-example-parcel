This project is build on [@parcel-bundler](https://github.com/parcel-bundler/parcel).

## Modify Content


[package.json](./package.json)

```diff
{
  "name": "uiw-example",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
+    "uiw": "^1.7.0"
  },
  "devDependencies": {
+    "less": "^3.0.1",
    ...
  },
}
```

[src/App.js](./src/App.js)

```diff
import React, { Component } from 'react';
+ import { Button } from 'uiw';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
+        <Button type="primary">主要按钮</Button>
+        <Button type="success">成功按钮</Button>
+        <Button type="info">信息按钮</Button>
+        <Button type="warn">警告按钮</Button>
+        <Button type="danger">错误按钮</Button>
      </div>
    );
  }
}

export default App;
```