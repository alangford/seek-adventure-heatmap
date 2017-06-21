angular.module("seekAdventure").controller("cinemarkCtrl",   function(   $scope, mainService  ) {
    let cinemarkMap = L.map('cinemarkMap').setView([1.505, -0.09], 1);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(cinemarkMap);


        mainService.getCinemarkData().then(res=>{
            let heat = L.heatLayer(res.data.features["0"].geometry.coordinates,{
                radius: 25,
            }).addTo(cinemarkMap);
        });

});


