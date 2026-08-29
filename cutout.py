from rembg import remove
from PIL import Image
import sys

def cut_background(input_path, output_path):
    print(f"Loading {input_path}")
    input_image = Image.open(input_path)
    print("Removing background...")
    output_image = remove(input_image)
    output_image.save(output_path)
    print(f"Saved to {output_path}")

if __name__ == '__main__':
    cut_background('public/images/profile.jpg', 'public/images/profile.png')
