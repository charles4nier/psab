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

		const auth = new google.auth.GoogleAuth({
			credentials: {
				client_email: process.env.GOOGLE_CLIENT_EMAIL,
				private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\n/g, '\n')
			},
			scopes: ['https://www.googleapis.com/auth/spreadsheets']
		});

		const sheets = google.sheets({ version: 'v4', auth });

		// ✅ Cas INSCRIPTION
		if (type === 'inscription') {
			const res = await sheets.spreadsheets.values.get({
				spreadsheetId: process.env.GOOGLE_SHEET_ID,
				range: 'Adhérents!A:E'
			});

			const rows = res.data.values || [];
			const emailExists = rows.some((row) => row[2] === email);

			if (emailExists) {
				return NextResponse.json(
					{
						success: false,
						error: '❌ Cet email est déjà inscrit. Si vous pensez qu’il s’agit d’une erreur, contactez l’association.'
					},
					{ status: 400 }
				);
			}

			await sheets.spreadsheets.values.append({
				spreadsheetId: process.env.GOOGLE_SHEET_ID,
				range: 'Adhérents!A:E',
				valueInputOption: 'USER_ENTERED',
				requestBody: {
					values: [
						[
							lastname,
							firstname,
							email,
							phone,
							new Date().toISOString()
						]
					]
				}
			});
		}

		if (type === 'desabonnement') {
			const res = await sheets.spreadsheets.values.get({
				spreadsheetId: process.env.GOOGLE_SHEET_ID,
				range: 'Adhérents!A:E'
			});

			const rows = res.data.values || [];
			const rowIndex = rows.findIndex((row) => row[2] === email); // colonne B = email
			console.log('Rows:', rows);
			if (rowIndex === -1) {
				return NextResponse.json(
					{
						success: false,
						error: '❌ Cet email n’est pas dans notre liste.'
					},
					{ status: 404 }
				);
			}

			// ⚠️ rowIndex correspond à l’index du tableau `rows`
			// mais dans Google Sheets : ligne 1 = index 0
			// donc si tu as une ligne d’en-tête → il faut sauter la 1ʳᵉ ligne
			const targetIndex = rowIndex; // si pas d’en-tête
			// const targetIndex = rowIndex; // si ta ligne 1 est déjà incluse dans rows (à vérifier avec console.log)

			await sheets.spreadsheets.batchUpdate({
				spreadsheetId: process.env.GOOGLE_SHEET_ID,
				requestBody: {
					requests: [
						{
							deleteDimension: {
								range: {
									sheetId: 0, // ton gid
									dimension: 'ROWS',
									startIndex: targetIndex,
									endIndex: targetIndex + 1
								}
							}
						}
					]
				}
			});
		}

		if (type === 'autre') {
			await sheets.spreadsheets.values.append({
				spreadsheetId: process.env.GOOGLE_SHEET_ID,
				range: 'Messages!A:F', // A → G car tu as 7 colonnes
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
		}

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error('❌ Erreur API Contact:', {
			message: error.message,
			code: error.code,
			errors: error.errors,
			response: error.response?.data
		});

		return NextResponse.json(
			{
				success: false,
				error: error.message || 'Erreur inconnue'
			},
			{ status: 500 }
		);
	}
}
