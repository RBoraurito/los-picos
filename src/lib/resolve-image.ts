export async function resolveImage(src: string) {
  const images = import.meta.glob<{ default: ImageMetadata }>("../assets/**/*.{jpg,jpeg,png,webp}");

  const image = await Object.entries(images).find(([key]) => key.includes(src))?.[1]();

  return image?.default.src;
}
