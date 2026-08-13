import random
import string
import pyperclip

# This copies a random string
to_copy = ""
for x in range(55500):
    to_copy += random.choice(string.ascii_letters)

pyperclip.copy(to_copy)