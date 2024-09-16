import './App.css'
import store from './store/store'
import { Provider } from 'react-redux'
import { Container, Typography } from "@mui/material";
import AddHabitForm from './Components/habit-form';
import HabitList from './Components/habit-list';
import HabitStats from './Components/habit-stats';

function App() {
  

  return (
    <Provider store={store}>
      <Container maxWidth='md'>
        <Typography component="h1" varient='h2' align="center">
          Habit Tracker
        </Typography>
        <AddHabitForm/>
        <HabitList/>
        <HabitStats />
      </Container>
    </Provider>
  )
}

export default App
