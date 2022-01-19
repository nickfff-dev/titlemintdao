import React from 'react';
import Front from './Front';



class Walltcon extends React.Component {
    constructor(props){
        super(props)

    }



render(){
    return(
        <div className='container-fluid'>
            <div className='row'>
                <Front/>

            </div>
<div className='col mint'>
    <div className='col-sm-3 mt-5'></div>
    <div className='col-sm-5 mt-5'>
        <div className='mt-5'> 
        <h1>Mint</h1></div>
        <div> select quantity(max 20per tx)</div>
        <div> Max supply: 1000 </div>
        <div> price: free</div>
        <div className='mintcont'>contract: https://etherscan.io/address/0x2737462a68798623f3ef2956a04ed503300c751e</div>
    </div>
    <div className='col-sm-3 mt-5'></div>
</div>


        </div>
    )
}
}

export default Walltcon