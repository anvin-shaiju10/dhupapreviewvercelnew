from PIL import Image
from pathlib import Path
for p in sorted(Path('public').glob('*.jpg')):
    with Image.open(p) as im:
        print(f'{p.name}: {im.size[0]}x{im.size[1]}')
