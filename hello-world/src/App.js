//Mini Resume: Lab1
import './App.css';
import sampleImage from "./Assets/Images/sampleimg.jpg"

function App() {
  return (
    <div>
      <h1 className="App">Neha Sanwal</h1>
      <hr/>
      <h2>Summary</h2>
        <p>
        BBA graduate demonstrating creative ability, leadership and communication skills with a passion and experience in business management. Dedicated to deliver value, innovation and best possible results by contributing problem-solving and analytical skills.
        </p>
        <br/>
        <h2>Skills</h2>
      <li>MS Excel</li>
      <li>Power BI</li>
      <li>Business Research</li>
      <li>Lead Generation</li>
      <li>Presentations</li>  
      <hr/>
      <hr/>
      <img width='20%' height='20%' src="https://cdn.photographylife.com/wp-content/uploads/2014/06/Nikon-D810-Image-Sample-6.jpg">
    </img>
    <hr/>
    <hr/>
    <h2>Static Image</h2>
    <img width='20%' height='20%' src={sampleImage} alt=""/>
    </div>
  );
}

export default App;
