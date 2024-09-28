import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifApp = () => {
  const [categories, setcategories] = useState(['One Punch'])
  
  const onNewCategory = (newCategory) => {
    if(categories.includes(newCategory)) return

    setcategories([ newCategory, ...categories])
  }

  return (
    <>
      <h1>GiftApp</h1>

      <AddCategory onNewCategory={onNewCategory}/>

      {categories.map(( category) =>(
        <GifGrid key={category} category={category}/>
      ))}
    </>
  )
}