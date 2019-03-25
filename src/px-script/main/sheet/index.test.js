import React from "react";
import ReactDOM from "react-dom";

import sheet from "./index";
import toast from "../toast/index";

describe("px-script: sheet", () => {
    const div = document.createElement("div");

    document.body.appendChild(div);
    jest.useFakeTimers();

    const Sheet = () => (
        <>
            <div className="sheet" id="demo-sheet">
                <section></section>
            </div>
            <button className="btn btn-executive" type="button" data-sheet-open="demo-sheet">Open sheet</button>
        </>
    );

    const OpenSheet = () => (
        <>
            <div className="sheet sheet-open" id="demo-sheet">
                <section>
                    <a href="#" className="sheet-close">
                        <i className="material-icons">close</i>
                    </a>
                </section>
            </div>
            <button className="btn btn-executive" type="button" data-sheet-close="demo-sheet">Close sheet</button>
        </>
    );

    beforeEach(() => {
        jest.runAllTimers();
        document.body.classList.remove("sheet-open");
    });

    afterEach(() => {
        ReactDOM.unmountComponentAtNode(div);
    });

    it("is defined", () => {
        expect(sheet).toBeDefined();
    });

    it("has an init method", () => {
        expect(sheet.init).toBeDefined();
        expect(sheet.init).toBeInstanceOf(Function);
    });

    it("button with attribute 'data-sheet-open' pointing to the correct id opens corresponding sheet", () => {
        ReactDOM.render(<Sheet />, div);

        const renderedSheet = document.querySelector(".sheet");
        const openBtn = document.querySelector("[data-sheet-open]");

        expect(renderedSheet.classList).not.toContain("d-block");

        sheet.init();
        expect(document.body.classList).not.toContain("sheet-open");

        openBtn.click();
        jest.runAllTimers();
        expect(renderedSheet.classList).toContain("d-block");
        expect(document.body.classList).toContain("sheet-open");
        expect(renderedSheet.classList).toContain("sheet-open");
    });

    it("button with attribute 'data-sheet-close' pointing to the correct id closes corresponding sheet", () => {
        ReactDOM.render(<OpenSheet />, div);

        const renderedSheet = document.querySelector(".sheet");
        const closeBtn = document.querySelector("[data-sheet-close]");

        expect(renderedSheet.classList).toContain("sheet-open");

        sheet.init();
        expect(document.body.classList).toContain("sheet-open");
        expect(renderedSheet.classList).toContain("d-block");

        closeBtn.click();
        jest.runAllTimers();
        expect(renderedSheet.classList).not.toContain("sheet-open");
        expect(document.body.classList).not.toContain("sheet-open");
        expect(renderedSheet.classList).not.toContain("d-block");
    });

    it("warns user when there is no sheet with an id matching the value of the attribute 'data-sheet-open'", () => {
        const TestSheet = () => (
            <>
                <div className="sheet" id="test-sheet"></div>
                <button className="btn btn-executive" type="button" data-sheet-open="tester-sheet">Open sheet</button>
            </>
        );

        ReactDOM.render(<TestSheet />, div);
        console.warn = jest.fn();

        sheet.init();
        expect(console.warn).toHaveBeenCalled();
        expect(console.warn).toHaveBeenCalledWith(expect.stringContaining("tester-sheet"));
    });

    it("warns user when there is no sheet with an id matching the value of the attribute 'data-sheet-close'", () => {
        const TestSheet = () => (
            <>
                <div className="sheet" id="test-sheet"></div>
                <button className="btn btn-executive" type="button" data-sheet-close="tester-sheet">Close sheet</button>
            </>
        );

        ReactDOM.render(<TestSheet />, div);
        console.warn = jest.fn();

        sheet.init();
        expect(console.warn).toHaveBeenCalled();
        expect(console.warn).toHaveBeenCalledWith(expect.stringContaining("tester-sheet"));
    });

    it("closes sheet when clicking the close icon", () => {
        ReactDOM.render(<OpenSheet />, div);

        const renderedSheet = document.querySelector(".sheet");
        const closeIcon = renderedSheet.querySelector(".sheet-close");

        expect(renderedSheet.classList).toContain("sheet-open");

        sheet.init();
        expect(document.body.classList).toContain("sheet-open");
        expect(renderedSheet.classList).toContain("d-block");

        closeIcon.click();
        jest.runAllTimers();
        expect(renderedSheet.classList).not.toContain("sheet-open");
        expect(document.body.classList).not.toContain("sheet-open");
        expect(renderedSheet.classList).not.toContain("d-block");
    });

    it("closes sheet when clicking outside the sheet section", () => {
        ReactDOM.render(<OpenSheet />, div);

        const renderedSheet = document.querySelector(".sheet");

        expect(renderedSheet.classList).toContain("sheet-open");

        sheet.init();
        expect(document.body.classList).toContain("sheet-open");
        expect(renderedSheet.classList).toContain("d-block");

        renderedSheet.click();
        jest.runAllTimers();
        expect(renderedSheet.classList).not.toContain("sheet-open");
        expect(document.body.classList).not.toContain("sheet-open");
        expect(renderedSheet.classList).not.toContain("d-block");
    });

    it("does not close sheet when pressing keys other than esc", () => {
        ReactDOM.render(<OpenSheet />, div);

        const renderedSheet = document.querySelector(".sheet");

        expect(renderedSheet.classList).toContain("sheet-open");

        sheet.init();
        expect(document.body.classList).toContain("sheet-open");
        expect(renderedSheet.classList).toContain("d-block");

        // Simulate keypress
        const e = new Event("keydown");

        e.keyCode = 13; // Enter
        document.dispatchEvent(e);

        jest.runAllTimers();
        expect(renderedSheet.classList).toContain("sheet-open");
        expect(document.body.classList).toContain("sheet-open");
        expect(renderedSheet.classList).toContain("d-block");
    });

    it("closes sheet when pressing esc", () => {
        ReactDOM.render(<OpenSheet />, div);

        const renderedSheet = document.querySelector(".sheet");

        expect(renderedSheet.classList).toContain("sheet-open");

        sheet.init();
        expect(document.body.classList).toContain("sheet-open");
        expect(renderedSheet.classList).toContain("d-block");

        // Simulate keypress
        const e = new Event("keydown");

        e.keyCode = 27; // Esc
        document.dispatchEvent(e);

        jest.runAllTimers();
        expect(renderedSheet.classList).not.toContain("sheet-open");
        expect(document.body.classList).not.toContain("sheet-open");
        expect(renderedSheet.classList).not.toContain("d-block");
    });

    it("opens sheet when calling sheet.open", () => {
        ReactDOM.render(<Sheet />, div);

        const renderedSheet = document.querySelector(".sheet");

        expect(renderedSheet.classList).not.toContain("d-block");
        expect(renderedSheet.classList).not.toContain("sheet-open");
        expect(document.body.classList).not.toContain("sheet-open");

        sheet.init();
        expect(document.body.classList).not.toContain("sheet-open");

        sheet.open("demo-sheet");
        jest.runAllTimers();

        expect(renderedSheet.classList).toContain("d-block");
        expect(renderedSheet.classList).toContain("sheet-open");
        expect(document.body.classList).toContain("sheet-open");
    });

    it("does not open sheet when calling sheet.open with wrong id and prints error to console", () => {
        console.error = jest.fn();
        ReactDOM.render(<Sheet />, div);

        const renderedSheet = document.querySelector(".sheet");

        expect(renderedSheet.classList).not.toContain("d-block");
        expect(renderedSheet.classList).not.toContain("sheet-open");
        expect(document.body.classList).not.toContain("sheet-open");

        sheet.init();
        expect(renderedSheet.classList).not.toContain("d-block");
        expect(renderedSheet.classList).not.toContain("sheet-open");
        expect(document.body.classList).not.toContain("sheet-open");

        sheet.open("qwerty");

        expect(console.error).toHaveBeenCalledWith("sheet.open: No sheet with id \"qwerty\" found.");

        expect(renderedSheet.classList).not.toContain("d-block");
        expect(renderedSheet.classList).not.toContain("sheet-open");
        expect(document.body.classList).not.toContain("sheet-open");
    });

    it("closes sheet when calling sheet.close", () => {
        ReactDOM.render(<OpenSheet />, div);

        const renderedSheet = document.querySelector(".sheet");

        expect(document.body.classList).not.toContain("sheet-open");

        sheet.init();
        expect(document.body.classList).toContain("sheet-open");

        sheet.close("demo-sheet");
        jest.runAllTimers();

        expect(renderedSheet.classList).not.toContain("d-block");
        expect(renderedSheet.classList).not.toContain("sheet-open");
        expect(document.body.classList).not.toContain("sheet-open");
    });

    it("does not close sheet when calling sheet.close with wrong id and prints error to console", () => {
        console.error = jest.fn();
        ReactDOM.render(<OpenSheet />, div);

        const renderedSheet = document.querySelector(".sheet");

        expect(document.body.classList).not.toContain("sheet-open");

        sheet.init();
        expect(document.body.classList).toContain("sheet-open");

        sheet.close("qwerty");
        jest.runAllTimers();

        expect(console.error).toHaveBeenCalledWith("sheet.close: No sheet with id \"qwerty\" found.");

        expect(renderedSheet.classList).toContain("d-block");
        expect(renderedSheet.classList).toContain("sheet-open");
        expect(document.body.classList).toContain("sheet-open");
    });

    it("adds margin right to toast-container when a toast is active and sheet is opened", () => {
        ReactDOM.render(<Sheet />, div);
        sheet.init();

        const renderedSheet = document.querySelector(".sheet");

        expect(renderedSheet).toBeTruthy();
        expect(renderedSheet.classList).not.toContain("sheet-open");
        toast({ html: "test" });

        const renderedToast = document.querySelector("#toast-container");

        sheet.open("demo-sheet");
        jest.runAllTimers();

        expect(renderedSheet.classList).toContain("sheet-open");
        expect(renderedToast).toBeTruthy();
        expect(Object.keys(renderedToast.style._values)).toContain("margin-right");
    });

    it("removes margin-right from toast-container when a toast is active and sheet is closed", () => {
        ReactDOM.render(<OpenSheet />, div);
        sheet.init();
        jest.runAllTimers();

        const renderedSheet = document.querySelector(".sheet");

        expect(renderedSheet).toBeTruthy();
        expect(renderedSheet.classList).toContain("sheet-open");
        toast({ html: "test" });

        const renderedToast = document.querySelector("#toast-container");

        expect(renderedToast).toBeTruthy();
        expect(Object.keys(renderedToast.style._values)).toContain("margin-right");

        sheet.close("demo-sheet");
        jest.runAllTimers();

        expect(renderedSheet.classList).not.toContain("sheet-open");
        expect(Object.keys(renderedToast.style._values)).not.toContain("margin-right");
    });
});
