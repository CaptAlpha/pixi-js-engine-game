const Application = PIXI.Application;

const app = new Application({
    width: 800,
    height: 800,
    transparent: false,
    antialias: false
}
);
app.renderer.backgroundColor = 0xA0E7E5;
app.renderer.resize(window.innerWidth, window.innerHeight);
app.renderer.view.style.position = 'absolute';


document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;

const rectangle = new Graphics();
rectangle.beginFill(0xB4F8C8)
.lineStyle(4, 0xF652A0, 1)
.drawRect(200, 200, 100, 120)
.endFill();

app.stage.addChild(rectangle);

const circle = new Graphics();
circle.beginFill(0xB4F8C8)
.lineStyle(4, 0xF652A0, 1)
.drawCircle(200, 200, 100)
.endFill();

app.stage.addChild(circle);

const line = new Graphics();
line.lineStyle(4, 0xF652A0, 1)
.moveTo(2000, 2000)
.lineTo(200, 200)

app.stage.addChild(line);

const torus = new Graphics();
torus.beginFill(0xFFFFFF)
.drawTorus(100, 600, 80, 100)
.endFill();

app.stage.addChild(torus);