import { Close } from '@mui/icons-material';
import { Alert, IconButton, Snackbar } from '@mui/material';
import React, { createContext, useState, useContext } from 'react';

interface SnackbarConfig {
  message: string;
  type: 'success' | 'error' | 'info';
  show: boolean;
};

interface SnackbarContextProps {
  snackbar: SnackbarConfig;
  showSnackbar: (message: string, type: 'success' | 'error' | 'info') => void;
  hideSnackbar: () => void;
};

export const SnackbarContext = createContext<SnackbarContextProps | undefined>(undefined);

const useSnackbar = (): SnackbarContextProps => {
  const context = useContext(SnackbarContext);
  if (context === undefined) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
};

const SnackbarProvider: React.FC<any> = ({ children }) => {
  const [snackbar, setSnackbar] = useState<SnackbarConfig>({
    message: '',
    type: 'success',
    show: false,
  });

  const showSnackbar = (message: string, type: 'success' | 'error' | 'info') => {
    setSnackbar({
      message,
      type,
      show: true,
    });
  };

  const hideSnackbar = () => {
    setSnackbar({
      message: '',
      type: 'success',
      show: false,
    });
  };

  return (
    <SnackbarContext.Provider value={{ snackbar, showSnackbar, hideSnackbar }}>
      {children}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={snackbar.show}
        onClose={hideSnackbar}
        autoHideDuration={5000}
        action={
          <React.Fragment>
            <IconButton
              size='small'
              aria-label='close'
              color='inherit'
              onClick={hideSnackbar}
            >
              <Close fontSize='small' />
            </IconButton>
          </React.Fragment>
        }
      >
        <Alert severity={snackbar.type === "error" ? "error" : "info"}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  )
};

export { SnackbarProvider, useSnackbar };