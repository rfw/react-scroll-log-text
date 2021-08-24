import React from 'react'
import styles from './styles.module.css'
import PropTypes from 'prop-types'

export default class ScrollText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data,
      marginTop: '0',
      animate: false
    }
  }

  scrollUp = () => {
    const { animateSpeed } = this.props
    const time = animateSpeed ? animateSpeed * 1000 + 1 : 1000
    const li = this.textRef.getElementsByTagName('li')
    if (li.length === 0) return
    const height = li[0].scrollHeight
    this.setState({
      animate: true,
      marginTop: '-' + height + 'px'
    })
    setTimeout(() => {
      this.state.data.shift()
      this.setState({
        animate: false,
        marginTop: '0'
      })
    }, time)
  }

  startScrollUp = () => {
    if (Array.isArray(this.state.data) && this.state.data.length === 0) return
    this.scrollUp()
  }

  componentDidUpdate(prevProps) {
    const { length, data } = this.props
    const dataList = this.state.data
    const newData = data
    if (
      newData.length !== 0 &&
      JSON.stringify(dataList.slice(-1)) !== JSON.stringify(newData)
    ) {
      this.setState(
        {
          data: [...dataList, ...newData]
        },
        () => {
          if (dataList.length >= length) {
            this.startScrollUp()
          }
        }
      )
    }
  }

  render() {
    const { data, marginTop, animate } = this.state
    const { animateSpeed, liStyle, childrenFc } = this.props

    return (
      <ul
        ref={(e) => {
          this.textRef = e
        }}
        id={styles.scrollList}
        style={
          animate
            ? { transition: ` margin ${animateSpeed || 1}s`, marginTop }
            : { marginTop }
        }
      >
        {data.map((v, i) => (
          <li key={i} style={liStyle}>
            {childrenFc ? childrenFc(v) : v}
          </li>
        ))}
      </ul>
    )
  }
}

ScrollText.propTypes = {
  animateSpeed: PropTypes.number, // 速度，单位：秒
  length: PropTypes.number, // 大于多少条开始滚动
  liStyle: PropTypes.object, // 像素带单位 eg: 40px
  data: PropTypes.array.isRequired, // 数据
  childrenFc: PropTypes.func // 自定义渲染item
}
