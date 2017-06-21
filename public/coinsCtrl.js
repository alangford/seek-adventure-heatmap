angular.module("seekAdventure").controller("coinCtrl",   function(   $scope, mainService  ) {
    let coinMap = L.map('coinMap').setView([1.505, -0.09], 1);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(coinMap);
        mainService.getCoinData().then(res=>{
            let heat = L.heatLayer(res,{
                radius: 25,
            }).addTo(coinMap);
        });
});

