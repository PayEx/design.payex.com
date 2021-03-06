import React from "react";
import { shallow } from "enzyme";

import Card from "./index";

describe("Component: Card - ", () => {
    it("is defined", () => {
        expect(Card).toBeDefined();
    });

    it("throws an error if type does not match proptypes", () => {
        console.error = jest.fn();

        const wrapper = shallow(<Card type="error" />);

        expect(console.error).toHaveBeenCalled();
        expect(wrapper).toMatchSnapshot();
    });

    it("renders with only body when no props are passed", () => {
        const wrapper = shallow(<Card />);

        expect(wrapper.html()).not.toContain("header");
        expect(wrapper.html()).not.toContain("card-img");
        expect(wrapper.html()).not.toContain("highlight");
        expect(wrapper.html()).toContain("card-body");
        expect(wrapper.html()).not.toContain("footer");
        expect(wrapper.html()).toMatchSnapshot();
    });

    it("renders with class name card", () => {
        const wrapper = shallow(<Card />);

        expect(wrapper.html()).toContain("card");
        expect(wrapper).toMatchSnapshot();
    });

    it("renders with correct class name", () => {
        const wrapper = shallow(<Card type="brand"/>);

        expect(wrapper.html()).toContain("card-brand");
        expect(wrapper.html()).not.toContain("card-default");
        expect(wrapper.html()).not.toContain("card-light");
        expect(wrapper).toMatchSnapshot();
    });

    it("renders a title", () => {
        const wrapper = shallow(<Card title="Card title goes here"/>);

        expect(wrapper.html()).toContain("header");
        expect(wrapper.find("header").text()).toEqual("Card title goes here");
        expect(wrapper).toMatchSnapshot();
    });

    it("renders an image", () => {
        const wrapper = shallow(<Card imgSrc="url.address" />);

        expect(wrapper.html()).toContain("card-img");
        expect(wrapper.find("img").prop("src")).toEqual("url.address");
        expect(wrapper).toMatchSnapshot();
    });

    it("renders a text in card-body", () => {
        const wrapper = shallow(<Card text="Text that goes in card body" />);

        expect(wrapper.html()).toContain("p");
        expect(wrapper.find("p")).toHaveLength(1);
        expect(wrapper.find("p").text()).toEqual("Text that goes in card body");
        expect(wrapper).toMatchSnapshot();
    });

    it("renders a several paragraphs in card-body", () => {
        const textArr = ["test1", "test2", "test3"];
        const wrapper = shallow(<Card textSection={textArr} />);

        expect(wrapper.find("p").length).toEqual(textArr.length);
    });

    it("renders a smallText in card-body", () => {
        const wrapper = shallow(<Card smallText="small text" />);

        expect(wrapper.html()).toContain("small");
        expect(wrapper.find("small")).toHaveLength(1);
        expect(wrapper.find("small").text()).toEqual("small text");
        expect(wrapper).toMatchSnapshot();
    });

    it("renders a child object", () => {
        const wrapper = shallow(<Card>This is child text</Card>);

        expect(wrapper.html()).toContain("This is child text");
        expect(wrapper).toMatchSnapshot();
    });

    it("renders a button in the footer", () => {
        const wrapper = shallow(<Card btnTxt="Button" />);

        expect(wrapper.html()).toContain("btn");
        expect(wrapper.find(".btn")).toHaveLength(1);
        expect(wrapper.find(".btn").text()).toEqual("Button");
        expect(wrapper).toMatchSnapshot();
    });

    it("renders footer text", () => {
        const wrapper = shallow(<Card footerTxt="Footer information" />);

        expect(wrapper.html()).toContain("footer-text");
        expect(wrapper.find(".footer-text")).toHaveLength(1);
        expect(wrapper.find(".footer-text").text()).toEqual("Footer information");
        expect(wrapper).toMatchSnapshot();
    });

    it("renders footer link text", () => {
        const wrapper = shallow(<Card footerLinkTxt="Click this footer link" />);

        expect(wrapper.html()).toContain("footer-link");
        expect(wrapper.find(".footer-link")).toHaveLength(1);
        expect(wrapper.find(".footer-link").text()).toEqual("Click this footer link");
        expect(wrapper).toMatchSnapshot();
    });
});
