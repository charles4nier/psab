import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(req) {
	try {
		const formData = await req.formData();
		const type = formData.get('type');
		const lastname = formData.get('lastname');
		const firstname = formData.get('firstname');
		const email = formData.get('email');
		const phone = formData.get('phone');
		const objet = formData.get('objet');
		const message = formData.get('message');

		// ✅ Cas INSCRIPTION → envoi direct au Google Form
		if (type === 'inscription') {
			// 🔎 Vérif doublon
			const auth = new google.auth.GoogleAuth({
				credentials: {
					client_email: process.env.GOOGLE_CLIENT_EMAIL,
					private_key: process.env.GOOGLE_PRIVATE_KEY.replace(
						/\\n/g,
						'\n'
					)
				},
				scopes: ['https://www.googleapis.com/auth/spreadsheets']
			});

			const sheets = google.sheets({ version: 'v4', auth });
			const res = await sheets.spreadsheets.values.get({
				spreadsheetId: process.env.GOOGLE_SHEET_ID,
				range: 'Adhérents!A:Z' // ⚠️ adapte avec le nom de ton onglet lié au Form
			});

			const rows = res.data.values || [];
			const header = rows[0];
			const emailColIndex = header.indexOf('Email'); // repère la bonne colonne
			console.log('emailColIndex', emailColIndex);
			const emailExists = rows.some(
				(row, i) => i > 0 && row[emailColIndex] === email
			);

			if (emailExists) {
				return NextResponse.json(
					{
						success: false,
						error: '❌ Cet email est déjà inscrit. Si vous pensez qu’il s’agit d’une erreur, contactez l’association.'
					},
					{ status: 400 }
				);
			}

			const formUrl =
				'https://docs.google.com/forms/d/e/1FAIpQLSemXL39Q_6w0A3No6Nht1LsFxXHbO-oNI9zAOUgyBahegqsuw/formResponse';

			const googleFormData = new URLSearchParams();
			googleFormData.append('entry.1854316130', lastname); // Nom
			googleFormData.append('entry.510206026', firstname); // Prénom
			googleFormData.append('entry.1287184825', email); // Email
			googleFormData.append('entry.1991256907', phone); // Téléphone

			// Champ libre ou info supplémentaire
			googleFormData.append(
				'entry.1676041714',
				'Nouvelle inscription via site'
			);

			// Date du jour
			const date = new Date();
			googleFormData.append('entry.1262389809_year', date.getFullYear());
			googleFormData.append(
				'entry.1262389809_month',
				date.getMonth() + 1
			);
			googleFormData.append('entry.1262389809_day', date.getDate());

			await fetch(formUrl, {
				method: 'POST',
				body: googleFormData,
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			});

			return NextResponse.json({
				success: true,
				message: '✅ Inscription envoyée via Google Form'
			});
		}

		// ✅ Cas DESINSCRIPTION → suppression dans l’onglet Adhérents
		if (type === 'desinscription') {
			const auth = new google.auth.GoogleAuth({
				credentials: {
					client_email: process.env.GOOGLE_CLIENT_EMAIL,
					private_key: process.env.GOOGLE_PRIVATE_KEY.replace(
						/\n/g,
						'\n'
					)
				},
				scopes: ['https://www.googleapis.com/auth/spreadsheets']
			});

			const sheets = google.sheets({ version: 'v4', auth });
			const res = await sheets.spreadsheets.values.get({
				spreadsheetId: process.env.GOOGLE_SHEET_ID,
				range: 'Adhérents!A:E'
			});

			const rows = res.data.values || [];
			const rowIndex = rows.findIndex((row) => row[3] === email); // colonne D = email

			if (rowIndex === -1) {
				return NextResponse.json(
					{
						success: false,
						error: '❌ Cet email n’est pas dans notre liste.'
					},
					{ status: 404 }
				);
			}

			await sheets.spreadsheets.batchUpdate({
				spreadsheetId: process.env.GOOGLE_SHEET_ID,
				requestBody: {
					requests: [
						{
							deleteDimension: {
								range: {
									sheetId: 1677149546, // GID de l’onglet Adhérents
									dimension: 'ROWS',
									startIndex: rowIndex,
									endIndex: rowIndex + 1
								}
							}
						}
					]
				}
			});

			return NextResponse.json({
				success: true,
				message: '✅ Désinscription effectuée'
			});
		}

		// ✅ Cas AUTRE → écriture dans onglet Messages
		if (type === 'autre') {
			const auth = new google.auth.GoogleAuth({
				credentials: {
					client_email: process.env.GOOGLE_CLIENT_EMAIL,
					private_key: process.env.GOOGLE_PRIVATE_KEY.replace(
						/\n/g,
						'\n'
					)
				},
				scopes: ['https://www.googleapis.com/auth/spreadsheets']
			});

			const sheets = google.sheets({ version: 'v4', auth });
			await sheets.spreadsheets.values.append({
				spreadsheetId: process.env.GOOGLE_SHEET_ID,
				range: 'Messages!A:F',
				valueInputOption: 'USER_ENTERED',
				requestBody: {
					values: [
						[
							lastname,
							firstname,
							email,
							new Date().toISOString(),
							objet,
							message
						]
					]
				}
			});

			return NextResponse.json({
				success: true,
				message: '✅ Message enregistré'
			});
		}

		return NextResponse.json(
			{ success: false, error: '❌ Type de formulaire inconnu' },
			{ status: 400 }
		);
	} catch (error) {
		console.error('❌ Erreur API Contact:', {
			message: error.message,
			code: error.code,
			errors: error.errors,
			response: error.response?.data
		});

		return NextResponse.json(
			{ success: false, error: error.message || 'Erreur inconnue' },
			{ status: 500 }
		);
	}
}
