@echo off
setlocal
title Hangul - lokale Vorschau
set "PORT=4188"
set "HANGUL_NODE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if exist "%HANGUL_NODE%" goto run
where node >nul 2>nul
if errorlevel 1 goto missing
set "HANGUL_NODE=node"
:run
if not exist "%~dp0preview.mjs" goto extract
"%HANGUL_NODE%" "%~dp0preview.mjs" --open
echo.
echo Falls eine Fehlermeldung erscheint, bitte den Text an Codex senden.
pause
exit /b
:extract
echo Bitte die ZIP zuerst mit "Alle extrahieren" vollstaendig entpacken.
echo Danach Hangul-starten.cmd aus dem entpackten Ordner starten.
pause
exit /b
:missing
echo Node.js wurde nicht gefunden. Bitte diese Meldung an Codex senden.
pause
