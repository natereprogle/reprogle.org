const normalizeSrc = src => {
    return src.startsWith('/') ? src.slice(1) : src
}

/**
 * Generates a Cloudflare image loader URL with specified parameters.
 *
 * @param {string} src - The source URL of the image.
 * @param {number} width - The desired width of the image.
 * @param {quality} quality - The quality of the image
 * @return {string} The generated Cloudflare image loader URL.
 */
export default function cloudflareLoader({ src, width, quality }) {
    const params = [`width=${width}`]
    if (quality) {
        params.push(`quality=${quality}`)
    }
    const paramsString = params.join(',')
    return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`
}
