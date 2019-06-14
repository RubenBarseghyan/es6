// //pending fullfilth rejects
//
const promise = new Promise((resolve, reject) => {
  setTimeout(()=>{
    if(true){
      resolve('promise complited');
    } else {
      reject();
    }
  }, 1000)
});

//must subscribe to promise podpisatsya
promise.then((data)=> {return data}).catch((err) => console.log(err.message));

// fetch("https://jsonplaceholder.typicode.com/posts/")
// .then((res)=>res.json())
// .then((data)=> console.log(data))
// .catch((err) => console.log(err.message));

fetch("http://localhost:3000/api/movies")
.then((res) => res.json())
.then((data)=>console.log(data))
.catch((err) => console.log(err.message));


const mustBe = async () => {
  const res = await fetch("http://localhost:3000/api/movies");
  const data = await res.json();
  console.log(data, 'jjjjjjjjjjjjj');
}

mustBe();


axios.get("http://localhost:3000/api/movies")
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err.message));
