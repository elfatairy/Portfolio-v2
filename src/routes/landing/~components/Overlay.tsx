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

    let time = 0;
    const h = function (x: number, y: number, red: number, green: number, blue: number) {
      (context.fillStyle = `rgb(${red}, ${green}, ${blue})`), context.fillRect(x, y, 5, 5);
    };
    const redValue = function (x: number, y: number, time: number) {
      return Math.floor(150 + 64 * Math.cos((x * x - y * y) / 300 + time));
    };
    const greenValue = function (x: number, y: number, time: number) {
      return Math.floor(
        200 +
        64 * Math.sin((x * x * Math.cos(time / 4) + y * y * Math.sin(time / 3)) / 300)
      );
    };
    const blueValue = function (x: number, y: number, time: number) {
      return Math.floor(
        100 +
        64 *
        Math.sin(
          5 * Math.sin(time / 9) +
          ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
        )
      );
    };
    const animate = function () {
      let x: number, y: number;
      for (x = 0; x <= 30; x++)
        for (y = 0; y <= 30; y++) h(x, y, redValue(x, y, time), greenValue(x, y, time), blueValue(x, y, time));

      time += 0.025;
      window.requestAnimationFrame(animate);
    };
    animate();
  }, [])

  return <canvas aria-hidden id="canvas" className="absolute w-full h-full opacity-20 md:opacity-40" width={32} height={32} />
}