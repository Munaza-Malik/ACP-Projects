const express = require('express');
const app = express();
const port = 3000;

// Dynamic route that accepts a 'name' parameter
app.get('/greet/:name', (req, res) => {
    const name= req.params.name;
 res.send(`Welcome ${req.params.slug}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

