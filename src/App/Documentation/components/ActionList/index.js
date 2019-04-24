import React, { Component } from "react";

import { ComponentPreview, DocContainer, Icon } from "#";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Action lists.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="action-list">{"\n"}
                <Icon icon="more_vert" />{"\n"}
                <div className="action-menu">{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="bookmark"/>Add bookmark</a>{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="business_center"/>Add client</a>{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="add_circle"/>Add document</a>{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="person_add"/>Add user</a>{"\n"}
                </div>
            </div>
        </ComponentPreview>
    </>
);

const Anchorpoints = () => (
    <>
        <h2 id="anchorpoints">Anchorpoints</h2>
        <p>You can change where the action list will have its anchor, by default the anchor will be top right.</p>
        <h3>Top left</h3>
        <p>Use class <code className="token property">.anchor-top-left</code> to anchor action-list button to the top left corner of the menu.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="action-list anchor-top-left">{"\n"}
                <Icon icon="more_vert" />{"\n"}
                <div className="action-menu">{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="bookmark"/>Add bookmark</a>{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="business_center"/>Add client</a>{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="add_circle"/>Add document</a>{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="person_add"/>Add user</a>{"\n"}
                </div>
            </div>
        </ComponentPreview>
        <h3>Bottom right</h3>
        <p>Use class <code className="token property">.anchor-bottom-right</code> to anchor action-list button to the bottom right corner of the menu.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="action-list anchor-bottom-right">{"\n"}
                <Icon icon="more_vert" />{"\n"}
                <div className="action-menu">{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="bookmark"/>Add bookmark</a>{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="business_center"/>Add client</a>{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="add_circle"/>Add document</a>{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="person_add"/>Add user</a>{"\n"}
                </div>
            </div>
        </ComponentPreview>
        <h3>Bottom left</h3>
        <p>Use class <code className="token property">.anchor-bottom-left</code> to anchor action-list button to the bottom left corner of the menu.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="action-list anchor-bottom-left">{"\n"}
                <Icon icon="more_vert" />{"\n"}
                <div className="action-menu">{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="bookmark"/>Add bookmark</a>{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="business_center"/>Add client</a>{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="add_circle"/>Add document</a>{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="person_add"/>Add user</a>{"\n"}
                </div>
            </div>
        </ComponentPreview>
    </>
);

class ActionList extends Component {
    componentDidMount () {
        px.actionList.init();
    }

    render () {
        return (
            <DocContainer docToc>
                <p className="lead">
                    Action lists are small menus that remain hidden until clicked. In these you can put page links or anchors that trigger an action elsewhere.
                </p>
                <Overview />
                <Anchorpoints />
            </DocContainer>
        );
    }
}

export default ActionList;

/* For testing */
export { Overview, Anchorpoints };
