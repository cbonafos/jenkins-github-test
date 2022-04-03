// Séparer app et index permet de tester le code
// en utilisant supertest
import app from "./app";

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
