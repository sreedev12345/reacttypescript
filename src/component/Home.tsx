
import React,{ useState } from 'react';

type props = {
	title : string,
	id? : number
}

const Home = ({title,id}:props)=>{
    const [count,setCount] = useState<number>(0);
	return(
      <>
        <div>The name is {title} and id is {id ? id : 1} and the count is {count}</div>
        <button onClick={()=>setCount(count+1)}>click</button>
      </>
	)
}

export default Home;