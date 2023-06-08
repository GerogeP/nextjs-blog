import { useState, useEffect, useRef } from 'react'
import { getAllPostIds, getPostData } from '../lib/posts'
import utilStyles from '../../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'
import * as eCharts from 'echarts'
//import { Option } from '../lib/chart'

export default function Echart(props: any){

	const	[eChartsRef, setEChartsRef] = useState( useRef())

	useEffect(() => {	
		const myChart = eCharts.init(eChartsRef.current)
    myChart.setOption(props.option)
},[eChartsRef])

  return (
		<div ref={eChartsRef} style={{
      width: 900,
      height: 600,
      margin: 100
    }}>
					</div>
  )
}

