import { client } from "../index";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    const query = "INSERT INTO users (username, password, name) VALUES ($1, $2, $3)";
    const values=[username,password,name];
    await client.query(query,values);
}
/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    const query="SELECT * FROM users WHERE id=$1";
    const values=[userId];
    const result=await client.query(query,values);
    return result.rows[0];
}
