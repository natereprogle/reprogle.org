import { MarkedOptions, MarkedRenderer } from 'ngx-markdown';

/**
 * This factory returns all the custom
 */
export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.heading = (text: string, level: number) => {
    let fontSize: string;
    switch (level) {
      case 1:
        fontSize = 'text-4xl';
        break;
      case 2:
        fontSize = 'text-3xl';
        break;
      case 3:
        fontSize = 'text-2xl';
        break;
      default:
        fontSize = 'text-xl';
    }
    return `<h${level} class="font-heading ${fontSize}">${text}</h${level}>`;
  };

  renderer.link = (
    href: string | null,
    title: string | null,
    text: string | null
  ) => {
    return `<a href="${href}" title="${title}" class="underline">${text}</a>`;
  };

  renderer.list = (body: string, ordered: boolean) => {
    let returnTag;

    if (ordered) {
      /*
        This god-awful Tailwind expression allows me to apply CSS to the immediate list objects ONLY if they are members of an <ol> tag. The reason being is that
        if we put this CSS directly on the <li> tags, even if the list wasn't an ordered list, it would still number them out due to using the counter() function
        Now, WHY, you may ask, are we doing this? Simple. To make the numbers bold. ......Yeah. You know, you'd think CSS would have this feature

        Unfortunately, Marked.js doesn't have a renderer override for list items in an ordered or unordered list like the base list override does.
        That's why we have to do this.
      */
      returnTag = `<ol class="list-none [counter-reset:item] mb-4 [&>li]:[counter-increment:item] before:[&>li]:mr-[10px] before:[&>li]:[content:counter(item)')_'] before:[&>li]:font-bold before:[&>li]:text-center before:[&>li]:inline-block">${body}</ol>`;
    } else {
      returnTag = `<ul class="list-disc list-inside mb-4">${body}</ul>`;
    }

    return returnTag;
  };

  // TODO: If we ever use tasks in the Markdown, we'll need to include code for it here
  renderer.listitem = (text: string) => {
    return `<li class="mb-1">${text}</li>`;
  };

  renderer.paragraph = (src: string) => {
    return `<p class="mb-4">${src}</p>`;
  };

  renderer.codespan = (code: string) => {
    return `<code class="bg-slate-800 px-2 rounded-[0.25rem] mx-0.5 inline-block">${code}</code>`;
  };

  return {
    renderer: renderer,
    gfm: true,
    breaks: false,
    pedantic: false,
  };
}
