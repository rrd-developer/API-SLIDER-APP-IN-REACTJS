
import './App.css';
import card from './Card';
import{useState,useEffect} from "react"
import { FaLessThan,FaGreaterThan } from "react-icons/fa";

function App() {
  let [index,setIndex] = useState(0);
  const[user,setUser] = useState([{
    id:"",name:"",email:"",username:""
  }])
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(res => setUser(res))
  })

 const{id,name,username,email} = user[index]
 const lesThan = () =>{
  if(index <= 0){
    index=user.length;
    setIndex(--index);
  }
  else{
    setIndex(--index)
  }
 }
 const greatThan = () =>{
  if(index >= user.length -1){
    index = -1;
    setIndex(++index)
  }
  else{
    setIndex(++index)

  }
 }
  return (
    <div className="App">
      
     
     <card>
      <div>
        NAME:{name}
      </div>
      <div>
        ID:{id}
      </div>
      <div>
        USERNAME:{username}
      </div>
      <div>
        EMAIL:{email}
      </div>
      <div>

      </div>
     </card>
     <div>
      <button onClick={lesThan}><FaLessThan/></button>
      <button onClick={greatThan}><FaGreaterThan/></button>
     </div>
    </div>
  );
}

export default App;
