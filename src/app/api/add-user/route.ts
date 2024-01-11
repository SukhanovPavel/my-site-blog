import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const Username = searchParams.get('username');
    const Email = searchParams.get('email');
    const Password_hash = searchParams.get('password');

    try {
        if (!Username || !Email || !Password_hash) throw new Error('User data required');
        const userNameIsBusy = await sql`SELECT * FROM users WHERE  (Username) = (${Username});`;
        if (userNameIsBusy.rows.length !== 0) {
            throw new Error('Username is busy');
        };
        const emailIsBusy = await sql`SELECT * FROM users WHERE  (Email) = (${Email});`;
        if (emailIsBusy.rows.length !== 0) {
            throw new Error('Username is busy');
        };

        await sql`INSERT INTO users (Username, Email, Password_hash) VALUES (${Username}, ${Email}, ${Password_hash});`;
    } catch (error) {
        if (error instanceof Error) {return NextResponse.json({ error: error.message,  status: 500 } )};
    }

    const users = await sql`SELECT * FROM Users;`;
    return NextResponse.json({ users, status: 200  });
}