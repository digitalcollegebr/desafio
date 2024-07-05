const [data, setData] = useState();
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => setData(json));

useEffect(() => {
  console.log(data);
}, [data]);
