import { useLayoutEffect, useRef } from "react";
import { PushIn } from 'pushin';
import multivitamin from '../Image/1.png'
import logo from '../Image/logo.png'

export default function MyComponent() {
  const pushInContainer = useRef();

  useLayoutEffect(() => {
    const options = {
    };

    const pushIn = new PushIn(pushInContainer.current, options);
    pushIn.start();
    return () => pushIn.destroy();
  });

  return (
    <div ref={pushInContainer} className="pushin">
      <div className="pushin-layer">
      <img src={logo} height={200} width={200}/>
        <div id="comp2">
        
      <img src={multivitamin} height={250} width={250} alt="multivitamin"/>
      <img src={multivitamin} height={250} width={250} alt="multivitamin"/>
      <img src={multivitamin} height={250} width={250} alt="multivitamin"/>
      </div>
      
      </div>
    </div>
  )
}