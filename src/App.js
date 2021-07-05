import Home from '../src/components/Home/Home';
import './App.css';
import {ContextProvider} from './context';

function App() {
  const array = [{temp:"30C",name:"London",country:"England",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",url:"https://en.wikipedia.org/wiki/London"},
{temp:"20C",name:"Manchester",country:"England",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",url:"https://en.wikipedia.org/wiki/Manchester"},
{temp:"23C",name:"Barcelona",country:"Spain",img:"https://s3-us-west-2.amazonaws.com/melingoimages/Images/89626.jpg",url:"https://en.wikipedia.org/wiki/Barcelona"},
{temp:"24C",name:"Madrid",country:"Spain",img:"https://s3-us-west-2.amazonaws.com/melingoimages/Images/89626.jpg",url:"https://en.wikipedia.org/wiki/Madrid"},
{temp:"25C",name:"Adis Ababa",country:"Ethiopia",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/1200px-Flag_of_Ethiopia.svg.png",url:"https://en.wikipedia.org/wiki/Addis_Ababa"},
{temp:"22C",name:"Jerusalem",country:"Israel",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/1200px-Flag_of_Israel.svg.png",url:"https://en.wikipedia.org/wiki/Jerusalem"},
{temp:"17C",name:"Paris",country:"France",img:"https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png",url:"https://en.wikipedia.org/wiki/Paris"},
{temp:"30C",name:"Rome",country:"Italy",img:"https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Italy_%282003%E2%80%932006%29.svg",url:"https://en.wikipedia.org/wiki/Rome"},
{temp:"20C",name:"Munich",country:"Germany",img:"https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",url:"https://en.wikipedia.org/wiki/Munich"},
{temp:"30C",name:"Rio De Janeiro",country:"Brazil",img:"https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png",url:"https://en.wikipedia.org/wiki/Rio_de_Janeiro"},
{temp:"20C",name:"Amsterdam",country:"Netherlands",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png",url:"https://en.wikipedia.org/wiki/Amsterdam"}]; 
  return (
    <>
    <ContextProvider value={array}>

    <Home/>
    </ContextProvider>
    </>
  
  );
}

export default App;
