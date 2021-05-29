import { CSSTransition } from 'react-transition-group';
import { useState } from "react";
import './App.css';
import 'animate.css';
function App() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div className="App">
      <CSSTransition
        in={show}
        timeout={3000}
        appear={true}
        classNames={{
          appear: 'animate__animated',
          appearActive: 'animate__pulse',
          enter: 'animate__animated',
          enterActive: 'animate__rubberBand',
          exitActive: 'animate__animated',
          exitDone: 'animate__jello',
        }}
      mountOnEnter
      unmountOnExit
      >
        <h1 style={{ fontSize: "30px" }}>
          hello
        </h1>
      </CSSTransition>
      <button onClick={handleClick}>show CssTransition</button>
    </div>
  );
}

export default App;
