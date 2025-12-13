export const optimizeImageUrl = (url: string, width?: number, quality: number = 80): string => {
  if (!url) return '';

  if (url.includes('picsum.photos')) {
    return url.includes('?') ? `${url}&q=${quality}` : `${url}?q=${quality}`;
  }

  if (url.includes('unsplash.com')) {
    return `${url}&q=${quality}&fm=auto`;
  }

  if (url.includes('github.com')) {
    return url;
  }

  return url;
};
