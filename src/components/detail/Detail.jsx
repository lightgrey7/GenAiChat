import "./detail.css"
const Detail = () => {
    return (
      <div className="detail">
        <div>
          <img src="./avatar.png" alt="" />
          <h2>Janey Deppy</h2>
          <p>Lorem ipsum dolor, sit ame.</p>
        </div>
        <div className="info">
          <div className="option">
            <div className="title">
              <span>Chat Settings</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Privacy & help</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Shared photos</span>
              <img src="./arrowDown.png" alt="" />
            </div> 
            <div className="photos">
              <div className="photoItem">
                <div className="photoDetail">
                <img src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="" />
                <span>photo_2024_2.png</span>
                </div>
                <img src=".download.png" alt="" className="icon"/>
              </div>
              <div className="photoItem">
                <div className="photoDetail">
                <img src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="" />
                <span>photo_2024_2.png</span>
                </div>
                <img src=".download.png" alt="" className="icon"/>
              </div>
              <div className="photoItem">
                <div className="photoDetail">
                <img src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="" />
                <span>photo_2024_2.png</span>
                </div>
                <img src=".download.png" alt="" className="icon" />
              </div>
              <div className="photoItem">
                <div className="photoDetail">
                <img src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="" />
                <span>photo_2024_2.png</span>
                </div>
                <img src=".download.png" alt="" className="icon"/>
              </div>
              
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Shared Files</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <button>Block User</button>
          <button className="logout">Logout</button>
        </div>
      </div>
    )
  }
  
  export default Detail