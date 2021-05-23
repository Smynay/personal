import Layout from '@Layouts/Default';
import Link from 'next/link';
import { ReactElement } from 'react';

const AboutPage = (): ReactElement => (
  <Layout title="About">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default AboutPage;
