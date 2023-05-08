import React from 'react'
import './sty.css'
import logo from '../Image/logo.png'
import search from '../Image/search.png'
import bag from '../Image/bag.png'
export const  Nav=()=>{
    return(<>
    <div id="nav">
      <div id="ora">
        <div>Afterpay, Laybuy & Geonoapay | Free Delivery New Zealand + Australia<sup>*</sup> </div>
        <div id="item2">Sign in / Register &emsp;
        <select id="navselect">
        <option value="ind">IND</option>
        <option value="Aus">AUS</option>
        <option value="NZ">NWZ</option>
       </select>
       </div>
       </div>
      <div id="con">
        <div id="item1">
           <img src= {logo} height={80}/>
            <ul>
            <li><a href="#">HOME</a>&emsp;&emsp;</li>
            <li><a href="##">SHOP</a>&emsp;&emsp;</li>
            <li><a href="###">FAQs</a>&emsp;&emsp;</li>
            <li><a href="####">STOCKLIST</a>&emsp;&emsp;</li>
            <li><a href="######">WHOLESALE</a>&emsp;&emsp;</li>
            <li><a href="#######">CONTACT</a>&emsp;&emsp;</li>
            </ul>
        </div>
        <div id="item3">
       <img src={search} height={30} width={30}/>&ensp;&ensp;<img src={bag} height={30} width={30}/>
        </div>
      </div>
    </div>
    <hr/>
    </>)
}