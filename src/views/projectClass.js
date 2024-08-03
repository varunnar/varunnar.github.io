
class projectClass {
    constructor(name, title, tags) {
        this.name = name;
        this.title = title;
        //this.img_url = img_url;
        this.tags = tags;
    }

    getProjectName() {
        return this.name;
    }
    
    getProjectTitle() {
        return this.title;
    }

    getProjectImg() {
        return this.img_url;
    }

    getTags() {
        return this.tags;
    }

    checkSpecificTag(tagName) {
        for (let i = 0; i<this.tags.length; i++) {
            if (this.tags[i] == tagName) {
                return true;
            }
        } 
        return false; 
    }
}

const project_tags = {
    'mobile_app': "mobile app",
    'storytelling': 'storytelling',
    'iOS': 'iOS',
    'prototype': 'prototype',
    'health': 'health',
    'data_visualization': 'data_visualization',
    'map': 'map',
    'vegalite': 'vegalite',
    'music': 'music',
    'math':'math',
    'game': 'game',
    'hardware': 'hardware',
    'MHCI+D': "MHCI+D"

}

const storyglow = new projectClass("storyglow","Storyglow", 
    [project_tags.mobile_app, project_tags.storytelling, project_tags.iOS, project_tags.prototype]);

 const munchmaps = new projectClass("munchmaps","MunchMaps", 
    [project_tags.mobile_app, project_tags.iOS, project_tags.prototype]);

const heartbeat_checker = new projectClass("heartbeatChecker","HeartbeatChecker Mobile App", 
[project_tags.mobile_app, project_tags.health, project_tags.iOS, project_tags.prototype]);

const map_visualization = new projectClass('D3', 'Map Visualization', [project_tags.data_visualization, project_tags.map, project_tags.vegalite]);

const alpaca = new projectClass('alpaca', 'AlpacaML', [project_tags.mobile_app, project_tags.health, project_tags.iOS]);

const fractal = new projectClass('fractal', 'Music Visualization', [project_tags.data_visualization, project_tags.music, project_tags.math]);

const project_tightrope = new projectClass('projectTightrope', 'Project Tightrope', [project_tags.game, project_tags.prototype, project_tags.hardware, project_tags["MHCI+D"]])

const capstone_mhcid = new projectClass('capstoneMHCID', 'MHCID Capstone', [project_tags.health, project_tags.prototype, project_tags["MHCI+D"] ])

const data_visualization = new projectClass('dataVIZ', 'Health Data Visualization', [project_tags.health, project_tags.data_visualization, project_tags["MHCI+D"], project_tags.data_visualization])

export { 
    storyglow,
    munchmaps,
    heartbeat_checker,
    map_visualization,
    alpaca,
    fractal,
    project_tightrope,
    capstone_mhcid,
    data_visualization
}
