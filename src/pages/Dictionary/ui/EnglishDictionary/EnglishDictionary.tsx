import { useState } from 'react';
import { useStore } from '@nanostores/react';
import { $computedProfile, $wordToRequest, loadWordFromDictionary } from './store';
import { Button } from '@/shared/ui';
import { Input } from '@/shared/ui/Input';
import { TDictApiResponse } from './interfaces';
import { Card } from '@/shared/ui/Card';

export const EnglishDictionary = () => {
  // const { data, loading } = useStore($currentDiction);
  const wordToReq = useStore($wordToRequest);
  // const [word, setWord] = useState<string>('');
  const [loadedWord, setLoadedWord] = useState<TDictApiResponse[] | null>(null);
  // const wordValue = useStore($wordToRequest);
  const fullname = useStore($computedProfile);

  const handleWordSearch = async () => {
    // $wordToRequest.set(word);
    const res = await loadWordFromDictionary(wordToReq);
    setLoadedWord(res);
  };

  return (
    <section>
      <h3>English Dictionary API Example</h3>
      <div>{fullname}</div>
      <form className="mb-10 flex">
        <Input value={wordToReq} onChange={(e) => $wordToRequest.set(e.target.value)} />
        <Button className="ml-4" type="button" onClick={handleWordSearch}>
          Search
        </Button>
      </form>
      <div className="grid gap-4">
        {loadedWord &&
          loadedWord.map((item, idx) => (
            <Card className="p-4" key={idx}>
              <div>
                <i>{item.word}</i>
              </div>
              <div>
                {item.meanings.map((mean, idx) => (
                  <div key={idx}>
                    <ul className="pl-4">
                      {mean.definitions.map((def) => (
                        <li className="list-disc" key={def.definition}>
                          {def.definition}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          ))}
      </div>
      {/* {data && <div>{data.word}</div>} */}
      {/* {loading && <div>Loading...</div>} */}
    </section>
  );
};
