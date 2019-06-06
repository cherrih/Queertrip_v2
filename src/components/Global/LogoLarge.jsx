import React, { Component } from 'react';
import * as THREE from 'three';

class LogoLarge extends Component {
  constructor(props) {
    super(props);
    this.animate = this.animate.bind(this);
  }
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    // Add Scene
    this.scene = new THREE.Scene()
    // Add Camera
    this.camera = new THREE.PerspectiveCamera(
      50,
      width / height,
      0.1,
      10000
    )
    this.camera.position.z = -3000;

    // Add Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true
    });
    this.renderer.setClearColor('#fff', 1);
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.mount.appendChild(this.renderer.domElement);

    const loader = new THREE.TextureLoader();

    const texture = loader.load("./images/queertrip_skin3.png");
    const geometry = new THREE.SphereGeometry(800, 128, 128);
    const material = new THREE.MeshBasicMaterial({
      map: texture
    })
    this.logo = new THREE.Mesh(geometry, material);
    this.logo.rotation.z = -25 * Math.PI / 180;
    
    this.scene.add(this.logo);
    this.start();
  }

  componentWillUnmount(){
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }
  stop() {
    cancelAnimationFrame(this.frameId)
  }

  animate() {
    this.camera.lookAt(this.scene.position);
    this.logo.rotateY(0.009);
    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return(
      <div
        style={{ width: '400px', height: '400px' }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

export default LogoLarge;