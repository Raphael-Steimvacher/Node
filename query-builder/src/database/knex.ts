import { knex as knexConfig } from "knex";
import config from "../../knexfile";

const knex = knexConfig(config);

export default knex;
