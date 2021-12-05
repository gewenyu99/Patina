import io
import imageio
import numpy as np
from PIL import Image


def find_resize(w, h, target_width):
    scale_factor = target_width / w
    return int(w * scale_factor), int(h * scale_factor)


def apply_baidu_filter(im):
    data = np.array(im, dtype=float)
    # Edit the RGB bands to simulate the green tint from compression artifacts
    data[:, :, 0] *= 0.99
    data[:, :, 1] *= 1.01
    data[:, :, 1] = np.clip(data[:, :, 1], 0, 255)
    data[:, :, 2] *= 0.99
    return Image.fromarray(data.astype(np.uint8))


def apply_compression_artifacts(im, q, w, h):
    buffer = io.BytesIO()
    im.save(buffer, "PNG", quality=q)
    im = Image.open(buffer, "r")
    im = im.resize((find_resize(w, h, 400)))
    im = im.resize((w, h))

    return im

def jpegBlur(path, q=9, add_baidu_artifact=False, artifact_factor=1):
    im = Image.open(path)

    w, h = im.size
    # Load image
    # repeated apply compression to generate compression artifacts
    for i in range(artifact_factor):
        if add_baidu_artifact:
            # Use numpy to map out RGB
            im = apply_baidu_filter(im)
        im = apply_compression_artifacts(im, q, w, h)
    im = im.resize((find_resize(w, h, 800)))
    im.show()
    im.save("./patina.jpg", "JPEG", quality=q)


jpegBlur("./IMG_20210629_165616_mh1624966004274.jpg", 10, True, 10)
