import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import './App.css'
import Button from "@material-ui/core/Button";

const initialAnimal = {
    title: ''
}

async function fetchAnimalContent(){

    const fetchAnimals = fetch("https://api.jsonbin.io/b/5ee9d89919b60f7aa95be2e0")
        .then((response) => response.json())
        .then(data=> data.animals);
        return fetchAnimals
}

export default function App() {


    const [CardContent, setCardContent] = React.useState(initialAnimal);

    fetchAnimalContent().then(object=> console.log(object));




    function setBearsAsContent() {
        fetchAnimalContent().then((response)=> setCardContent(response[0]))
    }

    function setWolvesAsContent() {
        fetchAnimalContent().then((response)=> setCardContent(response[1]))
    }




    return (
    <div className="App">

        <Button variant="outlined" color="secondary" onClick={setWolvesAsContent}>Fetch Wolves</Button>


        <Header title={CardContent.title}/>
        <Button variant="outlined" color="primary" onClick={setBearsAsContent}>Fetch Bears</Button>
      <Main cardContent={CardContent}></Main>
        <Main cardContent={CardContent}></Main>
        <Main cardContent={CardContent}></Main>

      <Footer>
          </Footer>
    </div>
  );
}


