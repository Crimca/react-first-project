import Expenses from './components/Expenses';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date("2022-07-14"),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date("2023-01-12") },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 300.00,
      date: new Date("2023-01-01"),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date("2022-05-12"),
    },
  ];



  return (
    <div>
      <Expenses items={expenses}/>
      <p>Marika Mäki / VAMK / BIT</p>
      </div>
      
  );
}

export default App;








// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
