import * as React from 'react';

import { ToolHeader } from './components/ToolHeader';
import { ToolFooter } from './components/ToolFooter';

export const App = () => {
  return <React.Fragment>
    <ToolHeader />
    <ToolFooter />
  </React.Fragment>;
};