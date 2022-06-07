import app from './app';

const port = process.env.SERVER_PORT;
app.listen(port, () => {
  console.log();
  console.log();
  console.log(`Rodando em ${port}`);
});
