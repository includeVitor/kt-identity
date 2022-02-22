import api from ".";

const AnimalsGet = async () => {
  try {
    const { data } = await api.get("test/animals");
    return data;
  } catch (error: any) {
    const { response } = error;

    console.log(response);
  }
};

const CountriesGet = async () => {
  try {
    const { data } = await api.get("test/countries");
    return data;
  } catch (error: any) {
    const { response } = error;

    console.log(response);
  }
};

const GamersGet = async () => {
  try {
    const { data } = await api.get("test/gamers");
    return data;
  } catch (error: any) {
    const { response } = error;

    console.log(response);
  }
};

export { AnimalsGet, CountriesGet, GamersGet };
