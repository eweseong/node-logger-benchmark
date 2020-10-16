# node-logger-benchmark
A logger sample to benchmark the performance between [pino](https://www.npmjs.com/package/pino) and [winston](https://www.npmjs.com/package/winston) in [koa](https://koajs.com/).

## Commands

### Start koa with pino logger
```bash
npm run start:pino
```

### Start koa with winston logger
```bash
npm run start:winston
```

### Start benchmarking logger
```bash
# run this only when one of the server above is started
# remember to warm up the server by running the benchmark command
# a few time until the result is consistent.
npm run benchmark
```

## Results

### October 16<sup>th</sup>, 2020

#### Pino logger
![pino resuslt](https://raw.githubusercontent.com/eweseong/node-logger-benchmark/master/docs/pino.png)

#### Winston logger
![winston resuslt](https://raw.githubusercontent.com/eweseong/node-logger-benchmark/master/docs/winston.png)
