import React, { Component } from 'react';
import ShareModal from './ShareModal.jsx';

class Poster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['rgb(15, 61, 163)', 'rgb(214, 42, 25)', 'rgb(250, 112, 21)', 'rgb(250, 190, 72)', 'rgb(47, 200, 120)'],
      lastX: 0,
      lastY: 0,
      isDragging: false,
      image: '',
      isModal: false,
      isImagePlacer: false,
      currImage: null,
    };
    this.rainbowRef = React.createRef();
    this.textRef = React.createRef();
    this.stickersRef = React.createRef();
    this.logoRef = React.createRef();

    this.onColorClick = this.onColorClick.bind(this);
    this.resetCanvas = this.resetCanvas.bind(this);
    this.toggleDragVisibility = this.toggleDragVisibility.bind(this);
    this.onCanvasRainbowDragOver = this.onCanvasRainbowDragOver.bind(this);
    this.onCanvasMouseEnter = this.onCanvasMouseEnter.bind(this);
    this.saveImage = this.saveImage.bind(this);
    this.toggleShareModal = this.toggleShareModal.bind(this);
    this.updateCursorPosition = this.updateCursorPosition.bind(this);
    this.selectImage = this.selectImage.bind(this);
    this.placeImage = this.placeImage.bind(this);
    this.placeTextImage = this.placeTextImage.bind(this);
  }

  componentDidMount() {
    this.placeTextImage();
  }

  onColorClick(e) {
    const { colors } = this.state;
    const color = e.target.id;
    let newColors = [];
    if (colors.length >= 5) {
      newColors = [...colors.slice(1), color];
    } else {
      newColors = colors.concat(color);
    }
    this.setState({
      colors: newColors,
    });
  }

  onCanvasMouseEnter(e) {
    const canvas = this.rainbowRef.current;
    const mousePosition = this.updateCursorPosition(canvas, e);
    this.setState({
      lastX: mousePosition[0],
      lastY: mousePosition[1],
    });
  }

  onCanvasRainbowDragOver(e) {
    const { lastX, lastY } = this.state;
    const canvas = this.rainbowRef.current;
    const context = canvas.getContext('2d');
    const mousePosition = this.updateCursorPosition(canvas, e);
    context.beginPath();
    const gradient = this.getGradient(context);
    context.strokeStyle = gradient;
    context.lineWidth = 200;
    context.lineJoin = 'bevel';
    context.lineCap = 'round';
    context.moveTo(lastX, lastY);
    context.lineTo(mousePosition[0], mousePosition[1]);
    context.stroke();
    context.closePath();
    this.setState({
      lastX: mousePosition[0],
      lastY: mousePosition[1],
    });
  }

  getGradient(context) {
    const { colors, lastX, lastY } = this.state;
    const gradient = context.createLinearGradient(
      lastX - 100, lastY - 100, lastX + 100, lastY + 100,
    );
    let j = 0;
    let coord = 0;
    for (let i = 0; i < 5; i += 1) {
      if (j > colors.length - 1) j = 0;
      gradient.addColorStop(coord, colors[j]);
      coord += 0.2;
      gradient.addColorStop(coord, colors[j]);
      j += 1;
    }
    return gradient;
  }

  selectImage(e) {
    this.setState({
      isImagePlacer: true,
      currImage: e.target,
    });
  }

  placeTextImage() {
    const canvas = this.textRef.current;
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src="./images/happy_pride_nyc.png";
    image.onload = () => {
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    }
  }

  placeImage(e) {
    const { currImage, isImagePlacer } = this.state;
    if (isImagePlacer) {
      const canvas = this.stickersRef.current;
      const cursorPos = this.updateCursorPosition(canvas, e);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(
        currImage,
        (cursorPos[0] - 2 * currImage.width), (cursorPos[1] - 2 * currImage.height),
      );
      this.setState({
        isImagePlacer: false,
        currImage: null,
      });
    }
  }

  toggleDragVisibility() {
    const { isDragging } = this.state;
    this.setState({
      isDragging: !isDragging,
    });
  }

  updateCursorPosition(canvas, e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;
    return [x, y];
  }

  resetCanvas() {
    const stickersCanvas = this.stickersRef.current;
    const stickersCtx = stickersCanvas.getContext('2d');
    stickersCtx.clearRect(0, 0, stickersCanvas.width, stickersCanvas.height);

    const rainbowCanvas = this.rainbowRef.current;
    const rainbowCtx = rainbowCanvas.getContext('2d');
    rainbowCtx.clearRect(0, 0, rainbowCanvas.width, rainbowCanvas.height);
  }

  saveImage() {
    const rainbowCanvas = this.rainbowRef.current;
    const rainbowCtx = rainbowCanvas.getContext('2d');

    const textCanvas = this.textRef.current;
    const stickersCanvas = this.stickersRef.current;
    const logoCanvas = this.logoRef.current;

    rainbowCtx.drawImage(textCanvas, 0, 0);
    rainbowCtx.drawImage(stickersCanvas, 0, 0);
    rainbowCtx.drawImage(logoCanvas, 0, 0);

    const image = rainbowCanvas.toDataURL('image/png');
    this.setState({ image });
    this.toggleShareModal();
  }

  toggleShareModal() {
    const { isModal } = this.state;
    this.setState({
      isModal: !isModal,
    });
  }

  render() {
    const {
      isDragging, image, isModal, isImagePlacer,
    } = this.state;
    const logoVisibility = isDragging ? 'hidden' : 'visible';
    const imageCanvasPointer = isImagePlacer ? 'auto' : 'none';
    const url = 'https://queertriptheworld.s3.amazonaws.com/';
    return (
      <>
        <div className="poster-wrapper">
          <div className="poster-container">
            <div className="poster-canvas-container">
              <canvas id="poster-canvas-rainbow" width="1080" height="1080" ref={this.rainbowRef} onDragOver={this.onCanvasRainbowDragOver} onDragEnter={this.onCanvasMouseEnter} />
              <canvas id="poster-canvas-text" width="1080" height="1080" ref={this.textRef} />
              <canvas id="poster-canvas-stickers" width="1080" height="1080" ref={this.stickersRef} onClick={this.placeImage} style={{ pointerEvents: imageCanvasPointer }} />
              <canvas id="poster-canvas-logo" width="1080" height="1080" ref={this.logoRef} />
            </div>
          </div>
        </div>
        <div className="poster-controls-container">
          <div className="poster-controls-colors">
            <div>Colors</div>
            <div className="poster-color-wheels">
              <div id="#000" style={{ backgroundColor: '#000' }} onClick={this.onColorClick} />
              <div id="rgb(132, 54, 7)" style={{ backgroundColor: 'rgb(132, 54, 7)' }} onClick={this.onColorClick} />
              <div id="rgb(214, 42, 25)" style={{ backgroundColor: 'rgb(214, 42, 25)' }} onClick={this.onColorClick} />
              <div id="rgb(250, 112, 21)" style={{ backgroundColor: 'rgb(250, 112, 21)' }} onClick={this.onColorClick} />
              <div id="rgb(250, 190, 72)" style={{ backgroundColor: 'rgb(250, 190, 72)' }} onClick={this.onColorClick} />
              <div id="rgb(47, 200, 120)" style={{ backgroundColor: 'rgb(47, 200, 120)' }} onClick={this.onColorClick} />
              <div id="rgb(15, 61, 163)" style={{ backgroundColor: 'rgb(15, 61, 163)' }} onClick={this.onColorClick} />
              <div id="rgb(62, 61, 163)" style={{ backgroundColor: 'rgb(62, 61, 163)' }} onClick={this.onColorClick} />
              <div id="rgb(7, 177, 224)" style={{ backgroundColor: 'rgb(7, 177, 224)' }} onClick={this.onColorClick} />
              <div id="rgb(210, 67, 175)" style={{ backgroundColor: 'rgb(210, 67, 175)' }} onClick={this.onColorClick} />
              <div id="#fff" style={{ backgroundColor: '#fff' }} onClick={this.onColorClick} />
            </div>
          </div>
          <div className="poster-logo-container">
            <div className="poster-drag" style={{ visibility: logoVisibility }}>Drag me</div>
            <img className="poster-path" src={`${url}path.png`} alt="" style={{ visibility: logoVisibility }} />
            <img className="poster-logo" src={`${url}logo.png`} alt="" draggable="true" onDragStart={this.toggleDragVisibility} onDragEnd={this.toggleDragVisibility} />
          </div>
          <div className="poster-controls-stickers">
            <div>Stickers</div>
            <div className="poster-stickers">
              {/* <img src="/public/images/frank.jpeg" onClick={this.selectImage} />
              <img src="/public/images/frida.png" onClick={this.selectImage} />
              <img src="/public/images/pride.png" onClick={this.selectImage} /> */}
            </div>
          </div>
        </div>
        <div className="poster-controls-share-container">
          <button type="button" className="rounded-button" onClick={this.resetCanvas}>Reset</button>
          <button type="button" className="rounded-button" onClick={this.saveImage}>Share your pride</button>
        </div>
        {isModal && <ShareModal close={this.toggleShareModal} image={image} />}
      </>
    );
  }
}

export default Poster;
