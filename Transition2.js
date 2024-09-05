import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Route, Switch, Link } from "react-router-dom";
import Page1 from "./Homepage";
import Page2 from "./Product_page";

function App() {
  return (
    <TransitionGroup>
      <Switch>
        <Route path="/">
          <CSSTransition
            key="page1"
            timeout={1000}
            classNames="page-transition"
            onEnter={(node) => {
              // animate in
              node.style.opacity = 0;
              setTimeout(() => {
                node.style.opacity = 1;
              }, 0);
            }}
            onExit={(node) => {
              // animate out
              node.style.opacity = 1;
              setTimeout(() => {
                node.style.opacity = 0;
              }, 0);
            }}
          >
            <Page1>
              <button>
                <Link to="/page2">Go to Page 2</Link>
              </button>
            </Page1>
          </CSSTransition>
        </Route>
        <Route path="/page2">
          <CSSTransition
            key="page2"
            timeout={1000}
            classNames="page-transition"
            onEnter={(node) => {
              // animate in
              node.style.opacity = 0;
              setTimeout(() => {
                node.style.opacity = 1;
              }, 0);
            }}
            onExit={(node) => {
              // animate out
              node.style.opacity = 1;
              setTimeout(() => {
                node.style.opacity = 0;
              }, 0);
            }}
          >
            <Page2>
              <button>
                <Link to="/Page1">Go back to Page 1</Link>
              </button>
            </Page2>
          </CSSTransition>
        </Route>
      </Switch>
    </TransitionGroup>
  );
}

export default App;