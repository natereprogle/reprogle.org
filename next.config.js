/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        loader: 'custom',
        loaderFile: './imageLoader.js',
    },
    output: 'export',
}

module.exports = nextConfig
