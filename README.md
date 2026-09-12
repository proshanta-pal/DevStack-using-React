# DevStack Web Application using React

**DevStack** is a single page web application designed to help developers to explore different technologies in one place.

## ⚙️ Techonogy used 
- HTML
- CSS
- TypeScript
- DaisyUI
- Vite
- React
- React-Toastify
- JSON

## 🧩 Features
- 🔍 **Explore Technologies:** Browse various technologies by category, details, and ratings.
- ⭐ **Track Stack:** Select and organize multiple technologies into stack and remove if necessary.
- 📱**Responsive UI** Clean, modern responsive design that works smoothly for mobiles, tablets, and laptops/PC's .

## ❓Questions 

i. What is JSX, and why is it used in React?
> JSX stands for JavaScript XMl. It is usually used in React that allows developers to write HTML-like markup code directly in JavScript file.

ii. What is the difference between props and state?
> Props are the data passed from a parent component to a child component (Uni-directional). A child component cannot modify the data it receives from parent component. On the contrary, a state acts as a component-specific memory, which store and tracks data that changes over time. State automatically re-renders the component if any changes occur.

iii. What does the `useState` hook do, and where did you use it in this project?
> `useState` is used to handle state inside functional components. It allows us to store and track data that changes over time and automatically re-render when data updated. In this project, I use this hook for tracking every card data as an array and handle it when button click is occur.

iv. What does the `useEffect` hook do, and why did you need it to load the JSON data?
> `useEffect` allows us to perform side effects(such as, fetching data) in functional components. I need it to load JSON data because it avoids infinite rendering loops and prevents UI blocking.

v. Why does every item in a `.map()` list need a unique key prop?
> React use a unique key for uniquely identify every item. If any change (add/remove) occur in a particular item, React immediately track the item and apply minimal changes.

vi. What is conditional rendering? Show one place you used it (example: the empty stack message).
> Conditional rendering is something where UI elements display differently based on specific conditions. I use conditional rendering among each individual technology card to shows a text on a button based on it's already add or not.

vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
> I pass data from a parent component to a child component using JSX and custom attribute with the data. The child component accepts this data as objects, known as props. A child component sends data back to its parent by executing a callback function down to it as a prop.