module.exports = {
    async redirects() {
        return [
            {
                source: '/_error',
                destination: '/',
                permanent: false,
            },
        ]
    },
}