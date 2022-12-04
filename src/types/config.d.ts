type leancloud = {
  leanAppId?: string;
  leanAppKey?: string;
  leanMasterKey?: string;
  leanServer?: string;
};

type Config = {
  password: string;
  leancloud: leancloud;
};

export { Config };
