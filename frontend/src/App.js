
import './App.css';
import TodoHomePage from './TodoHomePage';
import {mergeStyles} from '@fluentui/react'
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { loadTheme } from '@fluentui/react';
import Blog from './blog';

import React from 'react';
import { FluentProvider, webLightTheme, Text } from '@fluentui/react-components';

const marginStyle = mergeStyles({
  margin:'50px'
})


function App() {
  initializeIcons();

  return (
    <FluentProvider theme={webLightTheme}>
      <div className={marginStyle}>
        {/* <TodoHomePage/> */}
        <Blog />
      </div>
    </FluentProvider>
  );
}


export default App;
