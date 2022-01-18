import React from 'react';
import Front from './Front';


class Home extends React.Component{
    constructor(props){
        super(props)

    }




    render(){
        return(
            <div className='container-fluid'>
                <div className='row'>
                    <Front/>
                </div>
                
                <div className="row">

                </div>
            </div>
        )
    }
}


