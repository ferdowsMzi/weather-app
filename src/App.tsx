import { useState } from 'react';
import Dashboard from './components/dashboard';

function App() {
  const [skyGradient, setSkyGradient] = useState<string>(
    'bg-gradient-to-br from-sky-200 to-violet-400'
  );

  return (
    <div
      className={` ${skyGradient} w-full h-100vh items-start justify-start py-3rem max-w-430px mx-auto px-3rem rounded-lg`}
    >
      <Dashboard setSkyGradient={setSkyGradient} />
    </div>
  );
}

export default App;
