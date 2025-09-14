import { useEffect } from "react"

export default function Overlay() {
  return (
    <div className="absolute inset-0">
      <Canvas />
      <div
        className="absolute inset-0"
        style={{ background: 'var(--background-gradient)' }}
      />
    </div>
  )
}

function Canvas() {
  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    if (!canvas) return

    const context = canvas.getContext('2d') as CanvasRenderingContext2D
    if (!context) return

    let u = 0;
    const h = function (b: number, M: number, B: number, z: number, k: number) {
      (context.fillStyle = `rgb(${B}, ${z}, ${k})`), context.fillRect(b, M, 5, 5);
    };
    const C = function (b: number, M: number, B: number) {
      return Math.floor(150 + 64 * Math.cos((b * b - M * M) / 300 + B));
    };
    const w = function (b: number, M: number, B: number) {
      return Math.floor(
        200 +
        64 * Math.sin((b * b * Math.cos(B / 4) + M * M * Math.sin(B / 3)) / 300)
      );
    };
    const p = function (b: number, M: number, B: number) {
      return Math.floor(
        100 +
        64 *
        Math.sin(
          5 * Math.sin(B / 9) +
          ((b - 100) * (b - 100) + (M - 100) * (M - 100)) / 1100
        )
      );
    };
    const c = function () {
      let b: number, M: number;
      for (b = 0; b <= 30; b++)
        for (M = 0; M <= 30; M++) h(b, M, C(b, M, u), w(b, M, u), p(b, M, u));
      (u = u + 0.025), window.requestAnimationFrame(c);
    };
    c();
  }, [])

  return <canvas aria-hidden id="canvas" className="absolute w-full h-full opacity-20 md:opacity-40" width={32} height={32} />
}