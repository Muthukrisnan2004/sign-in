export const mongodbConfig = {
  uri: 'mongodb://localhost:27017/signin-db',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: true,
  }
};