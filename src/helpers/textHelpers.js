import linkifyStr from 'linkify-string';
import 'linkify-plugin-hashtag';
import 'linkify-plugin-mention';

const checkLinkJS = "const prefix = this.innerHTML.slice(0,1); const text = this.innerHTML.slice(1); if(prefix == '@') window.history.pushState(null, null, '/user/' + text + '/posts'); else if (prefix == '#') window.history.pushState(null, null, '/hashtag/' + text);";

function getLinkifyText(text) {
  const options = {
    className: "contentLinks",
    formatHref: {
      hashtag: (href) => "#",
      mention: (href) => "#",
    },
    attributes: {
      onclick: checkLinkJS,
    },
    target: {
      url: "_blank",
    },
  };
  return linkifyStr(text, options);
}
export { getLinkifyText };
