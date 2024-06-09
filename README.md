<p align="center">
  Find Mosque Easily!<p>
  </p>
<p align="center">
  <a href ="https://www.gnu.org/licenses/gpl-3.0"><img src="https://img.shields.io/badge/License-GPLv3-blue.svg" alt="License - GPLv3"></a>
  <img src="https://img.shields.io/badge/status-alpha-orange" alt="Status - Alpha"></a>
</p>

# MosquEase
A service to help find the nearest and most comfortable mosque for you.

## Table of Contents
- [How do I use it?](#howtouse)
- [Tech stack](#techstack)
- [License](#license)

## How do I use it?
<a name="howtouse"></a>
Currently, MosquEase is in alpha development and only supports one mosque location. However, you can build and run the app locally using Expo.
There are some prequisites however, ensure you have [Node.js](https://nodejs.org/en) and npm installed on your system. If you already have it, here's how you can build your own Unwind application.

Clone this repository by using this command:

    git clone https://github.com/Smart-Mosque-Monitoring-System/MosquEase-Mobile.git

Go to the repository location:

    cd MosquEase-Mobile

Install all the dependencies:

    npm install

Make sure you already have an Expo account, then build the project using EAS:

    % eas build --profile development --platform android

After the build is done, download the .apk through their site and install it on your device. Alternatively, you can follow the on-screen instructions to open the app in an emulator by typing:

    % npm expo

Then press `a` to open it in the emulator. Done.

## Tech stack
<a name="techstack"></a>
- **React Native**: The core framework for building the app.
- **Expo**: Simplifies the development and deployment process.
- **Supabase**: Handles data storage and provides API service (BaaS).
- **Python**: Handles head count prediction using pre-trained YOLOv8 model, also acts as the API for the image procesing.
- **ESP32-CAM**: Handles image and data capture along with other ESP32's compatible sensors like OV2640 and BME280.

## License
<a name="license"></a>
This project is licensed under the [GNU General Public License version 3](https://www.gnu.org/licenses/gpl-3.0) (GPLv3).
