'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function ContactPage() {
	const [type, setType] = useState('inscription');
	const [status, setStatus] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);

		// ✅ état "pending"
		setStatus({ type: 'pending', message: '⏳ Envoi en cours...' });

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				body: formData
			});

			const data = await res.json();

			if (res.ok && data.success) {
				setStatus({
					type: 'success',
					message: '✅ Votre demande a bien été envoyée !'
				});
				e.target.reset();
			} else {
				setStatus({
					type: 'error',
					message: data.error || '❌ Une erreur est survenue.'
				});
			}
		} catch (err) {
			setStatus({
				type: 'error',
				message: '❌ Impossible d’envoyer le formulaire.'
			});
		}
	};

	const getStatusColor = (type) => {
		switch (type) {
			case 'success':
				return 'green';
			case 'error':
				return 'red';
			case 'pending':
				return 'orange'; // 🟡 couleur neutre
			default:
				return 'inherit';
		}
	};

	return (
		<>
			<h2 className={styles.title}>Contact</h2>
			<p className={styles.description}>
				Vous avez une question, une suggestion ou souhaitez rejoindre
				l’association ? Écrivez-nous !
			</p>

			<form className={styles.form} onSubmit={handleSubmit}>
				{/* Type */}
				<div className={styles.field}>
					<label htmlFor="type">Type de demande</label>
					<select
						id="type"
						name="type"
						value={type}
						onChange={(e) => setType(e.target.value)}
					>
						<option value="inscription">Inscription</option>
						<option value="desinscription">Désinscription</option>
						<option value="autre">Autre</option>
					</select>
				</div>

				{/* Champs dynamiques */}
				{type === 'inscription' && (
					<>
						<div className={styles.field}>
							<label htmlFor="lastname">Nom</label>
							<input
								type="text"
								id="lastname"
								name="lastname"
								required
							/>
						</div>
						<div className={styles.field}>
							<label htmlFor="firstname">Prénom</label>
							<input
								type="text"
								id="firstname"
								name="firstname"
								required
							/>
						</div>
						<div className={styles.field}>
							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								required
							/>
						</div>
						<div className={styles.field}>
							<label htmlFor="phone">Téléphone</label>
							<input type="tel" id="phone" name="phone" />
						</div>
					</>
				)}

				{type === 'desinscription' && (
					<div className={styles.field}>
						<label htmlFor="email">Email</label>
						<input type="email" id="email" name="email" required />
					</div>
				)}

				{type === 'autre' && (
					<>
						<div className={styles.field}>
							<label htmlFor="lastname">Nom</label>
							<input
								type="text"
								id="lastname"
								name="lastname"
								required
							/>
						</div>
						<div className={styles.field}>
							<label htmlFor="firstname">Prénom</label>
							<input
								type="text"
								id="firstname"
								name="firstname"
								required
							/>
						</div>
						<div className={styles.field}>
							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								required
							/>
						</div>
						<div className={styles.field}>
							<label htmlFor="objet">Objet</label>
							<textarea
								id="objet"
								name="objet"
								rows="1"
								required
							/>
						</div>
						<div className={styles.field}>
							<label htmlFor="message">Message</label>
							<textarea
								id="message"
								name="message"
								rows="4"
								required
							/>
						</div>
					</>
				)}

				<button type="submit" className={styles.button}>
					Envoyer
				</button>
			</form>

			{/* Message de retour */}
			{status && (
				<p
					style={{
						marginTop: '1rem',
						color: getStatusColor(status.type),
						fontWeight: '600'
					}}
				>
					{status.message}
				</p>
			)}
		</>
	);
}
