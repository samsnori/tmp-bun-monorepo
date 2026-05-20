import { someSharedFunction } from '@monorepo/shared/utils';
import { TestComponent } from '@monorepo/shared/ui';

function App() {

  someSharedFunction();
  
  return (
    <div>
      <TestComponent />
    </div>
  );
};

export default App;
