import THREE from 'three';

export default class Force3 {
  constructor(mass) {
    this.velocity = new THREE.Vector3();
    this.acceleration = new THREE.Vector3();
    this.anchor = new THREE.Vector3();
    this.mass = (mass) ? mass : 1;
  }
  updateVelocity() {
    this.acceleration.divideScalar(this.mass);
    this.velocity.add(this.acceleration);
  }
  applyForce(vector) {
    this.acceleration.add(vector);
  }
  applyFriction(mu, normal) {
    var force = this.acceleration.clone();
    if (!normal) normal = 1;
    force.multiplyScalar(-1);
    force.normalize();
    force.multiplyScalar(mu);
    this.applyForce(force);
  }
  applyDrag(value) {
    var force = this.acceleration.clone();
    force.multiplyScalar(-1);
    force.normalize();
    force.multiplyScalar(this.acceleration.length() * value);
    this.applyForce(force);
  }
  applyHook(rest_length, k) {
    var force = this.velocity.clone().sub(this.anchor);
    var distance = force.length() - rest_length;
    force.normalize();
    force.multiplyScalar(-1 * k * distance);
    this.applyForce(force);
  }
}
