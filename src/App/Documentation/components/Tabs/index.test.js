import React from "react";
import { shallow } from "enzyme";

import Tabs, { BasicUsage, Collapsed, TabsText } from "./index";

describe("Components: Tabs", () => {
    it("is defined", () => {
        expect(Tabs).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Tabs />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("BasicUsage", () => {
        it("is defined", () => {
            expect(BasicUsage).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<BasicUsage />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Collapsed", () => {
        it("is defined", () => {
            expect(Collapsed).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Collapsed />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("TabsText", () => {
        it("is defined", () => {
            expect(TabsText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<TabsText />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
