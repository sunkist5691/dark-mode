// Step One
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

// Step Two
// 사실상 이 useDarkMode 는 필요없다. useLocalStorage 로만으로도 작동이 충분히 가능하다.
const useDarkMode = (key, initialValue) => {
   const [value, setValue] = useLocalStorage(key, initialValue) // 'dark', false

   const changeDarkMode = updatedValue => {
      setValue(updatedValue);
    };
    
   return [value, changeDarkMode] //  value from storeValue , setValue from useLocalStorage
}

// Step Three
const [darkMode, setDarkMode] = useDarkMode('dark', false)

// Step Four
// So when we click the button, it invokes 'toggleMode' on Navbar.jsx
// which it will invoke 'changeDarkMode', and it will invoke 'setValue(updatedValue)' in 'useLocalStorage'
// it sets key 'dark' to value 'true or false'
// and it invokes 'setStoredValue' with the 'value' that setted
// and that value become 'storeValue'
