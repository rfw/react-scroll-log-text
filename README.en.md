# react-scroll-log-text


[![NPM](https://img.shields.io/npm/v/react-scroll-log-text.svg)](https://www.npmjs.com/package/react-scroll-log-text) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<img src="example/demo.gif">


[文档](README.md)

## Install

```bash
yarn add react-scroll-log-text // or npm install --save react-scroll-log-text
```

## Usage

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

## Props

|name | desc | type | default |
|---|---|---|---|
| `data` | data | Array or Object | [] |
| `animateSpeed` | Animation scroll transition time, unit: second | Number | 1 |
| `length` | Data larger than 'length' starts to scroll | Number | 5 |
| `liStyle` | The sytle of the li label (the pixel must be added with the unit px) | Object |  |
| `childrenFc` | Custom rendering item components, such as when data is multiple fields | function |  |

[example](example)

## License

MIT © [rfw](https://github.com/rfw)
