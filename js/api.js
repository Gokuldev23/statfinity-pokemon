export const getAPockemon = async (id) => {
  try {
    let fetchRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let res = await fetchRes.json();
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};
