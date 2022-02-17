// domain.com/about
import { Fragment } from "react";
import Head from "next/head";

const About = () => {
    return (
        <Fragment>
            <Head>
                <title>Open Blog | About</title>
                <meta name='description' content='Open Blog is a blog where anyone is free to blog about whatever they like.' />
            </Head>
            <div>
                <h1>About</h1>
                <p>Got a topic you would like to blog about? Blog it! Don&apos;t like something you saw here? Delete it! Found a typo or want to contribute to an existing blog post? Edit it! This is a blog where anyone is free to manage the content!
                </p>
            </div>
        </Fragment>
    );
};

export default About;