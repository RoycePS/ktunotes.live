import React from "react";
import genericPages from "../../data/pages";

export function GenericContent({ primaryRoute }) {
  const page = genericPages[primaryRoute];

  if (!page) {
    return null;
  }

  return (
    <section className="app-view active">
      <div className="view-header">
        <h1>{page.title}</h1>
        <p className="view-subtitle">{page.desc}</p>
      </div>
      <div 
        className="generic-content-card"
        dangerouslySetInnerHTML={{ __html: page.body || "" }}
      >
      </div>
    </section>
  );
}
export default GenericContent;
