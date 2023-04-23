# IT-Blog-v3
My Personal IT Blog

### Webstack
React/TypeScript/SCSS/Django/AWS

## A list of objectives and best practices covered with this project

### 1. Try to use useMemo over useEffect to minimize unnecessary re-renders
`useMemo(calculateValue, dependencies)` a function that returns a cached value as long as it's dependencies do not change. An optimization technique that stores the results of expensive function calls and returns the cached result.

`filteredArticles` uses `useMemo()` to prevent excessive rerenders.

### 2. Use ES6 features
Used the `spread (...) operator` to pass props to child components.

### 3.  Use Functional components instead of Class components
Functional components require less code, no `this` binding, and are easier to maintain.

### 4. Use TypeScript
Use TypeScript for type safety and more efficient code. This project uses `interfaces` to ensure components receive the correct props.