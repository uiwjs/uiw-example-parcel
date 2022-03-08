import React from 'react';
import { Button } from 'uiw';
import Markdown from '@uiw/react-markdown-preview';
import Logo from './logo.svg';
import './App.css';
import mdStr from '../README.md';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" height="60" width="60" viewBox="0 0 20 20" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <Button type="primary">主要按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="danger">错误按钮</Button>
      <Button type="light">亮按钮</Button>
      <Button type="dark">暗按钮</Button>
      <Markdown source={mdStr} style={{ textAlign: 'left', maxWidth: 420, margin: '0 auto', padding: 10 }}/>
    </div>
  );
};
