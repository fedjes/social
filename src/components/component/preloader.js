import React from "react";
import preloader from '../../assets/img/240px-Loader.gif';


let Preloader = (props) => {
   return <div style={ {backgroundColor: 'grey'}}>
       <img src={preloader}/>
   </div>
}

export default Preloader;