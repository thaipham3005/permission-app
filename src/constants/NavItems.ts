interface INavItems {
    name: string;
    icon: string;
    path: string;
}

export const navItems: Array<INavItems> = [
    {
        name: "GeoLocation",
        icon: "fas fa-map-marker-alt",
        path: "/geolocation"
    },
    {
        name: "Motion Detection",
        icon: "fas fa-mobile-alt",
        path: "/motiondetection"
    },
    {
        name: "Fingerprint",
        icon: "fas fa-fingerprint",
        path: "/fingerprint"
    },
    {
        name: "Microphone",
        icon: "fas fa-microphone",
        path: "/microphone"
    },
    {
        name: "Camera",
        icon: "fas fa-video",
        path: "/camera"
    },
    {
        name: "Idle detection",
        icon: "fas fa-bed",
        path: "/idledetection"
    },
    {
        name: "Bluetooth",
        icon: "fab fa-bluetooth",
        path: "/bluetooth"
    },
    {
        name: "Web share",
        icon: "fas fa-share-square",
        path: "/webshare"
    },
    {
        name: "Contact share",
        icon: "fas fa-address-book",
        path: "/contactshare"
    }
    ,
    {
        name: "Storage/ USB",
        icon: "fas fa-hdd",
        path: "/storage"
    }
    ,
    {
        name: "Battery Info",
        icon: "fas fa-battery-three-quarters",
        path: "/battery"
    }
    ,
    {
        name: "Screen brightness",
        icon: "fas fa-sun",
        path: "/screenbrightness"
    }
    ,
    {
        name: "Wake lock",
        icon: "fas fa-lock-open",
        path: "/wakelock"
    }
    ,
    {
        name: "Audio & Volume",
        icon: "fas fa-music",
        path: "/audio"
    }
    ,
    {
        name: "Video",
        icon: "fas fa-film",
        path: "/video"
    }
]