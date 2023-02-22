const fs = require('fs');
const jsonServer = require('json-server');
// const jwt = require('jsonwebtoken');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

// Answer delay 800ms
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
  });
  next();
});

server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);

// Login endpoint
server.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'));
    const { users = [] } = db;

    const userFromDb = users.find(
      (user) => user.username === username && user.password === password,
    );

    if (userFromDb) {
      return res.json(userFromDb);
    }

    return res.status(403).json({ message: 'User not found' });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

// Authorization check
// eslint-disable-next-line consistent-return
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }
  next();
});

server.use(router);

// Start server
server.listen(8000, () => {
  // eslint-disable-next-line no-console
  console.log('server is running on 8000 port');
});
