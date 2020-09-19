import React from 'react';

const App = () => {
  const data = [
    {
      id: 1,
      title: 'electron',
      content: 'Hello electron',
    }, {
      id: 2,
      title: 'react',
      content: 'Hello react',
    },
  ];

  return (
    <div className="container">
      {data.map((d) => (
        <div key={d.id} className="row">
          <div className="row__title">{d.title}</div>
        </div>
      ))}
    </div>
  );
};

export default App;
