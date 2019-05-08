import * as React from 'react';

import { ToolHeader } from './components/ToolHeader';
import { ToolFooter } from './components/ToolFooter';
import { ItemList } from './components/ItemList';

export const App = () => {

  const colors = ['red', 'green', 'blue', 'yellow'];

  return <React.Fragment>
    <ToolHeader headerText="Color Toolz" />
    <ItemList items={colors} />
    <ToolFooter />
  </React.Fragment>;
};