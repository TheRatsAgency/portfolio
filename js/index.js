
var app = angular.module("sampleApp", ["firebase"]);


// try it one way
var userRef = new Firebase("https://myApp.firebaseio.com/users")
var userFavoriteRef = userRef.child($scope.user_id).child("favorited_posts")
$scope.favoritedPosts = $firebaseArray(userFavoriteRef)
var postRef = new Firebase("https://myApp.firebaseio.com/Posts")
$scope.posts = $firebaseArray(postRef)
</script>

// try it anotehr way
function MyCtrl($scope) {
    $scope.opts = [
        {value: 111, text: '<b>Software Leader</b>' },
        {value: 222, text: '<i>Creative Thinker</i>' }
    ];
}
