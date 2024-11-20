import { Express } from 'express';

const appSetup = (app: Express) => {

  const PORT = 5000;

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });

};

export default appSetup;