'use client';

import Link from 'next/link';
import { useState } from 'react';
import { headerMenu } from './CpHeader_mockdata';
import Image from 'next/image';
export default function CpHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="cp-header">
      <Link href="/" className={'logo'}>
        <Image src="/assets/images/logo.png" alt="Logo" width={178} height={30} />
      </Link>

      <div className="navigation">
        <ul className="nav-list">
          {headerMenu.map((item) => (
            <li className="nav-item" key={item.id}>
              <a
                className="nav-link"
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}