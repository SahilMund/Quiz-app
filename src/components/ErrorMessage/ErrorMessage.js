import React from 'react';

import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert style={{marginBottom:"10px"}} elevation={6} variant="filled" {...props} />;
}

const ErrorMessage = ({ children }) => {
   

 
  return (
    <div>
      
      <Alert severity="error">Please Fill All The Fields</Alert>
      
      {children}
    </div>
  );
};

export default ErrorMessage;
