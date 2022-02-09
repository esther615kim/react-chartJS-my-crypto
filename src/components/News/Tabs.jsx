import * as React from 'react';
import {Box,Tabs,Tab} from '@mui/material';

export default function CategoryTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs color="inherit" value={value} onChange={handleChange} centered>
        <Tab  label="Latest" />
        <Tab label="Trending" />
      </Tabs>
    </Box>
  );
}