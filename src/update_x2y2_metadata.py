from selenium import webdriver
import time
driver = webdriver.Chrome()

for i in range(10, 7400):
    url="https://x2y2.io/eth/0x1b489201D974D37DDd2FaF6756106a7651914A63/"+str(i)
    driver.get(url)
    button = driver.find_element("xpath", "//button[@aria-label='Refresh metadata']")
    button.click()
    print(i)
     

driver.close()