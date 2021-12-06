from PIL import Image
import deeppyer, asyncio

async def fry():
    img = Image.open('../mqdefault.jpg')
    img = await deeppyer.deepfry(img)
    img.save('./fried.jpg')

loop = asyncio.get_event_loop()
loop.run_until_complete(fry())
