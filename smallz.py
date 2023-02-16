# read no-likey.png
# resize to 19x19 with cv2

import cv2
import numpy as np
def resize(img, sizes=[16, 32, 48, 128]):
    """
    Resize an image to a set of sizes and save the results as PNG files.

    Parameters:
    img (numpy.ndarray): The image to resize, represented as a NumPy array.
    sizes (list): The sizes to which the image should be resized, as a list of integers. Default is [16, 32, 48, 128].

    Returns:
    None
    """
    for size in sizes:
        img_resize = cv2.resize(img, (size, size))
        cv2.imwrite(f'no-likey-{size}.png', img_resize)

if __name__ == '__main__':
    img = cv2.imread('no-likey.png', cv2.IMREAD_COLOR)
    resize(img)