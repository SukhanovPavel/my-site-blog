import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import bcrypt from "bcryptjs";

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url);
    const email = searchParams.get('email');
    const password = searchParams.get('password');

    try {
        if (!email || !password) throw new Error('Email and password are required');
        await sql`SELECT * FROM users WHERE (email) = (${email});`;

        const user = await sql`SELECT * FROM users WHERE (email) = (${email});`;
        if (user.rows.length === 0) {
            throw new Error('User not found');
        }

        const hashPass = user.rows[0].password_hash;
        const match = await bcrypt.compare(password ? password : "incorrect", hashPass);
        if (!match) throw new Error('Incorrect password');

        const userData = {
            id: user.rows[0].id,
            username: user.rows[0].username,
            email: user.rows[0].email,
            isAdmin: user.rows[0].email === "psuhanov77@gmail.com"
        };

        if (match) return NextResponse.json({userData}, {status: 200});

    } catch (error) {
        if (error instanceof Error) {return NextResponse.json({ error: error.message}, {status: 500} )};
    }
};