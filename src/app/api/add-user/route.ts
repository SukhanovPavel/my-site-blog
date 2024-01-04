import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const Username = searchParams.get('username');
    const Email = searchParams.get('email');
    const Password_hash = searchParams.get('password');
    const Created_at = searchParams.get('created');

    try {
        if (!Username || !Email || !Password_hash || !Created_at) throw new Error('User data required');
        await sql`INSERT INTO users (Username, Email, Password_hash, Created_at) VALUES (${Username}, ${Email}, ${Password_hash}, ${Created_at});`;
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    const users = await sql`SELECT * FROM Users;`;
    return NextResponse.json({ users }, { status: 200 });
}