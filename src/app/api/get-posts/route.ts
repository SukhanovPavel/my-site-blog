import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const result =
            await sql`SELECT (title, content) FROM content`;

        // await sql`DROP TABLE posts`
        // await sql`DELETE FROM posts`




        // const body = result.rows[0]
        return NextResponse.json({ result }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}

// users:
// CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     username VARCHAR(100) UNIQUE,
//     email VARCHAR(255) UNIQUE,
//     password_hash VARCHAR(255),
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );



// posts:
// CREATE TABLE posts (
//     id SERIAL PRIMARY KEY,
//     title VARCHAR(255),
//     content TEXT,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     user_id INTEGER REFERENCES users(id)
// );

// comments:
//     CREATE TABLE comments (
//     id SERIAL PRIMARY KEY,
//     article_id INTEGER REFERENCES articles(id),
//     content TEXT,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     user_id INTEGER REFERENCES users(id)
// );

// replies:
//     CREATE TABLE replies (
//     id SERIAL PRIMARY KEY,
//     comment_id INTEGER REFERENCES comments(id),
//     content TEXT,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     user_id INTEGER REFERENCES users(id)
// );