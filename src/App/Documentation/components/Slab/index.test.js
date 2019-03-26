import React from "react";
import { shallow } from "enzyme";

import Slab, { DefaultSlab, SlabElevated, SlabWell, SlabColors, SlabSizes, SlabMuted, SlabCombinations } from "./index";

describe("Components: Slab", () => {
    it("is defined", () => {
        expect(Slab).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Slab />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("DefaultSlab", () => {
        it("is defined", () => {
            expect(DefaultSlab).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DefaultSlab />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("SlabElevated", () => {
        it("is defined", () => {
            expect(SlabElevated).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<SlabElevated />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("SlabWell", () => {
        it("is defined", () => {
            expect(SlabWell).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<SlabWell />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("SlabColors", () => {
        it("is defined", () => {
            expect(SlabColors).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<SlabColors />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("SlabMuted", () => {
        it("is defined", () => {
            expect(SlabMuted).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<SlabMuted />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("SlabSizes", () => {
        it("is defined", () => {
            expect(SlabSizes).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<SlabSizes />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("SlabCombinations", () => {
        it("is defined", () => {
            expect(SlabCombinations).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<SlabCombinations />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
