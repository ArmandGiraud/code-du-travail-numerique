import React from "react";
import PropTypes from "prop-types";
import ModeleCourrierIcon from "../icons/ModeleCourrierIcon";
const DownloadFile = ({ title, type, file, icon: Icon }) => {
  const [, extension] = file.split(/\.([a-z]{2,4})$/);
  return (
    <a
      className="btn-large btn-download"
      title="Télécharger le courrier type"
      href={file}
    >
      <Icon
        style={{ width: "2em", marginRight: "1em" }}
        className="btn-download--icon"
      />
      <div>
        <span className="btn-download--label">{title}</span>
        <span className="btn-download--type">{type}</span>{" "}
        {extension && (
          <span className="btn-download--extension"> - {extension}</span>
        )}
      </div>
    </a>
  );
};

DownloadFile.defaultProps = {
  icon: ModeleCourrierIcon
};

DownloadFile.propTypes = {
  file: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.func
};

export { DownloadFile };
