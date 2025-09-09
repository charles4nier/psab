'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<h1 className={styles.logo}>
					Pas de smartphone avant le bac !
				</h1>

				{/* Desktop nav */}
				<nav className={styles.navDesktop}>
					<Link href="/">Accueil</Link>
					<Link href="/contact">Contact</Link>
					<Link href="/mentions-legales">Mentions légales</Link>
				</nav>

				{/* Burger button (mobile) */}
				<button
					className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label="Menu"
				>
					<span />
					<span />
					<span />
				</button>
			</div>

			{/* Mobile nav */}
			<nav
				className={`${styles.navMobile} ${menuOpen ? styles.open : ''}`}
			>
				<Link href="/" onClick={() => setMenuOpen(false)}>
					Accueil
				</Link>
				<Link href="/contact" onClick={() => setMenuOpen(false)}>
					Contact
				</Link>
				<Link
					href="/mentions-legales"
					onClick={() => setMenuOpen(false)}
				>
					Mentions légales
				</Link>
			</nav>
		</header>
	);
}
