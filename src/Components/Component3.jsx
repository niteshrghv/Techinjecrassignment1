import React from 'react'
import multivitamin from '../Image/1.png'
import deal1 from '../Image/deal1.png'
import deal2 from '../Image/deal2.png'
import deal3 from '../Image/deal3.png'
import deal4 from '../Image/deal4.png'
export const Comp2=()=>{
    return(
        <>
        <div id="comp3cen">
           
        </div>
        <div id="comp3">
            <div id="comp3row1">
            <h1>GOOD4ME DEAL</h1>
            </div>
            <div id="comp3row2">
            <p>Pick your products and get 50% off on the most populaer  Good4Me Buy Now!</p>
            </div>
            <div id="comp3row3">
             <div id="comp3row31"><img src={deal1} height={350} width={350} alt="multivitamin" /><br/>MULTI-VITAMIN:EVERYDAY WELLNESS</div>
             <div id="comp3row32"><img src={deal2} height={350} width={350} alt="multivitamin" /><br/>FULL RANGE VALUE PACK(SAVE 33%)</div>
             <div id="comp3row33"><img src={deal3}height={350} width={350} alt="multivitamin" /><br/>VITAMIN C:IMMUNITY SUPPORT(SAVE 33%)</div>
             <div id="comp3row34"><img src={deal4}height={350} width={350} alt="multivitamin" /><br/>IRON:ENERGY SUPPORT(SAVE 33%)</div>
            </div>
        </div>
       <br/><br/><br/><br/><br/><br/>
        </>
    )
}