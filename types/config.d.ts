type leancloud = {
    leanAppId?: string;
    leanAppKey?: string;
    leanMasterKey?: string;
    leanServer?: string;
}

type Config = {
    leancloud: leancloud
}

export { Config }