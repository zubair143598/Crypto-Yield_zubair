import React from 'react'
import DepositCrypto from '../Components/Elements/DepositCrypto'
import Hero from '../Components/Elements/Hero'
import OnluCard from '../Components/Elements/OnluCard'
import Screens from '../Components/Elements/Screens'
import SecurelyBuy from '../Components/Elements/SecurelyBuy'
import Trade from '../Components/Elements/Trade'

const Home = () => {
  return (
    <>
    <Hero/>
    <SecurelyBuy/>
    <OnluCard/>
    <DepositCrypto/>
    <Trade/>
    <Screens/>

    </>
  )
}

export default Home