import React, { useState } from 'react'

// Because of useLocalStorage, even when we refresh the page, 
// the darkMode will not get refreshed and keep the mode in dark or whichever perference that user chose.

const useLocalStorage = (key, initialValue) => {
   const [storedValue, setStoredValue] = useState(() => {
      const item = window.localStorage.getItem(key) // dark
      return item ? JSON.parse(item) : initialValue 
      // return storeValue as false as initial state
      // if item is 'null', it returns initialValue otherwise, return value with JSON.parse(item)
   })
   const setValue = value => {
      window.localStorage.setItem(key, JSON.stringify(value))
      setStoredValue(value)
   }
   return [storedValue, setValue]
}

export default useLocalStorage