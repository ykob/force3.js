# force3

JavaScript class for calculating acceleration.  
this class has a simple method such as Friction, drag, Hooke's law.  
depend on [glMatrix](http://glmatrix.net/) or [three.js](http://threejs.org/).

加速度計算のためのJavaScriptのクラスです。  
摩擦、抗力、フックの法則などのための、簡単なメソッドも含まれています。  
[glMatrix](http://glmatrix.net/)または[three.js](http://threejs.org/)に依存しています。

it's used as below.

以下のような使い方をします。

    import force3 from 'force3.js';
    const velocity = [1, 0, 0];
    const acceleration = [0, 0, 0];
    const anchor = [0, 1, 0];
    force3.applyHook(velocity, acceleration, anchor, 0, 0.1);
    force3.applyDrag(acceleration, 0.1);
    force3.updateVelocity(velocity, acceleration, 1);

    const force = new Force3();
    force.applyHook(0, 0.1);
    force.applyDrag(0.1);
    force.updateVelocity();
