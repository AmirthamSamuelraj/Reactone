  
import './App.css';
import  Header from './components/header';
import Content from './components/content';
import Project from './components/project';
import Contact from './components/contact';
import Footer from './components/footer';
import Experience from './components/experience';
 
function App() {
  return (
    <div className="App">
       <main>
        <Header />
       </main>
       <body>
        <Content/>
        <Project />
        <Experience/>
        <Contact />
      
        <Footer/>
        </body>
    </div>
  );
}

export default App;
