import React from 'react';

function Awards() {
    return (
        <div className='container '>
            <div className='row align-items-center'>
                <div className='col-lg-6 col-md-6 col-12 p-5'>
                    <img src='media/images/largestBroker.svg' className="img-fluid"></img>
                </div>
                <div className='col-lg-6 col-md-6 col-12 p-5 mt-3'>
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million Zebodha cilents contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and </li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' style={{width: "90%"}}></img>
                </div>
            </div>
        </div>
    );
}

export default Awards;