import { Pokemon } from "../interfaces/pokemon";

const api = "https://pokeapi.co/api/v2/pokemon";

export async function getByName(name: string) {
  const response = await fetch(`${api}/${name}`);
  const data: Pokemon = await response.json();

  return data;
}
