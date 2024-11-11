// import waveDoc from "~/assets/animations/wave.html?raw";
import waveWireframeDoc from "~/assets/animations/wave_wireframe.html?raw";

export default function SpatialWave() {
  return <iframe class="w-full h-full" srcdoc={waveWireframeDoc}></iframe>;
}
