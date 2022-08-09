import React from "react";
import Editor from "./Editor";
import MarkdownProvider from "./MarkdownProvider";
import Previewer from "./Previewer";
import Header from "./Header";
import Footer from "./Footer";

/**
 * The component sits at the root of the tree. 
 * @returns components that make up the whole structure of the app.
 */
export default function App() {
  return (
    <>
    <Header />
    <div id="container">
      <MarkdownProvider>
        <Editor />
        <Previewer />
      </MarkdownProvider>
    </div>
    <Footer />
    </>
  );
}