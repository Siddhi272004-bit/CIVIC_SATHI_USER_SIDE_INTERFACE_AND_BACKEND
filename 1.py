import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

def generate_tags_from_description(description: str) -> str:
    try:
        api_key = os.getenv("GOOGLE_API_KEY")
        if not api_key:
            return "Error: GOOGLE_API_KEY not found."
        genai.configure(api_key=api_key)

        model = genai.GenerativeModel('gemini-1.5-flash-latest')

        # --- PROMPT ENHANCED for more specific tags ---
        prompt = f"""
        You are a civic issue analysis bot. Your task is to extract highly specific keywords from a description.
        Analyze the following description and generate a list of 3-4 specific tags.
        Each tag should ideally describe the problem and the object (e.g., 'broken road', 'leaking pipe', 'garbage overflow').
        Do not generalize. If the description says "broken road", a good tag is "broken road", not just "road".
        Provide the output as a single line of comma-separated values.

        Description:
        ---
        {description}
        ---

        Tags:
        """
        response = model.generate_content(prompt)
        return response.text.strip()

    except Exception as e:
        return f"An error occurred during tag generation: {e}"


def assign_department_from_tags(tags_string: str) -> str:
    """
    Assigns a municipal department by checking if department keywords are contained
    within the generated tags. This is more robust than an exact match.
    """
    # --- KEYWORDS EXPANDED for better coverage ---
    department_keywords = {
        'Pollution Control Board': ['pollution', 'smoke', 'emission', 'factory', 'industrial waste', 'noise', 'contamination', 'air quality', 'water pollution'],
        'Transport Department (RTO)': ['bus', 'auto', 'traffic signal', 'transport', 'vehicle', 'overcrowding', 'driving', 'license'],
        'Animal Control & Veterinary Services': ['animal', 'dog', 'stray', 'cattle', 'monkey', 'bite', 'rabies', 'carcass', 'nuisance', 'sterilization'],
        'Public Works Department (PWD)': ['road', 'pothole', 'pavement', 'drain', 'culvert', 'bridge', 'street', 'asphalt'],
        'Water Supply & Sewerage Department': ['water', 'pipe', 'leak', 'sewage', 'sewer', 'drainage', 'manhole'],
        'Health & Sanitation Department': ['garbage', 'waste', 'dump', 'cleanliness', 'hygiene', 'sweeping', 'mosquito', 'pest', 'litter', 'trash', 'filth'],
        'Street Light Department': ['street light', 'streetlight', 'lamp', 'pole', 'lighting', 'dark'],
        'Horticulture & Parks Department': ['tree', 'park', 'garden', 'plant', 'grass', 'fallen tree'],
        'Town Planning Department': ['illegal construction', 'encroachment', 'zoning', 'unauthorized'],
        'Electricity Department': ['power', 'electricity', 'transformer', 'wire', 'outage']
    }

    generated_tags = [tag.strip().lower() for tag in tags_string.split(',')]

    # --- MATCHING LOGIC IMPROVED ---
    # Check if any keyword is a substring of any generated tag.
    for department, keywords in department_keywords.items():
        for keyword in keywords:
            for tag in generated_tags:
                if keyword in tag:
                    return department # Match found!

    return "General Grievance Cell / Public Relations Office"


if __name__ == "__main__":
    # Your example: a simple description of a broken road
    issue_description = "traffic signal not working"
    
    print(f"Analyzing Issue: \"{issue_description.strip()}\"")
    print("-" * 30)

    tags = generate_tags_from_description(issue_description)
    print(f"Generated Tags: {tags}")

    assigned_department = assign_department_from_tags(tags)
    
    print("-" * 30)
    print(f"✅ Issue Assigned To: {assigned_department}")