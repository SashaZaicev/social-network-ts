import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <nav className="nav">
                <div><a href="">Profile</a></div>
                <div><a href="">Messages</a></div>
                <div><a href="">News</a></div>
                <div><a href="">Music</a></div>
                <div><a href="">Settings</a></div>
                <div></div>
            </nav>

            <div className="content">
                <div><img src={img1} alt=""/></div>
                <div>ava + description</div>
                <div>my post
                    <div>New post</div>
                    <div>
                        <div>post 1</div>
                        <div>post 2</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
