# RockFall-Mining-Prediciton-System
Just a Project for the good...



Folder Structure

rockfall-prediction-system/
│── frontend/                      # React app (UI & Visualization)
│   │── public/                    
│   │── src/
│   │   │── components/            # UI Components (Navbar, Sidebar, Map, Charts)
│   │   │── pages/                 # Pages (Home, Upload DEM, Risk Analysis, Alerts)
│   │   │── services/              # API calls to backend
│   │   │   ├── api.js             # Axios config
│   │   │   └── predictionService.js # Functions to call prediction API
│   │   │── App.js
│   │   │── index.js
│   │── package.json
│
│── backend/                       # Node.js + Express (API + DB + Auth)
│   │── routes/
│   │   │   ├── authRoutes.js      # Login / Register
│   │   │   ├── dataRoutes.js      # Upload DEM, Weather input
│   │   │   └── predictionRoutes.js # Calls ML microservice
│   │── controllers/
│   │   │   ├── authController.js
│   │   │   ├── dataController.js
│   │   │   └── predictionController.js
│   │── models/
│   │   │   └── userModel.js       # MongoDB user schema
│   │── server.js                  # Express server entry point
│   │── package.json
│
│── ml-service/                    # Python ML Microservice (Flask/FastAPI)
│   │── models/
│   │   └── rockfall_model.pkl     # Trained ML model (Random Forest / CNN)
│   │── scripts/
│   │   ├── train_model.py         # Training script (DEM + Weather + Vibration)
│   │   └── preprocess.py          # DEM feature extraction (slope, aspect, etc.)
│   │── app.py                     # FastAPI/Flask service exposing /predict
│   │── requirements.txt           # Python dependencies
│
│── data/                          # Storage for DEM, weather, vibration samples
│   │── raw/
│   │   └── jharia_dem.tif
│   │── processed/
│   │   └── training_dataset.csv
│
│── docs/                          # Documentation, reports
│   │── architecture.md            # Project architecture diagram
│   │── dataset_sources.md         # Sources (Bhuvan, Sentinel, NASA POWER, etc.)
│
│── docker/                        # Docker setup (if needed for deployment)
│   │── backend.Dockerfile
│   │── ml-service.Dockerfile
│   │── docker-compose.yml
│
│── README.md                      # Project overview + setup guide
