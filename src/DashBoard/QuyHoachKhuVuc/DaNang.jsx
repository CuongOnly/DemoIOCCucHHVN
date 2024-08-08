import React, { Component } from "react";
import "../LuongHH/luongHH.css";
import { ZoomIn, ZoomOut } from '@mui/icons-material';

export const portData = [
  { id: 1, name: 'KHU BẾN LIÊN CHIỂU', img: "/images/cangbien/lienchieu-danang.jpg", top: 29.3, left: 35.5 },
 
];

export default class DaNang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullScreen: false,
      selectedPort: null,
      hiddenIcons: [], // Keep track of hidden icons
    };
  }

  handleImageClick = (port) => {
    this.setState((prevState) => ({
      isFullScreen: !prevState.isFullScreen,
      selectedPort: port,
      hiddenIcons: [...prevState.hiddenIcons, ...portData.map(port => port.id)], // ẩn toàn bộ port.id 
    }));
  };

  handleH4Click = () => {
    this.setState({
      isFullScreen: false,
      selectedPort: null,
      hiddenIcons: [], // Clear the hiddenIcons array
    });
  };

  render() {
    const { isFullScreen, selectedPort, hiddenIcons } = this.state;

    return (
      <div className="container-fluid">
        <h4 style={{ color: "#00000A6", cursor: 'pointer' }} onClick={this.handleH4Click}>QUY HOẠCH BẾN CẢNG - ĐÀ NẴNG</h4>
        {selectedPort && (
          <div className="nameTable">
            <span style={{ color: "#2153aa" }}>{selectedPort.name}</span>
          </div>
        )}
        <div className="row">
          <div className="col">
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                overflow: 'hidden',
                width:"100%",
                height:"100%"
              }}
            >
              <img
                className='imgHH'
                src={selectedPort ? selectedPort.img : "/imgs/danang.jpg"}
                alt="Thumbnail"
               
              />

              {portData.map((port) => (
                !hiddenIcons.includes(port.id) && ( // Render the icon only if its id is not in hiddenIcons
                  <div
                    key={port.id}
                    className="icon"
                    style={{ fontWeight: "bolder", position: 'absolute', top: `${port.top}rem`, left: `${port.left}rem`, zIndex: 10, padding:"2px 5px", backgroundColor:"white" }}
                  >
                    <a href="#" onClick={() => this.handleImageClick(port)} style={{ textDecoration: "none" }}>
                      {port.name}
                    </a>
                  </div>
                )
              ))}

            </div>
          </div>
        </div>
      </div>
    );
  }
}
