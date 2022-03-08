uiw-example-parcel
===

[![CI](https://github.com/uiwjs/uiw-example-parcel/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/uiw-example-parcel/actions/workflows/ci.yml)

This project is build on [@parcel-bundler](https://github.com/parcel-bundler/parcel).

## Modify Content


[package.json](https://github.com/uiwjs/uiw-example-parcel/blob/5c13ae225eabb509ba1d67871a42028a51d343e9/package.json#L13-L28)

```diff
{
  "name": "uiw-example",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
+    "uiw": "^4.6.13"
  }
}
```

[src/App.js](https://github.com/uiwjs/uiw-example-parcel/blob/5c13ae225eabb509ba1d67871a42028a51d343e9/src/App.js#L2)

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
+        <Button type="warning">警告按钮</Button>
+        <Button type="danger">错误按钮</Button>
+        <Button type="light">亮按钮</Button>
+        <Button type="dark">暗按钮</Button>
      </div>
    );
  }
}

export default App;
```

### License

Licensed under the MIT License