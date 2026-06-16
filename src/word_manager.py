import os

# The name of the file containing the words for the Hangman game.
# Make sure this file is in the same directory as this script.
WORDS_FILE = 'words.txt'

def load_words():
    """
    Loads words from the specified file.
    Returns a list of words, or an empty list if the file doesn't exist.
    """
    if not os.path.exists(WORDS_FILE):
        return []
    with open(WORDS_FILE, 'r') as f:
        # Read all lines, strip whitespace, and filter out any empty lines.
        words = [line.strip().lower() for line in f if line.strip()]
    return words

def save_words(words):
    """
    Saves a list of words back to the file, overwriting the existing content.
    The list is sorted and duplicates are removed before saving.
    """
    with open(WORDS_FILE, 'w') as f:
        # Sort and get unique words before writing back to the file.
        for word in sorted(list(set(words))):
            f.write(word + '\n')

def display_menu():
    """Displays the main menu to the user."""
    print("\n--- Hangman Word Manager ---")
    print("1. Add a new word")
    print("2. Delete a word")
    print("3. View all words")
    print("4. Exit")
    print("----------------------------")

def add_word():
    """Handles the logic for adding a new word."""
    words = load_words()
    new_word = input("Enter the new word to add: ").strip().lower()

    if not new_word.isalpha():
        print("\nError: Please enter a valid word containing only letters.")
        return

    if new_word in words:
        print(f"\n'{new_word}' already exists in the word list.")
    else:
        words.append(new_word)
        save_words(words)
        print(f"\nSuccessfully added '{new_word}' to the word list.")

def delete_word():
    """Handles the logic for deleting an existing word."""
    words = load_words()
    if not words:
        print("\nThe word list is empty. Nothing to delete.")
        return

    print("\nCurrent words:", ", ".join(sorted(words)))
    word_to_delete = input("Enter the word to delete: ").strip().lower()

    if word_to_delete in words:
        words.remove(word_to_delete)
        save_words(words)
        print(f"\nSuccessfully deleted '{word_to_delete}' from the word list.")
    else:
        print(f"\nError: '{word_to_delete}' was not found in the word list.")

def view_words():
    """Displays all the words currently in the list."""
    words = load_words()
    if not words:
        print("\nThe word list is currently empty.")
    else:
        print("\n--- All Words ---")
        # Display words in a sorted, comma-separated list.
        print(", ".join(sorted(words)))
        print("-------------------")

def main():
    """The main function to run the word manager application."""
    # Create the words file if it doesn't exist to avoid errors.
    if not os.path.exists(WORDS_FILE):
        print(f"'{WORDS_FILE}' not found. A new empty file will be created.")
        open(WORDS_FILE, 'w').close()

    while True:
        display_menu()
        choice = input("Enter your choice (1-4): ")

        if choice == '1':
            add_word()
        elif choice == '2':
            delete_word()
        elif choice == '3':
            view_words()
        elif choice == '4':
            print("Exiting Word Manager. Goodbye!")
            break
        else:
            print("\nInvalid choice. Please enter a number between 1 and 4.")

if __name__ == "__main__":
    main()
