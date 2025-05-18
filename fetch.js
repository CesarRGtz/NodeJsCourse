async function loadData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// funciona sin funcion async por el type module
try {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
} catch (error) {
  console.error("Error fetching data:", error);
}
