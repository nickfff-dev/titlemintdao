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
                    <div className='col-sm-4 mt-4 social'>
                        <ul>
                            <li ><a href='https://www.facebook.com' target='_blank'><i className='fab fa-twitter'></i></a></li>
                            <li><a href='https://www.discord.com' target='_blank'><i className='fab fa-discord'></i></a></li>
                            <li><a> <img src={Opensea} className='img-fluid'/></a></li>
                        </ul>
                    </div>
                    <div className='col-sm-4 mt-4 title'>
                        <h1>TitleDAO</h1>
                    </div>
                    <div className='col-sm-4 mt-4 wallet'>
                        <ul>
                            <li className='p-4'>
                                <a> connect wallet </a>

                            </li>
                            <li className='p-4 '> <span className="dot"></span></li>
                        </ul>
                        
                        
                            
                            
                        

                    </div>
                    
                </div>
            </div>
        )
    }
}
export default Header;