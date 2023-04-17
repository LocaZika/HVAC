import { useEffect, useState } from 'react';

export default function useRest(url) {
  const [data, setData] = useState([]);
  const send = async(method, path, data) => {
    const RES = await fetch(path, {
      method,
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(data) ?? null,
    })
    const DATA = await RES.json();
    return { data: DATA, res: RES };
  };
  const get = () => {
    return send('GET', url);
  };
  const post = (data) => {
    return send('POST', url, data);
  };
  const update = (id, data) => {
    const path = url + '/' + id;
    return send('PATCH', path, data);
  };
  const remove = (id) => {
    const path = url + '/' + id;
    return send('DELETE', path);
  };
  useEffect(() => {
    get().then(({data}) => {
      setData(data);
    });
  }, [url])
  return [data, {post, update, remove}];
}

