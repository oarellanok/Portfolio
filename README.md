Hangman Game
Welcome to Hangman, a classic word-guessing game implemented in Python! This project demonstrates my ability to create interactive Python programs and manage external data files for dynamic functionality. 
It showcases logical programming, file handling, and user interaction.

Overview
This Python Hangman game is designed with simplicity and fun in mind. Players attempt to guess a randomly selected word by choosing letters one at a time. The game dynamically picks words from a pre-defined list stored in a separate file, ensuring variety for every session.

Features
- Interactive Gameplay: Users input letters to guess the word, with feedback on correct and incorrect guesses.

- Dynamic Word Selection: Words are randomly chosen from an external document (words.txt), keeping the experience fresh.

- Intuitive Design: Includes clear instructions and user-friendly messages for a smooth gaming experience.

- Error Handling: Prevents invalid inputs to ensure seamless gameplay.

- Game Logic: Tracks attempts and visually represents the Hangman figure for added fun.

File Structure
hangman.py: The main script that structures the game's logic, including user interaction, error handling, and game progression. Also contains a separated document, words.py: A simple .py file containing a list of words. The script accesses this file to pick a random word for each game session.

How to play:

-Need to have Python 3 installed and basic understanding of Python to run the script in a terminal or IDE

- Copy the repository to your local system.

- Ensure both hangman.py and words.py are in the same directory.


How It Works

- The program selects randomly a word list from the words.py file.

- The player guesses letters one by one:

- Correct guesses reveal the positions of the letters in the word.

- Incorrect guesses add parts to the Hangman figure.

- The game ends when the word is guessed correctly or the Hangman is fully drawn.

- After the game is finished it will offer to play again.
  
Learning Objectives
This project highlights:

- File handling and external data management in Python.

- Building interactive and engaging user experiences.

- Applying control flow and error handling effectively.

Future possible Improvements

- Add different difficulty levels based on word complexity or using phrases.

- Enable graphical representation using existing libraries.

- Expand the word list dynamically by integrating an API or online dictionary.
