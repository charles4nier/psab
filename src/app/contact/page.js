import Link from 'next/link';
import styles from './page.module.css';

export default function ContactPage() {
	return (
		<>
			<h1 className={styles.title}>Contact</h1>
			<p className={styles.description}>
				Vous avez une question, une suggestion ou souhaitez rejoindre
				l’association ? Écrivez-nous !
			</p>

			<form className={styles.form} method="post" action="/api/contact">
				<div className={styles.field}>
					<label htmlFor="name">Nom</label>
					<input type="text" id="name" name="name" required />
				</div>
				<div className={styles.field}>
					<label htmlFor="email">Email</label>
					<input type="email" id="email" name="email" required />
				</div>
				<div className={styles.field}>
					<label htmlFor="message">Message</label>
					<textarea id="message" name="message" rows="4" required />
				</div>
				<button type="submit" className={styles.button}>
					Envoyer
				</button>
			</form>

			<p className={styles.or}>
				Ou écrivez-nous directement à{' '}
				<a
					href="mailto:contact@psab-asso.org"
					className={styles.mailLink}
				>
					contact@psab-asso.org
				</a>
				.
			</p>
		</>
	);
}
