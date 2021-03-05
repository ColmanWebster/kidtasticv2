import React from "react";
import { fabric } from "fabric";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import colors from "./randomColorPicker";
import Button from "@material-ui/core/Button";
import "./fabz.css";
import chars from "./randomCharacters";
const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
const randomChar = () => {
  return chars[Math.floor(Math.random() * chars.length)];
};

const color1 = colors[Math.floor(Math.random() * colors.length)];
const color2 = colors[Math.floor(Math.random() * colors.length)];
console.log(color1, color2);

const Fabz = () => {
  const { editor, onReady, selectedObjects } = useFabricJSEditor();
  const onAddCircle = () => {
    editor.canvas.add(rect);
  };
  const onAddRectangle = () => {
    editor.canvas.add(circlea);
  };
  const onAddTriangle = () => {
    editor.canvas.add(triangles);
  };
  const imageee = () => {
    new fabric.Image.fromURL(randomChar(), function (oImg) {
      editor?.canvas.add(oImg);
    });
  };

  const image2 = () => {
    new fabric.Image.fromURL(
      "./assets/images/circular/spider.jpg",
      function (oImg) {
        editor?.canvas.add(oImg);
      }
    );
  };
  const triangles = new fabric.Triangle({
    width: 100,
    height: 100,
    fill: randomColor(),
    left: 50,
    top: 50,
  });
  triangles.set({ strokeWidth: 3, stroke: randomColor() });

  const circlea = new fabric.Circle({
    radius: 90,
    fill: randomColor(),
    left: 15,
    top: 10,
  });
  circlea.set("angle", 15).set("flipY", true);
  circlea.set({ strokeWidth: 3, stroke: randomColor() });

  const rect = new fabric.Rect({
    top: 30,
    left: 100,
    fill: randomColor(),
    width: 34,
    height: 60,
    angle: 45,
  });
  rect.set({ strokeWidth: 3, stroke: randomColor() });
  rect.set("angle", 90).set("flipY", true);

  return (
    <>
      <div className="buttonHolder">
        <Button
          onClick={onAddCircle}
          style={{
            backgroundColor: "#ffcce7",
            color: "black",
            border: "dashed 2px black",
          }}
        >
          Rectangles!
        </Button>
        <Button
          onClick={onAddRectangle}
          style={{
            backgroundColor: "#daf2dc",
            color: "black",
            border: "dashed 2px black",
          }}
        >
          Circles!
        </Button>
        <Button
          onClick={onAddTriangle}
          style={{
            backgroundColor: "#81b7d2",
            color: "black",
            border: "dashed 2px black",
          }}
        >
          Triangles!
        </Button>
        <Button
          onClick={imageee}
          style={{
            backgroundColor: "#4d5198",
            color: "black",
            border: "dashed 2px black",
          }}
        >
          Fun!!
        </Button>
        {/* <button onClick={imageee}>testing</button> */}
      </div>

      <FabricJSCanvas className="sample-canvas" onReady={onReady} />
    </>
  );
};

export default Fabz;
