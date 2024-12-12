import { useState } from "react";
import './App.css';


function App() {

  // state

  // const [name, setName] = useState("");
  // const [surname, setSurname] = useState("");
  // const [age, setAge] = useState("");
  // const [email, setEmail] = useState("");
  // const [number, setNumber] = useState("");
  // const [password, setPassword] = useState("");
  // const [repPassword, setRepPassword] = useState("");
  // au lieu de faire tout ça, je fais plus simple, j'optimise
  const [formData, setFormData] = useState({
    name : "",
    surname : "",
    age: "",
    email: "",
    tel: "",
    password: "",
    repPassword: ""
  })

  const [errors, setErrors] = useState({
    name : "",
    surname : "",
    age: "",
    email: "",
    tel: "",
    password: "",
    repPassword: ""
    })

    const [result, setResult] = useState(null);
  // comportements
  const handleSubmit = (event) => {
    event.preventDefault();

    let tmpErrors = {};
    if(formData.name.length<1) {
      tmpErrors.name = "Veuillez entrer votre prénom !";
    }
    if(formData.surname.length<1) {
      tmpErrors.surname = "Veuillez entrer votre nom de famille !";
    }
    if(formData.age.length<1) {
      tmpErrors.age = "Veuillez entrer votre âge !";
    }
    if(formData.email.length<1) {
      tmpErrors.email = "Veuillez entrer votre email !";
    }
    if(formData.tel.length<1) {
      tmpErrors.tel = "Veuillez entrer votre numéro de téléphone !";
    }
    if(formData.password.length < 4 ) {
      tmpErrors.password = "Le mot de passe doit avoir au moins 4 caractères";
    }
    else if(formData.password !== formData.repPassword && formData.repPassword.length>1) {
      tmpErrors.repPassword = "Répéter votre mot de passe correctement !";
    }

    setErrors(tmpErrors);
    console.log(tmpErrors);

    if(Object.keys(tmpErrors).length === 0) {

      const resultHTML = <div class="result-container">
        <h2>Voici vos données :</h2>
        <div class="resultInfos">
        <ul>
          <li>Prénom : {formData.name}</li>
          <li>Nom : {formData.surname}</li>
          <li>Age : {formData.age}</li>
          <li>Email : {formData.email}</li>
          <li>N° téléphone : {formData.tel}</li>
        </ul>
        </div>
        
      </div>

      setFormData({name : "",
        surname : "",
        age: "",
        email: "",
        tel: "",
        password: "",
        repPassword: ""});
      setResult(resultHTML);
    }
  
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  // affichage
  const formValidation = 
  <form onSubmit={handleSubmit} className="form">
    <label htmlFor="name">Prénom : </label>
    <input type="text" placeholder="Entrer votre prénom" name="name" value={formData.name} onChange={handleChange}/>
    {errors.name &&<p>{errors.name}</p>}
    
    <label htmlFor="surname">Nom : </label>
    <input type="text" placeholder="Entrer votre nom de famille" name="surname" value={formData.surname} onChange={handleChange}/>
    {errors.surname && <p>{errors.surname}</p>}

    <label htmlFor="age">Age : </label>
    <input type="number" placeholder="Entrer votre age" name="age" value={formData.age} onChange={handleChange}/>
    {errors.age && <p>{errors.age}</p>}

    <label htmlFor="email">Email : </label>
    <input type="email" placeholder="Entrer votre email" name="email" value={formData.email} onChange={handleChange}/>
    {errors.email && <p>{errors.email}</p>}


    <label htmlFor="tel">Numéro de téléphone : </label>
    <input type="tel" placeholder="Entrer votre numéro" name="tel" value={formData.tel} onChange={handleChange}/>
    {errors.tel && <p>{errors.tel}</p>}

    <label htmlFor="password">Mot de passe : </label>
    <input type="password"  name="password" value={formData.password} onChange={handleChange}/>
    {errors.password && <p>{errors.password}</p>}

    <label htmlFor="repPassword">Répéter votre mot de passe : </label>
    <input type="password"  name="repPassword" value={formData.repPassword} onChange={handleChange}/>
    {errors.repPassword && <p>{errors.repPassword}</p>}

    <button type="submit">Soumettre</button>
  </form>
  
  
  

  return <div className="app-container">
    {formValidation} 
    {result}
    
    
  </div>

  
}

export default App
