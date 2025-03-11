var config = {
    style: 'mapbox://styles/chloe0625222/cm83d1phb000l01se6lo87fw9/draft',
    accessToken: 'pk.eyJ1IjoiY2hsb2UwNjI1MjIyIiwiYSI6ImNtMGUza2ozaTBrazYyaXByNXU5bzQ1ZzEifQ.VzWdJo3OgzwNC9Vu_piDHQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Where are the healthcare service gaps in Singapore?',
    subtitle: 'Access to clinics from HDBs',
    byline: 'By Zhang Yunfei',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            title: 'Healthcare Service Gaps in Singapore',
            description: ' Primary care services are the first point of contact in the healthcare system, ensuring continuity of care. It is important to enhancing accessibility by reducing spatial inequalities and addressing service gaps to improving population health. <br><br> In this study, we are interested in understanding the service gaps of healthcare services and under-served population in Singapore by analyzing the spatial accessibility to clinics from HDBs . This first map shows the location of clinics and HDBs in Singapore.<br><br><img src="images/legend1.png" style="height:100%;width:120px;"></img>',
            location: {
                center: [103.79304, 1.35969],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'clinics-3414-2eqm33',
                    opacity: 1
                },
                {
                    layer: 'hdb-9k4t6g',
                    opacity: 1               
                },
                {
                    layer: 'hdb-outof400-0jszwp',
                    opacity: 0                
                },
                {
                    layer: '400m-walkshed-from-clinics-9k67jb',
                    opacity: 0
                },
                {
                    layer: 'clinic-service-gap-9vktzk',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'clinics-3414-2eqm33',
                    opacity: 1
                },
                {
                    layer: 'hdb-9k4t6g',
                    opacity: 1               
                },
                {
                    layer: 'hdb-outof400-0jszwp',
                    opacity: 0                
                },
                {
                    layer: '400m-walkshed-from-clinics-9k67jb',
                    opacity: 0.5
                },
                {
                    layer: 'clinic-service-gap-9vktzk',
                    opacity: 0
                }
        
            ]
        },
        {
            id: 'second-container',
            alignment: 'left',
            hidden: false,
            title: 'Access to healthcare services from HDB',
            description: 'The study defines a 400-meter walkshed around each clinic as its service coverage, allowing us to identify areas where HDB residents have limited access to healthcare services.<br><br><img src="images/legend2.png" style="height:100%; width:150px;"></img>',
            location: {
                center: [103.79304, 1.35969],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'clinics-3414-2eqm33',
                    opacity: 1
                },
                {
                    layer: 'hdb-9k4t6g',
                    opacity: 1               
                },
                {
                    layer: 'hdb-outof400-0jszwp',
                    opacity: 0                
                },
                {
                    layer: '400m-walkshed-from-clinics-9k67jb',
                    opacity: 1
                },
                {
                    layer: 'clinic-service-gap-9vktzk',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'clinics-3414-2eqm33',
                    opacity: 1
                },
                {
                    layer: 'hdb-9k4t6g',
                    opacity: 0.5               
                },
                {
                    layer: 'hdb-outof400-0jszwp',
                    opacity: 0.5                
                },
                {
                    layer: '400m-walkshed-from-clinics-9k67jb',
                    opacity: 1
                },
                {
                    layer: 'clinic-service-gap-9vktzk',
                    opacity: 0
                }
        
            ],
        },
        {
            id: 'third-container',
            alignment: 'right',
            hidden: false,
            title: 'Underserved HDBs',
            description: 'Buildings highlighted in red are the HDBs that are out of the 400-meter walkshed, which indicates the service gaps of healthcare facilities. The map shows the level of service disparity by counting the number of HDBs outside of the walkshed coverage. <br><br> <img src="images/legend3.png" style="height:100%; width:250px;"></img>',
            location: {
                center: [103.8500, 1.3500 ],
                zoom: 11,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 10, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'clinics-3414-2eqm33',
                    opacity: 0
                },
                {
                    layer: 'hdb-9k4t6g',
                    opacity: 0               
                },
                {
                    layer: 'hdb-outof400-0jszwp',
                    opacity: 1                
                },
                {
                    layer: '400m-walkshed-from-clinics-9k67jb',
                    opacity: 0.5
                },
                {
                    layer: 'clinic-service-gap-9vktzk',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'clinics-3414-2eqm33',
                    opacity: 0
                },
                {
                    layer: 'hdb-9k4t6g',
                    opacity: 0               
                },
                {
                    layer: 'hdb-outof400-0jszwp',
                    opacity: 1                
                },
                {
                    layer: '400m-walkshed-from-clinics-9k67jb',
                    opacity: 0.5
                },
                {
                    layer: 'clinic-service-gap-9vktzk',
                    opacity: 1
                }
        
            ],
        },
        {
            id: 'fourth-container',
            alignment: 'right',
            hidden: false,
            title: 'Choa Chu Kang',
            description: 'The analysis informs us that Choa Chu Kang is the most vulnerable areas regarding walkshed coverage to healthcare options, since it has the highest number of HDBs that are underserved.<br><br> Mapping the locations of vulnerable households can help identify healthcare service gaps in neighborhoods and assist healthcare organizations in providing services. <br><br><img src="images/legend4.png" style="height:100%; width:250px;"></img>',
            location: {
                center: [103.7500, 1.3833 ],
                zoom: 14.4,
                pitch: 45,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 10, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'clinics-3414-2eqm33',
                    opacity: 1
                },
                {
                    layer: 'hdb-9k4t6g',
                    opacity: 0               
                },
                {
                    layer: 'hdb-outof400-0jszwp',
                    opacity: 1                
                },
                {
                    layer: '400m-walkshed-from-clinics-9k67jb',
                    opacity: 0.5
                },
                {
                    layer: 'clinic-service-gap-9vktzk',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'clinics-3414-2eqm33',
                    opacity: 1
                },
                {
                    layer: 'hdb-9k4t6g',
                    opacity: 0               
                },
                {
                    layer: 'hdb-outof400-0jszwp',
                    opacity: 1                
                },
                {
                    layer: '400m-walkshed-from-clinics-9k67jb',
                    opacity: 0.5
                },
                {
                    layer: 'clinic-service-gap-9vktzk',
                    opacity: 1
                }
        
            ],
        }
    ]
};