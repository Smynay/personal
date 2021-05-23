import Link from 'next/link';
import React, { ReactElement } from 'react';

const Header = (): ReactElement => (
  <header>
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>{' '}
      |{' '}
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  </header>
);

export default Header;
