import React from 'react'

const Cryptocurrency = () => {
  return (
    <div className="Cryptocurrency-section position-relative">
        <div className="container text-white">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4 text-center">
                  <p className='p1'>OUR VISION</p>
                  <h1 className='cryptoheading text-start'>Cryptocurrency in Every Wallet</h1>
                  <div className="row">
                    <div className="col-md-6">
                      <p>Founded in</p>
                      <h1 className='year'>2022</h1>
                    </div>
                    <div className="col-md-6 border-start">
                      <p>Users</p>
                      <h1 className='year'>70M</h1>
                    </div>
                  </div>
                </div>
                <div className="col-3"></div>
                {/* <div className="col-3"></div> */}
            </div>
        </div>
    </div>
  )
}

export default Cryptocurrency