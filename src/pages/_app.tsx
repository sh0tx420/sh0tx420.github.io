import type { Metadata } from "next";
import { AppProps } from "next/app";
import Layout from "@/components/layout";

import "@/styles.css";

export const metadata: Metadata = {
    title: "sh0tx420.github.io",
    description: "sh0tx420.github.io",
};

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
