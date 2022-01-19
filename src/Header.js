import React from 'react';
import Opensea from './opensea.svg'



class Header extends React.Component {
    constructor(props){
        super(props)
    }




    render(){
        return(
            <div className='container-fluid'>
                <div className='row header'>
                    <div className='col-sm-3 social'>
                        <ul>
                            <li ><a href='https://www.facebook.com' target='_blank'><i className='fab fa-twitter'></i></a></li>
                            <li><a href='https://www.discord.com' target='_blank'><i className='fab fa-discord'></i></a></li>
                            <li><a href='https://opensea.io/collection/charenedao'> <img src={Opensea} className='img-fluid'/></a></li>
                        </ul>
                    </div>
                    <div className='col-sm-5 title'>
                        <h1>TitleDAO</h1>
                    </div>
                    <div className='col-sm-2  wallet'>
                     
                        
                                <a > connect wallet </a>

                           
                            
                        
                    
                        
                        
                        
                            
                            
                        

                    </div>
                    <div className='col-sm-2'>
                        <span className="dot"></span>
                        </div>
                    
                </div>
            </div>
        )
    }
}
export default Header;