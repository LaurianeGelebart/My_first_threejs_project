<template>
  <div class="Interface3D">
    <div class="scene3D" ref="scene3D"></div>
  </div>
</template>

<script>
import { createCamera, createRenderer, createScene } from "@/three/sceneSetUp";
import { retrieveData } from "@/three/modelsLoarder";
import { animate } from "@/three/animation";

export default {
  name: "Interface3D",
  
  async mounted() {
    const canvas = this.$refs.scene3D;

    // Créer la scène 3D
    this.scene = createScene();
    this.renderer = createRenderer(canvas);
    this.camera = createCamera();

    // Récupérer les models
    await retrieveData(this.scene);

    // Lancer la boucle d'animation
    animate(this.camera, this.scene, this.renderer);

    // Ecouter les actions sur la scène
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