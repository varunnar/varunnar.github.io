
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
    'mobile_app': "Mobile App",
    'storytelling': 'Storytelling',
    'iOS': 'iOS',
    'prototype': 'Prototype',
    'health': 'Health',
    'data_visualization': 'Data Visualization',
    'map': 'Map',
    'music': 'Music',
    'math':'Math',
    'game': 'Game',
    'hardware': 'Hardware',
    'MHCI+D': "MHCI+D",
    'case_study': 'Case Study',
    'frontend': 'Frontend',
    'backend': 'Backend',
    'fullstack': 'Fullstack',
    'test': 'Test',
    'work_experience': 'Work Experience'
}

const storyglow = new projectClass("storyglow","Storyglow", 
    [project_tags.mobile_app, project_tags.storytelling, project_tags.iOS]);

 const munchmaps = new projectClass("munchmaps","MunchMaps", 
    [project_tags.mobile_app, project_tags.iOS, project_tags.prototype]);

const heartbeat_checker = new projectClass("heartbeatChecker","HeartbeatChecker Mobile App", 
[project_tags.mobile_app, project_tags.health, project_tags.iOS]);

const map_visualization = new projectClass('D3', 'Map Visualization', [project_tags.data_visualization, project_tags.map]);

const alpaca = new projectClass('alpaca', 'AlpacaML', [project_tags.mobile_app, project_tags.health, project_tags.iOS]);

const fractal = new projectClass('fractal', 'Music Visualization', [project_tags.data_visualization, project_tags.music, project_tags.math]);

const project_tightrope = new projectClass('projectTightrope', 'Project Tightrope', [project_tags.game, project_tags.prototype, project_tags["MHCI+D"]])

const capstone_mhcid = new projectClass('socialGrocer', 'Social Grocer', [project_tags.health, project_tags.prototype, project_tags.data_visualization, project_tags["MHCI+D"]])

const data_visualization = new projectClass('DataViz', 'Health Data Visualization', [project_tags.health, project_tags["MHCI+D"], project_tags.data_visualization, project_tags.frontend ])

const youtubeData = new projectClass('youtubeData', 'Youtube Data Visualization', [project_tags.data_visualization, project_tags.frontend]);

const seagate = new projectClass('seagate', 'Lyve Pilot', [project_tags.frontend, project_tags.backend, project_tags.work_experience]);

export { 
    storyglow,
    munchmaps,
    heartbeat_checker,
    map_visualization,
    alpaca,
    fractal,
    project_tightrope,
    capstone_mhcid,
    data_visualization,
    youtubeData,
    seagate
}
