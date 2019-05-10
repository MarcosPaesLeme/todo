import React from "react";
import If from "./if";

export default props => (
  <If test={!props.hide}>
    <button className={"btn btn-" + props.style} onClick={props.onClick}>
      <i className={"fa fa-" + props.icon} />
    </button>
  </If>
);

//Solução 1
// export default props => (
//     if(props.hide) {
//         return null
//     } else {
//         return (
//             <button className={'btn btn-' + props.style}
//                 onClick={props.onClick}>
//                  <i className={'fa fa-' + props.icon}></i>
//             </button>
//         )
//     }
// )
