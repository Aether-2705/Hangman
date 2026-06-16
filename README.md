# Hangman

## How to Add or Edit Words

This project includes a built-in Python script to help you easily manage the word list for the Hangman game. All the game words are stored in a text file named `words.txt`.

### Running the Word Manager

1. Open your terminal or command prompt.
2. Navigate to the folder containing the `word_manager.py` script (e.g., the `src` folder).
3. Run the script by typing the following command:

   `python word_manager.py`

### Available Options

When you run the script, an interactive menu will appear with the following options:

* **1. Add a new word**: Prompts you to type a new word. It will validate that it only contains letters, convert it to lowercase, ensure it's not a duplicate, and save it to `words.txt`.
* **2. Delete a word**: Shows you the list of current words and asks which one you would like to safely remove.
* **3. View all words**: Displays all the words currently available in the game in alphabetical order.
* **4. Exit**: Closes the manager.

*Note: If `words.txt` does not exist yet, the Word Manager will automatically create a new, empty file for you the first time you run it.*