import React from 'react'
import Card from '../components/Card';

const DashBoard = () => {
  const sales={
    dollar:"$1000",
    "heading":"Total Sales"

  }
  const order={
    number:500,
    "heading":"Total order"

  }
  const revenue={
    dollar:"$800",
    "heading":"Total Revenue"

  }
  const customer={
    number:50,
    "heading":"Total customer"
  }
  return (
    <div>
      <Card user={sales}></Card>
      <Card user={order}></Card>
      <Card user={revenue}></Card>
      <Card user={customer}></Card>

      
    </div>
  )
}

export default DashBoard
