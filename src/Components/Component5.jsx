import React from 'react'
import comp5it2a from '../Image/comp5it2a.png'
import comp5it2b from '../Image/comp5it2b.png'
import comp5it3 from '../Image/comp5it3.png'
export const Comp5=()=>{
    return(
        <>
        <div id="comp5">
            <div id="comp5it1"><h1 id='centeralignfont'>TAKE CONTROL OF<br/> YOUR HEALTH</h1>
            <p id="centeralignfont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium</p>
            <p id='centeralignfont'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, veniam!</p>
            <button id="comp5buton1" >BROWSE OUR RANGE</button></div>
            <div id="comp5it2">
                <div id='comp5it2b'><img src={comp5it2a}/></div>
                <div id="comp5it2b"><img src={comp5it2b}/></div>
            </div>
            <div id="comp5it3">
            <img src={comp5it3}/>
            </div>
        </div>
     <br/>
        </>
    )
}