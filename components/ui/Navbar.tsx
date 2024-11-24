'use client'

import React from 'react';
import Link from 'next/link';
import {
    SignedIn,
    SignedOut,
    UserButton
} from "@clerk/nextjs";
import { useState , useEffect } from 'react';
import styles from './styles/Navbar.module.css';
import { useRouter } from 'next/navigation'; // For routing in Next.js


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter(); // Use router for redirection
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 810) {
        setIsOpen(true);  // Ensure the menu is open on wider screens
      } else {
        setIsOpen(false); // Close the menu on mobile/smaller screens
      }
    };

    // Set the initial state based on the current screen width
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick =() => {
      router.push('/sign-in'); // Redirect to sign-in page
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <Link href="/">Family Tree</Link>
      </div>
      <div className={`${styles.navLinks} ${isOpen ? styles.show : ''}`}>
        <Link href="/family-tree" className={styles.navItem}>Your Trees</Link>
        <Link href="/create-tree" className={styles.navItem}>Create Tree</Link>
        <Link href="/family-members" className={styles.navItem}>Family Members</Link>
        <Link href="/profile" className={styles.navItem}>Profile</Link>
        
        <SignedOut>
            <div className={`${styles.signIn}`} onClick={handleClick}>
              SignIn
            </div>
        </SignedOut>
        <SignedIn>
            <UserButton className={`${styles.navItem} ${styles.signIn}`} />
        </SignedIn>
        {/* <Link href="/signin" className={`${styles.navItem} ${styles.signIn}`}>Sign In</Link> */}
      </div>
      <button className={`${styles.hamburger}  ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <div className={styles.hamburgerLine}></div>
        <div className={styles.hamburgerLine}></div>
        <div className={styles.hamburgerLine}></div>
      </button>
    </nav>
  );
};

export default Navbar;
