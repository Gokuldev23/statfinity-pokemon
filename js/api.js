export const getPokemons = async (limit,offset) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
    {
      cache:"force-cache",
    }
  );
  return res.json();
}

export const getAPockemon = async (id) => {
  try {
    let fetchRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let res = await fetchRes.json();
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getBgImgUrl = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
