import * as THREE from "three";

/**
 * Crée une nouvelle scène Three.js avec des lumières configurées et une couleur de fond.
 *
 * @returns {THREE.Scene} La scène Three.js créée.
 *
 * @example
 * const scene = createScene();
 */
export const createScene = () => 
{
    const scene = new THREE.Scene();
  
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    scene.background = new THREE.Color(0xfafafa);

    return scene;
};

/**
 * Crée et configure le renderer WebGL, y compris la taille, le ratio de pixel, et la gestion des ombres.
 *
 * @param {number} width - La largeur de la fenêtre.
 * @param {number} height - La hauteur de la fenêtre.
 * @param {HTMLElement} container - L'élément DOM dans lequel le renderer sera ajouté.
 * @returns {THREE.WebGLRenderer} Le renderer WebGL configuré.
 *
 * @example
 * const renderer = createRenderer(window.innerWidth, window.innerHeight, document.body);
 */
export const createRenderer = (width, height, container) => 
{
    const renderer = new THREE.WebGLRenderer();
    
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);
    return renderer;
};

/**
 * Crée et configure une caméra Perspective pour la scène.
 *
 * @param {number} width - La largeur de la fenêtre.
 * @param {number} height - La hauteur de la fenêtre.
 * @returns {THREE.PerspectiveCamera} La caméra Perspective créée.
 *
 * @example
 * const camera = createCamera(window.innerWidth, window.innerHeight);
 */
export const createCamera = (width, height) => 
{
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100);
    camera.position.set(0, 0, 1);
    camera.lookAt(0, 0, 0);
    return camera;
};