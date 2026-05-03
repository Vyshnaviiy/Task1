import json

# Step 1: Open file
with open("data.json", "r") as file:
    data = json.load(file)

# Step 2: Check data
print("All data:", data)

# Step 3: Filter people age > 18
filtered = []

for person in data:
    if person["age"] > 18:
        filtered.append(person)

# Step 4: Print result
print("Filtered data:", filtered)