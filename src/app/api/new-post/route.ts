import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import {NextApiRequest, NextApiResponse} from 'next';

// export async function POST(request: Request) {
//     const {searchParams} = new URL(request.url);
//     const title = searchParams.get('title');
//     const content = searchParams.get('content');
//     const email = searchParams.get('email');
//
//     try {
//         const user = await sql`SELECT * FROM users WHERE (email) = (${email});`;
//
//         await sql`INSERT INTO content (title, content, user_id) VALUES (${title}, ${content}, ${user.rows[0].id});`;
//
//         const body = {status: "Post is loaded"};
//
//         return NextResponse.json({body}, {status: 200});
//
//     } catch (error) {
//         return NextResponse.json({ error }, { status: 500 });
//     }
// }


// export  async function POST(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === 'POST') {
//         const { title, content, email } = req.body; // Получение заголовка и содержимого статьи из POST запроса
//
//         // Сохранение статьи в базе данных
//         try {
//             const user = await sql`SELECT * FROM users WHERE (email) = (${email});`;
//             await sql`INSERT INTO content (title, content, user_id) VALUES (${title}, ${content}, ${user.rows[0].id});`;
//
//             res.status(200).json({ success: true, message: 'Статья успешно сохранена' });
//         } catch (error) {
//             res.status(500).json({ success: false, message: 'Произошла ошибка при сохранении статьи' });
//         }
//     } else {
//         res.status(405).json({ message: 'Метод не поддерживается' });
//     }
// }
