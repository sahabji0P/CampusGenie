import React from 'react'
import './Laundry.css'
import LaundryHeader from '../../components/LaundryHeader/LaundryHeader'
import LaundryServices from '../../components/LaundryServices/LaundryServices'
import LaundryIntro from '../../components/LaundryServices/LaundryIntro'

const Laundry = () => {
  return (
    <>
      <LaundryHeader/>
      <LaundryIntro/>
      <LaundryServices/>
    </>
  )
}

export default Laundry
