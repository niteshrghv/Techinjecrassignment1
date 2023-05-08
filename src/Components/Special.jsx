import React from 'react'
import ourproduct1 from '../Image/ourproduct1.png'
import ourproduct2 from '../Image/ourproduct2.png'
import ourproduct3 from '../Image/ourproduct3.png'
import ourproduct4 from '../Image/ourproduct4.png'
export const Special=()=>{
      return(
        <>
        <div id="specialcollection">
         <div id="specialcollection1">
            <h1 id="specialcollectionheading">Special Collections</h1>
         </div>
         <div id="specialcollection2">
         <div id="comp3row3">
             <div id="comp3row31"><img src={ourproduct1} height={350} width={350} alt="multivitamin" /><br/><br/>MULTI-VITAMIN:EVERYDAY WELLNESS<br/><p><span id="red">$39.95 NZD</span>&emsp;<s>$199.95 NZD</s></p></div>
             <div id="comp3row32"><img src={ourproduct2} height={350} width={350} alt="multivitamin" /><br/><br/>FULL RANGE VALUE PACK(SAVE 33%)<p><span id="red">$39.95 NZD</span>&emsp;<s>$199.95 NZD</s></p></div>
             <div id="comp3row33"><img src={ourproduct3}height={350} width={350} alt="multivitamin" /><br/><br/>VITAMIN C:IMMUNITY SUPPORT(SAVE 33%)<p><span id="red">$39.95 NZD</span>&emsp;<s>$199.95 NZD</s></p></div>
             <div id="comp3row34"><img src={ourproduct4}height={350} width={350} alt="multivitamin" /><br/><br/>IRON:ENERGY SUPPORT(SAVE 33%)<p><span id="red">$39.95 NZD</span>&emsp;<s>$199.95 NZD</s></p></div>
            </div>
         </div>
        </div>
        <div id="viewallproducts"><button id="comp5buton1">VIEW ALL PRODUCTS</button></div>
        <br/><br/>
        </>
      )
}