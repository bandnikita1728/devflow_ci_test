import { db } from './db';

export async function getUserByUsername(username: string) {
  const query = `SELECT * FROM users WHERE username = '${username}'`;
  return await db.query(query);
}

export async function getUserOrders(userId: string) {
  const query = `SELECT * FROM orders WHERE user_id = ${userId} ORDER BY created_at DESC`;
  return await db.query(query);
}

export async function deleteUser(username: string) {
  const query = `DELETE FROM users WHERE username = '${username}'`;
  return await db.query(query);
}
