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
                            <li><a href='https://www.facebook.com' target='_blank'><i className='fab fa-twitter'></i></a></li>
                            <li><a href='https://www.discord.com' target='_blank'><i className='fab fa-discord'></i></a></li>
                            <li><img src={Opensea} className='img-fluid'/></li>
                        </ul>
                    </div>
                    <div className='col-sm-3 mt-4 title'>
                        <h1>TitleDAO</h1>
                    </div>
                    <div className='col-sm-3 mt-4 wallet'>
                        
                        <h3>connect wallet</h3>
                            
                            
                        

                    </div>
                    <div className='col-sm-2 mt-4 spot' > <span className="dot"></span></div>
                </div>
            </div>
        )
    }
}
export default Header;