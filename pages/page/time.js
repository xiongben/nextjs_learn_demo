
import React,{useState} from 'react'
// import moment from "moment";

function TimePart(){
    const [nowTime, setTime] = useState(Date.now)
    const changeTime = async ()=>{
        const moment = await import('moment')
        setTime(moment.default(Date.now()).format())
    }
  return (
      <>
          <div>time: {nowTime}</div>
          <div>
              <button onClick={()=> changeTime()}>chang time</button>
          </div>
      </>
  )
}


export default TimePart
