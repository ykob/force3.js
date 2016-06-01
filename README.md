# force3

JavaScript class for calculating acceleration.  
this class has a simple method such as Friction, drag, Hooke's law.
depend on [three.js](http://threejs.org/).

加速度計算のためのJavaScriptのクラスです。
摩擦、抗力、フックの法則などのための、簡単なメソッドも含まれています。
[three.js](http://threejs.org/)に依存しています。

it's used as below.

以下のような使い方をします。

    const force = new Force3();
    force.applyHook(0, 0.1);
    force.applyDrag(0.1);
    force.updateVelocity();
