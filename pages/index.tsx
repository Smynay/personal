import Layout from '@Components/Layout';
import Link from 'next/link';
import { ReactNode } from 'react';

const IndexPage = (): ReactNode => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>
      Hello Next.js{' '}
      <span role="img" aria-label="hello">
        👋
      </span>
    </h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
