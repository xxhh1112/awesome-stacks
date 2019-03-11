import React from "react"

const StackCard = ({ node }) => (
  <div className="card is-tool-card">
    <div className="card-content has-text-centered">
      <div className="is-size-4 has-margin-top-5">
        <a href={`/${node.parent.name}`}>
          {node.frontmatter.title}
        </a>
      </div>
      <p className="has-margin-top-10">
        {node.frontmatter.description}
      </p>
      <p className="has-margin-top-10">
        <span>by</span>
        {node.frontmatter.contributors.map(contributor => <a href={contributor.url} key={contributor.name}>&nbsp; @{contributor.name}</a>)}
      </p>
    </div>
  </div>
);

export default StackCard