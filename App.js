import './App.css';
import Comp1 from './React-Calender-Library/Comp1';
import Comp2 from './React-Calender-Library/Comp2';
import Comp3 from './React-Calender-Library/Comp3';
import Comp4 from './React-Calender-Library/Comp4';
import Comp5 from './React-Calender-Library/Comp5';
import Examp1 from './Prime-React-Library/Examp1';
import Examp2 from './Prime-React-Library/Examp2';
import Examp3 from './Prime-React-Library/Examp3';
import Examp4 from './Prime-React-Library/Examp4';
import Examp5 from './Prime-React-Library/Examp5';
import Form1 from './React-Formik-Library/Form1';
import Form2 from './React-Formik-Library/Form2';
import Form3 from './React-Formik-Library/Form3';
import Form4 from './React-Formik-Library/Form4';
import Form5 from './React-Formik-Library/Form5';
import Form6 from './React-Formik-Library/Form6';
import Form7 from './React-Formik-Library/Form7';
import Form8 from './React-Formik-Library/Form8';
import Form9 from './React-Formik-Library/Form9';
import ComponentsLifecycle from './MyComponents/ComponentsLifecycle';
import ComponentsLifecycle1 from './MyComponents/ComponentLifecycle1';
import TodoList from './MyComponent/TodoList';
import UseEffect1 from './ReactHooks/UseEffect1';
import UseEffect2 from './ReactHooks/UseEffect2';
import UseState1 from './ReactHooks/UseState1';
import Usestate2 from './ReactHooks/Usestate2';
import Usestate3 from './ReactHooks/Usestate3';
import Usestate4 from './ReactHooks/Usestate4';
import Usestate5 from './ReactHooks/Usestate5';
import UseEffect4 from './ReactHooks/UseEffect4';
import UseEffect3 from './ReactHooks/UseEffect3';
import UseEffect5 from './ReactHooks/UseEffect5';
import UseReference1 from './ReactHooks/UseReference1';
import UseReference2 from './ReactHooks/UseReference2';
import UseReference3 from './ReactHooks/UseReference3';
import UseReference4 from './ReactHooks/UseReference4';
import UseReference5 from './ReactHooks/UseReference5';
import UseContext1 from './ReactHooks/UseContext1';
import ThemeContext from './ReactHooks/ThemeContext';
import { useState } from 'react';
import { UseContext5 } from './ReactHooks/UseContext5';

function App() {
  let initialTheme = {
    color: 'white',
    backgroundColor: 'green'
 }
 const [theme, setTheme] = useState(initialTheme)
  return (
    <>
      <hr/>
      <hr/>
      <UseState1 />
      <br />
      <br />
      <hr/>
      <hr/>
      <Usestate2 />
      <br />
      <br />
      <hr/>
      <hr/>
      <Usestate3 />
      <br />
      <br />
      <hr/>
      <hr/>
      <Usestate4/>
      <br />
      <br />
      <hr/>
      <hr/>
      <Usestate5/>
      <br />
      <br />
      <hr/>
      <hr/>
      <UseEffect1/>
      <br />
      <br />
      <hr/>
      <hr/>
      <UseEffect2/>
      <br />
      <br />
      <hr/>
      <hr/>
      <UseEffect3/>
      <br />
      <br />
      <hr/>
      <hr/>
      <UseEffect4/>
      <br />
      <br />
      <hr/>
      <hr/>
      <UseEffect5/>
      <br />
      <br />
      <hr/>
      <hr/>
      <h1>UseReference1</h1>
      <UseReference1/>
      <br />
      <br />
      <hr/>
      <hr/>
      <h1>UseReference2</h1>
      <UseReference2/>
      <br />
      <br />
      <hr/>
      <hr/>
      <h1>UseReference3</h1>
      <UseReference3/>
      <br />
      <br />
      <hr/>
      <hr/>
      <UseReference4/>
      <br />
      <br />
      <hr/>
      <hr/>
      <UseReference5/>
      <br />
      <br />
      <hr/>
      <hr/>
      <ThemeContext.Provider value={{ theme, setTheme }}>
      <UseContext1/>
      </ThemeContext.Provider>
      <br />
      <br />
      <hr/>
      <hr/>
      <UseContext5/>
      <br />
      <br />
      <hr/>
      <hr/>
      


      <Comp1 />
      <Comp2 />
      <Comp3 />
      <Comp4 />
      <Comp5 />
      <br />
      <br />
      <br />
      <Examp1 />
      <br />
      <br />
      <br />
      <Examp2 />
      <br />
      <br />
      <br />
      <Examp3 />
      <br />
      <br />
      <br />
      <Examp4 />
      <Examp5 />
      <br />
      <br />
      <br />
      <Form1 />
      <br />
      <br />
      <br />
      <Form2 />
      <br />
      <br />
      <br />
      <Form3 />
      <br />
      <br />
      <br />
      <Form4 />
      <br />
      <br />
      <br />
      <Form5 />
      <br />
      <br />
      <br />
      <Form6 />
      <br />
      <br />
      <br />
      <Form7 />
      <br />
      <br />
      <br />
      <Form8 />
      <br />
      <br />
      <br />
      <Form9 />
      <br />
      <br />
      <br />
      <ComponentsLifecycle />
      <br />
      <br />
      <br />
      <ComponentsLifecycle1 />
      <br />
      <br />
      <br />
      <TodoList />
    </>
  );
}

export default App;
