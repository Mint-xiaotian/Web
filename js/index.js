window.addEventListener("scroll", function (e) {
	if (document.documentElement.scrollTop > window.innerHeight * 1.5) {
		if (window.oked != true) {
			var PI2 = Math.PI * 2;
			Math.dist = function (c, d) {
				var e = c.x - d.x;
				var f = d.y - d.y;
				return Math.sqrt(Math.pow(e, 2), Math.pow(f, 2));
			};
			var Stars = function (b) {
				if (b === undefined) {
					b = {};
				}
				var f = new Date().getTime();
				var a = this;
				this.stars = b.stars;
				this.velocity = b.velocity || 1;
				this.radius = b.radius || 3;
				this.target = b.target;
				this.trail = false;
				this.alpha = 0;
				this.starsCounter = 1000;
				var c = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
				var d = Math.sqrt(Math.pow(c.x, 2), Math.pow(c.y, 2));
				this.init = function () {
					this.canvas = document.createElement("canvas");
					document.querySelector(this.target).appendChild(this.canvas);
					this.context = this.canvas.getContext("2d");
					this.start();
					this.resize();
					window.addEventListener("resize", this.resize.bind(this));
				};
				this.start = function () {
					this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
					if (this.stars.length == 0) {
						for (var g = 0; g < this.starsCounter; g++) {
							this.stars.push(new e());
						}
					}
				};
				this.resize = function () {
					this.canvas.width = window.innerWidth;
					this.canvas.height = window.innerHeight;
					c.x = this.canvas.width / 2;
					c.y = this.canvas.height / 2;
				};
				this.animate = function () {
					window.requestAnimationFrame(this.animate.bind(this));
					this.render();
				};
				this.render = function () {
					f = new Date().getTime() * 0.00015;
					if (this.trail) {
						this.context.fillStyle = "rgba(34, 34, 34, " + this.alpha + ")";
						this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
					} else {
						this.context.fillStyle = "rgb(34,34,34)";
						this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
					}
					for (var g = 0; g < this.stars.length; g++) {
						this.stars[g].draw(this.context);
					}
				};
				var e = function () {
					this.offset = Math.random() * d;
					this.velocity = Math.random() * a.velocity;
					this.coords = { x: c.x + this.offset, y: c.y + this.offset };
					var g = Math.dist(this.coords, c);
					this.alpha = g / d;
					this.radius = Math.random() * a.radius;
					this.fillColor = "rgba(255," + ~~(Math.random() * 160) + "," + ~~(Math.random() * 255) + "," + this.alpha + ")";
					this.draw = function (h) {
						var i = f * this.velocity;
						this.coords = { x: c.x + Math.sin(i) * this.offset, y: c.y + Math.cos(i) * this.offset };
						h.fillStyle = this.fillColor;
						h.beginPath();
						h.arc(this.coords.x, this.coords.y, this.radius, 0, PI2);
						h.fill();
						h.closePath();
					};
					return this;
				};
				this.init();
				this.animate();
				return this;
			};
			var _stars = new Stars({ target: "#about-bg", stars: [] });
			var _stars2 = new Stars({ target: "#about-bg-s", stars: _stars.stars });
			window.oked = true;
		}
	}
});
