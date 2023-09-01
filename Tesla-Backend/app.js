const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", (req, res, next) => {
  const cartDetails =
    {
        "method_name": "Car Details",
        "response_code": 0,
        "response_message": "success",
        "response": [{
            "model_name": "Model X",
            "milege": 333,
            "Dual Motor": "AWD",
            "mph": "2.5",
            "imageUrl": "../../assets/model3.jpeg"
          },
          {
            "model_name": "Model 3",
            "milege": 133,
            "Dual Motor": "AWD",
            "mph": "3.5",
            "imageUrl": "../../assets/modelx6.jpg"
          },
          {
            "model_name": "Model 6",
            "milege": 333,
            "Dual Motor": "AWD",
            "mph": "2.5",
            "imageUrl": "../../assets/model3.jpeg"
          },
          {
            "model_name": "Model 9",
            "milege": 333,
            "Dual Motor": "AWD",
            "mph": "3.1",
            "imageUrl": "../../assets/models.jpg"
          },
          {
            "model_name": "Model A",
            "milege": 233,
            "Dual Motor": "AWD",
            "mph": "8.5",
            "imageUrl": "../../assets/modely.jpeg"
          },
          {
            "model_name": "Model Y",
            "milege": 433,
            "Dual Motor": "AWD",
            "mph": "2.5",
            "imageUrl": "../../assets/modelx4.jpg"
          },
          {
            "model_name": "Model Q",
            "milege": 333,
            "Dual Motor": "AWD",
            "mph": "3.1",
            "imageUrl": "../../assets/models.jpg"
          },
          {
            "model_name": "Model P",
            "milege": 233,
            "Dual Motor": "AWD",
            "mph": "8.5",
            "imageUrl": "../../assets/modely.jpeg"
          },
          {
            "model_name": "Model Z",
            "milege": 233,
            "Dual Motor": "AWD",
            "mph": "8.5",
            "imageUrl": "../../assets/modelx1.jpg"
          },
        ]
      };
  res.status(200).json({
    message: "Posts fetched succesfully!",
    cartDetails: cartDetails
  });
});

module.exports = app;
