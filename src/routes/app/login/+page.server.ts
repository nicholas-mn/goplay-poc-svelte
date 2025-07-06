import { error, redirect } from '@sveltejs/kit';

export const actions = {
    login: async ({ request, locals }) => {
        const data = await request.formData();
        const email = data.get('email') as string;
        const password = data.get('password') as string;

        try {
            await locals.pb.collection('users').authWithPassword(email, password);
        } catch (e) {
            error(400, 'Something went wrong while authenticating');
        }

        redirect(303, '/app');
    }
};
