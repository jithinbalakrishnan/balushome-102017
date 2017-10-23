angular.module('balushome', ['route'])
    .controller('mainCtrl', function ($scope){
        $scope.active = 0;
        $scope.furniture = [ {
            type:"sofa",
            category:"Home Sofa",
            sofaImage:"images/sofa/home-sofa-interior.jpg",
            seater:"4 Seater L Shape",
            size:"4 Meter",
            color:"Beige",
            material:"Fabric",
            manufactureredBy:"Al Shumoe Upholstery"
        },
            {
                type:"Sofa",
                category:"Sectional Sofa",
                sofaImage:"images/sofa/home-sectional-sofa-set.jpg",
                seater:"7/8 Seater",
                size:"4.7 Meter (2.5 + 2.2)",
                color:"Grey",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            }, {
                type:"Sofa",
                category:"Home Sofa",
                sofaImage:"images/sofa/home-sofa.jpg",
                seater:" 7/8 Seater",
                size:"5 Meter",
                color:"Grey",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"Sofa",
                category:"Arabian Sofa",
                sofaImage:"images/sofa/arabian-sofa.jpg",
                seater:"8 Seater",
                size:"2M+2M+3M",
                color:"Blue",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"Sofa",
                category:"Arabian Sofa",
                sofaImage:"images/sofa/arabian-sofas-mosque.jpg",
                seater:"Not mentioned",
                size:"7 Meter",
                color:"Dark Grey",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"Sofa",
                category:"Arabian Sofa",
                sofaImage:"images/sofa/arabian-sofas.jpg",
                seater:"Not mentioned",
                size:"5 Meter",
                color:"White",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"Sofa",
                category:"Single/1 Seater Sofa",
                sofaImage:"images/sofa/1-seater-sofas.jpg",
                seater:"1 Seater",
                size:"Not mentioned",
                color:"Black + Yellow",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"Sofa",
                category:"Single/1 Seater Sofa",
                sofaImage:"images/sofa/1-seater-sofa-coffe-shops.jpg",
                seater:"1 Seater",
                size:"Not mentioned",
                color:"Brown",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"Sofa",
                category:"Single/1 Seater Sofa",
                sofaImage:"images/sofa/single-seaters.jpg",
                seater:"1 Seater",
                size:"Not mentioned",
                color:"Beige & Blue",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"sofa",
                category:"Home Sofa",
                sofaImage:"images/sofa/2-seater-sofa.jpg",
                seater:"2 Seater",
                size:"Not mentioned",
                color:"White",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"sofa",
                category:"Home Sofa",
                sofaImage:"images/sofa/5-meter-sofa.jpg",
                seater:"7/8",
                size:"5 Meter",
                color:"Silver",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"sofa",
                category:"Home Sofa",
                sofaImage:"images/sofa/arch-sofa.jpg",
                seater:"2 Seater",
                size:"2 Meter",
                color:"Grey",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"sofa",
                category:"Corner Sofa",
                sofaImage:"images/sofa/corner-sofa.jpg",
                seater:"7/8 Seater",
                size:"5 Meter",
                color:"Grey",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"sofa",
                category:"Sectional Sofa",
                sofaImage:"images/sofa/fabric-sofa.jpg",
                seater:"7/8 Seater",
                size:"5 Meter",
                color:"Grey",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"sofa",
                category:"Home Sofa",
                sofaImage:"images/sofa/golden-single-seater.jpg",
                seater:"1 Seater",
                size:"Not mentioned",
                color:"Bisque",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"sofa",
                category:"Home Sofa Set",
                sofaImage:"images/sofa/home-sofa-set-2+1+1.jpg",
                seater:"4+3+1+1 Seater",
                size:"Not mentioned",
                color:"Bisque",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"sofa",
                category:"Office Sofa",
                sofaImage:"images/sofa/L-shape-sofa-leather.jpg",
                seater:"3 Seater:L Shape",
                size:"Not mentioned",
                color:"Black",
                material:"Leather",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"sofa",
                category:"Office Sofa",
                sofaImage:"images/sofa/leather-sofa.jpg",
                seater:"3 Seater:L Shape",
                size:"Not mentioned",
                color:"Black",
                material:"Leather",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"sofa",
                category:"Sectional Sofa",
                sofaImage:"images/sofa/meter-sofa.jpg",
                seater:"Not Mentioned",
                size:"5 Meter",
                color:"Black + Green",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"sofa",
                category:"Office Sofa",
                sofaImage:"images/sofa/modern-sofa.jpg",
                seater:"5/6 Seater",
                size:"5 Meter",
                color:"Black + Beige",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"sofa",
                category:"Office Sofa",
                sofaImage:"images/sofa/office-sofa.jpg",
                seater:"Not Mentioned",
                size:"5 Meter",
                color:"White",
                material:"Leather",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"sofa",
                category:"Office Sofa",
                sofaImage:"images/sofa/office-sofa.jpg",
                seater:"Not Mentioned",
                size:"5 Meter",
                color:"White",
                material:"Leather",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"sofa",
                category:"Sectional Sofa",
                sofaImage:"images/sofa/red-sectional-sofa.jpg",
                seater:"7/8 Seater",
                size:"5 Meter",
                color:"Red",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"sofa",
                category:"Sectional Sofa",
                sofaImage:"images/sofa/sectional-sofa.jpg",
                seater:"7/8 Seater",
                size:"5 Meter",
                color:"Blue",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"sofa",
                category:"Home Sofa",
                sofaImage:"images/sofa/sectional-sofas.jpg",
                seater:"7/8 Seater",
                size:"5 Meter",
                color:"Blue",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"sofa",
                category:"Sectional Sofa",
                sofaImage:"images/sofa/simple-sofa.jpg",
                seater:"7/8 Seater",
                size:"5 Meter",
                color:"Blue",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"Sofa",
                category:"Single Seater",
                sofaImage:"images/sofa/single-seater-fabric.jpg",
                seater:"1 Seater",
                size:"Not mentioned",
                color:"Not Mentioned",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"Sofa",
                category:"Single Seater",
                sofaImage:"images/sofa/single-seater-sofa.jpg",
                seater:"1 Seater",
                size:"Not mentioned",
                color:"Beige",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"Sofa",
                category:"Single Seater",
                sofaImage:"images/sofa/single-seater-upholstery.jpg",
                seater:"1 Seater",
                size:"Not mentioned",
                color:"Beige",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"Sofa",
                category:"Sofa",
                sofaImage:"images/sofa/sofa-cushions.jpg",
                seater:"Not Mentioned",
                size:"Not mentioned",
                color:"Beige",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"Sofa",
                category:"Mosque Sofas",
                sofaImage:"images/sofa/sofa-mosque.jpg",
                seater:"Not Mentioned",
                size:"Not mentioned",
                color:"Grey + Pink",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"Sofa",
                category:"Home Sofa Set",
                sofaImage:"images/sofa/sofa-set.jpg",
                seater:"2+1+1",
                size:"Not mentioned",
                color:"Grey",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"Sofa",
                category:"Home Sofa Set",
                sofaImage:"images/sofa/sofa-set-1+1+2.jpg",
                seater:"2+1+1",
                size:"Not mentioned",
                color:"Pink + White",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"Sofa",
                category:"Corner Sofa",
                sofaImage:"images/sofa/sofa-upholster.jpg",
                seater:"7/8 Seater",
                size:"5 Meter",
                color:"Pink + White",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"Sofa",
                category:"Corner Sofa",
                sofaImage:"images/sofa/sofa-with-beautiful-cushions.jpg",
                seater:"7/8 Seater",
                size:"5 Meter",
                color:"Pink + White",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"Sofa",
                category:"Home Sofa",
                sofaImage:"images/sofa/sofa-with-table.jpg",
                seater:"5/6 Seater",
                size:"4 Meter",
                color:"Maroon",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"Sofa",
                category:"Home Sofa",
                sofaImage:"images/sofa/upholstered-sofa.jpg",
                seater:"5/6 Seater",
                size:"4 Meter",
                color:"Maroon",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"Sofa",
                category:"Home Sofa",
                sofaImage:"images/sofa/upholstery-balushome.jpg",
                seater:"Not Mentioned",
                size:"Not Mentioned",
                color:"Blue + Black",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
            {
                type:"Sofa",
                category:"Sectional Sofa",
                sofaImage:"images/sofa/sofa-white.jpg",
                seater:"Not Mentioned",
                size:"Not Mentioned",
                color:"Silver",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            },
{
                type:"Sofa",
                category:"Sectional Sofa",
                sofaImage:"images/sofa/white-sofa-differenet-color-cushions.jpg",
                seater:"10/11 Seater",
                size:"7",
                color:"White",
                material:"Fabric",
                manufactureredBy:"Al Shumoe Upholstery"
            }


        ];
    });
