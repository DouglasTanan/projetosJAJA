import Hobbies from "./Hobbies";
export default function App(){
  const Nome = "Douglas Tanan Rodrigues";
  const sobreMim = "Sou um estudante do instituto Proa, que estou sempre atrás de aprender sobre técnologias novas, aprendi bastante a estilizar e implementar apis no meu site."

return(<>
<h1>{Nome}</h1>
<p>{sobreMim}</p>
<Hobbies/>
</>)

}