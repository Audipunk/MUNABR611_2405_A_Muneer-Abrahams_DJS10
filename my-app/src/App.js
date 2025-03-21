import logo from './blog-posts.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="blog-posts" alt="blog" />
        <p>
          Click Posts <code>to view</code> all Posts.
        </p>
        <a
          className="App-link"
          href="https://jsonplaceholder.typicode.com/posts"
          target="_blank"
          rel="noopener noreferrer"
        >
          Posts
        </a>
      </header>
    </div>
  );
}

export default App;
