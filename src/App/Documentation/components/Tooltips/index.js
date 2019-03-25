import React, { Component } from "react";

import { ComponentPreview, DocContainer, Attribute } from "#";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Add the attribute <Attribute data name="tooltip" /> to the desired element and add your content in its value to create a tooltip.</p>
        <p>You can use the attribute <Attribute data name="tooltip-position" /> to position the tooltip relative to the containing element, use the values <Attribute value="top" />, <Attribute value="right" />, <Attribute value="bottom" /> or <Attribute value="left" />. If the attribute is not provided, it will default to top.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <button
                    className="btn btn-executive"
                    type="button"
                    data-tooltip="This is a tooltip!"
                    data-tooltip-position="left"
                >Tooltip to the left
                </button>{"\n"}
                <button
                    className="btn btn-executive"
                    type="button"
                    data-tooltip="This is a tooltip!"
                    data-tooltip-position="top"
                >Tooltip on top
                </button>{"\n"}
                <button
                    className="btn btn-executive"
                    type="button"
                    data-tooltip="This is a tooltip!"
                    data-tooltip-position="bottom"
                >Tooltip to the bottom
                </button>{"\n"}
                <button
                    className="btn btn-executive"
                    type="button"
                    data-tooltip="This is a tooltip!"
                    data-tooltip-position="right"
                >Tooltip to the right
                </button>{"\n"}
            </div>
        </ComponentPreview>
    </>
);

class Tooltip extends Component {
    render () {
        return (
            <DocContainer docToc>
                <p className="lead">Tooltips are small, interactive, textual hints for mainly graphical elements. When using icons for actions you can use a tooltip to give people clarification on its function.</p>
                <Overview />
            </DocContainer>
        );
    }
}

export default Tooltip;

/* For testing */
export { Overview };
