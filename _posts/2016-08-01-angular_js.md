---
layout: post
categories: [javascript, backbone, node.js]
title: AngularJS
summary: social login
author: poojapauskar
profile: https://avatars3.githubusercontent.com/u/9946567?v=3&amp;s=460
image: shopping.jpg
user_image: Pooja.jpg
---

**AngularJS**

AngularJS is a JavaScript framework.

**AngularJS extends HTML with ng-directives**

- The ng-app directive defines an AngularJS application.
- The ng-model directive binds the value of HTML controls (input, select, textarea) to application data.
- The ng-bind directive binds application data to the HTML view.
- The ng-repeat displays a list using the items in the array.

**Here's a Shopping App written using Angular JS**

```
<!DOCTYPE html>
<html>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
<body>

<script>
var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function($scope) {
    $scope.products = ["Milk", "Bread", "Cheese"];
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addMe) {return;}
        if ($scope.products.indexOf($scope.addMe) == -1) {
            $scope.products.push($scope.addMe);
        } else {
            $scope.errortext = "The item is already in your shopping list.";
        }
    }
    $scope.removeItem = function (x) {
        $scope.errortext = "";
        $scope.products.splice(x, 1);
    }
});
</script>

<div ng-app="myShoppingList" ng-cloak ng-controller="myCtrl" class="w3-card-2 w3-margin" style="max-width:400px;">
  <header class="w3-container w3-light-grey w3-padding-16">
    <h3>My Shopping List</h3>
  </header>
  <ul class="w3-ul">
    <li ng-repeat="x in products" class="w3-padding-16">{{x}}<span ng-click="removeItem($index)" style="cursor:pointer;" class="w3-right w3-margin-right">×</span></li>
  </ul>
  <div class="w3-container w3-light-grey w3-padding-16">
    <div class="w3-row w3-margin-top">
      <div class="w3-col s10">
        <input placeholder="Add shopping items here" ng-model="addMe" class="w3-input w3-border w3-padding">
      </div>
      <div class="w3-col s2">
        <button ng-click="addItem()" class="w3-btn w3-padding w3-green">Add</button>
      </div>
    </div>
    <p class="w3-padding-left w3-text-red">{{errortext}}</p>
  </div>
</div>

</body>
</html>
```

**Features**

- Two Way Data-Binding
- Templates
- MVC
- Dependency Injection
- Directives



