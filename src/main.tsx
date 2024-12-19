import "./main.css";

import HoverPlayer from "./lib/HoverPlayer";
import Play from "./lib/play";
import { useRef } from "react";

export function Main() {
  const elementRef1 = useRef(null);
  const elementRef2 = useRef(null);
  const elementRef3 = useRef(null);
  const elementRef4 = useRef(null);
  const elementRef5 = useRef(null);
  const elementRef6 = useRef(null);

  const handleSelectText = (eRef: any) => {
    const element = eRef.current;

    if (element) {
      const range = document.createRange();
      const selection = window.getSelection();

      range.selectNodeContents(element); // Select the contents of the element
      selection.removeAllRanges();       // Clear any existing selections
      selection.addRange(range);         // Add the new range
      
      Play.speechify(range.toString());
    }
  };

  return (
    <>

      <div id="content-1">
        <article>
          <header>
            <h1 id="title">An Interesting HTML Document</h1>
            <span>
              <address id="test">John Doe</address>
            </span>
          </header>
          <section>
            <div>
              <HoverPlayer onClick={() => { handleSelectText(elementRef1) }}>
                <p ref={elementRef1} id="paragraph-lorem-ipsum" style={{ fontSize: '20px' }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the
                  release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of
                  Lorem Ipsum
                </p>
              </HoverPlayer>
              <HoverPlayer onClick={() => { handleSelectText(elementRef2) }}>
                <blockquote ref={elementRef2}>
                  This is a blockquote element on the page.
                </blockquote>
              </HoverPlayer>
              <h2>A very interesting subtopic</h2>
              <HoverPlayer onClick={() => { handleSelectText(elementRef3) }}>
                <p ref={elementRef3}>
                  The standard chunk of Lorem Ipsum used since the
                  1500s is reproduced below for those interested.
                  Sections 1.10.32 and 1.10.33 from "de Finibus
                  Bonorum et Malorum" by Cicero are also reproduced in
                  their exact original form, accompanied by English
                  versions from the 1914 translation by H. Rackham.
                  <a href="https://www.lipsum.com/">Link to lipsum.com</a>
                  Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose
                  (injected humour and the like).
                </p>
              </HoverPlayer>
              <figure>
                <img src="https://via.placeholder.com/500" />
              </figure>
              <h2 id="model-dependency">Functors in a sample page</h2>
              <HoverPlayer onClick={() => { handleSelectText(elementRef4) }}>
                <p ref={elementRef4}>
                  In mathematics, specifically category theory, a
                  functor is a mapping between categories. Functors
                  were first considered in algebraic topology, where
                  algebraic objects are associated to topological
                  spaces, and maps between these algebraic objects are
                  associated to continuous maps between spaces.
                </p>
              </HoverPlayer>
              <HoverPlayer onClick={() => { handleSelectText(elementRef5) }}>
                <blockquote ref={elementRef5}>
                  A <strong>functor</strong> is a
                  <a href="https://en.wikipedia.org/wiki/Design_pattern">design pattern</a>
                  inspired by
                  <a href="https://en.wikipedia.org/wiki/Functor">the definition from category theory</a>, that allows for a
                  <a href="https://en.wikipedia.org/wiki/Generic_type">generic type</a>
                  to apply a
                  <a href="https://en.wikipedia.org/wiki/Function_(mathematics)">function</a>
                  inside without changing the structure of the generic
                  type.
                </blockquote>
              </HoverPlayer>
              <HoverPlayer onClick={() => { handleSelectText(elementRef6) }}>
                <p ref={elementRef6}>
                  Javascript uses functors in the form of
                  Symbol.iterator. Most built-in objects have a
                  <code>[Symbol.iterator]</code> key which describes
                  how to iterate over the given object. You can learn
                  more about it on the incredible
                  <a href="https://javascript.info/iterable">javascript.info</a>. This concept allows us to do iteration and by
                  extension, mapping (<code>.map()</code>,
                  <code>.filter()</code>, etc) on many different
                  objects from arrays to generators. The function we
                  provide to <code>map()</code> will be run on all the
                  iterable's values while maintaining the container's
                  generic type.
                </p>
              </HoverPlayer>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
