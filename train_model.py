import pandas as pd
from sklearn.tree import DecisionTreeClassifier
import pickle

# Load dataset
data = pd.read_csv("symptom_disease.csv")

X = data.drop("disease", axis=1)
y = data["disease"]

# Train model
model = DecisionTreeClassifier()
model.fit(X, y)

# Save model
with open("disease_model.pkl", "wb") as f:
    pickle.dump(model, f)

print("✅ Model trained and saved successfully")
