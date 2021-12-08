import { Typography, Toolbar } from '@material-ui/core'
import { Book } from '@material-ui/icons'

function App () {
  return (
    <div className='App'>
      <Toolbar>
        <Book />
        <Typography variant='h6'>Books</Typography>
        <Typography variant='h6'>Cart</Typography>
      </Toolbar>
    </div>
  )
}

export default App
