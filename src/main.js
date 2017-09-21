import Particle from './particle';
import './style.css';

const canvas = document.querySelector('#canvas');
canvas.width = window.innerWidth-25;
canvas.height = window.innerHeight-25;
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';

const particles = [];
const NUM_PARTICLES = 22;

for (let i = 0; i < NUM_PARTICLES; i++) particles.push(new Particle(canvas));



const animate = () => {

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	particles.forEach(p =>{
		p.update(canvas);
		p.draw(ctx);
	});

	// console.log('x = '+x+', y = '+y);
	requestAnimationFrame(animate);
};

animate();
