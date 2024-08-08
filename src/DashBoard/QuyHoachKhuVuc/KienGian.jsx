import React, { Component } from 'react'
import "./luongHH.css";
import { ZoomIn, ZoomOut } from '@mui/icons-material';
export default class KienGian extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  isFullScreen: false,
		  isHovered: false,
		};
	  }
	handleImageClick = () => {
		this.setState((prevState) => ({
		  isFullScreen: !prevState.isFullScreen,
		}));
	  };

	  handleImageHover = (isHovered) => {
		this.setState({
		  isHovered,
		});
	  };
  render() {
	  const { isFullScreen, isHovered } = this.state;
	  const cursorStyle = isFullScreen ? { cursor: 'zoom-out' } : { cursor: 'zoom-in' };
    return (
        <div class="container-fluid">
		<h4>DANH BẠ LUỒNG HÀNG HẢI CÔNG CỘNG - KIÊN GIANG</h4>
		<div class="row">

			<div class="col">
		  {this.state.isFullScreen ? (
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                zIndex: 1000,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onClick={this.handleImageClick}
            >
                <img
				className='imgHH'
                  src="imgs/kiengiang.jpg"
                  alt="Full Screen Image"
                  style={{ maxWidth: "100%", maxHeight: "100%", cursor:"pointer"}}
                />
              </div>
            ) : (
				<div
				style={{
				  position: 'relative',
				  display: 'inline-block',
				  overflow: 'hidden',
				}}
				onClick={this.handleImageClick}
				onMouseEnter={() => this.handleImageHover(true)}
				onMouseLeave={() => this.handleImageHover(false)}
			  >
				<img
				className='imgHH'
				  src="imgs/kiengiang.jpg"
				  alt="Thumbnail"
				  style={{ maxWidth: '100%', maxHeight: '100%', ...cursorStyle }}
				/>
				{isHovered && (
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    opacity: 0.8,
                    transition: 'opacity 0.3s ease',
                    zIndex: 1,
                  }}
                >
                  {isHovered ? (
                    <ZoomIn color="white" fontSize="large" />
                  ) : (
                    <ZoomOut color="white" fontSize="large" />
                  )}
          </div>
)}
</div>
            )}
          </div>
			
		</div>
	</div>
    )
  }
}
