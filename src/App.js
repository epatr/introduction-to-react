import * as React from 'react';

import { ToolHeader } from './components/ToolHeader';
import { ToolFooter } from './components/ToolFooter';
import { ItemList } from './components/ItemList';

export const App = () => {
  return <React.Fragment>
    <ToolHeader />
    <ItemList />
    <ToolFooter />
  </React.Fragment>;
};