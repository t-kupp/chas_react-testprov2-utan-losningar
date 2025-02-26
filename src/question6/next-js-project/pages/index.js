import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
      const data = await response.json();
      const slicedData = data.slice(0, 10);
      setPosts(slicedData);
      console.log(slicedData);
    }
    fetchData();
  }, []);

  return (
    <div className='p-8 flex flex-col gap-2 max-w-fit'>
      {posts.map((post) => (
        <Link className=' p-2 border hover:bg-slate-200' key={post.id} href={'/posts/' + post.id}>
          <p>{post.title}</p>
        </Link>
      ))}
    </div>
  );
}
