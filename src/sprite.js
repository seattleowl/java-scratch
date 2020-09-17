import Vector2 from "./util/vector2.js";

export default class Sprite {
	constructor(config) {
		this.pos = new Vector2(config.x, config.y);
	}
}
