import React, { Component } from "react";
import PropTypes from "prop-types";

import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

const registeredLanguages = {};

class Highlight extends Component {
  // @ts-ignore
  constructor(props) {
    super(props);

    this.state = { loaded: false };
    // @ts-ignore
    this.codeNode = React.createRef();
  }

  componentDidMount() {
    // @ts-ignore
    const { language } = this.props;

    // @ts-ignore
    if (language && !registeredLanguages[language]) {
      try {
        const newLanguage = require(`highlight.js/lib/languages/${language}`);
        hljs.registerLanguage(language, newLanguage);
        // @ts-ignore
        registeredLanguages[language] = true;

        this.setState({ loaded: true }, this.highlight);
      } catch (e) {
        console.error(e);
        throw Error(`Cannot register the language ${language}`);
      }
    } else {
      this.setState({ loaded: true });
    }
  }

  componentDidUpdate() {
    this.highlight();
  }

  highlight = () => {
    // @ts-ignore
    this.codeNode &&
    // @ts-ignore
      this.codeNode.current &&
      // @ts-ignore
      hljs.highlightBlock(this.codeNode.current);
  };

  render() {
    // @ts-ignore
    const { language, children } = this.props;
    // @ts-ignore
    const { loaded } = this.state;

    if (!loaded) {
      return null;
    }

    return (
      <pre className="rounded">
        
        <code ref={
          // @ts-ignore
          this.codeNode
          } className={language}>
          {children}
        </code>
      </pre>
    );
  }
}
// @ts-ignore
Highlight.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string,
};
// @ts-ignore
Highlight.defaultProps = {
  language: "json",
};

export default Highlight;
