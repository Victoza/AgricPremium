import React from 'react'
import ArticleHero from './Components/ArticleHero'
import Blog from './Components/Blog'
import Insight from './Components/Insight'
import Harvest from './Components/Harvest'

const Articles = () => {
  return (
    <div>
      <ArticleHero/>
      <Blog/>
      <Insight/>
      <Harvest/>
    </div>
  )
}

export default Articles