1. Sort (Insertion sort):

    *Run `sort([3,2,1]);`*
    *Result `[1, 2, 3]`*

1. Element search

    *Run `search([1, -2, 0, 3], function(element){return element > 0})`*
    *Result `1`*

1. Filter

    *Run `filter([0, -1, 2, -3, 5], function(element) {return element > 0});`*
    *Result `[2, 5]`*

1. Map

    *Run `map([1,2,3,4,5], function(element){return element * 2});`*
    *Result `[2, 4, 6, 8, 10]`*

1. Average

    *Run `averageOfEven([1,2,3,4,5,6,7,8])`*
    *Result `4`*

1. Robot toy

    *Run `robot = new RobotToy();`*
    *Result `RobotToy {x: 0, y: 0, direction: 0}`*
   
    *Run `robot.report()`*
    *Result `X: 0, Y: 0, North`*
   
    *Run `robot.move()`*
    *Run `robot.report()`*
    *Result `X: 0, Y: 1, North`*
   
    *Run `robot.right()`*
    *Run `robot.report()`*
    *Result `X: 0, Y: 1, East`*
   
    *Run `robot.move()`*
    *Run `robot.move()`*
    *Run `robot.report()`*
    *Result `X: 2, Y: 1, East`*
   
    *Run `robot.left()`*
    *Run `robot.left()`*
    *Run `robot.move()`*
    *Run `robot.report()`*
    *Result `X: 1, Y: 1, West`*
   
    *Run `robot.left()`*
    *Run `robot.move()`*
    *Run `robot.report()`*
    *Result `X: 1, Y: 0, South`*
   
    *Run `robot.left()`*
    *Run `robot.move()`*
    *Run `robot.report()`*
    *"Result `X: 2, Y: 0, East`*

1. Triangular number

    *Run `triangle(500)`*
    *Result `76576500`*