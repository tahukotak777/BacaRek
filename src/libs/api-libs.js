export async function fatch () {
    await axios
      .get(
        "https://newsapi.org/v2/top-headlines?q=a&sortBy=relevancy&country=us&apiKey=ef4a710b2b664894ac22350bc3cb77fd"
      )
      .then((response) => setBerita(response.data))
      .catch((error) => new Error(error));  
}