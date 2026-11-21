@echo off
cd /d "%~dp0"
set NODE=%LOCALAPPDATA%\Programs\cursor\resources\app\resources\helpers\node.exe
if not exist "%NODE%" set NODE=node
start "" http://127.0.0.1:8765/
"%NODE%" servidor.js 8765
