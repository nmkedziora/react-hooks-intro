import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function News() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    let current = true;

    axios
      .get(`http://hn.algolia.com/api/v1/search?query=reacthooks`)
      .then(response => {
        if (current) {
          setResults(response.data.hits);
        }
      });
    return () => {
      current = false;
    };
  }, []);

  return (
    <>
      <h1>HN news with React Hooks</h1>
      <ul>
        {results.map(result => (
          <li key={result.objectID}>
            <a href={result.url}>{result.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}


