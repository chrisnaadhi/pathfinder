import type { Actions } from './$types';
import { contents } from '$lib/db/pgSchema';

export const actions: Actions = {
	tambahKoleksi: async ({ request, locals }) => {
		const data = await request.formData();
	}
};
