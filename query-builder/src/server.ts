import express, { Request, Response } from "express";
import knex from "./database/knex";

const app = express();
app.use(express.json());

app.get("/", async (request: Request, response: Response) => {
    return response.json({ message: "Hello World!" });
});

app.post("/courses", async (request: Request, response: Response) => {
    const { name } = request.body;

    await knex("courses").insert({ name });
    // await knex.raw("INSERT INTO courses (name) VALUES (?)", [name]);

    return response.status(201).json(name);
});

app.get("/courses", async (request: Request, response: Response) => {
    const courses = await knex("courses").select().orderBy("name");
    // const courses = await knex.raw("SELECT * FROM courses");

    return response.json(courses);
});

app.put("/courses/:id", async (request: Request, response: Response) => {
    const { id } = request.params;
    const { name } = request.body;

    await knex("courses").update({ name }).where({ id });

    return response.status(204).send();
});

app.delete("/courses/:id", async (request: Request, response: Response) => {
    const { id } = request.params;

    await knex("courses").delete().where({ id });

    return response.status(204).send();
});

app.listen(3333, () => console.log(`Server is running on port 3333`));
