import { useFoodEntries } from '../application/adapters/useFoodEntries';

export const FoodLogList = () => {
  const { data, isLoading, error } = useFoodEntries();

  if (isLoading) return <div>Загрузка…</div>;
  if (error) return <div>Ошибка</div>;

  return (
    <ul className="space-y-1">
      {data?.map((entry: any) => (
        <li key={entry.id}>
          <strong>{new Date(entry.eatenAt).toLocaleString()}:</strong> {entry.text}
        </li>
      ))}
    </ul>
  );
};
