
const applyRoutes = (app) => {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });

  // create a new user
  app.post('/user', (req, res) => {
    res.send('create a new user');
  });

  // login a user
  app.post('/login', (req, res) => {
    res.send('login a user');
  });

  // channel creation
  app.post('/channel', (req, res) => {
    res.send('channel creation');
  });

  // search for a user
  app.get('/search-user', (req, res) => {
    res.send('search for a user');
  });

  // channel list
  app.get('/channel', (req, res) => {
    res.send('channel list');
  });

  // send a message
  app.post('/message', (req, res) => {
    res.send('send a message');
  });

  console.log('Routes applied');
}

export default applyRoutes;
