# react-scroll-log-text

> 这是一个react文字滚动插件

[![NPM](https://img.shields.io/npm/v/react-scroll-log-text.svg)](https://www.npmjs.com/package/react-scroll-log-text) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[Document](README.en.md)

<img src="example/demo.gif">
![alt text](https://github.com/rfw/react-scroll-log-text/blob/main/example/demo.gif?raw=true)

## 安装

```bash
npm install --save react-scroll-log-text // or yarn add react-scroll-log-text
```

## 使用

```jsx
import React, { Component } from 'react'

import MyComponent from 'react-scroll-log-text'
import 'react-scroll-log-text/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## 参数

|字段|描述|类型|默认值|
|---|---|---|---|
| `data` | 数据 | Array or Object | [] |
| `animateSpeed` | 动画滚动过渡时间，单位：秒 | Number | 1 |
| `length` | 大于length条数据开始滚动 | Number | 5 |
| `liStyle` | li标签的sytle (像素必须加单位px) | Object |  |
| `childrenFc` | 自定义渲染item组件，如data为多个字段时 | function |  |

举个例子：[example](example)

## License

MIT © [rfw](https://github.com/rfw)
