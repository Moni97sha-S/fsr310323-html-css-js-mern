// Q-1 Which of the following lifecycle methods does not get triggered on the component’s initial render?

// A) componentDidMount()
// B) render()
// C) getDerivedStateFromProps()
// D) componentDidUpdate()

// Res: D) componentDidUpdate()
// Reason:

// Q-2 Which lifecycle methods are not triggered if shouldComponentUpdate() returns false?
//Select multiple if apply*

// A) render()
// B) componentDidUpdate()
// C) getSnapshotBeforeUpdate()
// D) componentWillUnMount()

// Res: A) render(), B) componentDidUpdate() & getSnapshotBeforeUpdate()
// Reason:

// Q-3 Why use async/await over simple promise chains?

// A) They are faster.
// B) They are required in modern JavaScript.
// C) You cannot alter a components state without them.
// D) Readability

// Res: D) Readability
// Reason:

// Q-4 In relation to React js component lifecycle, which statement is true
    
// A) only function component can have life cycle
// B) Only class components can have life cycle
// C) Both type of components can have life cycle
// D) None of above

// Res: B) Only class components can have life cycle
// Reason:

// Q-5 In react, this is used to pass data to component from outside?

// A) set state
// B) render with argument
// C) props
// D) propTypes

// Res: C) props
// Reason:

// Q-6 Identify errors in the below code?
/*
    class MyComponent extends React.Component {
        constructor(props) {
            this.state = {
                clicks: 0
            }
        }

        componentDidMount() {
            this.clickHandler()
        }

        clickHandler() {
            this.setState({
                clicks: this.clicks + 1
            });
        }

        render() {
            let children = this.props.children;

            return (
                <div>
                    <h2>My Component ({this.state.clicks} clicks})</h2>
                    <h3>{this.props.headerText}</h3>
                    {children}
                </div>
            );
        }
    }
*/
// A) The constructor does not pass its props to the super class.
// B) Binding is for function name is not done
// C) Props in constructor is not invoked in construtor
// D) None of the above

// Res: A), B) & C)
// Reason:


// Q-7 Name the function used to change the state of react component?

// A) this.setState
// B) this.setChangeState
// C) this.State{}
// D) Both A and B

// Res: A) this.setState
// Reason:

// Q-8 React component can return how many components

// A) 1
// B) 2
// C) 3
// D) 0

// Res: A) 1
// Reason:

// Q-9 Which lifecycle method will execute after the first UPDATE?
    
// A) componentDidMount()
// B) shouldComponentUpdate()
// C) componentDidUpdate()
// D) componentWillUnMount()

// Res: B) shouldComponentUpdate()
// Reason:

// Q-10:  In React what is used to pass data to a component from outside?
    
// A) props
// B) setState
// C) state
// D) function

// Res: A) props
// Reason: