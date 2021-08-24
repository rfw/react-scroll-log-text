import React, { useState, useEffect } from 'react'
import './index.css';
import ScrollText from 'react-scroll-log-text'
import 'react-scroll-log-text/dist/index.css'

const App = () => {
	const [data, setData ] = useState(['aaaa','bbbbb', 'cccc', 'dddd']); // 默认数据

  // Simulate update data
  useEffect(() =>{
		setInterval(()=> {
			const arr = [Math.random()];
			setData(arr) // update one data
		}, 3000);
	}, [])

	return <div className='demo-box'>
    <ScrollText
      data={data}
      length={7}
      liStyle={{lineHeight: '30px'}}
      childrenFc={(v) => <div>This value is : {v}</div>}
    />
  </div>
}

export default App
