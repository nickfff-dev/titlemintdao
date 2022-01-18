import React from "react";
import Front from "./Front";



class Sucess extends React.Component{
    constructor(props){
        super(props)
    }
render(){
    return(
        <div className="container-fluid">
            <div className="row">
                <Front/>
            </div>
            <div className="row mt-5 suc">
                <div className="col-sm-3 mt-5"></div>
                <div className="col-sm-5 mt-5">
                    <div>Success</div>
                    <div>https://etherscan.io/address/0x2737462a68798623f3ef2956a04ed503300c751e</div>
                    <div> click here to mint again</div>
                </div>
                <div className="col-sm-4 mt-5"></div>
            </div>
        </div>
    )
}

}
export default Sucess