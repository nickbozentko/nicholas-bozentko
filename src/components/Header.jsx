import React from 'react';
import Head from 'next/head';

const Header = () => (
    <Head>
        <title>Nicholas Bozentko</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        
        {/* Roboto */}
        <link href="https://fonts.googleapis.com/css?family=Roboto:200,400" rel="stylesheet" />
        {/* Roboto Mono */}
        <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400" rel="stylesheet" />
        {/* Noto Sans */}
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans:200,400" rel="stylesheet" />

        {/* Standard Meta Tags */}
        <meta name="description" content="Hi, I'm Nick. Here's a little bit about me." />
        <meta name="keywords" content="Nicholas, Bozentko, Developer, Iona, IBM, UPE, Game of Cycles" />
        <meta name="author" content="Nicholas Bozentko" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Nicholas Bozentko" />
        <meta property="og:description" content="Hi, I'm Nick. Here's a little bit about me." />
        <meta property="og:image" content="https://nicholasbozentko.com/nickLogo.svg" />
        <meta property="og:url" content="https://nicholasbozentko.com" />
        
        {/* Twitter Meta Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nicholasbozentko.com/" />
        <meta property="twitter:title" content="Nicholas Bozentko" />
        <meta property="twitter:description" content="Hi, I'm Nick. Here's a little bit about me." />
        <meta property="twitter:image" content="https://nicholasbozentko.com/nickLogo.svg" />
    </Head>
)

export default Header;