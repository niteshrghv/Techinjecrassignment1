import React from 'react'
import {Nav} from './Navbar'
import {Comp1} from './Component1'
import {Comp2} from './Component3'
import Comp6 from './Component2' 
import {Comp4} from './Component4'
import {Comp5} from './Component5'
import { Special } from './Special'
import { Aboutus } from './Aboutus'
import {Latestn} from './Latestnews'
export const Home=()=>{
    return(
    <><Nav/>
     <Comp6/>
    <Special/>
    <Comp1/>
   
    <Comp2/>
    <Comp5/> 
    <Comp4/>
    <Latestn/>
    
    <Aboutus/>   
    </>
    )
}
