import { AppBar, List, ListItem, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../store/configureStore';
import SignedInMenu from './SignedInMenu';

const rightLinks =[
  {title: 'Login', path: '/login'},
  {title: 'Register', path: '/register'},
]

const navStyles ={
  color: 'inherit',
  textDecoration: 'none',
  typography: 'h6',
  '&:hover': {
    color: ' bluegrey.500'
  },
  '&.active': {
    color: 'text.secondary'
  }
}

export default function Header() {

  const {user} = useAppSelector(state => state.account)
  return (
    <AppBar position ='static' sx={{mb:4}} color ='primary'>
        <Toolbar sx={{display: 'flex', justifyContent:'space-between', alignItems: 'center'}}>
            <Typography variant='h6'component={NavLink} exact to='/'
                sx={navStyles}>
                BookStore 
            </Typography>
            {user ? (
              <SignedInMenu />
            ):(
              <List sx={{display: 'flex'}}>
                {rightLinks.map(({title, path}) =>(
                  <ListItem 
                    component = {NavLink}
                    to={path}
                    key={path}
                    sx={navStyles}            
                  >
                  {title}
                  </ListItem>
              ))}
              </List>
            )}

        </Toolbar>
    </AppBar>
  )
}
