demoApp.controller('DemoController', function($scope){
	$scope.name = 'Test Name';
	$scope.number = 0;
	$scope.arrRooms = [];
	$scope.totalPrice = 0;



  $scope.setRoom = function () {
  	$scope.arrRooms = [];
  	for (var i = 0; i < $scope.number; i++) { 
	    $scope.arrRooms.push({name:'',price:0}) 
	  } 
  }
  $scope.calPrice = function(){
  	$scope.totalPrice = 0;
  	angular.forEach($scope.arrRooms, function(value, key) {
  		 if(!isNaN(value.price))
  			$scope.totalPrice = $scope.totalPrice + parseInt(value.price);
		});
	}


  $scope.ssss = function(){
  	$scope.totalPrice = 0;
	}
  // $scope.count = 0;

	// $scope.array = [];

 //  $scope.add = function () {
 //    $scope.array.push({ name: ''});
 //  }

 //  $scope.add();
})

demoApp.directive('numberConverter', function() {
  return {
    priority: 1,
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attr, ngModel) {
      function toModel(value) {
        return "" + value; // convert to string
      }

      function toView(value) {
        return parseInt(value); // convert to number
      }

      ngModel.$formatters.push(toView);
      ngModel.$parsers.push(toModel);
    }
  };
});

// //Directive that returns an element which adds buttons on click which show an alert on click
// demoApp.directive("addbuttonsbuttonaaaa", function(){
// 	return {
// 		restrict: "E",
// 		template: "<button addbuttons>Click to add buttons</button>"
// 	}
// });

// //Directive for adding buttons on click that show an alert on click
// demoApp.directive("addbuttons", function($compile){
// 	return function(scope, element, attrs){
// 		element.bind("click", function(){
// 			scope.count++;
// 			angular.element(document.getElementById('space-for-buttons')).append($compile("<div><button class='btn btn-default' data-alert="+scope.count+">Show alert #"+scope.count+"</button></div>")(scope));
// 		});
// 	};
// });

// //Directive for showing an alert on click
// demoApp.directive("alert", function(){
// 	return function(scope, element, attrs){
// 		element.bind("click", function(){
// 			console.log(attrs);
// 			alert("This is alert #"+attrs.alert);
// 		});
// 	};
// });