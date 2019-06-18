import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Panel = ({ id, type, headerClass, title, subTitle, removeBottomPadding, removeAllPadding, halfPadding, darkMode, children, panelTable, footerText, footerClass }) => {
    const panelClasses = classnames(
        "panel",
        type ? `panel-${type}` : "panel-default",
        removeBottomPadding ? "panel-bottomless" : null,
        removeAllPadding ? "panel-no-padding" : null,
        halfPadding ? "panel-half-padding" : null,
        darkMode ? "panel-dark" : null
    );

    return (
        <section
            className={panelClasses}
            id={id}>
            {title
                ? (<header className={headerClass ? "panel-header" : null}>
                    <h2 className="panel-title">{title}</h2>
                    {subTitle ? <p className="panel-sub-title">{subTitle}</p> : null}
                </header>)
                : null}
            {children
                ? (<div className="panel-body">
                    {children}
                </div>)
                : null}
            {panelTable
                ? (<div className="panel-table">
                    {panelTable}
                </div>)
                : null}
            {footerText
                ? (<footer className={footerClass ? "panel-footer" : null}>
                    <p>{footerText}</p>
                </footer>)
                : null}
        </section>
    );
};

Panel.propTypes = {
    title: PropTypes.string,
    headerClass: PropTypes.bool,
    subTitle: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.oneOf(["brand", "default", "muted", ""]),
    halfPadding: PropTypes.bool,
    removeAllPadding: PropTypes.bool,
    removeBottomPadding: PropTypes.bool,
    darkMode: PropTypes.bool,
    bodyContent: PropTypes.object,
    footerClass: PropTypes.bool,
    footerText: PropTypes.string
};

export default Panel;
