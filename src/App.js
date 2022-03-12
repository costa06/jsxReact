import minion from './minion.jpg';
import myVideo from './myVideo.mp4'
import './style.css'

import './App.css';

function App() {
  return (
    <>
    <header>
    <h1 className='title red'>Tarek Touati</h1>
    </header>
    <main>
    <div className='container'>
      <div style={{border:'solid 1 black',maxWidth:'100vw'}}>
        
        <br/>
        <div className='imageBody'>
          <img src={minion} alt='minion' />
          <br/>
          <img src='/happy.jpeg' alt='happy' />
        </div>
        
      </div>
        <div className='videoBody'>
          <video width={630} height={355}  controls loop>
            <source src={myVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
