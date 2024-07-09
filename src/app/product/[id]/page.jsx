"use client"
import { useParams } from 'next/navigation'
import React from 'react'



function Detail() {
    let {id} = useParams()
    console.log(id);
  return (
    <div>
      <h2>Detail page</h2>
    </div>
  )

}


export default Detail
