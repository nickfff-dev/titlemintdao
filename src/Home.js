import React from 'react';
import Front from './Front';


class Home extends React.Component{
    constructor(props){
        super(props)

    }




    render(){
        return(
            <div className='container-fluid '>
                <div className='row'>
                    <Front/>
                </div>

                <div className="row mt-5 sub">
                    <div className='col-sm-3 mt-5'></div>
                    <div className='col-sm-5 mt-5'>
                        <div className='row mt-5'> < button className='poutline'>connect wallet</button></div>
                        <div className='row mt-5'>
                            <span>contract:https://etherscan.io/address/0x2737462a68798623f3ef2956a04ed503300c751e</span>
                        </div>
                    </div>
                    <div className='col-sm-4 mt-5'></div>

                </div>
            </div>
        )
    }
}

export default Home
