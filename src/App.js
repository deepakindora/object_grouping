import React from 'react';
import './style.css';

export default function App() {
  const list = [
    { name: 'one', id: 1 },
    { name: 'two' },
    { name: 'one', id: 2 },
  ];

  const groupBy = (list, key) => {
    return list.reduce(function (accessKey, item) {
      accessKey[item[key]] = [...(accessKey[item[key]] || []), item];
      return accessKey;
    }, {});
  };

  console.log(groupBy(list, 'name'));

  const groupdList = groupBy(list, 'name');

  return (
    <>
      {groupdList.one.map((Element) => (
        <p>
          {Element.id} | {Element.name}
        </p>
      ))}
    </>
  );
}
