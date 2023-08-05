// Q-1 React is a ________

// A) Front-end Javascript Framework
// B) Front-end Javascript Library
// C) Back-end Javascript Framework
// D) Back-end Javascript Library

// Res: B) Front-end Javascript Library
// Reason: It is a front-end library of JavaScript.

// Q-2 If the behaviour of the component is dependent on the state of the component then it is called a ___________

// A) stateful component
// B) stateless component
// C) None of above

// Res: A) stateful component
// Reason: When we use useState in functional component / state in class component, then that component called as stateful component.

// Q-3 A child class constructor cannot make use of 'this' reference until super() method has been called

// A) True
// B) False

// Res: A) True
// Reason: Unless until super() method has been called at parent constructor, child class constructor cannot refer parent class's properties & methods using 'this' keyword

// Q-4 Which of the following is correct way for passing reference of a click handler function in React?
    
// A) <button onClick = {this.onButtonClick()}>Click Me</button>
// B) <button onClick = {this.onButtonClick}>Click Me</button>
// C) <button onClick = {(e) => this.onButtonClick(e)}>Click Me</button>

// Res: B) <button onClick = {this.onButtonClick}>Click Me</button>
// Reason: While calling function, we don't use () & we mostly avoid using arrow functions in HTML tag click events. 

// Q-5 What are the different phases of component lifecycle methods?
    
// A) Mounting, Unmounting 
// B) Mounting, Updating
// C) Mounting, Updating, Unmounting 
// D) None of the above

// Res: C) Mounting, Updating, Unmounting
// Reason: There are 3 phases of component lifecycle methods. 

// Q-6 Which of the following is the correct way to update the state?

// A) this.state.message = "Hello World!";
// B) this.state({message: "Hello World!"});
// C) this.setState({message: "Hello World!"});
// D) this.setState(message: "Hello World!");

// Res: C) this.setState({message: "Hello World!"});
// Reason: setState is setter state function of useState hook which helps us to update the state & JS code should be inside {} under return statement of JSX.

// Q-7 Which of the following need to be updated to achieve dynamic UI updates?
// A) props
// B) state
// C) Both 

// Res: C) Both
// Reason: Both props & state need to be updated to achieve dynamic UI updates.

// Q-8 Which of the following is NOT TRUE about JSX?
// A) JSX is syntax extension of javascript
// B) JSX is used to define structure of React components
// C) JSX couples the rendering logic with other UI logic such as event handling, state changing, etc
// D) None of the above

// Res: D) None of the above
// Reason: A), B) & C) are correct statements about JSX said to be true.

// Q-9 To use native Javascript as an attribute value, the expression should be wrapped within
    
// A) double-quotes
// B) single-quotes
// C) Curly braces 
// D) back-ticks

// Res: C) Curly braces
// Reason: Always write JS code within {} at JSX

// Q-10 Everything in React is a _________
    
// A) Components
// B) Package
// C) Class 
// D) Modules

// Res: A) Components
// Reason: Always write JS code within {} at JSX

// Q-11: Lifecycle methods are only available in built in class based components.
    
// A) True
// B) False

// Res: A) True
// Reason: All lifecycle methods available only in built-in class components.

// Q-12: In ReactJS, the "state" of a child component can be accessed by the parent component.
    
// A) True
// B) False

// Res: B) False
// Reason: This is false in React state can be accessed only within it's component.

// Q-13: Which of the following is used to pass data from parent component to child component
    
// A) Render
// B) state
// C) props
// D) function

// Res: C) props
// Reason: Only props is used to pass data from parent component to child component

// Q-14: A component in ReactJS could be composed of one or more inner components
    
// A) True
// B) False

// Res: A) True
// Reason: Yes, we can create many child components must be named components within one component.