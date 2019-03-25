import React, { Component } from "react";
import PrismCode from "react-prism";

import { ComponentPreview, DocContainer, Property, Attribute } from "#";
import TopbarComponent from "@/Topbar";
import { topbar } from "$/px-script/main";

const menu = {
    btn: {
        icon: "menu",
        text: "Menu"
    },
    items: ["Link 1", "Link 2", "Link 3"]
};

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>
            To use a topbar the bare minimum markup required is:
        </p>
        <ul>
            <li><Property value=".topbar" /> wrapper.</li>
            <li>Anchor with class <Property value=".topbar-logo" /> to display the logo and make it clickable.</li>
        </ul>
        <p>
            With this you get a topbar with the PayEx logo.
            In the topbar you can add additional functionality like a menu containing links. To enable this add a <PrismCode className="language-html">{"<button>"}</PrismCode> and
            a <PrismCode className="language-html">{"<nav>"}</PrismCode> containing anchors. Remember to include <Attribute data name="toggle-nav" value="{your_nav_id}"/> as a <PrismCode className="language-html">{"<button>"}</PrismCode> attribute
            to get the menu to appear when the menu-button is clicked.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <TopbarComponent topbarContent={menu} logout />
        </ComponentPreview>
    </>
);

class Topbar extends Component {
    componentDidMount () {
        topbar.init(1);
    }

    render () {
        return (
            <DocContainer docToc>
                <p className="lead">The topbar is used to give users an easily available navigational bar at the top of your web application.</p>
                <Overview />
            </DocContainer>
        );
    }
}

export default Topbar;

/* For testing */
export { Overview };
