from PIL import Image
import numpy as np

def make_transparent(image_path, output_path):
    img = Image.open(image_path).convert("RGBA")
    data = np.array(img)
    
    r = data[:, :, 0].astype(float)
    g = data[:, :, 1].astype(float)
    b = data[:, :, 2].astype(float)
    
    brightness = (r + g + b) / 3
    
    mask = (brightness - 100) * (255 / 155)
    mask = np.clip(mask, 0, 255)
    
    data[:, :, 0] = 255
    data[:, :, 1] = 255
    data[:, :, 2] = 255
    data[:, :, 3] = mask.astype(np.uint8)
    
    Image.fromarray(data).save(output_path)
    print("Saved transparent signature.")

if __name__ == '__main__':
    make_transparent('public/images/signature.png', 'public/images/signature_transparent.png')
