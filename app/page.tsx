'use client';

import { useState, useEffect } from 'react';

type CalculationHistory = {
  expression: string;
  result: number;
};

export default function Calculator() {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState<CalculationHistory[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  const handleNumber = (num: string) => {
    setDisplay(prev => prev + num);
  };

  const handleOperator = (op: string) => {
    setDisplay(prev => prev + op);
  };

  const calculate = () => {
    try {
      const calculatedResult = eval(display);
      setResult(calculatedResult.toString());
      setHistory(prev => [...prev, { expression: display, result: calculatedResult }]);
    } catch {
      setResult('Error');
    }
  };

  const clear = () => {
    setDisplay('');
    setResult('');
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="bg-white dark:bg-primary-dark rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold">Calculator</h1>
          <button onClick={toggleTheme} className="p-2 rounded">
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
        <div className="mb-4 p-4 bg-gray-100 dark:bg-gray-700 rounded">
          <div className="text-right text-xl">{display}</div>
          <div className="text-right text-3xl font-bold">{result}</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+'].map(btn => (
            <button
              key={btn}
              onClick={() => btn === '=' ? calculate() : (btn === 'C' ? clear() : handleNumber(btn))}
              className="bg-gray-200 dark:bg-gray-600 p-4 rounded"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}