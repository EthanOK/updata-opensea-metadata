from selenium import webdriver

import threading
import time


def updata(start, end):
    driver = webdriver.Chrome()
    for i in range(start, end + 1):
        url = "https://x2y2.io/eth/0x1b489201D974D37DDd2FaF6756106a7651914A63/" + str(i)
        driver.get(url)
        token = driver.find_element("xpath", "//*[@id='__next']/div[1]/div/header/h1")
        if token.text != "YGME":
            print(str(i))
            continue
        else:
            button = driver.find_element(
                "xpath", "//button[@aria-label='Refresh metadata']"
            )
            button.click()
            print("Refresh TokenId: " + str(i))
            time.sleep(1)

    driver.close()


# 创建线程
thread1 = threading.Thread(target=updata, args=(3398, 3500))
thread2 = threading.Thread(target=updata, args=(4380, 4500))
thread3 = threading.Thread(target=updata, args=(7000, 7200))
thread4 = threading.Thread(target=updata, args=(6452, 6500))


# 启动线程
thread1.start()
thread2.start()
thread3.start()
thread4.start()

# 等待线程结束
thread1.join()
thread2.join()
thread3.join()
thread4.join()

print("Main thread exiting.")
