import React from 'react'
import latestnews1 from '../Image/latestnews1.png'
import latestnews2 from '../Image/latestnews2.png'
import latestnews3 from '../Image/latestnews3.png'
export const Latestn=()=>{
    return(
        <>
        <div id="latestnews">
            <h1 id="latestnewsheading">LATEST NEWS</h1>
          <div id="latestnewsimage">
          <div id='comp3row31'><img src={latestnews1}  height={350}/><br/><span id="red">AUG 26 2020</span><br/><br/><span id="bold_bigger">WE DONATES ONE WEEK SUPPLY</span><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, reprehenderit iusto facilis debitis laborum ad deserunt quia voluptatibus eos est.</div>
          <div id='comp3row31'><img src={latestnews2}  height={350}/><br/><span id="red">AUG 26 2020</span><br/><br/><span id="bold_bigger">WE DONATES ONE WEEK SUPPLY</span><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, reprehenderit iusto facilis debitis laborum ad deserunt quia voluptatibus eos est.</div>
          <div id='comp3row31'><img src={latestnews3}  height={350}/><br/><span id="red">AUG 26 2020</span><br/><br/><span id="bold_bigger">WE DONATES ONE WEEK SUPPLY</span><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, reprehenderit iusto facilis debitis laborum ad deserunt quia voluptatibus eos est.</div>
          
          </div>
        </div>
        </>
    )
}