angular.module("seekAdventure").controller("keyCtrl",   function(   $scope, mainService ) {

        let keyMap = L.map('keyMap').setView([1.505, -0.09], 1);

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(keyMap);


        mainService.getKeysData().then(res=>{
            let heat = L.heatLayer(res.data.features["0"].geometry.coordinates,{
                radius: 25,
            }).addTo(keyMap);
        });




});
