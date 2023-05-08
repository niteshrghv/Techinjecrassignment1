import React from 'react'
import money from '../Image/money.png'
import airplane from '../Image/airplane.png'
import security from '../Image/security.png'
export const Comp4=()=>{
    return(
        <>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div id="comp4">
            <div><img src={airplane}/><br/><h3>WORLDWIDE SHOPPING</h3><p id="unbold">Lorem ipsum dolor sit amet <br/> consectetur adipisicing elit. Facere, fugit.</p></div>
            <div><img src={money}/><br/><h3>30 DAYS GUARANTEE</h3><p id="unbold">Lorem ipsum dolor sit amet <br/>consectetur adipisicing elit. Facere, fugit.</p></div>
            <div><img src={security}/><br/><h3>SECURED PAYMENTS</h3><p id="unbold">Lorem ipsum dolor sit amet<br/> consectetur adipisicing elit. Facere, fugit.</p></div>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </>
    )
}