import React from 'react';
import Opensea from './opensea.svg'



class Header extends React.Component {
    




    render(){
        return(
            <div className='container-fluid'>
                <div className='row header'>
                    
                        <ul className='col social'>
                            <li ><a href='https://www.facebook.com'><i className='fab fa-twitter'></i></a></li>
                            <li><a href='https://www.discord.com' ><i className='fab fa-discord'></i></a></li>
                            <li><a href='https://opensea.io/collection/charenedao'> <img src={Opensea} className='img-fluid' alt="page gif"/></a></li>
                        </ul>
                   
                    <div className='col title'>
                        <h1 >TitleDAO</h1>
                    </div>
                    
                     
                        
                                <span className='col wallet'> connect wallet </span>

                           
                            
                        
                    
                        
                        
                        
                            
                            
                        

                    
                        <span className=" dot"></span>
                       
                    
                </div>
                
            </div>
        )
    }
}
export default Header;