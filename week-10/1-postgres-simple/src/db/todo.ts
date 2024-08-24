import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    const query="INSERT INTO todos (userId,title,description) VALUES ($1,$2,$3) RETURNING *";
    const values=[userId,title,description];
    const result=await client.query(query,values);
    return result.rows[0];
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    const query="UPDATE todos SET done=true WHERE id=$1 RETURNING *";
    const values=[todoId]
    const result=await client.query(query,values);
    return {
        title: result.rows[0].title,
        description: result.rows[0].description,
        done:result.rows[0].done,
        id:result.rows[0].id
    };
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    const query="SELECT title, description, done, id FROM todos WHERE user_id=$1";
    const values=[userId]
    const result=await client.query(query,values);
    return result.rows;
}