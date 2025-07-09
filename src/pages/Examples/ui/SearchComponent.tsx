import React from 'react';
import { useSearch } from '../../../shared/lib/Search/hooks/useSearch';
import { search } from '../../../shared/lib/Search/utils/search';
import { paginate } from '../../../shared/lib/Search/utils/paginate';
import { Input } from '@/shared/shadcn/ui/Input';
import { Button } from '@/shared/ui';

type TItem = { name: string };
// Example data array
const data: TItem[] = [
  { name: 'JavaScript' },
  { name: 'Python' },
  { name: 'Java' },
  { name: 'Ruby' },
  { name: 'Kotlin' },
  { name: 'Scala' },
  { name: 'Golang' },
  { name: 'PHP' },
  { name: 'TypeScript' },
  { name: 'LISP' },
  { name: 'Pascal' },
  { name: 'Delphi' },
  { name: 'Basic' },
  { name: 'Closure' },
  { name: 'Lua' },
  { name: 'SQL' },
  // Imagine more data here
];

export const SearchComponent = () => {
  const [query, setQuery] = React.useState('');
  const [page, setPage] = React.useState(1);
  const pageSize = 4; // Items per page

  const results = useSearch<TItem>(
    data, // передать данные
    query, // передать строку из стейта инпута
    // задать параметры поиска
    search({
      fields: ['name'], // по каким полям идет поиск
      matchType: 'contains', // какой тип поиска
    }),
    paginate({ page, pageSize }),
  );

  // Compute total pages based on filtered results (without pagination)
  const filteredData = search<TItem>({ fields: ['name'], matchType: 'contains' })(data, query);

  const totalPages = Math.ceil(filteredData.length / pageSize);

  return (
    <div>
      <h2>Search and Pagination</h2>
      <Input
        className="my-2"
        placeholder="Search by name..."
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setPage(1); // Reset to first page on new search
        }}
      />
      <ul>
        {results.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <div style={{ marginTop: '10px' }}>
        <Button
          disabled={page === 1}
          style={{ padding: '6px 12px', marginRight: '10px' }}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        >
          Previous
        </Button>
        <span>
          Page {page} of {totalPages}
        </span>
        <Button
          disabled={page >= totalPages}
          style={{ padding: '6px 12px', marginLeft: '10px' }}
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
