import useLocalStorage from './useLocalStorage'

// 사실상 이 useDarkMode 는 필요없다. useLocalStorage 로만으로도 작동이 충분히 가능하다.
const useDarkMode = (key, initialValue) => {
   const [value, setValue] = useLocalStorage(key, initialValue) // 'dark', false

   const changeDarkMode = updatedValue => {
      setValue(updatedValue);
    };
    
   return [value, changeDarkMode] //  value from storeValue , setValue from useLocalStorage
}

export default useDarkMode