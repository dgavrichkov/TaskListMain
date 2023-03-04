import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Spacer } from '../../shared/ui';

export const Greeting = () => {
  const [data, setData] = useState<any[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/movies', {
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjc3ODMzODU4LCJleHAiOjE2ODA0MjU4NTh9.9gbUTkfurBEs2GrPDc2Ck6oRbe2SIdh8dZdwNmDvpAI"
          }
        });
        const json = await response.json();
        setData(json.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <section>
      <h2>Welcome to the task manager and notes keeper</h2>
      <Spacer />
      {createPortal(
        <p>Portal child</p>,
        document.body
      )}
      <Spacer />
      <div>
        <h3>Films</h3>
        <Spacer />
        <p>Im trying backend, it works with local strapi host</p>
        <Spacer />
        {data ? data.map(item => (
          <div key={item.id}>
            <h4>{item.attributes.title}</h4>
          </div>
        )) : <div>No films data</div>}
      </div>
    </section>
  )
}
