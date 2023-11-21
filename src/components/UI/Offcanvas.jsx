import React from "react";

function Offcanvas(props) {
  return (
    <div>
      <div className="backdrop"  onClick={props.onClose}/>
      <div className="offcanvas">
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
}

export default Offcanvas;
