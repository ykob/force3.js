const glMatrix = require('gl-matrix');

export default class Force3 {
  constructor(mass) {
    this.velocity = [0, 0, 0];
    this.acceleration = [0, 0, 0];
    this.anchor = [0, 0, 0];
    this.mass = (mass) ? mass : 1;
  }
  updateVelocity() {
    glMatrix.vec3.scale(this.acceleration, this.acceleration, 1 / this.mass);
    glMatrix.vec3.add(this.velocity, this.velocity, this.acceleration);
  }
  applyForce(vector) {
    glMatrix.vec3.add(this.acceleration, this.acceleration, vector);
  }
  applyFriction(mu, n) {
    const force = [0, 0, 0];
    glMatrix.vec3.scale(force, this.acceleration, -1);
    const normal = (n) ? n : 1;
    glMatrix.vec3.normalize(force, force);
    glMatrix.vec3.scale(force, force, mu);
    this.applyForce(force);
  }
  applyDrag(value) {
    const drag = [0, 0, 0];
    glMatrix.vec3.scale(drag, this.acceleration, -1);
    glMatrix.vec3.normalize(drag, drag);
    glMatrix.vec3.scale(drag, drag, glMatrix.vec3.length(acceleration) * value);
    this.applyForce(drag);
  }
  applyHook(rest_length, k) {
    const hook = [0, 0, 0];
    glMatrix.vec3.sub(hook, this.velocity, this.anchor);
    const distance = glMatrix.vec3.length(hook) - rest_length;
    glMatrix.vec3.normalize(hook, hook);
    glMatrix.vec3.scale(hook, hook, -1 * k * distance);
    this.applyForce(hook);
  }
}
