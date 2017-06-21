angular.module("seekAdventure").service("mainService",  function(   $http   ){
    this.getKeysData = () =>{
        return $http({
            method: "GET",
            url:"https://staging.seek.fit/api/challenge/?loot_type=4"
        })
    };
    this.getCoinData = () =>{
        return $http({
            method: "GET",
            url: "https://staging.seek.fit/api/challenge/?loot_type=5"
        })
    }
    this.getCinemarkData = () =>{
        return $http({
            method: "GET",
            url: "https://staging.seek.fit/api/challenge/?loot_type=637"
        })
    }

});
