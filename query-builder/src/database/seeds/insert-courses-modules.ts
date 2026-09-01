import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {

    await knex("courses").insert([
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "Python" },
        { name: "TypeScript" },
        { name: "Node.js" },
        { name: "React" },
        { name: "React Native" },
        { name: "Next.js" },
        { name: "Vue.js" },
        { name: "Angular" },
        { name: "Database" },
        { name: "SQL" },
    ]);
};
