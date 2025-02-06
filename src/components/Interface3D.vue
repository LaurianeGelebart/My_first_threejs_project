<template>
  <div class="Interface3D">
    <div class="scene3D" ref="scene3D"></div>
  </div>
</template>

<script>
import { createCamera, createRenderer, createScene } from "@/three/sceneSetUp";
import { retrieveData } from "@/three/modelsLoarder";
import { animate } from "@/three/animation";
import { onCursorMove, onCanvasClick } from "@/three/eventHandlers";

export default {
  name: "Interface3D",

  async mounted() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const canvas = this.$refs.scene3D;

    // Créer la scène 3D
    const scene = createScene();
    const renderer = createRenderer(width, height, canvas);
    const camera = createCamera(width, height);
    this.sceneContext = {
      scene,
      camera,
      renderer,
    };

    // Récupérer les models
    await retrieveData(this.sceneContext.scene);

    // Lancer la boucle d'animation
    animate(this.sceneContext);

    // Ecouter les actions sur la scène
    canvas.addEventListener(
      "mousemove",
      (event) => onCursorMove(event, this.sceneContext.camera, canvas),
      false
    );
    canvas.addEventListener(
      "click",
      (event) =>
        onCanvasClick(event, this.sceneContext.camera, this.sceneContext.scene),
      false
    );
  },

  beforeUnmount() {
    const canvas = this.$refs.scene3D;
    canvas.removeEventListener("mousemove", (event) =>
      onCursorMove(event, this.sceneContext.camera, canvas)
    );
    canvas.removeEventListener("click", (event) =>
      onCanvasClick(event, this.sceneContext.camera, this.sceneContext.scene)
    );
    if (this.sceneContext) {
      this.sceneContext.renderer.dispose();
      this.sceneContext.scene.clear();
    }
  },
};
</script>

<style>
.scene3D {
  background: rgb(255, 255, 255);
}

.scene3D canvas {
  width: 100vw !important; /* Largeur CSS */
  height: 90vh !important; /* Hauteur CSS */
}
</style>