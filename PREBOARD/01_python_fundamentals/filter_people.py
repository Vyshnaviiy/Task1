import json
from pathlib import Path


class PersonFilter:
    """Loads people from JSON and filters adults."""

    def __init__(self, file_path):
        self.file_path = Path(file_path)

    def load_people(self):
        with self.file_path.open("r", encoding="utf-8") as file:
            return json.load(file)

    def adults_only(self):
        people = self.load_people()
        return [person for person in people if person["age"] >= 18]


def main():
    person_filter = PersonFilter("data.json")
    adults = person_filter.adults_only()

    print("People aged 18 or older:")
    for person in adults:
        print(f"- {person['name']} ({person['age']}), {person['role']}")


if __name__ == "__main__":
    main()
