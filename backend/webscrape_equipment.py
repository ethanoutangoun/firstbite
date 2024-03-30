from bs4 import BeautifulSoup
import csv
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


# Important columns in CSV file
IMAGE_ADDRESS_COL = 8
FIRST_NAME_COL = 0
LAST_NAME_COL = 1




def web_scrape():
    outp = []
    header = ['Serial', 'Name', 'Image', 'Price']
    f = open('scraped_equipment.csv', 'w+', encoding='UTF8', newline='')
    writer = csv.writer(f)
    writer.writerow(header)

  
    url = "https://www.therestaurantstore.com/categories/52705/reach-in-refrigerators"


    options = webdriver.ChromeOptions()
    options.add_experimental_option('excludeSwitches', ['enable-logging'])
    driver = webdriver.Chrome(options=options)
    driver.get(url)

    

    soup = BeautifulSoup(driver.page_source, "html.parser")
    product_boxes = soup.find_all(attrs={'class':'flex flex-col flex-grow py-4 mx-4 space-y-2 bg-white rounded-xl'})   




    for index, box in enumerate(product_boxes):
        serial = box.find_all("div", recursive=False)[1].find_all("span")[0].string
        name = box.find_all("div", recursive=False)[1].find_all("span")[1].string
        imgUrl = box.find_all("div", recursive=False)[0].find("img")['src'].replace("medium", "large")
        price = box.find("div", class_="whitespace-nowrap text-dark text-2.25xl font-medium").find_all("span")[1].string.split()[0]

        if not imgUrl.startswith('https://'):
            imgUrl = None


        row = [serial, name, imgUrl, price]
        writer.writerow(row)
        outp.append(row)

    # Write the rows to the CSV file
    writer.writerows(outp)

    # Close the file
    f.close()
  


def main():
    web_scrape()

if __name__=="__main__":
    main()