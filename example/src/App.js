import React, { useState, useEffect } from 'react'

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

	return <ScrollText
    data={data}
    length={4}
    liStyle={{lineHeight: '40px'}}
    childrenFc={(v) => <div>={v}=</div>}
  />
}

export default App
