rapid.config.define({
    "rapid-httpserver": {
        autoStart: true,
        port: 8080,

        loading_dir: [
            "/app/actions/"
        ],

        mapping: [{
            url: "/index",
            doAction : "index"
        },{
            url: "/assets/*",
            doAction: "resource",
            params: {
                "dst_path" : "/assets/(.*)"
            }
        }],

        defaultAction: "index"
    }
});