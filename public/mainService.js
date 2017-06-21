angular.module("seekAdventure").service("mainService",  function(   $http   ){
    this.getKeysData = () =>{
        return $http({
            method: "GET",
            url:"https://staging.seek.fit/api/challenge/?loot_type=4"
        }).then(res=>{
            return res.data.features["0"].geometry.coordinates.map(val=>val.reverse())
        })
    };
    this.getCoinData = () =>{
        return $http({
            method: "GET",
            url: "https://staging.seek.fit/api/challenge/?loot_type=5"
        }).then(res=>{
            return res.data.features["0"].geometry.coordinates.map(val=>val.reverse())
        })
    };
    this.getCinemarkData = () =>{
        return $http({
            method: "GET",
            url: "https://staging.seek.fit/api/challenge/?loot_type=637"
        }).then(res=>{
            return res.data.features["0"].geometry.coordinates.map(val=>val.reverse())
        })
    }

});
