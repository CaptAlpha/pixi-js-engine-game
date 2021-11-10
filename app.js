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