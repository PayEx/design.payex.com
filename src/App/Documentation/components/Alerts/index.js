import React, { Component } from "react";
import { Link } from "react-router-dom";
import PrismCode from "react-prism";

import { ComponentPreview, Attribute, Property, DocContainer, JavascriptDocs } from "#";
import AlertComponent from "@/Alert";

const { alert } = window.px;

const BasicUsage = () => (
    <>
        <h2 id="basic-usage">Basic usage</h2>
        <p>The default behavior of the alert present itself in a box with a border.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <AlertComponent type="default" text="This is a default alert!" />{"\n\n"}
            <AlertComponent type="success" text="This is a success alert!" />{"\n\n"}
            <AlertComponent type="neutral" text="This is a neutral alert!" />{"\n\n"}
            <AlertComponent type="warning" text="This is a warning alert!" />{"\n\n"}
            <AlertComponent type="danger" text="This is a danger alert!" />
        </ComponentPreview>
    </>
);

const AlertWithIcon = () => (
    <>
        <h2 id="icons">Icons</h2>
        <p>To use an alert with an icon... Read more about icon usage here <Link to="/docs/core/icons">here</Link>.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <AlertComponent type="default" text="This is a default alert with an icon!" icon="info_outline" />{"\n\n"}
            <AlertComponent type="success" text="This is a success alert with an icon!" icon="check_circle" />{"\n\n"}
            <AlertComponent type="neutral" text="This is a neutral alert with an icon!" icon="info" />{"\n\n"}
            <AlertComponent type="warning" text="This is a warning alert with an icon!" icon="warning" />{"\n\n"}
            <AlertComponent type="danger" text="This is a danger alert with an icon!" icon="error" />
        </ComponentPreview>
    </>
);

const ClosingTheAlert = () => (
    <>
        <h2 id="closing-the-alert">Closing the alert</h2>
        <p>
            To add a close-button, add the following code inside your alert-element:<br/>
            <PrismCode className="language-html">{"<a href=\"#\" data-alert-close><i class=\"material-icons\">close</i></a>"}</PrismCode>
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <AlertComponent type="default" text="This is a default alert with an icon!" close icon="info_outline" />{"\n\n"}
            <AlertComponent type="success" text="This is a success alert with an icon!" close icon="check_circle" />{"\n\n"}
            <AlertComponent type="neutral" text="This is a neutral alert with an icon!" close icon="info" />{"\n\n"}
            <AlertComponent type="warning" text="This is a warning alert with an icon!" close icon="warning" />{"\n\n"}
            <AlertComponent type="danger" text="This is a danger alert with an icon!" close icon="error" />
        </ComponentPreview>
        <h3>External close button</h3>
        <p>To add an external close-button for your alert add the attribute <Attribute data name="alert-close" value="{id}" /> to the button element.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <AlertComponent id="alert-success-1" type="success" text="Press the button below to close me" icon="check_circle" />{"\n\n"}
            <button type="button" className="btn btn-primary" data-alert-close="alert-success-1">Close alert</button>
        </ComponentPreview>
    </>
);

const ExtendedUsage = () => (
    <>
        <h2 id="extended-usage">Extended usage</h2>
        <p>Alerts can also contain additional HTML elements like headings, paragraphs and dividers.</p>
        <p>Just make sure to wrap the content in a container with the class <Property value=".alert-body" />.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <AlertComponent type="success" close icon="check_circle">
                <h3 className="text-success">Success!</h3>
                <p>PDF was successfully uploaded. <br /> Some additional information.</p>
                <hr/>
                <p>By the way, great job!</p>
            </AlertComponent>
        </ComponentPreview>
    </>
);

const JavascriptMethods = () => (
    <>
        <h2 id="javascript-methods">JavaScript methods</h2>
        <JavascriptDocs componentName="alert" />
    </>
);

class Alerts extends Component {
    componentDidMount () {
        alert.init();
    }

    render () {
        return (
            <DocContainer docToc>
                <p className="lead">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
                <BasicUsage />
                <AlertWithIcon />
                <ClosingTheAlert />
                <ExtendedUsage />
                <JavascriptMethods />
            </DocContainer>
        );
    }
}

export default Alerts;

/* For testing */
export { BasicUsage, AlertWithIcon, ClosingTheAlert, ExtendedUsage, JavascriptMethods };
