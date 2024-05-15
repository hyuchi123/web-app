import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Popular } from '../Components/Popular/Popular'
import { NewCollections } from '../Components/NewCollections/NewCollections'
import { NewsLetter } from '../Components/NewsLetter/NewsLetter'



export const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <NewCollections/>
        <NewsLetter/>
    </div>
  )
}

//kuo test:移掉hero，原本Hero在Popular上