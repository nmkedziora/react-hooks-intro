import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

export default function News() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('react hooks');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const isMounted = useRef(true);
  const searchInputRef = useRef();

  useEffect(() => {
    fetchResults();
    return () => {
      isMounted.current = false;
    };
  }, []);

  const fetchResults = async () => {
    if (isLoading) {
      return;
    }


    try {
      setIsLoading(true);
      const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`);
      if (isMounted.current) {
        setResults(response.data.hits);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = event => {
    event.preventDefault();
    fetchResults();
  };

  const handleClearSearch = () => {
    setQuery('');
    searchInputRef.current.focus();
  };

  return (
    <>
      <h1>HN news with React Hooks</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          ref={searchInputRef}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="submit" disabled={isLoading}>Search</button>
        <button type="button" onClick={handleClearSearch}>Clear</button>
      </form>
      {isLoading ? (
        <div>Loading results...</div>
      ) : (
        <ul>
          {results.map(result => (
            <li key={result.objectID}>
              <a href={result.url}>{result.title}</a>
            </li>
          ))}
        </ul>
      )}
      {error && <div>{error.message}</div>}
    </>
  );
}


