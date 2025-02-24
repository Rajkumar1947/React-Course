# Notes

...
# Bable convert JSX to React element

# Props
 - Arguments to a function 
 - Destructure example -> (props) => {resName, cuisine}
# Config driven UI
 - Prepare UI based on dynamic data
# JSX
 - () is used in case we have multiple lines
 - class renamed to className and JSX uses camelCase for naming
 - It sanitize the data and prevent Cross site scripting
# Component
 - Componen composition - Component inside component
 - Class base component - OLD
 - Functional base component 
    - NEW 
    - Function return a JSX code
    - Starts with Upper case
# Parcel
- HMR - Hot module replacement (Update browser on page save)
- Dev Build
- Local Server creation
- File watching algorithm -  written in c++
- Caching
- Image Optimizing
- build
- Compress
- Minification
- Differential Bundling - Run app to run older version Browser

# Notes
 - index should not be used as key in map
 - Always have a map for list
# browserlist
 - This is used to support Different Browser versions

# IMport and Export
 - default export e.g. import Component from './Component'
 - Named export e.g. import {LOGO_URL} from './constants'

# VIRTUAL DOM
 - representation of Actual DOM
 - Actual DOM =  HTML

# React Hooks
  - useState()
    - React is rerendering the component on change of state variable
  - useEffect()

# rafce is short cut to create component
