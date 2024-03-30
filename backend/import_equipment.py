import os
import django
import csv

# Set up Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'firstbite.settings')
django.setup()

from equipment.models import Equipment

def import_equipment_from_csv(file_path):
    with open(file_path, 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:

            price = float(row['Price'].replace('$', '').replace(',', '')) if row['Price'] else None
   

            Equipment.objects.create(
                name=row['Name'],
                description="",
                imageUrl=row['Image'],
                serialNumber=row['Serial'],
                price=price
            )


csv_file_path = 'scraped_equipment.csv'
import_equipment_from_csv(csv_file_path)
