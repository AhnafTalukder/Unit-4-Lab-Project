import { useState } from 'react'
import './App.css'

import ViewingPanel from './components/ViewingPanel'
import ImageGallery from './components/ImageGallery'

import defaultImage from './assets/1.jpg'

function App() {


  const [currentImage, setCurrentImage] = useState({title:"Click to discover peices from the Harvard Museum", primaryimageurl:defaultImage});
  const [gallery, setGallery] = useState([{title:"Click to discover peices from the Harvard Museum", primaryimageurl:defaultImage}]);
  const [keywords, setKeywords] = useState(['Modern', 'Abstract', 'Surreal', 'Architecture']);
  const [bannedKeywords, setBannedKeywords] = useState(['Red', 'Nude', '18th century']);
  
  const ACCESS_KEY = import.meta.env.HARVARD_API_KEY;


  const banKeyword = (e) =>{
  
    
    const keyword = e.target.firstChild.data;
   
    setKeywords([...keywords.filter(item => item !== keyword)])
    console.log(keywords)
  
    setBannedKeywords([keyword, ...bannedKeywords])
  

  }

  const unBanKeyword = (e) =>{
    const keyword = e.target.firstChild.data;
   
    setKeywords([...bannedKeywords.filter(item => item !== keyword)])
  
  
    setKeywords([keyword, ...keywords])
  }

  const makeQuery = () =>{
    
     const query = `https://api.harvardartmuseums.org/object?apikey=d9b5b29f-552b-44a2-9014-12a42d94839b&sort=random`;
     callAPI(query).catch(console.error);


  }

  const callAPI = async(query) =>{
      const response = await fetch(query);
      const json = await response.json();

      var counter = 0;

      
      while( json.records[counter].primaryimageurl == null) {
          counter++;

      }
      

       const randomArtObject = json.records[counter];
     
       setCurrentImage(randomArtObject);

       setGallery([randomArtObject, ...gallery]);
      
     
        
      

    
  }

 


  return (
    <>


    
    <ViewingPanel unBanCommand={unBanKeyword} banCommand={banKeyword} banned={bannedKeywords} tags={keywords} submit={makeQuery} image={currentImage}/>
    <ImageGallery gallery={gallery}/>
   
   
    </>
  )
}

export default App
