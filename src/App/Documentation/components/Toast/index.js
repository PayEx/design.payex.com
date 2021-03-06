import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer, Attribute } from "#";
import Alert from "@/Alert";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>You want jam on that toast?</p>
        <ComponentPreview language="javascript" codeFigure>
            {"px.toast({ html: \"I am a toast!\" });"}
        </ComponentPreview>
        <ComponentPreview language="html" codeFigure dangerousHTML>
            {"<button onclick=\"px.toast({ html: 'I am a toast!' })\" class=\"btn btn-primary\">Toast!</button>"}
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel>
            <button className="btn btn-primary" type="button" onClick={() => px.toast({ html: "I am a toast!" })}>Click for toast!</button>
        </ComponentPreview>
        <Alert type="warning">
            <h5>Content restriction</h5>
            <p>
                Don’t put too much text in toasts as they are meant to be visible for only a short amount of time.
                Due to the time restriction you should also avoid putting vital information in them.
                A <Link to="/docs/components/sheet">sheet</Link> or <Link to="/docs/components/dialog">dialog</Link> is
                recommended when recieving input or relaying large amounts of information.
            </p>
        </Alert>
    </>
);

const Options = () => (
    <>
        <h2 id="options">Options</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>html</td>
                    <td>String</td>
                    <td><Attribute value={"\"\""} /></td>
                    <td>The HTML content of the Toast.</td>
                </tr>
                <tr>
                    <td>type</td>
                    <td>String</td>
                    <td><Attribute value={"\"\""} /></td>
                    <td>Premade alert types; <Attribute value="success" />, <Attribute value="neutral" />, <Attribute value="warning" /> and <Attribute value="danger" /> are available.</td>
                </tr>
                <tr>
                    <td>dismissable</td>
                    <td>Boolean</td>
                    <td><Attribute value="true" /></td>
                    <td>Wether or not the alert should be dismissable by the user (close button).</td>
                </tr>
                <tr>
                    <td>icon</td>
                    <td>String</td>
                    <td><Attribute value={"\"\""} /></td>
                    <td>Custom icon for the toast. See <Link to="/docs/core/icons">icons</Link> for more info.</td>
                </tr>
                <tr>
                    <td>displayLength</td>
                    <td>Number</td>
                    <td><Attribute value="4000" /></td>
                    <td>Length in ms the Toast stays before dismissal.</td>
                </tr>
                <tr>
                    <td>classes</td>
                    <td>Array of strings</td>
                    <td><Attribute value="[]" /></td>
                    <td>Classes to be added to the toast element.</td>
                </tr>
                <tr>
                    <td>completeCallback</td>
                    <td>Function</td>
                    <td><Attribute value="null" /></td>
                    <td>Callback function called when toast is dismissed.</td>
                </tr>
            </tbody>
        </table>
    </>
);

const PremadeToasts = () => (
    <>
        <h2 id="premade-toasts">Premade toasts</h2>
        <p>There are four premade toast styles other than the default one; <Attribute value="neutral" />, <Attribute value="success" />, <Attribute value="warning" /> and <Attribute value="danger" />. Apply the desired one to the options object and be amazed!</p>
        <ComponentPreview language="html" codeFigure dangerousHTML>
            {"<button type=\"button\" onclick=\"px.toast({ html: 'I am a neutral toast!', type: 'neutral' })\" class=\"btn btn-primary\">Neutral toast</button>"}
            {"<button type=\"button\" onclick=\"px.toast({ html: 'I am a success toast!', type: 'success' })\" class=\"btn btn-primary\">Success toast</button>"}
            {"<button type=\"button\" onclick=\"px.toast({ html: 'I am a warning toast!', type: 'warning' })\" class=\"btn btn-primary\">Warning toast</button>"}
            {"<button type=\"button\" onclick=\"px.toast({ html: 'I am a danger toast!', type: 'danger' })\" class=\"btn btn-primary\">Danger toast</button>"}
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel>
            <button
                className="btn btn-primary"
                type="button"
                onClick={() => px.toast({
                    html: "I am a toast!",
                    type: "neutral"
                })}
            >
                Neutral toast
            </button>{"\n"}
            <button
                className="btn btn-primary"
                type="button"
                onClick={() => px.toast({
                    html: "I am a toast!",
                    type: "success"
                })}
            >
                Success toast
            </button>{"\n"}
            <button
                className="btn btn-primary"
                type="button"
                onClick={() => px.toast({
                    html: "I am a toast!",
                    type: "warning"
                })}
            >
                Warning toast
            </button>{"\n"}
            <button
                className="btn btn-primary"
                type="button"
                onClick={() => px.toast({
                    html: "I am a toast!",
                    type: "danger"
                })}
            >
                Danger toast
            </button>
        </ComponentPreview>
    </>
);

const CustomHtml = () => {
    const toastHtml = "<span><p>I am toast content.</p><p>You can put me on several lines.</p></span><button class=\"btn toast-action\">Undo</button>";

    return (
        <>
            <h2 id="custom-html">Custom HTML</h2>
            <p>You can pass in an HTML String as the first argument as well. Take a look at the example below, where we pass in text as well as a flat button. If you call an external function instead of in-line JavaScript, you will not need to escape quotation marks.</p>
            <ComponentPreview language="javascript" codeFigure>
                {"const toastHtml = \"<span><p>I am toast content.</p><p>You can put me on several lines.</p></span><button class='btn toast-action'>Undo</button>\";"}{"\n"}
                {"px.toast({ html: toastHtml });"}
            </ComponentPreview>
            <ComponentPreview language="html" showCasePanel>
                <button className="btn btn-primary" type="button" onClick={() => px.toast({ html: toastHtml })}>Toast with action</button>
            </ComponentPreview>
        </>
    );
};

class Toast extends Component {
    render () {
        return (
            <DocContainer>
                <p className="lead">
                    Toasts can be used as a way to give feedback to a user. Use it to display short messages that something has happened that will not be immediatley apparent on the website.
                    This can be everything from a server query to saving some user settings.
                </p>
                <Overview />
                <Options />
                <PremadeToasts />
                <CustomHtml />
            </DocContainer>
        );
    }
}

export default Toast;

/* For testing */
export { Overview, Options, PremadeToasts, CustomHtml };
