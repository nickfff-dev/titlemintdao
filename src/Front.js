import React from 'react';
import Header from './Header';



class Front extends React.Component {
   
    
    
    
    
    render(){
        return(
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <Header/>
                    </div>

                </div>
                <div className='row'>
                    <div className='col-sm-4'>

                    </div>
                    <div className='col-sm-4'>
                    <img src="https://media.giphy.com/media/ioopmOHLqIDfGxLLKG/giphy.gif" className='img-fluid meja' />
                    </div>
                    <div className='col-sm-4'>
                        
                    </div>
                </div>
            </div>
            
        )
    }}

export default Front