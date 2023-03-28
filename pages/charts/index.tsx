import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'
import Chart from '../../components/chart'
import Option from '../../lib/chart'

export default function Echart(){

  return (
			<div style={{
				width: 900,
      	height: 600,
      	margin: 100
			}}	
			>
				<Chart option={Option()} />
			</div>
  )
}

