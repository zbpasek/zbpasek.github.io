import os
import re
from pathlib import Path

# Ścieżka do pliku publikacje.md
input_file = "publikacje.md"

# Folder wyjściowy
output_folder = "_publications"
os.makedirs(output_folder, exist_ok=True)

def parse_publications(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        content = file.read()

    # Podział na sekcje według nagłówków markdown (## Nazwa Sekcji)
    sections = re.split(r"^##\s+(.*)", content, flags=re.MULTILINE)
    publications = []

    # Przetwarzanie każdej sekcji
    for i in range(1, len(sections), 2):
        section_name = sections[i].strip()
        entries = sections[i + 1]

        # Znajdź wszystkie przypisy w sekcji (linia zaczynająca się od "- ")
        matches = re.findall(r"-\s+(.*)", entries)
        for match in matches:
            # Wyodrębnij rok z przypisu (np. "(1992)")
            year_match = re.search(r"\((\d{4})\)", match)
            year = year_match.group(1) if year_match else "0000"

            # Dodaj publikację do listy
            publications.append({
                "section": section_name,
                "year": int(year),
                "citation": match.strip()
            })

    return publications

def save_publications(publications, output_dir):
    for i, pub in enumerate(publications):
        # Tworzenie unikalnej nazwy pliku na podstawie sekcji i indeksu
        filename = f"{pub['section'].lower().replace(' ', '-')}-{i + 1}.md"
        filepath = Path(output_dir) / filename

        # Zapisanie danych w formacie Markdown z front matter
        with open(filepath, "w", encoding="utf-8") as file:
            file.write("---\n")
            file.write(f"section: \"{pub['section']}\"\n")
            file.write(f"year: {pub['year']}\n")
            file.write(f"citation: \"{pub['citation']}\"\n")
            file.write("---\n")

# Parsowanie publikacji
publications = parse_publications(input_file)

# Zapisanie publikacji do folderu _publications
save_publications(publications, output_folder)

print(f"Zapisano {len(publications)} publikacji w folderze '{output_folder}'")
