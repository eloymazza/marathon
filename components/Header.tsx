import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header>
      <nav>
        <button>
          <Link href="/login">Log In</Link>
        </button>
        <button>
          <Link href="/signup">Sign Up</Link>
        </button>
      </nav>
    </header>
  );
}
