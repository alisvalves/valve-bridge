@echo off
title Valve Bridge Website
cd /d "%~dp0"

echo ========================================================
echo   Valve Bridge Website Start Ho Rahi Hai...
echo ========================================================
echo.
echo 1. Server start ho raha hai...
start /b cmd /c "npm.cmd run start"

echo 2. Thoda wait kar rahe hain (2 seconds)...
timeout /t 3 /nobreak >nul

echo 3. Browser me website open ho rahi hai...
start http://localhost:3000

echo.
echo ========================================================
echo   WEBSITE LIVE CHAL RAHI HAI!
echo   Link: http://localhost:3000
echo.
echo   Note: Jab tak website dekhni hai, is black window
echo   ko open rehne dein. Band karne ke liye window close karein.
echo ========================================================
echo.
pause
