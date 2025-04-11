import React, { useState } from 'react'
import { createContext } from 'react'

export const categoryDataContext=createContext("")

function ContextApi({children}) {

    const [categoryData,setCategoryData]=useState("")

  return (
    <div>
        <categoryDataContext.Provider value={{categoryData,setCategoryData}}>
            {children}
        </categoryDataContext.Provider>
    </div>
  )
}
export default ContextApi