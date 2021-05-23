import Layout from '@Layouts/Default';
import Link from 'next/link';
import { ReactNode } from 'react';

const IndexPage = (): ReactNode => (
  <Layout title="Home">
    <h1>
      Hello Stranger!!{' '}
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
