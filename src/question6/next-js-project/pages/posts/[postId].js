import Link from 'next/link';

export async function getServerSideProps({ params }) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.postId);
  const post = await response.json();

  return { props: { post } };
}

export default function DetailPage({ post }) {
  return (
    <div className='p-8'>
      <Link className='border hover:bg-slate-200 px-2 py-1' href={'/'}>
        Go back
      </Link>
      <h3 className='text-lg font-bold mt-8'>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}
