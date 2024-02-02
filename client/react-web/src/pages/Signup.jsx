import React, { useState } from 'react';
import {
  TextField,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormControl,
  InputLabel,
  Button,
  FormHelperText
} from '@mui/material';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Signup = () => {
  const [username, Setusername] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPasswd, SetConfirmPasswd] = useState('');
  const [showPassword, toggleVisibility] = useState(false);

  return (
    <div className="container mt-5 mb-5 col-10 col-sm-8 col-md-6 col-lg-6 ml-auto">
      <div className="text-center mb-5 alert-dark">
        <h2>Signup</h2>

        <div className="form-group">
          <TextField
            size="small"
            variant="outlined"
            className="form-control"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>        
        
        <div className="form-group">
          <TextField
            size="small"
            variant="outlined"
            className="form-control"
            label="Username"
            value={username}
            onChange={(e) => Setusername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <FormControl variant="outlined" size="small" className="form-control">
            <InputLabel>Password</InputLabel>
            <OutlinedInput
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => toggleVisibility(!showPassword)}>
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>

        <div className="form-group">
          <TextField
            size="small"
            type='password'
            variant="outlined"
            className="form-control"
            label="Confirm password"
            value={confirmPasswd}
            onChange={(e) => SetConfirmPasswd(e.target.value)}
          />
          <FormHelperText>
            {password === confirmPasswd ? 
              <span className='text-success'>All good!</span>:
              <span className='text-danger'>Password does not match</span>}
          </FormHelperText>
        </div>

        <div className="text-center mt-4">
          <Button variant="contained" disabled={!email || !password}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;