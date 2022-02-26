import React from "react";
import "./preview.collection.style.scss";
import CollectionItem from "../collection-item/collection-item.component";
const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((_, index) => index < 4)
          .map(({ id, ...otherPropsItem }) => {
            return <CollectionItem key={id} {...otherPropsItem} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
